import { Shield, Users, Lightbulb, Award, Target } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Professionnalisme",
    description: "Nous travaillons avec rigueur, discipline et engagement dans toutes nos opérations.",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    border: "border-primary/15",
  },
  {
    icon: Shield,
    title: "Intégrité",
    description: "Nous plaçons l'honnêteté, la transparence et la confiance au cœur de chaque action.",
    color: "from-secondary/20 to-secondary/5",
    iconColor: "text-secondary",
    border: "border-secondary/15",
  },
  {
    icon: Target,
    title: "Sécurité",
    description: "La sécurité des clients, du personnel et de nos installations est une priorité absolue.",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    border: "border-primary/15",
  },
  {
    icon: Users,
    title: "Proximité",
    description: "Nous restons proches des clients et des partenaires pour mieux répondre à leurs besoins.",
    color: "from-secondary/20 to-secondary/5",
    iconColor: "text-secondary",
    border: "border-secondary/15",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous cherchons constamment des solutions modernes pour améliorer nos services.",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    border: "border-primary/15",
  },
]

export function ValuesSection() {
  return (
    <section className="py-24 md:py-36 bg-gradient-to-b from-zinc-50 to-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-primary/6 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-5 border border-secondary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Nos Valeurs
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
              Ce qui guide nos <span className="gradient-text">actions</span>
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Des principes fondateurs qui nous engagent envers nos clients, nos partenaires et notre communauté.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {[
              {
                label: "Vision",
                text: "Positionner ProEnergy parmi les marques de référence grâce à la qualité du service, la sécurité et l'innovation continue. Construire un réseau solide et fiable de stations-service reconnues pour leur professionnalisme et leur proximité avec les clients.",
              },
              {
                label: "Mission",
                text: "Fournir du carburant, des produits et des services de qualité à des prix compétitifs, dans un environnement sécurisé et professionnel, tout en assurant une expérience client irréprochable et une création de valeur pour ProEnergy et ses partenaires.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="card-3d bg-white p-8 rounded-2xl shadow-md border border-zinc-100 relative overflow-hidden group"
              >
                {/* Accent top bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${
                    i === 0
                      ? "bg-gradient-to-r from-primary to-primary/40"
                      : "bg-gradient-to-r from-secondary to-secondary/40"
                  }`}
                />
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    i === 0 ? "text-primary" : "text-secondary"
                  }`}
                >
                  {item.label}
                </h3>
                <p className="text-zinc-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Values grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  data-stagger
                  style={{ "--si": index } as React.CSSProperties}
                  className={`card-3d bg-gradient-to-br ${value.color} p-6 rounded-2xl border ${value.border} hover:shadow-xl transition-all group`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-6 h-6 ${value.iconColor}`} />
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 mb-2">{value.title}</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
