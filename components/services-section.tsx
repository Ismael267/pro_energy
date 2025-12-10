import { Card, CardContent } from "@/components/ui/card"
import { Fuel, Droplets, Wrench, ShoppingBag, Coffee, CreditCard, Clock } from "lucide-react"

const services = [
  {
    icon: Fuel,
    title: "Carburants",
    description: "Essence et diesel de qualité premium pour optimiser les performances de votre véhicule.",
  },
  {
    icon: Droplets,
    title: "Lavage Auto",
    description: "Service de lavage complet pour redonner à votre véhicule tout son éclat.",
  },
  {
    icon: Wrench,
    title: "Vidange",
    description: "Vidange rapide et efficace pour l'entretien régulier de votre moteur.",
  },
  {
    icon: Wrench,
    title: "Entretien Mécanique",
    description: "Maintenance et réparations mécaniques réalisées par des professionnels qualifiés.",
  },
  {
    icon: ShoppingBag,
    title: "Boutique",
    description: "Large choix de produits et accessoires automobiles pour vos besoins quotidiens.",
  },
  {
    icon: Coffee,
    title: "Restauration Rapide",
    description: "Espace café-shop avec snacks et boissons pour vous restaurer rapidement.",
  },
  {
    icon: CreditCard,
    title: "Carte de Fidélité",
    description: "Programme de fidélité avantageux pour récompenser votre confiance.",
  },
  {
    icon: Clock,
    title: "Ouvert 24h/24",
    description: "Service continu jour et nuit, 7 jours sur 7, pour votre confort.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-[#f5ebe5]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4 text-balance">Nos Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Une gamme complète de services pour répondre à tous vos besoins. Ouvert 24h/24, 7j/7.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-none bg-white hover:shadow-xl transition-all group">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-3">{service.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
