"use client"
import { Lightbulb, Clock, DollarSign } from 'lucide-react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function Features() {
  return (
    <section id="features" className="py-20 bg-black text-yellow-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-50">Why Choose cookmypapers? 🏆</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Lightbulb className="w-12 h-12 text-yellow-400 transform transition-transform duration-300 hover:scale-110" />}
            title="💡 Expert Writers"
            description="Our talented team of professionals is ready to turn your ideas into top-notch papers. ✍️ They’ve got the skills you need!"
          />
          <FeatureCard 
            icon={<Clock className="w-12 h-12 text-yellow-400 transform transition-transform duration-300 hover:scale-110" />}
            title="⏳ Fast Turnaround"
            description="On a tight deadline? Don’t worry! We guarantee speedy delivery without sacrificing quality. 🏃‍♂️💨"
          />
          <FeatureCard 
            icon={<DollarSign className="w-12 h-12 text-yellow-400 transform transition-transform duration-300 hover:scale-110" />}
            title="💰 Affordable Pricing"
            description="Get high-quality work at prices that won’t break your budget. 💸 You deserve the best without spending a fortune!"
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-yellow-700">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-yellow-50 mb-2 transform transition-transform duration-300 hover:text-yellow-300">{title}</h3>
      <p className="text-yellow-200">{description}</p>
    </div>
  )
}
