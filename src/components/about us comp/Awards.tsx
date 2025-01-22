"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const awards = [
  {
    year: 2023,
    title: "Innovation Excellence Award",
    organization: "Tech Innovators Association",
  },
  {
    year: 2022,
    title: "Best Workplace Culture",
    organization: "HR Excellence Institute",
  },
  {
    year: 2021,
    title: "Sustainability Leadership Award",
    organization: "Green Business Council",
  },
  {
    year: 2020,
    title: "Customer Satisfaction Excellence",
    organization: "Global Customer Experience Awards",
  },
]

export default function Awards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 p-6 rounded-lg text-center"
            >
              <div className="text-3xl font-bold mb-2">{award.year}</div>
              <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
              <p className="text-gray-300">{award.organization}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

