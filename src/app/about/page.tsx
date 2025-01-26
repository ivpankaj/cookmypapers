"use client";

import Awards from "@/components/about us comp/Awards";
// import Carousel from "@/components/about us comp/Carousel";
import Hero from "@/components/about us comp/Hero";
import Stats from "@/components/about us comp/Stats";
import Team from "@/components/about us comp/Team";
import Testimonials from "@/components/about us comp/Testimonials";
import Timeline from "@/components/about us comp/Timeline";
import Values from "@/components/about us comp/Values";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedScroll";
// import { GlobeDemo } from "@/components/Globe";
import { MarqueeDemo } from "@/components/Infinite";
import { AnimatedListDemo } from "@/components/ScrollAbove";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-purple-600 overflow-hidden">
      <AnimatedListDemo/>
      <AnimatedTestimonialsDemo />
      <Hero />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
  
        <MarqueeDemo />
        <Timeline />
        <Stats />
        <Values />

        <Testimonials />
        <Awards />
        <Team />
      </motion.div>
    </div>
  );
}
