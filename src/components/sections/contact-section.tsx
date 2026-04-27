import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contacto" aria-label="Contacto" className="scroll-mt-28 bg-canvas px-4 pb-14 sm:px-6 lg:pb-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 rounded-[2rem] bg-forest p-6 text-white shadow-card sm:p-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10">
            <MessageCircleMore className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xl leading-tight sm:text-2xl">¿Tienes dudas o quieres dar el primer paso?</p>
            <p className="mt-1 text-sm text-white/85 sm:text-base">Estoy aquí para acompañarte.</p>
          </div>
        </div>

        <Link
          href="mailto:lilibetfdez@gmail.com"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[#b86242]"
        >
          <MessageCircleMore className="h-4 w-4" />
          Contáctame
        </Link>
      </div>
    </section>
  );
}
