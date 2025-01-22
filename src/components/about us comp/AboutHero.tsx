'use client'
import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-yellow-400 py-20">
      <div className="container mx-auto text-center">
        <motion.h1 
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About cookmypapers 📚✨
        </motion.h1>
        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Empowering students and tech workers with affordable, high-quality academic assistance
        </motion.p>
      </div>
    </section>
  )
}

