"use client"
import Link from 'next/link'
import { useEffect } from 'react';

export default function Hero() {

  useEffect(() => {
    // Adding a simple animation when the component is loaded
    const text = document.querySelector('.move-text');
    text?.classList.add('animate__animated', 'animate__bounceInLeft');
  }, []);

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 relative overflow-hidden">
      <div className="container mx-auto text-center px-4">
        {/* Title with Animation */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s text-white">
          Starting from <span className="text-green-800">₹ 59 💻</span>
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-2s">
          Get Your Papers Cooked to Perfection 🎓📚
        </h1>
        <p className="text-lg md:text-xl mb-8 animate__animated animate__fadeIn animate__delay-3s move-text">
          Quality projects and assignments at student-friendly prices 💡📝
        </p>
        
        {/* Call to Action Button */}
        <Link href="#pricing" className="bg-black text-yellow-400 px-6 py-3 md:px-8 md:py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 animate__animated animate__zoomIn">
          Get Started 🚀💻
        </Link>
      </div>

      {/* Animated Background Shape */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10 opacity-30 animate__animated animate__fadeIn animate__delay-1s">
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
          <path fill="#fff" d="M0,0 C400,300 800,100 800,400 L800,0 Z"></path>
        </svg>
      </div>
    </section>
  )
}
