"use client"
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
    <section id="pricing" className="py-20 bg-yellow-400">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-800 animate-bounce">Affordable Pricing</h2>
        <div className="flex justify-center">
          <PricingCard
            title="Contact us for Pricing"
            price="Tell us your work"
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
        ${highlighted ? 'bg-yellow-600 text-white' : 'bg-yellow-500 text-black'} 
        hover:shadow-2xl`}
    >
      <h3 className="text-2xl sm:text-3xl font-bold mb-3 animate-pulse flex justify-center items-center">
        {title} {highlighted && <span className="ml-2">💎</span>}
      </h3>
      <p className="text-4xl sm:text-2xl font-extrabold mb-6">{price}</p>
      <ul className="mb-6">
        {features.map((feature, index) => (
          <li key={index} className="mb-2 text-lg font-medium flex items-center justify-center">
            <span className="mr-2">✅</span> {feature}
          </li>
        ))}
      </ul>
      <Link
        href="#contact"
        className={`inline-block px-6 py-3 rounded-3xl font-bold shadow-md transition-transform transform hover:scale-110 duration-300 
          ${highlighted ? 'bg-black text-yellow-400 hover:bg-gray-800' : 'bg-yellow-400 text-black hover:bg-yellow-300'}`}
      >
        🎯 Message us
      </Link>
    </div>
  );
}
