import Link from 'next/link';
import React from 'react';

type PricingCardProps = {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 animate-bounce">🌟 Affordable Pricing Plans 🌟</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard 
            title="Basic"
            price="$9.99"
            features={[
              "✨ 1-3 page papers",
              "⏳ 48-hour turnaround",
              "🔄 1 revision"
            ]}
          />
          <PricingCard 
            title="Standard"
            price="$19.99"
            features={[
              "📄 4-7 page papers",
              "⚡ 24-hour turnaround",
              "🔄🔄 2 revisions"
            ]}
            highlighted={true}
          />
          <PricingCard 
            title="Premium"
            price="$29.99"
            features={[
              "📚 8+ page papers",
              "🚀 12-hour turnaround",
              "♾️ Unlimited revisions"
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({ title, price, features, highlighted = false }: PricingCardProps) {
  return (
    <div 
      className={`p-6 rounded-lg text-center shadow-lg transform hover:scale-105 transition-transform duration-300 
        ${highlighted ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white' : 'bg-gradient-to-r from-blue-500 via-green-500 to-teal-500 text-white'} 
        hover:shadow-2xl`}
    >
      <h3 className="text-3xl font-bold mb-3 animate-pulse flex justify-center items-center">
        {title} {highlighted && <span className="ml-2">💎</span>}
      </h3>
      <p className="text-5xl font-extrabold mb-6">{price}</p>
      <ul className="mb-6">
        {features.map((feature, index) => (
          <li key={index} className="mb-2 text-lg font-medium flex items-center justify-center">
            <span className="mr-2">✅</span> {feature}
          </li>
        ))}
      </ul>
      <Link 
        href="#contact" 
        className={`inline-block px-8 py-3 rounded-full font-bold shadow-md transition-transform transform hover:scale-110 duration-300 
          ${highlighted ? 'bg-yellow-400 text-black hover:bg-yellow-300' : 'bg-white text-black hover:bg-gray-200'}`}
      >
        🎯 Choose Plan
      </Link>
    </div>
  );
}
