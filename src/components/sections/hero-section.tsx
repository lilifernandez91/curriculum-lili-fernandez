import Link from "next/link";
import Image from "next/image";
import { BadgeCheck, HeartHandshake, Sparkles } from "lucide-react";
import { hero } from "@/data/content";

export function HeroSection() {
  const benefits = [
    { icon: BadgeCheck, label: hero.benefits[0] },
    { icon: Sparkles, label: hero.benefits[1] },
    { icon: HeartHandshake, label: hero.benefits[2] },
  ] as const;

  return (
    <section
      id="inicio"
      className="scroll-mt-28 border-b border-border bg-canvas px-4 py-10 sm:px-6 sm:py-14 lg:py-20"
      aria-label="Inicio"
    >
      <div className="mx-auto w-full max-w-3xl sm:max-w-6xl">
        <div className="sm:hidden">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">
            {hero.eyebrow}
          </p>

          <div className="mt-6 flex justify-center">
            <div className="relative w-full max-w-[220px] overflow-hidden rounded-[2.4rem_5rem_2.4rem_5rem] border border-border/80 bg-section-soft p-2 shadow-card sm:max-w-[260px]">
              <Image
                src="/images/hero-therapy-photo.png"
                alt="Terapeuta en consulta con ambiente cálido y profesional"
                width={920}
                height={1150}
                className="h-full w-full rounded-[2rem_4.2rem_2rem_4.2rem] object-cover"
                priority
              />
            </div>
          </div>

          <h1 className="mt-6 text-center text-balance text-3xl leading-tight text-ink sm:text-5xl">
            {hero.title}
          </h1>

          <span className="mx-auto mt-4 block h-px w-24 rounded-full bg-terracotta/50" aria-hidden />

          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-ink-muted sm:text-base">
            {hero.subtitle}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mx-auto sm:max-w-md">
            <Link
              href="/#contacto"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-terracotta px-4 py-3 text-sm font-semibold text-white shadow-card hover:-translate-y-0.5 hover:bg-[#b86242] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-terracotta"
            >
              Contáctame
            </Link>
            <Link
              href="/#sobre-mi"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-terracotta px-4 py-3 text-sm font-semibold text-terracotta hover:-translate-y-0.5 hover:bg-terracotta/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/70 focus-visible:ring-offset-2"
            >
              Conóceme mejor
            </Link>
          </div>

          <ul className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-3 text-sm text-ink-muted sm:gap-4" role="list">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <li key={benefit.label} className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white text-forest">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="max-w-36 whitespace-nowrap leading-snug">{benefit.label}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden sm:block xl:hidden">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">
            {hero.eyebrow}
          </p>

          <div className="mt-7 flex justify-center">
            <div className="relative w-full max-w-[280px] overflow-hidden rounded-[2.8rem_5.8rem_2.8rem_5.8rem] border border-border/80 bg-section-soft p-2 shadow-card">
              <Image
                src="/images/hero-therapy-photo.png"
                alt="Terapeuta en consulta con ambiente cálido y profesional"
                width={920}
                height={1150}
                className="h-full w-full rounded-[2.3rem_4.9rem_2.3rem_4.9rem] object-cover"
                priority
              />
            </div>
          </div>

          <h1 className="mx-auto mt-7 max-w-3xl text-center text-balance text-5xl leading-tight text-ink">
            {hero.title}
          </h1>
          <span className="mx-auto mt-4 block h-1 w-20 rounded-full bg-terracotta/90" aria-hidden />
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-ink-muted">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex justify-center gap-3">
            <Link
              href="/#contacto"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-white shadow-card hover:-translate-y-0.5 hover:bg-[#b86242] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-terracotta"
            >
              Contáctame
            </Link>
            <Link
              href="/#sobre-mi"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-terracotta px-6 py-3 text-sm font-semibold text-terracotta hover:-translate-y-0.5 hover:bg-terracotta/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/70 focus-visible:ring-offset-2"
            >
              Conóceme mejor
            </Link>
          </div>

          <ul className="mx-auto mt-8 grid max-w-3xl grid-cols-3 gap-4 text-sm text-ink-muted" role="list">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <li key={benefit.label} className="flex items-center justify-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white text-forest">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="block w-32 leading-snug [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
                    {benefit.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden items-center gap-10 xl:grid xl:grid-cols-[1fr_0.92fr] xl:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">
              {hero.eyebrow}
            </p>
            <h1 className="mt-3 max-w-2xl text-balance text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <span className="mt-3 block h-1 w-20 rounded-full bg-terracotta/90" aria-hidden />
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
              {hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/#contacto"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-white shadow-card hover:-translate-y-0.5 hover:bg-[#b86242] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-terracotta"
              >
                Contáctame
              </Link>
              <Link
                href="/#sobre-mi"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-terracotta px-6 py-3 text-sm font-semibold text-terracotta hover:-translate-y-0.5 hover:bg-terracotta/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/70 focus-visible:ring-offset-2"
              >
                Conóceme mejor
              </Link>
            </div>

            <ul className="mt-8 grid gap-3 text-sm text-ink-muted sm:grid-cols-3 sm:gap-4" role="list">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <li key={benefit.label} className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white text-forest">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="block w-32 leading-snug [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
                      {benefit.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-10 h-24 w-24 rounded-full bg-sage/30 blur-xl" aria-hidden />
            <div className="absolute -right-3 bottom-3 h-28 w-28 rounded-full bg-terracotta-light/40 blur-xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[3rem_7rem_3rem_7rem] border border-border/80 bg-section-soft p-3 shadow-card sm:rounded-[4rem_9rem_4rem_9rem]">
              <Image
                src="/images/hero-therapy-photo.png"
                alt="Terapeuta en consulta con ambiente cálido y profesional"
                width={920}
                height={1150}
                className="h-full w-full rounded-[2.5rem_6rem_2.5rem_6rem] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
