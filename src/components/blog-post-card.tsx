"use client";

import { useState } from "react";
import type { BlogPost } from "@/data/content";
import { DrivePdfThumbnail } from "@/components/drive-pdf-thumbnail";
import { extractGoogleDriveFileId } from "@/lib/google-drive";

type Props = {
  post: BlogPost;
};

export function BlogPostCard({ post: p }: Props) {
  const fileId = extractGoogleDriveFileId(p.pdfUrl);
  const [showThumb, setShowThumb] = useState(!!fileId);

  return (
    <article
      id={p.slug}
      className="flex w-full flex-1 flex-col overflow-hidden rounded-lg border border-terracotta/20 bg-white/95 shadow-sm md:flex-row md:items-stretch"
    >
      {fileId && showThumb ? (
        <div
          className="relative flex min-h-[220px] w-full shrink-0 flex-col border-b border-line/40 sm:min-h-[240px] md:min-h-full md:max-w-sm md:min-w-[12rem] md:w-2/5 md:shrink-0 md:overflow-hidden md:self-stretch md:border-b-0 md:border-r md:border-line/30"
        >
          <DrivePdfThumbnail
            fileId={fileId}
            title={p.title}
            pdfUrl={p.pdfUrl}
            variant="side"
            onLoadFail={() => setShowThumb(false)}
          />
        </div>
      ) : null}

      <div
        className={`flex min-w-0 flex-1 flex-col justify-between gap-2.5 p-2.5 sm:p-3 ${
          fileId && showThumb ? "" : "w-full"
        }`}
      >
        <div className="min-w-0 space-y-1.5">
          <p className="text-[10px] font-medium text-ink-muted sm:text-xs">
            {new Date(p.date).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h2
            className="text-balance font-serif text-sm font-semibold leading-snug text-forest sm:text-base"
          >
            {p.title}
          </h2>
          {p.excerpt?.trim() ? (
            <p className="text-sm text-ink-muted">{p.excerpt}</p>
          ) : null}
          {p.body?.trim() ? (
            <p className="text-sm leading-relaxed text-ink/90">{p.body}</p>
          ) : null}
        </div>
        <a
          href={p.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-8 w-full shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-forest to-accent px-2.5 py-1.5 text-xs font-semibold text-white shadow-sm transition sm:w-auto sm:min-w-0 sm:py-2 sm:text-sm sm:hover:from-accent sm:hover:to-accent-bright"
        >
          Abrir PDF en Google Drive
        </a>
      </div>
    </article>
  );
}
