"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Jennifer K.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop",
    rating: 5,
    text: "FitZone completely transformed my fitness journey. The trainers are knowledgeable and supportive, and the community is so motivating. I've lost 30 pounds and gained so much confidence!",
  },
  {
    name: "David M.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop",
    rating: 5,
    text: "As someone who was intimidated by gyms, FitZone made me feel welcome from day one. The facilities are top-notch, and the personal training sessions have helped me achieve goals I never thought possible.",
  },
  {
    name: "Sophia R.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop",
    rating: 4,
    text: "The group classes at FitZone are incredible! High energy, great instructors, and a fun atmosphere. I've made friends and gotten in the best shape of my life. Highly recommend their HIIT classes!",
  },
]

const Testimonials = () => {
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
    <section id="testimonials" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our members have to say about their experience at FitZone Gym.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={item} className="bg-black rounded-xl p-6 shadow-lg relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-red-500">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="pt-12 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-400"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold">{testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
