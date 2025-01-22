'use client'

import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-50">
      <Navbar />
      <Hero />
      <Features />
      {/* Client-side component */}
      <GoogleAnalytics trackPageViews gaMeasurementId="G-L2VG2QYGPG" />
      <Pricing />
      <Footer />
    </div>
  )
}
