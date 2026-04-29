import type { LucideIcon } from "lucide-react";
import {
  BookOpenText,
  Brain,
  MessageCircleMore,
  Puzzle,
  Rabbit,
  Speech,
  Waves,
  Workflow,
} from "lucide-react";
import { areasIntervencion, areasIntervencionIntro } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";

const AREA_ICONOS: Record<string, LucideIcon> = {
  tdl: MessageCircleMore,
  tsh: Speech,
  apraxia: Workflow,
  disartria: Waves,
  fluidez: Rabbit,
  tea: Puzzle,
  "hablante-tardio": Brain,
  aprendizaje: BookOpenText,
};

export function AreasIntervencion() {
  return (
    <section
      id="areas"
      aria-label="Áreas de intervención"
      className="scroll-mt-28 bg-[#f5f1ed] px-4 py-14 sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="ÁREAS DE INTERVENCIÓN"
          title="Acompaño cada forma de comunicarse"
          eyebrowClassName="text-[#e9a47a]"
          titleClassName="max-w-3xl text-balance text-ink"
          dividerClassName="bg-[#e9a47a]"
        />
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
          {areasIntervencionIntro}
        </p>

        <ul className="mt-10 grid list-none gap-5 md:grid-cols-2 xl:grid-cols-4" role="list">
          {areasIntervencion.map((area) => {
            const Icono = AREA_ICONOS[area.id] ?? MessageCircleMore;

            return (
              <li
                key={area.titulo}
                className="group rounded-3xl border border-[#e9e1da] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#dce5df] bg-[#dce5df]/45 text-[#3f5a4d]">
                  <Icono className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl leading-snug font-medium text-ink sm:text-2xl">
                  {area.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-[0.95rem]">
                  {area.descripcion}
                </p>

                <ul className="mt-4 space-y-2 text-xs leading-relaxed text-ink-muted sm:text-sm">
                  {area.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e9a47a]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </li>
            );
          })}
        </ul>

        <p className="mt-8 rounded-2xl border border-[#eadfd6] bg-white px-6 py-6 text-base leading-relaxed text-ink-muted shadow-sm sm:text-xl">
          No se trata solo de poner un diagnóstico, sino de{" "}
          <strong className="font-semibold text-[#e08b5f]">
            entender cómo se comunica
          </strong>{" "}
          cada persona y qué necesita para avanzar.
        </p>
      </div>
    </section>
  );
}
