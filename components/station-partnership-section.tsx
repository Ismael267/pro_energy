import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const proposals = [
  "Visibilité ProEnergy",
  "Approvisionnement régulier en carburant",
  "Partenariat commercial durable",
]

const brandingOffer = [
  "Peinture de la station aux couleurs ProEnergy",
  "Mât publicitaire ProEnergy",
  "Enseigne lumineuse du logo ProEnergy sur l'auvent",
  "Enseigne de la boutique lorsqu'elle existe",
  "Tenues pour les pompistes",
  "Tenues pour les hôtesses boutique lorsqu'une boutique existe",
]

export function StationPartnershipSection() {
  return (
    <section id="partenariat-stations" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          className="mb-14"
          eyebrow="Stations partenaires"
          title="Passez aux couleurs ProEnergy"
          description="Une offre conçue pour les stations qui souhaitent bénéficier du visuel ProEnergy et d'un accompagnement commercial."
        />

        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-4">
            <figure className="overflow-hidden rounded-xl bg-zinc-100 shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/station-pro-energy-reelle.jpg"
                  alt="Station habillée aux couleurs ProEnergy : auvent, pompes et boutique"
                  fill
                  sizes="(min-width: 1024px) 36rem, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="border-t border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-700">
                Une identité ProEnergy visible sur le terrain.
              </figcaption>
            </figure>

            <div className="grid grid-cols-2 gap-4">
              <figure className="overflow-hidden rounded-xl bg-zinc-100 shadow-sm">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/pompiste-tenue-proenergy.jpg"
                    alt="Pompiste en tenue ProEnergy devant une pompe de la station"
                    fill
                    sizes="(min-width: 1024px) 18rem, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="border-t border-zinc-200 bg-white px-4 py-2.5 text-xs font-medium text-zinc-700">
                  Tenue pompiste
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-xl bg-zinc-100 shadow-sm">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/station-barma-rendu.jpg"
                    alt="Rendu de la station Barma habillée ProEnergy : mât, enseigne d'auvent et boutique ProShop"
                    fill
                    sizes="(min-width: 1024px) 18rem, 50vw"
                    className="object-cover object-[30%_center]"
                  />
                </div>
                <figcaption className="border-t border-zinc-200 bg-white px-4 py-2.5 text-xs font-medium text-zinc-700">
                  Mât, enseigne et boutique — Barma
                </figcaption>
              </figure>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.14em] text-primary uppercase">Ce que nous proposons</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {proposals.map((item) => (
                <li key={item} className="rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-900">
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-xs font-bold tracking-[0.14em] text-primary uppercase">
              Offre de partenariat &amp; d&apos;habillage
            </h3>
            <p className="mt-2 text-sm text-zinc-600">Cette offre comprend :</p>
            <ul className="mt-4 space-y-3">
              {brandingOffer.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="pressable mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white"
            >
              Établir un contrat de couleur
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
