"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { GiButtonFinger } from "react-icons/gi"


const slides = [
  {
    title: "Innovative Solutions",
    description: "Pushing the boundaries of what's possible in technology.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Global Reach",
    description: "Serving clients across 6 continents and 50+ countries.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Sustainable Future",
    description: "Committed to eco-friendly practices and green technology.",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[600px] overflow-hidden">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          variants={{
            enter: (direction) => ({
              x: direction > 0 ? 1000 : -1000,
              opacity: 0,
            }),
            center: {
              zIndex: 1,
              x: 0,
              opacity: 1,
            },
            exit: (direction) => ({
              zIndex: 0,
              x: direction < 0 ? 1000 : -1000,
              opacity: 0,
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full h-full"
        >
          <img
            src={slides[currentIndex].image || "/placeholder.svg"}
            alt={slides[currentIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">{slides[currentIndex].title}</h2>
              <p className="text-xl">{slides[currentIndex].description}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <GiButtonFinger
     
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </GiButtonFinger>
      <GiButtonFinger
      
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </GiButtonFinger>
    </div>
  )
}

