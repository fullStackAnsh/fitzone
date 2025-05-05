"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Twitter } from "lucide-react"
import Image from "next/image"

// Update the trainersData array with Unsplash images
const trainersData = [
  {
    name: "Alex Johnson",
    role: "Strength & Conditioning",
    bio: "Former athlete with 10+ years of experience in strength training and sports performance.",
    image: "/trainer1.webp",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
  },
  {
    name: "Sarah Williams",
    role: "Yoga & Pilates",
    bio: "Certified yoga instructor specializing in mind-body connection and flexibility training.",
    image: "/trainer2.webp",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
  },
  {
    name: "Mike Rodriguez",
    role: "Nutrition & HIIT",
    bio: "Nutrition expert and high-intensity training specialist focused on weight management.",
    image: "/trainer3.webp",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
  },
]

const Trainers = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="trainers" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Expert{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Trainers</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our certified fitness professionals are dedicated to helping you achieve your goals with personalized
            guidance and motivation.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {trainersData.map((trainer, index) => (
            <motion.div key={index} variants={item} className="bg-black rounded-xl overflow-hidden shadow-lg group">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>

                {/* Social Icons */}
                <div className="absolute bottom-0 left-0 w-full p-4 flex justify-center space-x-4 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                  <a
                    href={trainer.social.instagram}
                    className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-red-500 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={trainer.social.facebook}
                    className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-red-500 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={trainer.social.twitter}
                    className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-red-500 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
                <p className="text-red-500 font-medium mb-3">{trainer.role}</p>
                <p className="text-gray-400">{trainer.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Trainers
