import Link from "next/link";
import { Download, FileText } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export function CurriculumSection() {
  return (
    <section
      id="curriculum"
      aria-label="Curriculum"
      className="scroll-mt-28 border-y border-border bg-section-soft/55 px-4 py-14 sm:px-6 lg:py-20"
    >
      <div className="mx-auto w-full max-w-6xl rounded-[2rem] border border-border/80 bg-white p-6 shadow-card sm:p-8">
        <SectionHeading
          eyebrow="CURRICULUM"
          title="Descarga mi currículum profesional"
          eyebrowClassName="text-terracotta"
          titleClassName="text-ink"
          dividerClassName="bg-terracotta/90"
        />

        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
          Encontrarás un resumen completo con quién soy, educación, experiencia clínica, áreas de
          intervención y datos de contacto. Puedes verlo online o descargarlo como PDF desde la
          página de currículum.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/curriculum-lili-fernandez.pdf"
            download="Curriculum-Lili-Fernandez.pdf"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#b86242] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-terracotta"
          >
            <FileText className="h-4 w-4" />
            Descargar currículum
          </Link>
          <Link
            href="/curriculum-lili-fernandez.pdf"
            download="Curriculum-Lili-Fernandez.pdf"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-terracotta px-6 py-3 text-sm font-semibold text-terracotta hover:-translate-y-0.5 hover:bg-terracotta/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/70 focus-visible:ring-offset-2"
          >
            <Download className="h-4 w-4" />
            Descargar en PDF
          </Link>
        </div>
      </div>
    </section>
  );
}
