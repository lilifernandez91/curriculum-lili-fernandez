import type { ReactNode } from "react";

export type SectionTone = "cream" | "peach" | "sage" | "sand" | "sunset";

const toneClass: Record<SectionTone, string> = {
  cream:
    "border-t-2 border-terracotta/25 bg-section-cream shadow-section",
  peach:
    "border-t-2 border-coral/30 bg-section-peach shadow-section",
  sage:
    "border-t-2 border-accent/25 bg-section-sage shadow-section",
  sand:
    "border-t-2 border-amber-warm/25 bg-section-sand shadow-section",
  sunset:
    "border-t-2 border-terracotta/35 bg-gradient-to-b from-section-sunset via-honey/25 to-section-peach/80 shadow-section",
};

type Props = {
  id: string;
  "aria-label"?: string;
  className?: string;
  /** Fondo cálido alternado: delimita visualmente cada bloque */
  tone?: SectionTone;
  children: ReactNode;
};

export function SectionShell({
  id,
  "aria-label": aria,
  children,
  className = "",
  tone = "cream",
}: Props) {
  return (
    <section
      id={id}
      aria-label={aria}
      className={`scroll-mt-28 sm:scroll-mt-36 px-3.5 py-10 sm:px-5 sm:py-14 md:py-16 ${toneClass[tone]} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
