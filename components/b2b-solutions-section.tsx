"use client"

import { Fuel, ShieldCheck, Truck, Users, TrendingUp, Handshake, HardHat, Building2, Zap, ArrowRight, CheckCircle2, PhoneCall } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const whyChooseUs = [
  {
    icon: Fuel,
    title: "APPROVISIONNEMENT",
    description: "Une organisation adaptée à vos besoins et à vos volumes réels.",
    iconBg: "bg-primary text-white",
  },
  {
    icon: TrendingUp,
    title: "CONDITIONS COMPÉTITIVES",
    description: "Des conditions commerciales étudiées selon les volumes et les caractéristiques de votre activité.",
    iconBg: "bg-secondary text-zinc-900",
  },
  {
    icon: Truck,
    title: "SOLUTION LOGISTIQUE",
    description: "Une organisation rigoureuse des approvisionnements en fonction de vos contraintes de terrain.",
    iconBg: "bg-primary text-white",
  },
  {
    icon: Users,
    title: "ACCOMPAGNEMENT",
    description: "Un interlocuteur commercial dédié pour le suivi personnalisé de vos besoins et commandes.",
    iconBg: "bg-secondary text-zinc-900",
  },
  {
    icon: ShieldCheck,
    title: "SUIVI & CONTRÔLE",
    description: "Un accompagnement transparent permettant de mieux maîtriser et suivre les volumes consommés.",
    iconBg: "bg-primary text-white",
  },
  {
    icon: Handshake,
    title: "PARTENARIAT DURABLE",
    description: "Une relation de confiance fondée sur la proximité, la fiabilité et la disponibilité constante.",
    iconBg: "bg-secondary text-zinc-900",
  },
]

const b2bSectors = [
  {
    id: "stations",
    icon: Fuel,
    badge: "Grands Volumes",
    title: "Stations & Gros Consommateurs",
    subtitle: "Une offre conçue pour les professionnels qui recherchent un fournisseur capable de les accompagner sur leurs volumes.",
    forWho: [
      "Stations-service et points de distribution indépendants",
      "Gros acheteurs professionnels et industriels",
      "Revendeurs autorisés",
      "Entreprises ayant des besoins réguliers en carburant",
    ],
    proposals: [
      "Étude de vos volumes de consommation",
      "Proposition commerciale adaptée à votre besoin",
      "Conditions tarifaires compétitives selon les volumes",
      "Organisation des approvisionnements",
      "Suivi des commandes",
      "Accompagnement commercial personnalisé",
    ],
    ctaText: "Demander une proposition tarifaire",
  },
  {
    id: "btp",
    icon: HardHat,
    badge: "Solution Sur Site",
    title: "Entreprises BTP : Le carburant sur chantier",
    subtitle: "Pour les entreprises de BTP et les grands chantiers, ProEnergy étudie une solution d'approvisionnement directement sur site.",
    steps: [
      { num: "01", title: "CITERNE", desc: "Mise en place d'une citerne de stockage adaptée au besoin du site." },
      { num: "02", title: "POMPE", desc: "Mise à disposition d'une solution de distribution sur site, selon le projet." },
      { num: "03", title: "APPROVISIONNEMENT", desc: "Organisation des livraisons de carburant selon les besoins du chantier." },
      { num: "04", title: "SUIVI", desc: "Accompagnement pour le suivi des volumes livrés et consommés." },
    ],
    benefits: [
      { title: "Gain de temps", desc: "Moins de déplacements vers les stations." },
      { title: "Disponibilité", desc: "Le carburant au plus près de vos opérations." },
      { title: "Contrôle", desc: "Meilleur suivi des volumes livrés et consommés." },
      { title: "Fournisseur unique", desc: "Centralisation de vos besoins auprès d'un même partenaire." },
    ],
    highlight: "Votre chantier. Votre carburant. Votre solution ProEnergy.",
    ctaText: "Installer une solution sur chantier",
  },
  {
    id: "flottes",
    icon: Truck,
    badge: "Mobilité & Flottes",
    title: "Entreprises, transporteurs & flottes professionnelles",
    subtitle: "Véhicules de service, camions, engins de chantier ou groupes électrogènes : une solution adaptée à votre consommation.",
    targets: [
      {
        icon: Truck,
        name: "Transporteurs",
        desc: "Approvisionnement régulier pour les besoins des véhicules et de la flotte.",
      },
      {
        icon: Building2,
        name: "Entreprises",
        desc: "Solution adaptée aux véhicules de service et aux besoins énergétiques.",
      },
      {
        icon: HardHat,
        name: "Engins & chantiers",
        desc: "Approvisionnement au plus près des opérations lorsque le projet le permet.",
      },
      {
        icon: Zap,
        name: "Groupes électrogènes",
        desc: "Solution d'approvisionnement adaptée aux consommations régulières.",
      },
    ],
    ctaText: "Étudier ma consommation de flotte",
  },
]

