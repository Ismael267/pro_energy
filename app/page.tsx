import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProductsSection } from "@/components/products-section";
import { ServicesSection } from "@/components/services-section";
// import { StationsSection } from "@/components/stations-section";
import { GallerySection } from "@/components/gallery-section";
import { TeamSection } from "@/components/team-section";
import { ContactFormSection } from "@/components/contact-form-section";
import { Footer } from "@/components/footer";
import { ValuesSection } from "@/components/values-section";
import { StationsSection } from "@/components/stations-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <ServicesSection />
      <StationsSection />
      <GallerySection />
      <TeamSection />
      <ContactFormSection />
      <Footer />
    </main>
  );
}
