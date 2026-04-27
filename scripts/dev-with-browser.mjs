#!/usr/bin/env node
/**
 * Arranca `next dev` (hot reload) y abre el navegador del sistema (macOS: `open`),
 * no el integrado de Cursor. Desactiva la auto-apertura de Next con BROWSER=none.
 * Antes de arrancar, intenta liberar PORT (p. ej. 3000) cerrando procesos que lo escuchen.
 * Opcional: OPEN_BROWSER=Safari fuerza una app concreta (por defecto: navegador predeterminado).
 */
import { spawn, execFile } from "node:child_process";
import { createConnection } from "node:net";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");

const PORT = process.env.PORT ?? "3000";
const HOST = process.env.HOST ?? "127.0.0.1";
// Para abrir/pegar en Safari o Simple Browser de Cursor suele funcionar mejor `localhost` que `127.0.0.1`.
const openHost =
  HOST === "0.0.0.0" || HOST === "127.0.0.1" || HOST === "::1"
    ? "localhost"
    : HOST;
const openUrl = `http://${openHost}:${PORT}`;
// Forzar Safari: OPEN_BROWSER=Safari npm start (sin esto, `open URL` usa el navegador predeterminado de macOS).
const OPEN_BROWSER = process.env.OPEN_BROWSER?.trim();

const env = {
  ...process.env,
  BROWSER: "none",
  PORT,
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function listeningPidsOnPort(port) {
  if (process.platform === "win32") {
    return new Promise((resolve) => {
      execFile(
        "powershell.exe",
        [
          "-NoProfile",
          "-Command",
          `(Get-NetTCPConnection -LocalPort ${Number(port)} -State Listen -ErrorAction SilentlyContinue).OwningProcess | Sort-Object -Unique`,
        ],
        (err, stdout) => {
          const pids = stdout
            .toString()
            .trim()
            .split(/\r?\n/)
            .map((s) => s.trim())
            .filter((s) => /^\d+$/.test(s));
          resolve([...new Set(pids)]);
        },
      );
    });
  }
  return new Promise((resolve) => {
    execFile("lsof", ["-t", `-iTCP:${port}`, "-sTCP:LISTEN"], (err, stdout) => {
      if (err && err.code !== 1) return resolve([]);
      const pids = stdout
        .toString()
        .trim()
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean);
      resolve([...new Set(pids)]);
    });
  });
}

async function killListenersOnPort(port) {
  let pids = await listeningPidsOnPort(port);
  if (pids.length === 0) return;

  console.log(`Puerto ${port} ocupado; cerrando procesos: ${pids.join(", ")}`);
  for (const pid of pids) {
    try {
      process.kill(Number(pid), "SIGTERM");
    } catch {
      /* ignorar */
    }
  }
  await sleep(400);
  pids = await listeningPidsOnPort(port);
  for (const pid of pids) {
    try {
      process.kill(Number(pid), "SIGKILL");
    } catch {
      /* ignorar */
    }
  }
  await sleep(150);
}

function portAlreadyInUse(port, hostForProbe = "127.0.0.1") {
  return new Promise((resolve) => {
    const socket = createConnection({ port: Number(port), host: hostForProbe }, () => {
      socket.end();
      resolve(true);
    });
    socket.on("error", () => resolve(false));
    socket.setTimeout(800, () => {
      socket.destroy();
      resolve(false);
    });
  });
}

const nextBin = join(projectRoot, "node_modules", ".bin", "next");

let opened = false;
/** @type {import("node:child_process").ChildProcess | undefined} */
let child;
/** @type {ReturnType<typeof setInterval> | null} */
let poll = null;

function openSystemBrowser() {
  if (process.platform === "darwin") {
    const macOpen =
      OPEN_BROWSER && OPEN_BROWSER.toLowerCase() !== "default"
        ? ["/usr/bin/open", "-a", OPEN_BROWSER, openUrl]
        : ["/usr/bin/open", openUrl];
    execFile(macOpen[0], macOpen.slice(1), (err) => {
      if (err) console.error("No se pudo abrir el navegador:", err.message);
      else
        console.log(
          OPEN_BROWSER && OPEN_BROWSER.toLowerCase() !== "default"
            ? `Navegador (${OPEN_BROWSER}): ${openUrl}`
            : `Navegador (predeterminado del sistema): ${openUrl}`,
        );
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
    if (poll) {
      clearInterval(poll);
      poll = null;
    }
    openSystemBrowser();
  });
  socket.on("error", () => {
    // puerto aún no abierto
  });
}

async function main() {
  await killListenersOnPort(PORT);

  if (await portAlreadyInUse(PORT)) {
    console.error(`
❌ El puerto ${PORT} sigue ocupado tras intentar liberarlo.

  • Cierra manualmente el proceso (macOS/Linux: \`lsof -iTCP:${PORT} -sTCP:LISTEN\` y \`kill <PID>\`).
  • O usa otro puerto: \`PORT=3001 npm start\`

Abre manualmente en Safari o Cursor: ${openUrl}
`);
    process.exit(1);
  }

  child = spawn(nextBin, ["dev", "--turbopack", "-H", HOST, "-p", PORT], {
    cwd: projectRoot,
    env,
    stdio: "inherit",
    shell: false,
  });

  child.on("close", (code) => {
    if (poll) {
      clearInterval(poll);
      poll = null;
    }
    process.exit(code ?? 0);
  });
  child.on("error", (err) => {
    console.error(err);
    process.exit(1);
  });

  poll = setInterval(tryOpen, 350);
  tryOpen();
  setTimeout(() => {
    if (poll) {
      clearInterval(poll);
      poll = null;
    }
  }, 120_000);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
