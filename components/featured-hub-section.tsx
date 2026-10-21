import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { ScrollReveal } from "@/components/scroll-reveal"

const featuredHubs = [
  {
    tag: "BTP & Grands Travaux",
    title: "Le carburant directement sur votre chantier",
    desc: "Citernes, pompes de distribution et livraisons planifiées pour maximiser le rendement de vos engins.",
    points: ["Citerne sécurisée", "Zéro déplacement machine", "Suivi des volumes"],
    image: "/station-service-moderne-pompes.jpg",
    cta: "Solution BTP",
    href: "/solutions-pro#btp",
  },
  {
    tag: "Réseau & particuliers",
    title: "Six stations ouvertes 24h/24 et 7j/7",
    desc: "Carburants premium, lavage, vidange rapide et boutiques café-shop, partout près de vous.",
    points: ["Super et diesel", "Lavage professionnel", "Café-shop"],
    image: "/pro-energy-station-full.png",
    cta: "Localiser une station",
    href: "/stations",
  },
  {
    tag: "Flottes & transporteurs",
    title: "Un approvisionnement pensé pour votre parc",
    desc: "Conditions commerciales selon vos volumes, avec un interlocuteur dédié à la continuité opérationnelle.",
    points: ["Tarifs adaptés", "Fournisseur unique", "Suivi commercial"],
    image: "/pro-energy-price-sign.png",
    cta: "Offre flottes",
    href: "/solutions-pro#flottes",
  },
]

export function FeaturedHubSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          className="mb-14"
          eyebrow="Nos métiers"
          title={
            <>
              Des solutions adaptées à <span className="gradient-text">chaque besoin</span>
            </>
          }
          description="Trois pôles pour soutenir la mobilité des particuliers et la performance des entreprises."
        />

        <ScrollReveal stagger className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            {featuredHubs.map((hub) => (
              <article key={hub.title} className="card-surface card-lift flex flex-col overflow-hidden">
                <div className="relative h-52 w-full overflow-hidden bg-zinc-200">
                  <Image src={hub.image} alt={hub.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-zinc-800 backdrop-blur-md">
                    {hub.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 text-xl leading-snug font-semibold text-zinc-900">{hub.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-zinc-600">{hub.desc}</p>
                  <ul className="mb-6 space-y-2">
                    {hub.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-sm font-medium text-zinc-700">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-secondary" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="mt-auto w-full rounded-full py-5 font-semibold">
                    <Link href={hub.href} className="flex items-center justify-center gap-2">
                      {hub.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
