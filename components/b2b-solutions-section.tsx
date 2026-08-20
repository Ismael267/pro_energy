"use client"

import { Fuel, ShieldCheck, Truck, Users, TrendingUp, Handshake, HardHat, Building2, Zap, ArrowRight, CheckCircle2, PhoneCall } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const whyChooseUs = [
  {
    icon: Fuel,
    title: "APPROVISIONNEMENT",
    description: "Une organisation adaptée à vos besoins et à vos volumes réels.",
    color: "from-primary/20 to-primary/5",
    iconBg: "bg-primary text-white",
  },
  {
    icon: TrendingUp,
    title: "CONDITIONS COMPÉTITIVES",
    description: "Des conditions commerciales étudiées selon les volumes et les caractéristiques de votre activité.",
    color: "from-secondary/20 to-secondary/5",
    iconBg: "bg-secondary text-white",
  },
  {
    icon: Truck,
    title: "SOLUTION LOGISTIQUE",
    description: "Une organisation rigoureuse des approvisionnements en fonction de vos contraintes de terrain.",
    color: "from-primary/20 to-primary/5",
    iconBg: "bg-primary text-white",
  },
  {
    icon: Users,
    title: "ACCOMPAGNEMENT",
    description: "Un interlocuteur commercial dédié pour le suivi personnalisé de vos besoins et commandes.",
    color: "from-secondary/20 to-secondary/5",
    iconBg: "bg-secondary text-white",
  },
  {
    icon: ShieldCheck,
    title: "SUIVI & CONTRÔLE",
    description: "Un accompagnement transparent permettant de mieux maîtriser et suivre les volumes consommés.",
    color: "from-primary/20 to-primary/5",
    iconBg: "bg-primary text-white",
  },
  {
    icon: Handshake,
    title: "PARTENARIAT DURABLE",
    description: "Une relation de confiance fondée sur la proximité, la fiabilité et la disponibilité constante.",
    color: "from-secondary/20 to-secondary/5",
    iconBg: "bg-secondary text-white",
  },
]

const b2bSectors = [
  {
    id: "stations",
    icon: Fuel,
    badge: "Grands Volumes",
    title: "Stations & Gros Consommateurs",
    subtitle: "Une offre conçue pour les professionnels qui recherchent un fournisseur fiable sur leurs volumes.",
    forWho: [
      "Stations-service et points de distribution indépendants",
      "Gros acheteurs professionnels et industriels",
      "Revendeurs autorisés",
      "Entreprises ayant des besoins réguliers en carburant",
    ],
    proposals: [
      "Étude personnalisée de vos volumes de consommation",
      "Proposition commerciale adaptée et évolutive",
      "Conditions tarifaires préférentielles selon les volumes",
      "Organisation flexible des approvisionnements",
      "Suivi rigoureux des commandes et livraisons",
      "Accompagnement commercial permanent",
    ],
    ctaText: "Demander une étude tarifaire",
  },
  {
    id: "btp",
    icon: HardHat,
    badge: "Solution Sur Site",
    title: "Entreprises BTP : Le carburant sur chantier",
    subtitle: "Pour les chantiers et entreprises de BTP, ProEnergy installe et approvisionne directement vos installations sur site.",
    steps: [
      { num: "01", title: "CITERNE", desc: "Mise en place d'une citerne de stockage sécurisée et adaptée au besoin du site." },
      { num: "02", title: "POMPE", desc: "Mise à disposition d'une solution de distribution et comptage sur site." },
      { num: "03", title: "LIVRAISON", desc: "Organisation des livraisons de carburant planifiées selon le rythme du chantier." },
      { num: "04", title: "SUIVI", desc: "Accompagnement et traçabilité des volumes livrés et consommés." },
    ],
    benefits: [
      { title: "Gain de temps", desc: "Finis les déplacements inutiles de vos engins vers les stations extérieures." },
      { title: "Disponibilité continue", desc: "Le carburant stocké au plus près de vos opérations 24/7." },
      { title: "Contrôle des coûts", desc: "Meilleure traçabilité des volumes consommés par machine." },
      { title: "Fournisseur unique", desc: "Centralisation de tous vos besoins auprès d'un partenaire de référence." },
    ],
    highlight: "Votre chantier. Votre carburant. Votre solution ProEnergy.",
    ctaText: "Étudier une solution chantier",
  },
  {
    id: "flottes",
    icon: Truck,
    badge: "Mobilité & Énergie",
    title: "Transporteurs, Entreprises & Flottes",
    subtitle: "Véhicules de service, camions de transport, engins ou groupes électrogènes : une gestion optimisée.",
    targets: [
      {
        icon: Truck,
        name: "Transporteurs",
        desc: "Approvisionnement régulier et garanti pour la continuité de vos trajets et de votre flotte routière.",
      },
      {
        icon: Building2,
        name: "Entreprises & PME",
        desc: "Solution centralisée adaptée à vos véhicules de fonction, de livraison et services techniques.",
      },
      {
        icon: HardHat,
        name: "Engins & Équipements",
        desc: "Approvisionnement au plus près des opérations d'exploitation lorsque le projet le permet.",
      },
      {
        icon: Zap,
        name: "Groupes électrogènes",
        desc: "Alimentation sécurisée pour garantir la continuité de votre énergie en toutes circonstances.",
      },
    ],
    ctaText: "Contacter un conseiller flotte",
  },
]

