"use client"

import { motion } from "framer-motion"
import { Clock, MapPin, Award } from "lucide-react"
import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">FitZone</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="/about.webp"
              alt="FitZone Gym Interior"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-xl font-bold">10+ Years</p>
              <p className="text-gray-400">Of Excellence</p>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">Where Fitness Meets Passion</h3>
            <p className="text-gray-300">
              At FitZone Gym, we believe that fitness is not just about physical strength, but also mental resilience.
              Our state-of-the-art facility is designed to provide you with the best equipment, expert guidance, and a
              motivating environment to help you achieve your fitness goals.
            </p>
            <p className="text-gray-300">
              Whether you&apos;re a beginner or a fitness enthusiast, our certified trainers will create personalized workout
              plans tailored to your specific needs and goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <h4 className="font-bold">Working Hours</h4>
                  <p className="text-gray-400">Mon-Fri: 5am - 10pm</p>
                  <p className="text-gray-400">Sat-Sun: 7am - 8pm</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-gray-400">123 Fitness Street</p>
                  <p className="text-gray-400">Workout City, WC 12345</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-orange-500" />
                <span>Certified Trainers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-orange-500" />
                <span>Premium Equipment</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-orange-500" />
                <span>Nutrition Guidance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
