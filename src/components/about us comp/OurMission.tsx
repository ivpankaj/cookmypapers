'use client'
import { motion } from 'framer-motion'

export default function OurMission() {
  return (
    <section className="py-20 bg-yellow-100">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Mission 🎯
        </motion.h2>
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mb-4">
            At cookmypapers, our mission is clear: to empower students and professionals by providing accessible, high-quality academic assistance. 💡
          </p>
          <p className="mb-4">
            We believe that everyone deserves the opportunity to excel in their studies and career, regardless of their time constraints or financial limitations. 🌈
          </p>
          <p>
            By offering affordable, expert-driven solutions, we aim to be the bridge that connects your ambitions with your achievements. Together, we&apos;ll turn your academic challenges into stepping stones for success! 🏆
          </p>
        </motion.div>
      </div>
    </section>
  )
}

