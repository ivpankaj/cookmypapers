'use client'
import { motion } from 'framer-motion'

const teamMembers = [
  { name: "Dr. Emily Chen", role: "Founder & CEO", emoji: "👩‍🔬" },
  { name: "Michael Johnson", role: "Head of Writing", emoji: "✍️" },
  { name: "Sarah Thompson", role: "Tech Expert", emoji: "👩‍💻" },
  { name: "David Rodriguez", role: "Quality Assurance", emoji: "🕵️‍♂️" },
]

export default function OurTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Team 🤝
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.name}
              className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{member.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

