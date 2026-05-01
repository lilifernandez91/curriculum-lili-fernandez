import Image from "next/image";
import { about } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section id="sobre-mi" aria-label="Sobre mí" className="scroll-mt-28 bg-canvas px-4 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.42fr_1fr] lg:gap-14">
        <div className="flex items-center justify-center lg:justify-start">
          <div className="relative h-64 w-48 overflow-hidden rounded-[999px] border border-border bg-section-soft shadow-soft sm:h-72 sm:w-56">
            <Image
              src="/images/about-profile.png"
              alt="Retrato profesional para la sección Sobre mí"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 12rem, 11rem"
            />
          </div>
        </div>

        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="SOBRE MÍ"
            title="Conóceme mejor"
            eyebrowClassName="text-terracotta"
            titleClassName="text-ink"
            dividerClassName="bg-terracotta/90"
          />

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-muted sm:text-base">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ul className="mt-7 flex flex-wrap gap-2.5" role="list">
            {about.badges.map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-border bg-white px-4 py-2 text-xs font-medium text-ink-muted shadow-soft sm:text-sm"
              >
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
