#!/usr/bin/env node
/**
 * Arranca `next dev` (hot reload) y abre el navegador del sistema (macOS: `open`),
 * no el integrado de Cursor. Desactiva la auto-apertura de Next con BROWSER=none.
 */
import { spawn, execFile } from "node:child_process";
import { createConnection } from "node:net";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");

const PORT = process.env.PORT ?? "3000";
const HOST = process.env.HOST ?? "127.0.0.1";
const openUrl = `http://${HOST === "0.0.0.0" ? "127.0.0.1" : HOST}:${PORT}`;

const env = {
  ...process.env,
  BROWSER: "none",
  PORT,
};

const nextBin = join(projectRoot, "node_modules", ".bin", "next");
const child = spawn(nextBin, ["dev", "--turbopack", "-H", HOST, "-p", PORT], {
  cwd: projectRoot,
  env,
  stdio: "inherit",
  shell: false,
});

let opened = false;
function openSystemBrowser() {
  if (process.platform === "darwin") {
    execFile("/usr/bin/open", [openUrl], (err) => {
      if (err) console.error("No se pudo abrir el navegador:", err.message);
      else console.log(`Navegador: ${openUrl}`);
    });
  } else if (process.platform === "win32") {
    execFile("cmd", ["/c", "start", "", openUrl], () => {});
  } else {
    execFile("xdg-open", [openUrl], () => {});
  }
}

function tryOpen() {
  if (opened) return;
  const socket = createConnection({ port: Number(PORT), host: "127.0.0.1" }, () => {
    socket.end();
    opened = true;
    clearInterval(poll);
    openSystemBrowser();
  });
  socket.on("error", () => {
    // puerto aún no abierto
  });
}

const poll = setInterval(tryOpen, 350);
tryOpen();
setTimeout(() => clearInterval(poll), 120_000);

child.on("close", (code) => {
  clearInterval(poll);
  process.exit(code ?? 0);
});
child.on("error", (err) => {
  console.error(err);
  process.exit(1);
});
