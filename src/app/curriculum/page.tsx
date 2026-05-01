import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { DownloadCvButton } from "@/components/download-cv-button";
import {
  about,
  areasIntervencion,
  education,
  educationIntro,
  experience,
  experienceIntro,
} from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Curriculum",
  description: "Currículum profesional con formación, experiencia, áreas de intervención y contacto.",
  alternates: {
    canonical: "/curriculum",
  },
};

export default function CurriculumPage() {
  return (
    <main className="bg-canvas px-4 py-10 sm:px-6 sm:py-14">
      <article className="mx-auto w-full max-w-4xl rounded-[2rem] border border-border bg-white p-6 shadow-card sm:p-10">
        <header className="border-b border-border pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">Curriculum</p>
          <h1 className="mt-3 text-balance text-3xl leading-tight text-ink sm:text-4xl">
            {site.name} — {site.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Documento profesional con información sobre perfil, formación, experiencia, áreas de
            intervención y datos de contacto.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-terracotta px-6 py-3 text-sm font-semibold text-terracotta hover:-translate-y-0.5 hover:bg-terracotta/10"
            >
              Volver al inicio
            </Link>
            <DownloadCvButton />
          </div>
        </header>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-ink">Quién soy</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-muted sm:text-base">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mt-8 border-t border-border pt-8">
          <h2 className="text-xl font-semibold text-ink">Educación</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">{educationIntro}</p>
          <ul className="mt-4 space-y-3">
            {education.map((item) => (
              <li key={`${item.period}-${item.title}`} className="rounded-xl border border-border bg-section-soft/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">{item.period}</p>
                <p className="mt-1 font-semibold text-ink">{item.title}</p>
                <p className="text-sm text-ink-muted">{item.place}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 border-t border-border pt-8">
          <h2 className="text-xl font-semibold text-ink">Experiencia</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">{experienceIntro}</p>
          <ul className="mt-4 space-y-3">
            {experience.map((item) => (
              <li key={item.id} className="rounded-xl border border-border bg-section-soft/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">{item.period}</p>
                <p className="mt-1 font-semibold text-ink">
                  {item.role} — {item.institution}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.summary}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 border-t border-border pt-8">
          <h2 className="text-xl font-semibold text-ink">Áreas de intervención</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {areasIntervencion.map((area) => (
              <li key={area.id} className="rounded-xl border border-border bg-section-soft/40 p-4">
                <p className="font-semibold text-ink">{area.titulo}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{area.descripcion}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 border-t border-border pt-8">
          <h2 className="text-xl font-semibold text-ink">Contacto</h2>
          <div className="mt-3 flex flex-col gap-3 text-sm text-ink-muted sm:text-base">
            <p>
              Email:{" "}
              <a className="font-medium text-terracotta underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>Instagram: @{site.instagram}</p>
            <p>Profesión: {site.title}</p>
          </div>
          <Link
            href={`mailto:${site.email}`}
            className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#b86242]"
          >
            <Mail className="h-4 w-4" />
            Contactar por email
          </Link>
        </section>
      </article>
    </main>
  );
}
