import { Card, CardContent } from "@/components/ui/card"
import { Fuel, Droplets, Wrench, ShoppingBag, Coffee, CreditCard, Clock } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const services = [
  {
    icon: Fuel,
    title: "Carburants",
    description: "Essence et diesel de qualité premium pour optimiser les performances de votre véhicule.",
  },
  {
    icon: Droplets,
    title: "Lavage auto",
    description: "Service de lavage complet pour redonner à votre véhicule tout son éclat.",
  },
  {
    icon: Wrench,
    title: "Vidange",
    description: "Vidange rapide et efficace pour l'entretien régulier de votre moteur.",
  },
  {
    icon: Wrench,
    title: "Entretien mécanique",
    description: "Maintenance et réparations réalisées par des professionnels qualifiés.",
  },
  {
    icon: ShoppingBag,
    title: "Boutique",
    description: "Produits et accessoires automobiles pour vos besoins quotidiens.",
  },
  {
    icon: Coffee,
    title: "Restauration rapide",
    description: "Café-shop avec snacks et boissons pour une pause efficace.",
  },
  {
    icon: CreditCard,
    title: "Carte de fidélité",
    description: "Un programme pensé pour récompenser votre confiance.",
  },
  {
    icon: Clock,
    title: "Ouvert 24h/24",
    description: "Service continu, jour et nuit, 7 jours sur 7.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#eef4fc] py-20 md:py-32">
      <div className="container mx-auto px-4">
        <SectionHeading
          className="mb-14"
          eyebrow="Réseau"
          title="Nos services"
          description="Une gamme complète, disponible 24h/24 et 7j/7 dans nos stations."
        />

        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="card-surface card-lift overflow-hidden">
                <CardContent className="p-7 text-left">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-zinc-900">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-600">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