export function B2bSolutionsSection() {
  const [activeTab, setActiveTab] = useState<string>("stations")

  const currentSector = b2bSectors.find((s) => s.id === activeTab) || b2bSectors[0]

  return (
    <section id="solutions-pro" className="py-24 md:py-36 bg-gradient-to-b from-white via-zinc-50 to-white relative overflow-hidden">
      {/* Background ambiance */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* Main Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-5 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Solutions Professionnelles & B2B
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-zinc-900 mb-6 leading-tight">
            Votre partenaire pour un <br className="hidden sm:inline" />
            <span className="gradient-text">approvisionnement fiable</span> en carburant
          </h2>
          <p className="text-xl text-zinc-700 font-medium mb-3">
            DU CARBURANT À LA SOLUTION COMPLÈTE D'APPROVISIONNEMENT
          </p>
          <p className="text-base text-zinc-500 max-w-2xl mx-auto">
            Stations • Entreprises • BTP • Transporteurs • Flottes professionnelles • Groupes électrogènes
          </p>

          {/* Quick commercial phone banner */}
          <div className="mt-8 inline-flex items-center gap-3 bg-zinc-900 text-white px-6 py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-white/10">
            <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-white">
              <PhoneCall className="w-4 h-4 animate-bounce" />
            </div>
            <div className="text-left">
              <div className="text-xs text-zinc-400 font-medium">Contact commercial direct</div>
              <a href="tel:04010194" className="text-lg font-bold text-secondary hover:underline">
                04 01 01 94
              </a>
            </div>
          </div>
        </div>

        {/* Section: Pourquoi choisir ProEnergy ? */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3">
              Pourquoi choisir <span className="text-primary">ProEnergy</span> ?
            </h3>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              ProEnergy accompagne les professionnels dans leurs besoins en carburant en proposant des solutions d'approvisionnement adaptées à leur activité et à leurs volumes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  data-stagger
                  style={{ "--si": idx } as React.CSSProperties}
                  className="card-3d bg-white rounded-2xl p-7 border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-zinc-900 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed pl-1">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Engagement Card */}
          <div className="max-w-4xl mx-auto mt-10 bg-gradient-to-r from-zinc-900 to-zinc-800 text-white rounded-2xl p-8 shadow-xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-secondary mb-2 block">
                  Notre engagement
                </span>
                <p className="text-lg text-zinc-200 leading-relaxed max-w-xl">
                  « Vous avez un besoin en carburant ? Nous étudions avec vous la solution la plus adaptée à votre activité, à vos volumes et à vos contraintes d'approvisionnement. »
                </p>
              </div>
              <Button asChild className="btn-shine bg-secondary hover:bg-secondary/90 text-white font-bold rounded-xl px-6 py-6 shadow-lg flex-shrink-0">
                <a href="#contact">
                  Étudier mon besoin
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Section: Offres dédiées par secteur (Tabs interactifs) */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-3">
              Des solutions conçues pour vos <span className="gradient-text">activités</span>
            </h3>
            <p className="text-zinc-600">
              Sélectionnez votre secteur pour découvrir l'offre dédiée.
            </p>
          </div>

          {/* Tabs Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {b2bSectors.map((sec) => {
              const Icon = sec.icon
              const isActive = activeTab === sec.id
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveTab(sec.id)}
                  className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-white shadow-xl shadow-primary/25 scale-105"
                      : "bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{sec.title.split(":")[0]}</span>
                </button>
              )
            })}
          </div>

          {/* Active Tab Content Display */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-zinc-100 relative overflow-hidden transition-all">
            
            {/* Header of tab */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-zinc-100 mb-8">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold mb-2">
                  {currentSector.badge}
                </span>
                <h4 className="text-2xl md:text-3xl font-bold text-zinc-900">
                  {currentSector.title}
                </h4>
                <p className="text-zinc-600 mt-1 max-w-2xl">
                  {currentSector.subtitle}
                </p>
              </div>
              <Button asChild className="btn-shine bg-primary hover:bg-primary/90 text-white rounded-xl flex-shrink-0">
                <a href="#contact">{currentSector.ctaText}</a>
              </Button>
            </div>

            {/* TAB 1: Stations & Gros Consommateurs */}
            {activeTab === "stations" && (
              <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100">
                  <h5 className="text-sm uppercase font-bold text-primary tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Pour qui ?
                  </h5>
                  <ul className="space-y-3">
                    {currentSector.forWho?.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-700 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                  <h5 className="text-sm uppercase font-bold text-primary tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Ce que nous proposons
                  </h5>
                  <ul className="space-y-3">
                    {currentSector.proposals?.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-800 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-2 bg-gradient-to-r from-zinc-900 to-zinc-800 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h6 className="font-bold text-base text-white">VOUS AVEZ UN VOLUME IMPORTANT ?</h6>
                    <p className="text-xs text-zinc-300 mt-1">
                      Contactez notre équipe commerciale pour étudier une proposition tarifaire personnalisée.
                    </p>
                  </div>
                  <a href="tel:04010194" className="text-xl font-extrabold text-secondary hover:underline flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-xl border border-white/10">
                    <PhoneCall className="w-4 h-4" /> 04 01 01 94
                  </a>
                </div>
              </div>
            )}

            {/* TAB 2: Entreprises BTP & Chantiers */}
            {activeTab === "btp" && (
              <div>
                {/* 4 Steps sur site */}
                <h5 className="text-sm uppercase font-bold text-zinc-400 tracking-wider mb-6">
                  Notre dispositif sur site en 4 phases :
                </h5>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                  {currentSector.steps?.map((st, i) => (
                    <div key={i} className="bg-zinc-50 rounded-2xl p-5 border border-zinc-100 relative group hover:border-primary/30 transition-all">
                      <div className="text-2xl font-black text-primary/40 mb-2 group-hover:text-primary transition-colors">
                        {st.num}
                      </div>
                      <h6 className="font-bold text-zinc-900 text-sm mb-1">{st.title}</h6>
                      <p className="text-xs text-zinc-600 leading-relaxed">{st.desc}</p>
                    </div>
                  ))}
                </div>

                {/* 4 Avantages BTP */}
                <h5 className="text-sm uppercase font-bold text-zinc-400 tracking-wider mb-6">
                  Vos bénéfices immédiats :
                </h5>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {currentSector.benefits?.map((bf, i) => (
                    <div key={i} className="bg-secondary/5 rounded-2xl p-5 border border-secondary/15">
                      <h6 className="font-bold text-zinc-900 text-sm mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        {bf.title}
                      </h6>
                      <p className="text-xs text-zinc-600 leading-relaxed">{bf.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Slogan highlight */}
                <div className="text-center bg-zinc-900 text-white py-4 px-6 rounded-2xl">
                  <p className="text-sm md:text-base font-bold text-secondary tracking-wide">
                    « {currentSector.highlight} »
                  </p>
                </div>
              </div>
            )}

            {/* TAB 3: Flottes, Transporteurs & Groupes électrogènes */}
            {activeTab === "flottes" && (
              <div className="grid sm:grid-cols-2 gap-6">
                {currentSector.targets?.map((tgt, i) => {
                  const Icon = tgt.icon
                  return (
                    <div key={i} className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100 hover:shadow-md transition-all flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="font-bold text-base text-zinc-900 mb-1">{tgt.name}</h5>
                        <p className="text-sm text-zinc-600 leading-relaxed">{tgt.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  )
}
