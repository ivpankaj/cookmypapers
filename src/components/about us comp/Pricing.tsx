import Link from 'next/link'

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean; // optional prop
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-yellow-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Affordable Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard 
            title="Basic"
            price="$9.99"
            features={[
              "1-3 page papers",
              "48-hour turnaround",
              "1 revision"
            ]}
          />
          <PricingCard 
            title="Standard"
            price="$19.99"
            features={[
              "4-7 page papers",
              "24-hour turnaround",
              "2 revisions"
            ]}
            highlighted={true}
          />
          <PricingCard 
            title="Premium"
            price="$29.99"
            features={[
              "8+ page papers",
              "12-hour turnaround",
              "Unlimited revisions"
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function PricingCard({ title, price, features, highlighted = false }: PricingCardProps) {
  return (
    <div className={`p-6 rounded-lg text-center ${highlighted ? 'bg-black text-yellow-400' : 'bg-white'}`}>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-4xl font-bold mb-4">{price}</p>
      <ul className="mb-6">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">{feature}</li>
        ))}
      </ul>
      <Link href="#contact" className={`inline-block px-6 py-2 rounded-full font-semibold ${
        highlighted ? 'bg-yellow-400 text-black hover:bg-yellow-300' : 'bg-black text-yellow-400 hover:bg-gray-800'
      } transition duration-300`}>
        Choose Plan
      </Link>
    </div>
  )
}
