import { experience } from "@/data/content";

export function ExperienceSection() {
  return (
    <section id="experiencia" aria-label="Experiencia" className="scroll-mt-28 bg-canvas px-4 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-forest">
          Experiencia
        </p>
        <h2 className="mt-2 text-center text-5xl leading-none text-ink sm:text-6xl">Recorrido profesional</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3" role="list">
          {experience.slice(0, 6).map((e) => (
            <li
              key={e.id}
              className="rounded-3xl border border-border bg-white p-5 shadow-soft hover:shadow-card"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-terracotta">{e.period}</p>
              <h3 className="mt-2 text-2xl leading-tight text-ink">{e.institution}</h3>
              <p className="mt-1 text-sm font-semibold text-forest">{e.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{e.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
