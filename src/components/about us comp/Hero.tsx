"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div ref={ref} className="h-screen flex items-center justify-center text-center overflow-hidden relative">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/placeholder.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <motion.div
        className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Innovating the Future
        </h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          We&apos;re on a mission to transform industries and empower businesses through cutting-edge technology and
          unparalleled expertise.
        </motion.p>
        <Button size="lg" variant="outline">
          Discover Our Story
        </Button>
      </motion.div>
    </div>
  )
}

