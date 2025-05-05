"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm py-2 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              FitZone
            </span>
            <span className="ml-1 text-2xl font-bold">Gym</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-white hover:text-red-500 transition-colors">
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-red-500 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("programs")}
              className="text-white hover:text-red-500 transition-colors"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("trainers")}
              className="text-white hover:text-red-500 transition-colors"
            >
              Trainers
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-white hover:text-red-500 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-white hover:text-red-500 transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-red-500 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-red-500/20 transition-all"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 backdrop-blur-sm absolute top-full left-0 w-full py-4 shadow-lg"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white py-2 hover:text-red-500 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white py-2 hover:text-red-500 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("programs")}
              className="text-white py-2 hover:text-red-500 transition-colors"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("trainers")}
              className="text-white py-2 hover:text-red-500 transition-colors"
            >
              Trainers
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-white py-2 hover:text-red-500 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-white py-2 hover:text-red-500 transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white py-2 hover:text-red-500 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-red-500/20 transition-all"
            >
              Join Now
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
