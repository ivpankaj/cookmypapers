'use client'
import { motion } from 'framer-motion'

export default function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Story 📖
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <p className="mb-4">
              cookmypapers was born out of a simple idea: to provide affordable, high-quality academic assistance to students and tech workers struggling to balance their workload. 🎓💼
            </p>
            <p className="mb-4">
              Founded in 2020 by a group of passionate educators and industry professionals, we understood the challenges faced by students and working professionals in managing their academic and professional commitments. 🚀
            </p>
          </div>
          <div>
            <p className="mb-4">
              What started as a small team of dedicated writers has now grown into a diverse community of experts from various fields, all united by a common goal: to help you succeed in your academic and professional endeavors. 🌟
            </p>
            <p>
              Today, cookmypapers stands as a testament to our commitment to quality, affordability, and customer satisfaction. We&apos;ve helped thousands of clients achieve their goals, and we&apos;re just getting started! 💪
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

