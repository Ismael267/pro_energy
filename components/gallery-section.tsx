"use client"

import Image from "next/image"
import { useState } from "react"

const galleryImages = [
  { src: "/pro-energy-station-full.png", alt: "Vue extérieure station PRO energy" },
  { src: "/pro-energy-cafe-shop.png", alt: "Cafe Shop PRO energy" },
  { src: "/pro-energy-price-sign.png", alt: "Panneau de prix" },
  { src: "/pro-energy-3d-mockup.png", alt: "Maquette 3D de la station" },
  { src: "/station-service-moderne-pompes.jpg", alt: "Pompes à essence" },
  { src: "/lavage-auto-professionnel.jpg", alt: "Service lavage auto" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4 text-balance">Galerie</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Découvrez nos installations modernes et nos services de qualité en images.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium text-center px-4">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full h-[80vh]">
              <Image
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
