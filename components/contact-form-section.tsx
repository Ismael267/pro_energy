"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle2, PhoneCall, Building, Sparkles } from "lucide-react"
import { useFormspark } from "@formspark/use-formspark"
import { Toaster, toast } from "sonner"

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
    accent: "bg-secondary",
    border: "border-secondary/30",
    highlight: true,
  },
  {
    icon: Mail,
    title: "Email & Devis",
    lines: ["proenergy.k@gmail.com"],
    sub: "Réponse et étude sous 24h",
    accent: "bg-primary",
    border: "border-primary/20",
    highlight: false,
  },
  {
    icon: MapPin,
    title: "Siège & Réseau",
    lines: ["123 Avenue de la République", "Ouagadougou, Burkina Faso"],
    sub: "Réseau de 5 stations en exploitation",
    accent: "bg-primary",
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

  const [submit, submitting] = useFormspark({
    formId: process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID ?? "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await submit(formData)
      toast.success("Message envoyé avec succès ! Notre équipe commerciale vous contactera rapidement.")
      setFormData({ name: "", company: "", email: "", phone: "", needType: "Proposition tarifaire", message: "" })
    } catch {
      toast.error("Une erreur est survenue. Veuillez nous appeler au 04 01 01 94.")
    }
  }

  return (
    <>
      <Toaster position="bottom-right" />
      <section id="contact" className="py-24 md:py-36 bg-gradient-to-b from-zinc-50 via-white to-zinc-50 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/6 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 text-secondary text-sm font-bold mb-4 border border-secondary/30">
              <Sparkles className="w-4 h-4 text-secondary" />
              Passez à l'Action
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 mb-4 leading-tight">
              Parlons de votre consommation et construisons <br className="hidden sm:inline" />
              <span className="gradient-text">votre solution d'approvisionnement</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-5" />
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Pour une proposition commerciale personnalisée, contactez directement notre équipe commerciale ou remplissez le formulaire ci-dessous.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10">
            
            {/* Left Col: Contact info & Checklist */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Checklist box */}
              <div className="bg-zinc-900 text-white rounded-3xl p-7 shadow-xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl pointer-events-none" />
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  Vous souhaitez :
                </h3>
                <ul className="space-y-3 mb-6">
                  {actionPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs font-semibold text-secondary uppercase tracking-wider">
                    PROENERGY
                  </p>
                  <p className="text-sm font-bold text-white mt-0.5">
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
                    className={`card-3d bg-white rounded-2xl p-6 border ${info.border} shadow-sm hover:shadow-xl transition-all duration-300 ${
                      info.highlight ? "ring-2 ring-secondary/40" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl ${info.accent} text-white flex items-center justify-center flex-shrink-0 shadow-md`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs uppercase font-bold text-zinc-400 tracking-wider mb-0.5">
                          {info.title}
                        </div>
                        {info.lines.map((line, li) => (
                          <div key={li} className="text-base font-bold text-zinc-900 leading-tight">
                            {line}
                          </div>
                        ))}
                        <p className="text-xs text-zinc-500 mt-1">{info.sub}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right Col: Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl shadow-xl border border-zinc-100 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="h-2 bg-gradient-to-r from-primary via-primary/70 to-secondary" />

                <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      label="Nom & Prénom"
                      id="name"
                      value={formData.name}
                      onChange={(v) => setFormData({ ...formData, name: v })}
                      placeholder="M. / Mme Nom"
                      required
                    />
                    <FormField
                      label="Entreprise / Organisation"
                      id="company"
                      value={formData.company}
                      onChange={(v) => setFormData({ ...formData, company: v })}
                      placeholder="Nom de votre société"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      label="Email professionnel"
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(v) => setFormData({ ...formData, email: v })}
                      placeholder="contact@entreprise.com"
                      required
                    />
                    <FormField
                      label="Téléphone"
                      id="phone"
                      value={formData.phone}
                      onChange={(v) => setFormData({ ...formData, phone: v })}
                      placeholder="04 XX XX XX / +226..."
                      required
                    />
                  </div>

                  {/* Need selection */}
                  <div>
                    <label className="block text-sm font-semibold text-zinc-800 mb-2">
                      Type de besoin
                    </label>
                    <select
                      value={formData.needType}
                      onChange={(e) => setFormData({ ...formData, needType: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 focus:border-primary focus:ring-primary/20 rounded-xl h-11 px-4 text-sm text-zinc-800 transition-colors"
                    >
                      <option value="Proposition tarifaire">Demande de proposition tarifaire (Volumes)</option>
                      <option value="Solution BTP sur chantier">Solution BTP & Citerne sur chantier</option>
                      <option value="Flotte & Transporteurs">Approvisionnement Flotte & Transporteurs</option>
                      <option value="Groupes électrogènes">Alimentation Groupes Électrogènes</option>
                      <option value="Station-service revendeur">Approvisionnement Station-Service</option>
                      <option value="Autre demande">Autre demande</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-zinc-800 mb-2">
                      Détails de votre besoin ou volumes estimés <span className="text-primary">*</span>
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-zinc-50 border-zinc-200 focus:border-primary focus:ring-primary/20 min-h-32 resize-none transition-colors rounded-xl text-sm"
                      placeholder="Indiquez vos volumes réguliers, votre localisation, et vos contraintes..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full btn-shine bg-gradient-to-r from-primary to-primary/85 hover:from-primary/90 hover:to-primary text-white rounded-xl py-6 text-base font-bold shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Envoi de votre demande...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Envoyer ma demande commerciale
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Bottom notice */}
              <div className="bg-zinc-50 px-8 py-4 border-t border-zinc-100 text-xs text-zinc-500 text-center">
                Les tarifs peuvent évoluer. Une proposition tarifaire personnalisée sera établie selon le besoin spécifique du client.
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

function FormField({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string
  id: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-zinc-800 mb-2">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <Input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-zinc-50 border-zinc-200 focus:border-primary focus:ring-primary/20 rounded-xl h-11 transition-colors text-sm"
        placeholder={placeholder}
      />
    </div>
  )
}
