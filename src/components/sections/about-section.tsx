import { about } from "@/data/content";
import { Leaf } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre-mi" aria-label="Sobre mí" className="scroll-mt-28 bg-canvas px-4 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.42fr_1fr] lg:gap-14">
        <div className="flex items-center justify-center lg:justify-start">
          <div className="flex h-56 w-44 items-center justify-center rounded-[999px] border border-border bg-section-soft shadow-soft sm:h-64 sm:w-48">
            <span className="inline-flex h-24 w-24 items-center justify-center rounded-full border border-sage/45 bg-white text-sage">
              <Leaf className="h-11 w-11" />
            </span>
          </div>
        </div>

        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">Sobre mí</p>
          <h2 className="mt-2 text-5xl leading-none text-ink sm:text-6xl">{about.title}</h2>
          <span className="mt-3 block h-1 w-16 rounded-full bg-terracotta/90" aria-hidden />

          <div className="mt-6 space-y-4 text-[1.04rem] leading-8 text-ink-muted">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
