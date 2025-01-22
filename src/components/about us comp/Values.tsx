"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface Value {
  title: string
  description: string
}

const values: Value[] = [
  { title: "Innovation", description: "We constantly push the boundaries of what's possible" },
  { title: "Integrity", description: "We uphold the highest ethical standards in all we do" },
  { title: "Collaboration", description: "We believe in the power of teamwork and partnership" },
  { title: "Excellence", description: "We strive for excellence in every aspect of our work" },
]

export default function Values() {
  return (
    <div className="py-20 bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-10">Our Values</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

interface ValueCardProps {
  value: Value
  index: number
}

function ValueCard({ value, index }: ValueCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 p-6 rounded-lg"
    >
      <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
      <p className="text-gray-300">{value.description}</p>
    </motion.div>
  )
}
