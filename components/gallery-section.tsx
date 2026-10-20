"use client"

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { SectionHeading } from "@/components/section-heading"

const galleryImages = [
  { src: "/pro-energy-station-full.png", alt: "Vue extérieure station PRO ENERGY" },
  { src: "/pro-energy-cafe-shop.png", alt: "Café Shop PRO ENERGY" },
  { src: "/pro-energy-price-sign.png", alt: "Panneau de prix" },
  { src: "/pro-energy-3d-mockup.png", alt: "Maquette 3D de la station" },
  { src: "/station-service-moderne-pompes.jpg", alt: "Pompes à essence" },
  { src: "/lavage-auto-professionnel.jpg", alt: "Service lavage auto" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="bg-[#eef4fc] py-20 md:py-32">
      <div className="container mx-auto px-4">
        <SectionHeading
          className="mb-14"
          eyebrow="Installations"
          title="Galerie"
          description="Nos stations, nos services, notre exigence — en images."
        />

        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className="pressable group relative h-64 overflow-hidden rounded-xl bg-zinc-200 text-left shadow-sm"
              onClick={() => setSelectedImage(index)}
            >
              <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-300 ease-[var(--ease-out)] group-hover:scale-[1.03]" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm font-medium text-white">
                {image.alt}
              </span>
            </button>
          ))}
        </div>

        <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent
            showCloseButton
            className="max-h-[90vh] w-full max-w-5xl overflow-hidden border-0 bg-zinc-950 p-0 text-white sm:max-w-5xl"
          >
            <DialogTitle className="sr-only">
              {selectedImage !== null ? galleryImages[selectedImage].alt : "Image"}
            </DialogTitle>
            {selectedImage !== null ? (
              <div className="relative h-[80vh] w-full">
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  fill
                  className="object-contain"
                />
              </div>
            ) : null}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
