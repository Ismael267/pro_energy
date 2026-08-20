import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturedHubSection } from "@/components/featured-hub-section";
import { B2bSolutionsSection } from "@/components/b2b-solutions-section";
import { MethodologySection } from "@/components/methodology-section";
import { CorporateCtaBanner } from "@/components/corporate-cta-banner";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { StationsSection } from "@/components/stations-section";
import { GallerySection } from "@/components/gallery-section";
import { ContactFormSection } from "@/components/contact-form-section";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section & Quick Actions Strip */}
      <HeroSection />
      
      {/* 3 Grands Pôles d'Activités (TotalEnergies Style) */}
      <ScrollReveal direction="up">
        <FeaturedHubSection />
      </ScrollReveal>

      {/* Solutions B2B & Approvisionnement en Carburant */}
      <ScrollReveal delay={60} direction="up">
        <B2bSolutionsSection />
      </ScrollReveal>

      {/* Méthode en 5 étapes */}
      <ScrollReveal delay={60} direction="up">
        <MethodologySection />
      </ScrollReveal>

      {/* Bandeau Corporate Call to Action */}
      <CorporateCtaBanner />

      {/* Présentation Marque & Réseau */}
      <ScrollReveal delay={60} direction="up">
        <AboutSection />
      </ScrollReveal>

      {/* Services Réseau Particuliers & Stations */}
      <ScrollReveal delay={60} direction="up">
        <ServicesSection />
      </ScrollReveal>

      {/* Les 5 Stations */}
      <ScrollReveal delay={60} direction="fade">
        <StationsSection />
      </ScrollReveal>

      {/* Galerie Photos */}
      <ScrollReveal delay={60} direction="up">
        <GallerySection />
      </ScrollReveal>

      {/* Formulaire Commercial & Contact */}
      <ScrollReveal delay={60} direction="up">
        <ContactFormSection />
      </ScrollReveal>

      <Footer />
    </main>
  );
}
