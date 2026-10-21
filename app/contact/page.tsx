import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactFormSection } from "@/components/contact-form-section";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Contact Commercial & Demande de Cotation",
  description:
    "Contactez l'équipe commerciale de PRO ENERGY au 04 01 01 94 ou envoyez votre demande de devis pour carburants, livraisons sur chantiers BTP et flottes d'entreprises.",
  keywords: [
    "contact commercial PRO ENERGY",
    "devis carburant Burkina Faso",
    "téléphone station pro energy",
    "cotation livraison carburant",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Devis Commercial | PRO ENERGY",
    description: "Parlons de votre consommation et construisons votre solution d'approvisionnement. Téléphone direct : 04 01 01 94.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="page-shell min-h-[100dvh]">
      <Header />
      <ScrollReveal>
        <ContactFormSection />
      </ScrollReveal>
      <Footer />
    </main>
  );
}
