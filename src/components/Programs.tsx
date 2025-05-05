"use client"

import { motion } from "framer-motion"
import { Dumbbell, Heart, Users, Zap } from "lucide-react"

const programsData = [
  {
    icon: <Dumbbell className="w-10 h-10" />,
    title: "Strength Training",
    description:
      "Build muscle, increase strength, and boost your metabolism with our comprehensive strength training programs.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: <Heart className="w-10 h-10" />,
    title: "Cardio Fitness",
    description:
      "Improve your heart health, burn calories, and increase endurance with our high-energy cardio workouts.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Group Classes",
    description:
      "Join our motivating group sessions including HIIT, Zumba, Yoga, and Spinning led by expert instructors.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Personal Training",
    description: "Get customized workout plans and one-on-one guidance from our certified personal trainers.",
    color: "from-red-500 to-pink-500",
  },
]

const Programs = () => {
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
    <section id="programs" className="py-20 bg-black">
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
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Programs</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our range of specialized fitness programs designed to help you achieve your goals, whether you&apos;re
            looking to build muscle, lose weight, or improve overall fitness.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {programsData.map((program, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-zinc-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {program.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{program.title}</h3>
              <p className="text-gray-400 mb-6">{program.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Programs
