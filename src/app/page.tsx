import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about-section";
import { AreasIntervencion } from "@/components/sections/AreasIntervencion";
import { ContactSection } from "@/components/sections/contact-section";
import { CurriculumSection } from "@/components/sections/curriculum-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Inicio",
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description: site.description,
    url: "/",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: `${site.name} ${site.title}`,
      },
    ],
  },
};

export default function HomePage() {
  const faqHomeJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Con qué edades trabajas en consulta de logopedia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Acompaño a niños, adolescentes y adultos con necesidades en habla, lenguaje y comunicación.",
        },
      },
      {
        "@type": "Question",
        name: "¿La atención es online o presencial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La atención puede realizarse de forma online y presencial, según las necesidades de cada familia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo puedo pedir información?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Puedes escribir por email a ${site.email} o contactar por Instagram en @${site.instagram}.`,
        },
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqHomeJsonLd) }}
      />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <AreasIntervencion />
      <CurriculumSection />
      <ContactSection />
    </main>
  );
}
