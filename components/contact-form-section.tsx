"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle2, PhoneCall, Sparkles } from "lucide-react"
import { toast, Toaster } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const actionPoints = [
  "Obtenir une proposition tarifaire personnalisée",
  "Sécuriser votre approvisionnement régulier",
  "Installer une solution de stockage / citerne sur votre chantier",
  "Réduire les déplacements de vos engins",
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
    sub: "Réseau de 5 stations en exploitation",
    accent: "bg-primary text-white",
    border: "border-primary/20",
    highlight: false,
  },
]

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    needType: "Proposition tarifaire",
    message: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate reliable submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 800))
      setSubmitted(true)
      toast.success("Demande reçue avec succès ! Notre équipe commerciale vous contactera rapidement.")
      setFormData({ name: "", company: "", email: "", phone: "", needType: "Proposition tarifaire", message: "" })
    } catch {
      toast.error("Erreur d'envoi. Veuillez nous contacter directement au 04 01 01 94.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Toaster position="bottom-right" />
      <section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden">
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
              Pour une proposition commerciale personnalisée, contactez directement notre équipe commerciale ou remplissez le formulaire.
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
                    className={`bg-zinc-50 rounded-2xl p-5 border ${info.border} shadow-sm transition-all ${
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

                <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-zinc-800 mb-1.5">
                        Nom & Prénom <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-zinc-50 border-zinc-200 rounded-xl h-10 text-sm"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-zinc-800 mb-1.5">
                        Entreprise / Organisation
                      </label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-zinc-50 border-zinc-200 rounded-xl h-10 text-sm"
                        placeholder="Société / Projet"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-zinc-800 mb-1.5">
                        Email professionnel <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-zinc-50 border-zinc-200 rounded-xl h-10 text-sm"
                        placeholder="email@domaine.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-zinc-800 mb-1.5">
                        Téléphone <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-zinc-50 border-zinc-200 rounded-xl h-10 text-sm"
                        placeholder="04 XX XX XX / +226..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-800 mb-1.5">
                      Type de besoin
                    </label>
                    <select
                      value={formData.needType}
                      onChange={(e) => setFormData({ ...formData, needType: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl h-10 px-3 text-xs md:text-sm text-zinc-800"
                    >
                      <option value="Proposition tarifaire">Demande de proposition tarifaire (Volumes)</option>
                      <option value="Solution BTP sur chantier">Solution BTP & Citerne sur chantier</option>
                      <option value="Flotte & Transporteurs">Approvisionnement Flotte & Transporteurs</option>
                      <option value="Groupes électrogènes">Alimentation Groupes Électrogènes</option>
                      <option value="Station-service revendeur">Approvisionnement Station-Service</option>
                      <option value="Autre">Autre demande</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-zinc-800 mb-1.5">
                      Détails de votre besoin ou volumes estimés <span className="text-primary">*</span>
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-zinc-50 border-zinc-200 min-h-28 resize-none rounded-xl text-sm"
                      placeholder="Précisez votre activité, vos volumes réguliers, votre localisation..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-5 text-sm md:text-base font-bold shadow-md shadow-primary/20 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Envoyer ma demande commerciale
                      </>
                    )}
                  </Button>
                </form>
              </div>

              <div className="bg-zinc-50 px-6 py-3 border-t border-zinc-100 text-[11px] text-zinc-500 text-center">
                Les tarifs peuvent évoluer selon le besoin du client. Une proposition tarifaire personnalisée sera établie.
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
