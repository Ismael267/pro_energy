import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { B2bSolutionsSection } from "@/components/b2b-solutions-section";
import { MethodologySection } from "@/components/methodology-section";
import { ContactFormSection } from "@/components/contact-form-section";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Solutions B2B & Approvisionnement en Carburant",
  description:
    "Fourniture et approvisionnement en carburant pour stations, chantiers BTP avec citernes et pompes sur site, transporteurs et flottes professionnelles au Burkina Faso. Contact commercial : 04 01 01 94.",
  keywords: [
    "approvisionnement carburant chantiers BTP",
    "citerne carburant sur chantier Ouagadougou",
    "fournisseur carburant transporteurs Burkina",
    "livraison carburant gros volumes",
    "contrat carburant entreprise Burkina Faso",
  ],
  alternates: {
    canonical: "/solutions-pro",
  },
  openGraph: {
    title: "Solutions B2B & Approvisionnement Carburant | PRO ENERGY",
    description:
      "Du carburant à la solution complète d'approvisionnement : citernes sur chantier BTP, flottes de transport et gros acheteurs. Ligne directe : 04 01 01 94.",
    url: "/solutions-pro",
  },
};

export default function SolutionsProPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <ScrollReveal direction="up">
        <B2bSolutionsSection />
      </ScrollReveal>
      <ScrollReveal delay={60} direction="up">
        <MethodologySection />
      </ScrollReveal>
      <ScrollReveal delay={60} direction="up">
        <ContactFormSection />
      </ScrollReveal>
      <Footer />
    </main>
  );
}
