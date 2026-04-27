"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { site } from "@/data/site";

const anchors = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#sobre-mi", label: "Sobre mí" },
  { href: "/#educacion", label: "Educación" },
  { href: "/#experiencia", label: "Experiencia" },
  { href: "/#areas", label: "Áreas" },
  { href: "/#contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/90 bg-canvas/90">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-3 px-4 backdrop-blur-md sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 text-forest-deep"
          aria-label="Inicio"
        >
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-white p-1 shadow-soft">
            <Image
              src="/logo.png"
              alt=""
              width={120}
              height={120}
              className="h-full w-full object-contain object-center"
              priority
            />
          </span>
          <span className="min-w-0 text-left font-serif text-xl leading-none sm:text-2xl">
            {site.name}
            <span className="mt-1 block font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-ink-muted sm:text-[11px]">
              {site.title}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <nav className="mr-4 flex items-center gap-1" aria-label="Navegación principal">
            {anchors.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-ink-muted hover:text-terracotta"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-forest/35 px-4 py-2 text-sm font-semibold text-forest-deep hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta"
          >
            <Download className="h-4 w-4" />
            Guías en PDF
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-forest-deep shadow-soft lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="main-nav-mobile"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="main-nav-mobile"
        className={open ? "border-t border-border bg-canvas/95 lg:hidden" : "hidden"}
      >
        <nav className="mx-auto flex w-full max-w-6xl flex-col px-4 py-4 sm:px-6" aria-label="Navegación móvil">
          {anchors.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-ink-muted hover:bg-section-soft hover:text-terracotta"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/blog"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-forest/35 px-4 py-2.5 text-sm font-semibold text-forest-deep"
          >
            <Download className="h-4 w-4" />
            Guías en PDF
          </Link>
        </nav>
      </div>
    </header>
  );
}
