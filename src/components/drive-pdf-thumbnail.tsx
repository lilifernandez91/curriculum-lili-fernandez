"use client";

import Image from "next/image";
import { useState } from "react";
import { googleDriveThumbnailUrl } from "@/lib/google-drive";

type Props = {
  fileId: string;
  title: string;
  pdfUrl: string;
  /** stack: bajo el título a ancho completo | side: columna izquierda, imagen a cubrir */
  variant?: "stack" | "side";
  /** Si la imagen no carga (p. ej. no hay miniatura pública) */
  onLoadFail?: () => void;
};

/**
 * Muestra la miniatura de la 1.ª página del PDF (la genera Google Drive).
 * Si el enlace no es público o no hay miniatura, se oculta al fallar la carga.
 */
export function DrivePdfThumbnail({ fileId, title, pdfUrl, variant = "stack", onLoadFail }: Props) {
  const [hidden, setHidden] = useState(false);
  /** Reintento: algunos archivos responden mejor con sz=s que con sz=w */
  const [thumbMode, setThumbMode] = useState<"s" | "w">("s");
  if (hidden) return null;

  const src = googleDriveThumbnailUrl(fileId, 1000, thumbMode);
  const fail = () => {
    setHidden(true);
    onLoadFail?.();
  };
  const imgError = () => {
    if (thumbMode === "s") {
      setThumbMode("w");
    } else {
      fail();
    }
  };

  if (variant === "side") {
    // <img> nativo: next/image+fill con padre en flex a veces queda a 0px; Drive puede redirigir de dominio
    return (
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-0 w-full flex-1 flex-col bg-mist/15"
        aria-label={`Abrir PDF en Google Drive: ${title}`}
      >
        <img
          key={thumbMode}
          src={src}
          alt={`Primera página: ${title}`}
          className="h-full w-full min-h-[220px] flex-1 object-cover object-top sm:min-h-[240px] md:min-h-[19rem]"
          loading="lazy"
          decoding="async"
          onError={imgError}
        />
      </a>
    );
  }

  return (
    <section className="w-full border-t border-line/45">
      <p className="px-2.5 py-1.5 text-[10px] font-medium text-ink-muted sm:px-3 sm:text-[11px]">
        Vista previa (1.ª pág.)
      </p>
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full overflow-hidden bg-canvas/30 transition hover:opacity-95"
        aria-label={`Abrir PDF en Google Drive: ${title}`}
      >
        <Image
          src={src}
          alt={`Vista aproximada de la primera página: ${title}`}
          width={800}
          height={1000}
          unoptimized
          className="h-auto max-h-40 w-full object-contain object-top sm:max-h-48 lg:max-h-44"
          onError={imgError}
        />
      </a>
    </section>
  );
}
