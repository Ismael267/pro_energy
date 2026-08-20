import Image from "next/image"
import Link from "next/link"
import { ArrowRight, HardHat, Fuel, Truck, Sparkles, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredHubs = [
  {
    tag: "BTP & Grands Travaux",
    badgeColor: "bg-amber-500/10 text-amber-700 border-amber-500/20",
    title: "Le Carburant Directement sur Votre Chantier",
    desc: "Mise à disposition de citernes, pompes de distribution et organisation de livraisons planifiées pour maximiser le rendement de vos engins.",
    points: ["Installation de citerne sécurisée", "Zéro déplacement pour vos machines", "Suivi précis des volumes consommés"],
    image: "/station-service-moderne-pompes.jpg",
    cta: "Découvrir la solution BTP",
    href: "/solutions-pro#btp",
  },
  {
    tag: "Réseau Stations & Particuliers",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
    title: "5 Stations-Service Ouvertes 24h/24 & 7j/7",
    desc: "Retrouvez des carburants premium (Super, Diesel), un service de lavage complet, de la vidange mécanique rapide et nos boutiques café-shop.",
    points: ["Carburants haute performance", "Lavage auto professionnel", "Boutiques et restauration rapide"],
    image: "/pro-energy-station-full.png",
    cta: "Localiser nos 5 stations",
    href: "/stations",
  },
  {
    tag: "Flottes & Transporteurs",
    badgeColor: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    title: "Gestion d'Approvisionnement pour Flottes",
    desc: "Conditions commerciales étudiées selon vos volumes avec un interlocuteur dédié pour assurer la continuité opérationnelle de votre parc de véhicules.",
    points: ["Conditions tarifaires avantageuses", "Fournisseur unique centralisé", "Interlocuteur commercial dédié"],
    image: "/pro-energy-price-sign.png",
    cta: "Voir l'offre flottes",
    href: "/solutions-pro#flottes",
  },
]

export function FeaturedHubSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 text-zinc-900 text-xs font-bold uppercase tracking-wider mb-4 border border-secondary/30">
           
            Nos Activités & Métiers
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-4 leading-tight">
            Des solutions énergétiques adaptées à <span className="gradient-text">chaque besoin</span>
          </h2>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
            Découvrez nos pôles d'activités pensés pour soutenir la mobilité des particuliers et la performance des entreprises.
          </p>
        </div>

        {/* 3 Featured Cards Grid (TotalEnergies Style) */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredHubs.map((hub, i) => (
            <div
              key={i}
              className="group bg-zinc-50 rounded-3xl overflow-hidden border border-zinc-200/80 shadow-md hover:shadow-2xl transition-all duration-400 flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Image with zoom effect */}
              <div className="relative h-56 w-full overflow-hidden bg-zinc-200">
                <Image
                  src={hub.image}
                  alt={hub.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Tag Badge on Image */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md shadow-sm ${hub.badgeColor}`}>
                    {hub.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-primary transition-colors leading-snug">
                    {hub.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-600 leading-relaxed mb-5">
                    {hub.desc}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {hub.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild variant="outline" className="w-full bg-white hover:bg-primary hover:text-white border-zinc-200 font-bold rounded-xl py-5 transition-all group-hover:border-primary">
                  <Link href={hub.href} className="flex items-center justify-center gap-2">
                    <span>{hub.cta}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
