"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const stats = [
  { label: "Customers", value: "10M+" },
  { label: "Countries", value: "100+" },
  { label: "Team Members", value: "500+" },
  { label: "Years in Business", value: "13" },
]

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.p
                className="text-5xl font-extrabold text-white"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              >
                {stat.value}
              </motion.p>
              <p className="mt-2 text-xl font-semibold text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

