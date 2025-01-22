"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  { name: "Alex S.", role: "Computer Science Student", quote: "cookmypapers saved my semester! Their quick turnaround and quality work helped me manage my course load effectively." },
  { name: "Jessica L.", role: "Marketing Professional", quote: "As a working professional, time is precious. cookmypapers delivered excellent work that helped me advance my career while continuing my education." },
  { name: "Ryan T.", role: "Engineering Graduate", quote: "The team at cookmypapers is simply amazing. Their expertise in technical subjects is unmatched. Highly recommended!" },
  { name: "Sophia K.", role: "MBA Candidate", quote: "I was skeptical at first, but cookmypapers exceeded my expectations. Their work is thorough, well-researched, and always on time." },
]

export default function Testimonials() {
  const [ setCurrentSlide] = useState<number>(0)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => setCurrentSlide(index),
  }

  return (
    <section className="py-20 bg-yellow-200">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say 💬
        </motion.h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="px-4">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg mb-4">&apos;{testimonial.quote}&apos;</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
