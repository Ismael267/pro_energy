import Image from "next/image"

const stats = [
  { value: "5", label: "Stations", suffix: "+" },
  { value: "24", label: "Heures / 7j", suffix: "h" },
  { value: "100", label: "Clients satisfaits", suffix: "%" },
]

export function AboutSection() {
  return (
    <section id="apropos" className="py-24 md:py-36 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group cursor-pointer">
              <Image
                src="/pro-energy-station-full.png"
                alt="Station PRO energy"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center w-18 h-18">
                  <span className="pulse-ring text-white/50" />
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white/90 backdrop-blur shadow-xl transition-transform duration-300 group-hover:scale-105">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-primary ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5 flex items-center justify-between">
                  <span className="text-white text-sm font-medium">Station PRO energy</span>
                  <span className="text-secondary text-xs font-semibold">Ouagadougou, BF</span>
                </div>
              </div>
            </div>

            {/* Stats floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl border border-zinc-100 p-5 hidden md:block">
              <div className="flex gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-primary leading-none">
                      {stat.value}<span className="text-secondary">{stat.suffix}</span>
                    </div>
                    <div className="text-xs text-zinc-500 mt-1 whitespace-nowrap">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5   text-secondary text-sm font-semibold mb-6">
              {/* <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> */}
              Présentation ProEnergy
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
              Une marque burkinabè{" "}
              <span className="gradient-text">engagée</span>
            </h2>

            <p className="text-lg text-zinc-600 mb-5 leading-relaxed">
              <span className="font-bold text-primary">ProEnergy</span> est une marque burkinabè engagée dans la
              distribution de carburant et les services énergétiques. Née de la volonté de proposer une alternative
              moderne, fiable et accessible aux usagers de la route, aux transporteurs et aux communautés locales.
            </p>
            <p className="text-zinc-600 mb-5 leading-relaxed">
              Aujourd'hui, elle s'appuie sur un réseau de cinq stations-service —{" "}
              <span className="font-semibold text-primary">(TITA, Ramongo, Koloko, Barma et Zonsé)</span> — qui
              s'approvisionnent exclusivement auprès de la marque.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              Chaque jour, nos équipes s'engagent à offrir un accueil chaleureux, une gestion rigoureuse des
              installations et un environnement respectant les standards de sécurité les plus élevés.
            </p>

            {/* Mobile stats */}
            <div className="md:hidden grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, i) => (
                <div key={i} className="bg-zinc-50 rounded-xl p-4 text-center border border-zinc-100">
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}<span className="text-secondary">{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
