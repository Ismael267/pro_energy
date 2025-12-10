import { Shield, Users, Lightbulb, Award } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Professionnalisme",
    description: "Nous travaillons avec rigueur, discipline et engagement dans toutes nos opérations.",
  },
  {
    icon: Shield,
    title: "Intégrité",
    description: "Nous plaçons l'honnêteté, la transparence et la confiance au cœur de chaque action.",
  },
  {
    icon: Shield,
    title: "Sécurité",
    description: "La sécurité des clients, du personnel et de nos installations est une priorité absolue.",
  },
  {
    icon: Users,
    title: "Proximité",
    description: "Nous restons proches des clients et des partenaires pour mieux répondre à leurs besoins.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Nous cherchons constamment des solutions modernes pour améliorer nos services et nos infrastructures.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-zinc-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Nos Valeurs
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 text-balance">Ce qui guide nos actions</h2>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-zinc-100">
              <h3 className="text-2xl font-bold text-primary mb-4">Vision</h3>
              <p className="text-zinc-600 leading-relaxed">
                Positionner ProEnergy parmi les marques de référence grâce à la qualité du service, la sécurité et
                l'innovation continue. Construire un réseau solide et fiable de stations-service reconnues pour leur
                professionnalisme et leur proximité avec les clients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-zinc-100">
              <h3 className="text-2xl font-bold text-primary mb-4">Mission</h3>
              <p className="text-zinc-600 leading-relaxed">
                Fournir du carburant, des produits et des services de qualité à des prix compétitifs, dans un
                environnement sécurisé et professionnel, tout en assurant une expérience client irréprochable, une
                gestion rigoureuse et transparente, et une création de valeur pour ProEnergy et ses partenaires.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-zinc-100 hover:border-primary/20"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-3 text-center">{value.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed text-center">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
