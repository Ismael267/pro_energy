import { Fuel, Droplets, Wrench, ShoppingBag, Coffee, CreditCard, Clock, Settings } from "lucide-react"

const services = [
  {
    icon: Fuel,
    title: "Carburants",
    description: "Essence et diesel de qualité premium pour optimiser les performances de votre véhicule.",
    accent: "bg-primary",
    glow: "shadow-primary/20",
  },
  {
    icon: Droplets,
    title: "Lavage Auto",
    description: "Service de lavage complet pour redonner à votre véhicule tout son éclat.",
    accent: "bg-secondary",
    glow: "shadow-secondary/20",
  },
  {
    icon: Wrench,
    title: "Vidange",
    description: "Vidange rapide et efficace pour l'entretien régulier de votre moteur.",
    accent: "bg-primary",
    glow: "shadow-primary/20",
  },
  {
    icon: Settings,
    title: "Entretien Mécanique",
    description: "Maintenance et réparations mécaniques réalisées par des professionnels qualifiés.",
    accent: "bg-secondary",
    glow: "shadow-secondary/20",
  },
  {
    icon: ShoppingBag,
    title: "Boutique",
    description: "Large choix de produits et accessoires automobiles pour vos besoins quotidiens.",
    accent: "bg-primary",
    glow: "shadow-primary/20",
  },
  {
    icon: Coffee,
    title: "Restauration Rapide",
    description: "Espace café-shop avec snacks et boissons pour vous restaurer rapidement.",
    accent: "bg-secondary",
    glow: "shadow-secondary/20",
  },
  {
    icon: CreditCard,
    title: "Carte de Fidélité",
    description: "Programme de fidélité avantageux pour récompenser votre confiance.",
    accent: "bg-primary",
    glow: "shadow-primary/20",
  },
  {
    icon: Clock,
    title: "Ouvert 24h/24",
    description: "Service continu jour et nuit, 7 jours sur 7, pour votre confort absolu.",
    accent: "bg-secondary",
    glow: "shadow-secondary/20",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-36 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #fdf6f0 0%, #fff8f5 50%, #f0f9f0 100%)" }}>
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/4 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-5 border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Ce que nous offrons
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
            Nos <span className="gradient-text">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-5" />
          <p className="text-lg text-zinc-500 leading-relaxed">
            Une gamme complète de services pour répondre à tous vos besoins. Ouvert 24h/24, 7j/7.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                data-stagger
                style={{ "--si": index } as React.CSSProperties}
                className="card-3d group bg-white rounded-2xl p-7 border border-zinc-100 hover:border-transparent hover:shadow-2xl transition-all duration-400 relative overflow-hidden cursor-default"
              >
                {/* Hover background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className={`relative z-10 flex items-center justify-center w-14 h-14 rounded-xl ${service.accent} mb-5 shadow-lg ${service.glow} group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-lg font-bold text-zinc-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="relative z-10 text-sm text-zinc-500 leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${service.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left`} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
