import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StationsSection } from "@/components/stations-section";
import { GallerySection } from "@/components/gallery-section";
import { ContactFormSection } from "@/components/contact-form-section";
import { StationPartnershipSection } from "@/components/station-partnership-section";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Nos 6 Stations-Service à Ouagadougou et Koudougou 24h/24 7j/7",
  description:
    "Découvrez le réseau de stations-service PRO ENERGY au Burkina Faso : Station TITA, Station Ramongo, Station Koloko, Station Zonsé, Station Barma et Station Koudougou 1. Carburants de qualité, lavage et boutiques ouverts 24/7.",
  keywords: [
    "station essence Ouagadougou 24h/24",
    "station PRO ENERGY TITA",
    "station PRO ENERGY Ramongo",
    "station PRO ENERGY Koloko",
    "station PRO ENERGY Zonsé",
    "station PRO ENERGY Barma",
    "station PRO ENERGY Koudougou",
    "carburant de qualité Burkina Faso",
  ],
  alternates: {
    canonical: "/stations",
  },
  openGraph: {
    title: "Nos 6 Stations-Service au Burkina Faso | PRO ENERGY",
    description: "Réseau de stations modernes ouvertes 24h/24 et 7j/7 avec carburants certifiés, boutiques et lavage auto.",
    url: "/stations",
  },
};

export default function StationsPage() {
  return (
    <main className="page-shell min-h-[100dvh]">
      <Header />
      <ScrollReveal>
        <StationsSection />
      </ScrollReveal>
      <ScrollReveal>
        <StationPartnershipSection />
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
