import Link from "next/link";
import { Mail, MessageCircleMore } from "lucide-react";
import { site } from "@/data/site";

export function ContactSection() {
  const instagramUrl = `https://instagram.com/${site.instagram}`;

  return (
    <section
      id="contacto"
      aria-label="Contacto"
      className="scroll-mt-28 flex justify-center bg-canvas px-4 py-14 sm:px-6 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 rounded-[2rem] bg-forest p-6 text-white shadow-card sm:p-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10">
            <MessageCircleMore className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xl leading-tight sm:text-2xl">¿Tienes dudas o quieres dar el primer paso?</p>
            <p className="mt-1 text-sm text-white/85 sm:text-base">
              Escríbeme por email o Instagram y te respondo personalmente.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Link
            href={`mailto:${site.email}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#b86242] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
          >
            <Mail className="h-4 w-4" />
            Escríbeme por email
          </Link>
          <Link
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37a4 4 0 1 1-4.63-4.63A4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </svg>
            Escríbeme por instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
