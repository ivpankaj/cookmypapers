"use client";

import Awards from "@/components/about us comp/Awards";
import Carousel from "@/components/about us comp/Carousel";
import Hero from "@/components/about us comp/Hero";
import Stats from "@/components/about us comp/Stats";
import Team from "@/components/about us comp/Team";
import Testimonials from "@/components/about us comp/Testimonials";
import Timeline from "@/components/about us comp/Timeline";
import Values from "@/components/about us comp/Values";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedScroll";
import { GlobeDemo } from "@/components/Globe";
import { MarqueeDemo } from "@/components/Infinite";
import ScratchToRevealDemo from "@/components/Scratch";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-purple-600">
      <div className="flex justify-center p-4">
        {" "}
        <ScratchToRevealDemo />
      </div>
      <Hero />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Carousel />
        <MarqueeDemo />
        <Timeline />
        <Stats />
        <Values />
        <AnimatedTestimonialsDemo/>
        <Testimonials />
        <Awards />
        <Team />
        <div className="flex justify-center">
          {" "}
          <GlobeDemo />
        </div>
      </motion.div>
    </div>
  );
}
