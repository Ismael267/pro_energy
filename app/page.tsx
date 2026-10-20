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
    <main className="min-h-[100dvh] bg-white">
      <Header />
      <HeroSection />
      <FeaturedHubSection />
      <ScrollReveal>
        <B2bSolutionsSection />
      </ScrollReveal>
      <ScrollReveal>
        <MethodologySection />
      </ScrollReveal>
      <CorporateCtaBanner />
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>
      <ScrollReveal>
        <StationsSection />
      </ScrollReveal>
      <ScrollReveal>
        <GallerySection />
      </ScrollReveal>
      <ScrollReveal>
        <ContactFormSection />
      </ScrollReveal>
      <Footer />
    </main>
  );
}
