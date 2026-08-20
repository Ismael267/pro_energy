import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StationsSection } from "@/components/stations-section";
import { GallerySection } from "@/components/gallery-section";
import { ContactFormSection } from "@/components/contact-form-section";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Nos 5 Stations-Service à Ouagadougou 24h/24 7j/7",
  description:
    "Découvrez le réseau de stations-service PRO ENERGY au Burkina Faso : Station TITA, Station Ramongo, Station Koloko, Station Zonsé et Station Barma. Carburants de qualité, lavage et boutiques ouverts 24/7.",
  keywords: [
    "station essence Ouagadougou 24h/24",
    "station PRO ENERGY TITA",
    "station PRO ENERGY Ramongo",
    "station PRO ENERGY Koloko",
    "station PRO ENERGY Zonsé",
    "station PRO ENERGY Barma",
    "carburant de qualité Burkina Faso",
  ],
  alternates: {
    canonical: "/stations",
  },
  openGraph: {
    title: "Nos 5 Stations-Service à Ouagadougou | PRO ENERGY",
    description: "Réseau de stations modernes ouvertes 24h/24 et 7j/7 avec carburants certifiés, boutiques et lavage auto.",
    url: "/stations",
  },
};

export default function StationsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <ScrollReveal direction="fade">
        <StationsSection />
      </ScrollReveal>
      <ScrollReveal delay={60} direction="up">
        <GallerySection />
      </ScrollReveal>
      <ScrollReveal delay={60} direction="up">
        <ContactFormSection />
      </ScrollReveal>
      <Footer />
    </main>
  );
}
