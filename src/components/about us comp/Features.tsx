import { Lightbulb, Clock, DollarSign } from 'lucide-react'

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose cookmypapers?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Lightbulb className="w-12 h-12 text-yellow-400" />}
            title="Expert Writers"
            description="Our team consists of experienced professionals and academics."
          />
          <FeatureCard 
            icon={<Clock className="w-12 h-12 text-yellow-400" />}
            title="Fast Turnaround"
            description="Get your projects done quickly, even on tight deadlines."
          />
          <FeatureCard 
            icon={<DollarSign className="w-12 h-12 text-yellow-400" />}
            title="Affordable Pricing"
            description="High-quality work at prices that won't break the bank."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-yellow-100 p-6 rounded-lg text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