export function B2bSolutionsSection() {
  const [activeTab, setActiveTab] = useState<string>("stations")
  const currentSector = b2bSectors.find((s) => s.id === activeTab) || b2bSectors[0]

  return (
    <section id="solutions-pro" className="py-20 md:py-32 bg-zinc-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        
        {/* Main Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Solutions Professionnelles & B2B
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 mb-4 leading-tight">
            Votre partenaire pour un <br className="hidden sm:inline" />
            <span className="gradient-text">approvisionnement fiable</span> en carburant
          </h2>
          <p className="text-lg md:text-xl text-zinc-700 font-semibold mb-2">
            DU CARBURANT À LA SOLUTION COMPLÈTE D'APPROVISIONNEMENT.
          </p>
          <p className="text-sm text-zinc-500 max-w-2xl mx-auto mb-6">
            Stations • Entreprises • BTP • Transporteurs • Flottes professionnelles
          </p>

          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-md border border-zinc-200">
            <div className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center text-zinc-900">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs text-zinc-500 font-medium">Contact commercial direct</div>
              <a href="tel:04010194" className="text-lg font-bold text-primary hover:underline">
                04 01 01 94
              </a>
            </div>
          </div>
        </div>

        {/* Pourquoi choisir ProEnergy ? */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">
              Pourquoi choisir <span className="text-primary">ProEnergy</span> ?
            </h3>
            <p className="text-zinc-600 max-w-2xl mx-auto text-sm md:text-base">
              ProEnergy accompagne les professionnels dans leurs besoins en carburant en proposant des solutions d'approvisionnement adaptées à leur activité et à leurs volumes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-zinc-200/80 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Notre engagement */}
          <div className="max-w-4xl mx-auto mt-8 bg-zinc-900 text-white rounded-2xl p-7 shadow-lg border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-secondary mb-1 block">
                Notre engagement
              </span>
              <p className="text-sm md:text-base text-zinc-200 leading-relaxed max-w-xl">
                « Vous avez un besoin en carburant ? Nous étudions avec vous la solution la plus adaptée à votre activité, à vos volumes et à vos contraintes d'approvisionnement. »
              </p>
            </div>
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-zinc-900 font-bold rounded-xl px-6 py-5 shadow flex-shrink-0">
              <Link href="/contact">
                Étudier mon besoin
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Offres par secteur */}
        <div className="max-w-6xl mx-auto" id="offres">
          <div className="flex flex-wrap justify-center gap-2.5 mb-8">
            {b2bSectors.map((sec) => {
              const Icon = sec.icon
              const isActive = activeTab === sec.id
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveTab(sec.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all ${
                    isActive
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{sec.title.split(":")[0]}</span>
                </button>
              )
            })}
          </div>

          <div className="bg-white rounded-3xl p-7 md:p-10 shadow-lg border border-zinc-200/80">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-100 mb-6">
              <div>
                <span className="inline-block px-3 py-0.5 rounded-full bg-secondary/20 text-zinc-900 text-xs font-bold mb-1.5">
                  {currentSector.badge}
                </span>
                <h4 className="text-xl md:text-2xl font-bold text-zinc-900">
                  {currentSector.title}
                </h4>
                <p className="text-zinc-600 text-sm mt-1 max-w-2xl">
                  {currentSector.subtitle}
                </p>
              </div>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-xl flex-shrink-0">
                <Link href="/contact">{currentSector.ctaText}</Link>
              </Button>
            </div>

            {/* TAB 1 */}
            {activeTab === "stations" && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-zinc-50 rounded-2xl p-5 border border-zinc-100">
                  <h5 className="text-xs uppercase font-bold text-primary tracking-wider mb-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    POUR QUI ?
                  </h5>
                  <ul className="space-y-2.5">
                    {currentSector.forWho?.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-zinc-700 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10">
                  <h5 className="text-xs uppercase font-bold text-primary tracking-wider mb-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    CE QUE NOUS PROPOSONS
                  </h5>
                  <ul className="space-y-2.5">
                    {currentSector.proposals?.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-zinc-800 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-2 bg-zinc-900 text-white p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h6 className="font-bold text-sm text-white">VOUS AVEZ UN VOLUME IMPORTANT ?</h6>
                    <p className="text-xs text-zinc-300 mt-0.5">
                      Contactez notre équipe commerciale pour étudier une proposition tarifaire adaptée à votre activité.
                    </p>
                  </div>
                  <a href="tel:04010194" className="text-lg font-extrabold text-secondary hover:underline flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl border border-white/10">
                    <PhoneCall className="w-4 h-4" /> 04 01 01 94
                  </a>
                </div>
              </div>
            )}

            {/* TAB 2 */}
            {activeTab === "btp" && (
              <div>
                <h5 className="text-xs uppercase font-bold text-zinc-400 tracking-wider mb-4">
                  Dispositif sur site :
                </h5>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
                  {currentSector.steps?.map((st, i) => (
                    <div key={i} className="bg-zinc-50 rounded-xl p-4 border border-zinc-100">
                      <div className="text-xl font-black text-primary mb-1">{st.num}</div>
                      <h6 className="font-bold text-zinc-900 text-xs mb-1">{st.title}</h6>
                      <p className="text-xs text-zinc-600 leading-relaxed">{st.desc}</p>
                    </div>
                  ))}
                </div>

                <h5 className="text-xs uppercase font-bold text-zinc-400 tracking-wider mb-4">
                  Bénéfices client :
                </h5>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6">
                  {currentSector.benefits?.map((bf, i) => (
                    <div key={i} className="bg-secondary/10 rounded-xl p-4 border border-secondary/20">
                      <h6 className="font-bold text-zinc-900 text-xs mb-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                        {bf.title}
                      </h6>
                      <p className="text-xs text-zinc-600 leading-relaxed">{bf.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center bg-zinc-900 text-white py-3 px-5 rounded-xl text-xs md:text-sm font-bold text-secondary">
                  « {currentSector.highlight} »
                </div>
              </div>
            )}

            {/* TAB 3 */}
            {activeTab === "flottes" && (
              <div className="grid sm:grid-cols-2 gap-5">
                {currentSector.targets?.map((tgt, i) => {
                  const Icon = tgt.icon
                  return (
                    <div key={i} className="bg-zinc-50 rounded-2xl p-5 border border-zinc-100 flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-bold text-sm text-zinc-900 mb-0.5">{tgt.name}</h5>
                        <p className="text-xs text-zinc-600 leading-relaxed">{tgt.desc}</p>
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
