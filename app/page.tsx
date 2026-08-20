import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { B2bSolutionsSection } from "@/components/b2b-solutions-section";
import { MethodologySection } from "@/components/methodology-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { GallerySection } from "@/components/gallery-section";
import { TeamSection } from "@/components/team-section";
import { ContactFormSection } from "@/components/contact-form-section";
import { Footer } from "@/components/footer";
import { ValuesSection } from "@/components/values-section";
import { StationsSection } from "@/components/stations-section";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      
      {/* Solutions B2B & Approvisionnement */}
      <ScrollReveal direction="up">
        <B2bSolutionsSection />
      </ScrollReveal>

      {/* Méthode en 5 étapes */}
      <ScrollReveal delay={60} direction="up">
        <MethodologySection />
      </ScrollReveal>

      {/* Présentation Marque & Valeurs */}
      <ScrollReveal delay={60} direction="up">
        <AboutSection />
      </ScrollReveal>

      <ScrollReveal delay={60} direction="up">
        <ValuesSection />
      </ScrollReveal>

      {/* Services & Stations Réseau */}
      <ScrollReveal delay={60} direction="up">
        <ServicesSection />
      </ScrollReveal>

      <ScrollReveal delay={60} direction="fade">
        <StationsSection />
      </ScrollReveal>

      {/* Galerie & Équipe */}
      <ScrollReveal delay={60} direction="up">
        <GallerySection />
      </ScrollReveal>

      <ScrollReveal delay={60} direction="up">
        <TeamSection />
      </ScrollReveal>

      {/* Contact & Passez à l'action */}
      <ScrollReveal delay={60} direction="up">
        <ContactFormSection />
      </ScrollReveal>

      <Footer />
    </main>
  );
}
