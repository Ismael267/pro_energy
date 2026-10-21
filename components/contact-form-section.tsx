"use client"

import { useState } from "react"
import { Mail, MapPin, Send, CheckCircle2, PhoneCall, Copy } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"

const actionPoints = [
  "Établir un contrat de couleur",
  "Obtenir une proposition tarifaire",
  "Sécuriser votre approvisionnement",
  "Installer une solution de stockage sur votre chantier ou votre site minier",
  "Réduire les déplacements de vos véhicules pour l'approvisionnement",
  "Disposer d'un fournisseur unique pour vos besoins en carburant",
]

const contactInfo = [
  {
    icon: PhoneCall,
    title: "Contact Commercial",
    lines: ["04 01 01 94", "+226 27 217 588 40"],
    sub: "Lundi au dimanche — Équipe commerciale dédiée",
    accent: "bg-secondary text-zinc-900",
    border: "border-secondary/30",
    highlight: true,
  },
  {
    icon: Mail,
    title: "Email & Devis",
    lines: ["proenergy.k@gmail.com"],
    sub: "Réponse et étude sous 24h",
    accent: "bg-primary text-white",
    border: "border-primary/20",
    highlight: false,
  },
  {
    icon: MapPin,
    title: "Siège & Réseau",
    lines: ["123 Avenue de la République", "Ouagadougou, Burkina Faso"],
    sub: "Réseau de 6 stations en exploitation",
    accent: "bg-primary text-white",
    border: "border-primary/20",
    highlight: false,
  },
]

const CONTACT_EMAIL = "proenergy.k@gmail.com"

const needTypes = [
  "Demande de proposition tarifaire (volumes)",
  "Contrat de couleur (habillage de station)",
  "Solution BTP, mine & citerne sur site",
  "Approvisionnement flotte & transporteurs",
  "Alimentation groupes électrogènes",
  "Approvisionnement station-service",
  "Autre demande",
]

const buildMailto = (needType: string) => {
  const subject = `Demande commerciale — ${needType}`
  const body = [
    "Bonjour l'équipe PRO ENERGY,",
    "",
    `Je vous contacte pour : ${needType}.`,
    "",
    "Nom & prénom : ",
    "Entreprise / organisation : ",
    "Téléphone : ",
    "Localisation : ",
    "Volumes estimés (litres / mois) : ",
    "",
    "Détails de mon besoin :",
    "",
    "",
    "Cordialement,",
  ].join("\n")
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function ContactFormSection() {
  const [needType, setNeedType] = useState(needTypes[0])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      toast.success("Adresse email copiée.")
    } catch {
      toast.error(`Copie impossible. Notre adresse : ${CONTACT_EMAIL}`)
    }
  }

  return (
      <section id="contact" className="relative overflow-hidden bg-white py-20 md:py-32">
        <div className="container mx-auto px-4 relative">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary/20 text-zinc-900 text-xs font-bold mb-3 border border-secondary/30">
              
              PASSEZ À L'ACTION
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 mb-3 leading-tight">
              Parlons de votre consommation et construisons <br className="hidden sm:inline" />
              <span className="gradient-text">votre solution d'approvisionnement</span>
            </h2>
            <p className="text-zinc-600 text-sm md:text-base max-w-xl mx-auto">
              Pour une proposition commerciale personnalisée, contactez directement notre équipe commerciale ou écrivez-nous par email.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8">
            
            {/* Left Col */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              
              {/* Checklist box */}
              <div className="bg-zinc-900 text-white rounded-3xl p-6 shadow-md border border-white/10">
                <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  Vous souhaitez :
                </h3>
                <ul className="space-y-2.5 mb-5">
                  {actionPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-white/10">
                  <p className="text-xs font-semibold text-secondary uppercase tracking-wider">
                    PROENERGY
                  </p>
                  <p className="text-xs font-bold text-white mt-0.5">
                    Votre carburant. Notre engagement. Votre performance.
                  </p>
                </div>
              </div>

              {/* Contact Cards */}
              {contactInfo.map((info, i) => {
                const Icon = info.icon
                return (
                  <div
                    key={i}
                    className={`card-surface rounded-2xl p-5 ${info.border} ${
                      info.highlight ? "ring-2 ring-secondary/40 bg-secondary/5" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className={`w-10 h-10 rounded-xl ${info.accent} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase font-bold text-zinc-400 tracking-wider mb-0.5">
                          {info.title}
                        </div>
                        {info.lines.map((line, li) => (
                          <div key={li} className="text-sm md:text-base font-bold text-zinc-900 leading-tight">
                            {line}
                          </div>
                        ))}
                        <p className="text-xs text-zinc-500 mt-0.5">{info.sub}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right Col: Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl shadow-lg border border-zinc-200/80 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="h-1.5 bg-gradient-to-r from-primary via-primary/70 to-secondary" />

                <div className="p-6 md:p-8">
                  <h3 className="text-lg font-bold text-zinc-900">Écrivez-nous par email</h3>
                  <p className="mt-1 text-sm text-zinc-600">
                    Choisissez votre besoin : votre messagerie s&apos;ouvre avec un message prêt à compléter.
                  </p>

                  <fieldset className="mt-6">
                    <legend className="mb-2 text-xs font-semibold text-zinc-800">Type de besoin</legend>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {needTypes.map((type) => {
                        const selected = type === needType
                        return (
                          <label
                            key={type}
                            className={`pressable flex cursor-pointer items-center gap-2.5 rounded-xl border px-3.5 py-3 text-sm font-medium ${
                              selected
                                ? "border-primary bg-primary/5 text-zinc-900"
                                : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-300"
                            }`}
                          >
                            <input
                              type="radio"
                              name="needType"
                              value={type}
                              checked={selected}
                              onChange={() => setNeedType(type)}
                              className="h-4 w-4 accent-[var(--primary)]"
                            />
                            {type}
                          </label>
                        )
                      })}
                    </div>
                  </fieldset>

                  <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-xs leading-relaxed text-zinc-600">
                    <p className="font-semibold text-zinc-800">Le message contiendra :</p>
                    <p className="mt-1">
                      Objet « Demande commerciale — {needType} », puis vos coordonnées, votre localisation, vos volumes
                      estimés et le détail de votre besoin à compléter.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button asChild className="pressable flex-1 rounded-xl bg-primary py-5 text-sm font-bold text-white shadow-md shadow-primary/20 md:text-base">
                      <a href={buildMailto(needType)}>
                        <Send className="w-4 h-4" />
                        Écrire à l&apos;équipe commerciale
                      </a>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={copyEmail}
                      className="rounded-xl py-5 text-sm font-semibold"
                    >
                      <Copy className="w-4 h-4" />
                      Copier l&apos;adresse
                    </Button>
                  </div>
                  <p className="mt-3 text-center text-xs text-zinc-500">
                    Pas de messagerie configurée ? Écrivez à{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-primary underline-offset-2 hover:underline">
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-zinc-50 px-6 py-3 border-t border-zinc-100 text-[11px] text-zinc-500 text-center">
                Les tarifs peuvent évoluer selon le besoin du client. Une proposition tarifaire personnalisée sera établie.
              </div>
            </div>

          </div>
        </div>
      </section>
  )
}
