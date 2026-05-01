"use client";

import { Download } from "lucide-react";

export function DownloadCvButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#b86242]"
    >
      <Download className="h-4 w-4" />
      Descargar en PDF
    </button>
  );
}
