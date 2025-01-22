"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { GiThrustBend } from 'react-icons/gi';
import { LiaLinkedinIn } from 'react-icons/lia';

export default function ContactPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const socialMedia = [
    {
      name: 'Facebook',
      icon: <Facebook className="h-8 w-8" />,
      link: 'https://facebook.com',
      color: 'bg-blue-600'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="h-8 w-8" />,
      link: 'https://twitter.com',
      color: 'bg-sky-500'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="h-8 w-8" />,
      link: 'https://instagram.com',
      color: 'bg-pink-600'
    },
    {
      name: 'LinkedIn',
      icon: <LiaLinkedinIn className="h-8 w-8" />,
      link: 'https://linkedin.com',
      color: 'bg-blue-800'
    },
    {
      name: 'GitHub',
      icon: <GiThrustBend className="h-8 w-8" />,
      link: 'https://github.com',
      color: 'bg-gray-800'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % socialMedia.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + socialMedia.length) % socialMedia.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600">We&lsquo;d love to hear from you!</p>
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
          <div className="bg-white rounded-lg shadow-md p-6">
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
            className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md p-6 text-white"
          >
            <h2 className="text-2xl font-semibold mb-2">Support Our Cause</h2>
            <p className="text-gray-100 mb-6">Your contribution helps us make a difference</p>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                {[10, 25, 50].map((amount) => (
                  <button
                    key={amount}
                    className="w-full py-2 px-4 rounded-md border border-white text-white hover:bg-white hover:text-purple-500 transition-colors"
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Custom amount"
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/70"
              />
              <button className="w-full py-2 px-4 rounded-md bg-white text-purple-500 hover:bg-white/90 transition-colors">
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
          <div className="bg-white rounded-lg shadow-md p-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your message"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <button className="w-full py-2 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Social Media Carousel */}
          <div className="bg-white rounded-lg shadow-md p-6">
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
                      <div className={`${social.color} rounded-lg p-6 text-white text-center`}>
                        {social.icon}
                        <h3 className="mt-2 font-semibold">{social.name}</h3>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
              >
                →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}