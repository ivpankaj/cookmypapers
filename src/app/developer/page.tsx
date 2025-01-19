'use client'

import CTA from '@/components/for developer/CTA'
import FAQ from '@/components/for developer/FAQ'
import Footer from '@/components/for developer/Footer'
import Header from '@/components/for developer/Header'
import Hero from '@/components/for developer/Hero'
import Pricing from '@/components/for developer/Pricing'
import Services from '@/components/for developer/Services'
import Testimonials from '@/components/for developer/Testimonials'



export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100">
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

