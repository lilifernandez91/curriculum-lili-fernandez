import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function AreasSection() {
  const checklist = [
    "Evaluación individual y personalizada",
    "Estrategias prácticas para cada etapa",
    "Trabajo en conjunto con familias y entornos",
  ] as const;

  return (
    <section id="areas" aria-label="Mi enfoque" className="scroll-mt-28 bg-canvas px-4 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">Mi enfoque</p>
          <h2 className="mt-2 max-w-lg text-5xl leading-tight text-ink sm:text-6xl">
            Un acompañamiento que se adapta a ti
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
            Creo en una atención profesional basada en la escucha, la empatía y el trabajo conjunto.
          </p>
          <ul className="mt-6 space-y-3 text-ink-muted" role="list">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-white p-3 shadow-card">
          <Image
            src="/images/therapy-room.svg"
            alt="Espacio de consulta cálido y tranquilo"
            width={920}
            height={760}
            className="h-full w-full rounded-[1.25rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
