import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about-section";
import { AreasIntervencion } from "@/components/sections/AreasIntervencion";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Logopeda: acompañamiento en lenguaje, habla y comunicación. Consulta en español.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <AreasIntervencion />
      <ContactSection />
    </main>
  );
}
