"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

// Update the galleryImages array with Unsplash images
const galleryImages = [
  {
    src: "/gallery1.webp",
    alt: "Weight training area",
  },
  {
    src: "/gallery2.webp",
    alt: "Cardio equipment",
  },
  {
    src: "/gallery3.webp",
    alt: "Group fitness class",
  },
  {
    src: "/gallery4.webp",
    alt: "Yoga studio",
  },
  {
    src: "/gallery5.webp",
    alt: "Functional training area",
  },
  {
    src: "/gallery6.webp",
    alt: "Locker rooms",
  },
  {
    src: "/gallery7.webp",
    alt: "Protein bar",
  },
  {
    src: "/gallery8.webp",
    alt: "Personal training session",
  },
  {
    src: "/trainer1.webp",
    alt: "Swimming pool",
  },
]

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Take a virtual tour of our state-of-the-art facilities and equipment designed to help you achieve your
            fitness goals.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium">View</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)} // Add click outside to close
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white bg-red-500 hover:bg-red-600 p-2 rounded-full transition-colors"
              aria-label="Close lightbox"
            >
              <X size={24} />
              <span className="sr-only">Close</span>
            </button>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              {selectedImage !== null && (
                <Image
                  src={galleryImages[selectedImage].src || "/placeholder.svg"}
                  alt={galleryImages[selectedImage].alt}
                  fill
                  className="object-contain"
                />
              )}
            </div>
            <p className="text-center mt-4 text-white">Click anywhere outside the image to close</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
