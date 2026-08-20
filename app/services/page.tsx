import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicesSection } from "@/components/services-section";
import { ContactFormSection } from "@/components/contact-form-section";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Nos Services - Carburants, Lavage Auto, Vidange & Restauration",
  description:
    "Gamme complète de services disponibles dans nos stations PRO ENERGY : distribution de carburants, lavage auto professionnel, vidange rapide, boutique et café-shop 24h/24.",
  keywords: [
    "lavage auto professionnel Ouagadougou",
    "vidange moteur rapide Burkina",
    "essence super diesel Ouagadougou",
    "boutique station service",
    "café shop station Ouagadougou",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services & Entretien Véhicule | PRO ENERGY",
    description: "Carburants, lavage haute pression, vidange et restauration rapide 24h/24.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <ScrollReveal direction="up">
        <ServicesSection />
      </ScrollReveal>
      <ScrollReveal delay={60} direction="up">
        <ContactFormSection />
      </ScrollReveal>
      <Footer />
    </main>
  );
}
