import { workAreaPathologies } from "@/data/content";

export function AreasSection() {
  return (
    <section
      id="areas"
      aria-label="Áreas de trabajo"
      className="scroll-mt-28 bg-canvas px-4 py-14 sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">
          Áreas de trabajo
        </p>
        <h2 className="mt-2 text-balance text-center text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
          Acompañamiento según las necesidades de cada persona
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-ink-muted sm:text-lg">
          Estas son algunas de las áreas en las que puedo acompañarte, siempre
          con una evaluación y un plan a medida.
        </p>

        <ul
          className="mx-auto mt-10 flex max-w-4xl list-none flex-wrap justify-center gap-2.5 sm:gap-3"
          role="list"
        >
          {workAreaPathologies.map((label) => (
            <li key={label}>
              <span className="inline-flex items-center justify-center rounded-full border border-terracotta/20 bg-white px-4 py-2.5 text-center font-serif text-sm font-medium text-ink shadow-soft sm:px-5 sm:text-base">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
