import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AboutSection } from "@/components/about-section";
import { ValuesSection } from "@/components/values-section";
import { TeamSection } from "@/components/team-section";
import { ContactFormSection } from "@/components/contact-form-section";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "À Propos de PRO ENERGY - Marque Burkinabè d'Énergie",
  description:
    "Découvrez l'histoire, la vision, la mission, les valeurs de rigueur et d'intégrité, et l'équipe professionnelle de PRO ENERGY au Burkina Faso.",
  keywords: [
    "société énergie Burkina Faso",
    "distribution carburant Burkina",
    "équipe PRO ENERGY",
    "marque burkinabè énergie",
  ],
  alternates: {
    canonical: "/a-propos",
  },
  openGraph: {
    title: "À Propos de PRO ENERGY | Une marque burkinabè engagée",
    description: "Découvrez notre vision, nos valeurs et nos engagements pour l'énergie au Burkina Faso.",
    url: "/a-propos",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <ScrollReveal direction="up">
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal delay={60} direction="up">
        <ValuesSection />
      </ScrollReveal>
      <ScrollReveal delay={60} direction="up">
        <TeamSection />
      </ScrollReveal>
      <ScrollReveal delay={60} direction="up">
        <ContactFormSection />
      </ScrollReveal>
      <Footer />
    </main>
  );
}
