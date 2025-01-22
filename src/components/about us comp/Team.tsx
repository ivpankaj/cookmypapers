"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    bio: "Visionary leader with 20+ years of experience in tech innovation.",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    bio: "Tech genius driving our cutting-edge solutions and R&D initiatives.",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Mike Johnson",
    role: "Head of Design",
    bio: "Award-winning designer creating intuitive and beautiful user experiences.",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Sarah Lee",
    role: "Chief Marketing Officer",
    bio: "Marketing maven with a track record of successful global campaigns.",
    avatar: "/placeholder.svg?height=200&width=200",
  },
]

export default function Team() {
  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

interface TeamMember {
  avatar: string
  name: string
  role: string
  bio: string
}

interface TeamMemberCardProps {
  member: TeamMember
  index: number
}

function TeamMemberCard({ member, index }: TeamMemberCardProps) {
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
    >
      <Card>
        <CardContent className="p-6 text-center">
          <Avatar className="h-32 w-32 mx-auto mb-4">
            <AvatarImage src={member.avatar} alt={member.name} />
            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
          <p className="text-gray-500 mb-4">{member.role}</p>
          <p className="text-sm text-gray-700">{member.bio}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}



