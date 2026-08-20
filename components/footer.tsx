import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, MapPin, Mail, PhoneCall } from "lucide-react"

const footerLinks = {
  solutions: [
    { label: "Solutions B2B & Approvisionnement", href: "/solutions-pro" },
    { label: "Stations & Gros Consommateurs", href: "/solutions-pro#stations" },
    { label: "Entreprises BTP & Chantiers", href: "/solutions-pro#btp" },
    { label: "Flottes & Transporteurs", href: "/solutions-pro#flottes" },
    { label: "Notre Méthode en 5 étapes", href: "/solutions-pro#methode" },
  ],
  services: [
    { label: "Nos Services Complets", href: "/services" },
    { label: "Carburants Premium", href: "/services#carburants" },
    { label: "Lavage Auto Complet", href: "/services#lavage" },
    { label: "Vidange & Entretien", href: "/services#vidange" },
    { label: "Café-Shop & Boutiques", href: "/services#boutique" },
  ],
  compagnie: [
    { label: "À Propos de ProEnergy", href: "/a-propos" },
    { label: "Vision, Mission & Valeurs", href: "/a-propos#valeurs" },
    { label: "Notre Équipe", href: "/a-propos#equipe" },
    { label: "Nos 5 Stations", href: "/stations" },
    { label: "Contact & Devis", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white relative overflow-hidden">
      {/* Gradient top accent */}
      <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-primary" />

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-white/10">
          
          {/* Brand & Slogan */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link href="/">
                <Image
                  src="/pro-energy-logo-transparent.png"
                  alt="PRO energy"
                  width={280}
                  height={120}
                  className="brightness-0 invert h-18 md:h-22 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-sm font-semibold text-secondary mb-2">
              DU CARBURANT À LA SOLUTION COMPLÈTE D'APPROVISIONNEMENT.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6 max-w-sm">
              Votre partenaire de confiance pour les stations, entreprises, BTP, transporteurs et flottes professionnelles au Burkina Faso.
            </p>

            {/* Quick commercial contact pill */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 max-w-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-white flex-shrink-0">
                  <PhoneCall className="w-5 h-5 text-zinc-900" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-medium">Contact commercial direct</div>
                  <a href="tel:04010194" className="text-lg font-extrabold text-white hover:text-secondary transition-colors">
                    04 01 01 94
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions B2B */}
          <div>
            <h3 className="text-sm font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-secondary" />
              Solutions Pro & B2B
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.solutions.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-secondary transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-secondary transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Réseau */}
          <div>
            <h3 className="text-sm font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-primary" />
              Services & Réseau
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-secondary transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-secondary transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compagnie & Réseaux */}
          <div>
            <h3 className="text-sm font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-secondary" />
              ProEnergy
            </h3>
            <ul className="space-y-2.5 mb-6">
              {footerLinks.compagnie.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-secondary transition-colors flex items-center gap-1.5"
                  >
                    <MapPin className="w-3.5 h-3.5 text-zinc-600 group-hover:text-primary transition-colors flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Réseaux Sociaux</h4>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=61585097331864"
                className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/8 hover:bg-primary border border-white/10 hover:border-primary text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/proenergy-industries/about/"
                className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/8 hover:bg-secondary border border-white/10 hover:border-secondary text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>
            © 2025 <strong className="text-white">PROENERGY</strong> — Votre carburant. Notre engagement. Votre performance.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">
              Mentions légales
            </Link>
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">
              Confidentialité
            </Link>
            <Link href="/solutions-pro" className="hover:text-zinc-300 transition-colors">
              Conditions B2B
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
