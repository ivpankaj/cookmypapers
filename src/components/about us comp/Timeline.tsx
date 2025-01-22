"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const timelineEvents = [
  { year: 2010, title: "Company Founded", description: "Our journey began" },
  { year: 2015, title: "Expansion", description: "We opened our first international office" },
  { year: 2020, title: "Innovation Award", description: "Recognized for our groundbreaking products" },
  { year: 2023, title: "Global Reach", description: "Now serving customers in over 100 countries" },
]

export default function Timeline() {
  return (
    <div className="py-20 bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-10">Our Journey</h2>
      <div className="max-w-4xl mx-auto">
        {timelineEvents.map((event, index) => (
          <TimelineItem key={index} event={event} index={index} />
        ))}
      </div>
    </div>
  )
}

interface TimelineItemProps {
  event: {
    year: number
    title: string
    description: string
  }
  index: number
}

function TimelineItem({ event, index }: TimelineItemProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} mb-8`}
    >
      <div className="w-1/2 px-4">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">{event.year}</h3>
          <h4 className="text-xl mb-2">{event.title}</h4>
          <p className="text-gray-300">{event.description}</p>
        </div>
      </div>
    </motion.div>
  )
}
