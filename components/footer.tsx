import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Image
                src="/pro-energy-logo-transparent.png"
                alt="PRO energy"
                width={120}
                height={40}
                className="brightness-0 invert"
              />
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Une marque burkinabè engagée dans la distribution de carburant et les services énergétiques. Ouvert
              24h/24, 7j/7.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Carburants
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Lavage Auto
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Vidange
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Entretien Mécanique
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Boutique
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Restauration Rapide
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Nos Stations</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Station TITA</li>
              <li>Station Ramongo</li>
              <li>Station Koloko</li>
              <li>Station Zonsé </li>
              <li>Station Barma </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Suivez-nous</h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61585097331864"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              {/* <a
                href="#"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a> */}
              {/* <a
                href="#"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a> */}
              <a
                href="https://www.linkedin.com/company/proenergy-industries/about/"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>© 2025 ProEnergy. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Confidentialité
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
