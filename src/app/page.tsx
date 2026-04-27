import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about-section";
import { AreasSection } from "@/components/sections/areas-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Logopeda: acompañamiento en lenguaje, habla y voz.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <AreasSection />
      <ContactSection />
    </main>
  );
}
