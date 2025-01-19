import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";


export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-50">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  )
}

