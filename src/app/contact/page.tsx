"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { GiThrustBend } from "react-icons/gi";
import { LiaLinkedinIn } from "react-icons/lia";
import { TextRevealDemo } from "@/components/TextReveal";
import { WorldMapDemo } from "@/components/Globe";


export default function ContactPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const socialMedia = [
    {
      name: "cookmypapers",
      icon: <Facebook className="h-8 w-8" />,
      link: "https://facebook.com",
      color: "bg-blue-600",
    },
    {
      name: "",
      icon: <Twitter className="h-8 w-8" />,
      link: "https://twitter.com",
      color: "bg-sky-500",
    },
    {
      name: "",
      icon: <Instagram className="h-8 w-8" />,
      link: "https://instagram.com",
      color: "bg-pink-600",
    },
    {
      name: "",
      icon: <LiaLinkedinIn className="h-8 w-8" />,
      link: "https://linkedin.com",
      color: "bg-blue-800",
    },
    {
      name: "",
      icon: <GiThrustBend className="h-8 w-8" />,
      link: "https://github.com",
      color: "bg-gray-800",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % socialMedia.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + socialMedia.length) % socialMedia.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
   <TextRevealDemo/>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600">
          We&lsquo;d love to hear from you!
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Contact Info Card */}
          <div className="bg-yellow-400 rounded-3xl shadow-md p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-blue-500" />
                <p>contact@example.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-green-500" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-red-500" />
                <p>123 Business Street, Suite 100, City, State 12345</p>
              </div>
            </div>
          </div>

          {/* Donation Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="bg-yellow-400 rounded-3xl shadow-md p-6 text-black"
          >
            <h2 className="text-2xl font-semibold mb-2">Support Our Cause</h2>
            <p className=" mb-6">
              Your contribution helps us make a difference
            </p>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                {[10, 25, 50].map((amount) => (
                  <button
                    key={amount}
                    className="w-full py-2 px-4 rounded-md transition-colors border border-black"
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Custom amount"
                className="w-full px-4 py-2 rounded-2xl text-black bg-yellow-400 border border-black"
              />
              <button className="w-full py-2 px-4 rounded-3xl bg-gradient-to-br text-yellow-400 transition-colors">
                Donate Now
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form and Social Media Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          {/* Contact Form */}
          <div className="bg-yellow-400 rounded-3xl shadow-md p-6">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-yellow-400 border border-black"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-yellow-400 border border-black"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your message"
                  className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-yellow-400 border border-black"
                />
              </div>
              <button className="w-full py-2 px-4 bg-black text-yellow-400 rounded-md hover:bg-gray-600 transition-colors">
                Send Message
              </button>
            </form>
          </div>
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          Find us at everywhere
        </h1>
          {/* Social Media Carousel */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-md p-6">
            <div className="relative">
              <div className="overflow-hidden">
                <motion.div
                  animate={{ x: `-${currentSlide * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="flex"
                >
                  {socialMedia.map((social) => (
                    <motion.div
                      key={social.name}
                      whileHover={{ scale: 1.05 }}
                      className="min-w-full"
                    >
                      <div
                        className={`${social.color} rounded-lg p-6 text-black text-center`}
                      >
                       
                        <h3 className="mt-2 font-semibold flex justify-center"> {social.icon} {social.name}</h3>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-xl p-2 bg-yellow-400"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl p-2 bg-yellow-400"
              >
                →
              </button>
            </div>
          </div>
        </motion.div>
        <WorldMapDemo/>
      </div>
    </div>
  );
}
