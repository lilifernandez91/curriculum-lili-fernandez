import { experience, experienceIntro } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";

export function ExperienceSection() {
  return (
    <section id="experiencia" aria-label="Experiencia" className="scroll-mt-28 bg-canvas px-4 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="EXPERIENCIA"
          title="Recorrido profesional y acompañamiento clínico"
          align="center"
          eyebrowClassName="text-forest"
          titleClassName="text-ink"
          dividerClassName="bg-terracotta/90"
        />
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-ink-muted sm:text-base">
          {experienceIntro}
        </p>
        <ul className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3" role="list">
          {experience.slice(0, 6).map((e) => (
            <li
              key={e.id}
              className="rounded-3xl border border-border bg-white p-5 shadow-soft transition-shadow duration-300 hover:shadow-card"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-terracotta">{e.period}</p>
              <h3 className="mt-2 text-xl leading-snug text-ink sm:text-2xl">{e.institution}</h3>
              <p className="mt-1 text-sm font-semibold text-forest">{e.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{e.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
