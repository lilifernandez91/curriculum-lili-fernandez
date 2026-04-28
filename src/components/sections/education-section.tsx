import { education, educationIntro } from "@/data/content";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <section
      id="educacion"
      aria-label="Educación"
      className="scroll-mt-28 border-y border-border bg-section-soft px-4 py-14 sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-forest">Educación</p>
          <h2 className="mt-2 text-3xl leading-tight text-ink sm:text-4xl">Base académica y formación</h2>
          <span className="mx-auto mt-3 block h-1 w-14 rounded-full bg-terracotta/90" aria-hidden />
          <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">{educationIntro}</p>
        </div>

        <ul className="mt-8 grid gap-4 lg:grid-cols-2 lg:gap-6" role="list">
          {education.map((e) => (
            <li
              key={`${e.period}-${e.title}`}
              className="flex gap-4 rounded-3xl border border-border bg-white p-5 shadow-soft hover:shadow-card sm:p-6"
            >
              <span className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-sage/45 bg-sage/15 text-forest">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-terracotta sm:text-sm">
                  {e.period}
                </p>
                <h3 className="mt-2 text-xl leading-snug text-ink sm:text-2xl">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{e.place}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
