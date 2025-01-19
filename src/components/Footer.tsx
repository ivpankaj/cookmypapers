import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-yellow-400 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">🍽️ cookmypapers</h3>
            <p>Quality academic assistance at affordable prices. We make your paper-perfect every time! ✍️💡</p>
          </div>
          
          {/* Quick Links Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">🚀 Quick Links</h3>
            <ul>
              <li><Link href="#features" className="hover:text-yellow-200">✨ Features</Link></li>
              <li><Link href="#pricing" className="hover:text-yellow-200">💸 Pricing</Link></li>
              <li><Link href="#contact" className="hover:text-yellow-200">📞 Contact</Link></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">📬 Contact Us</h3>
            <p>Email: <span className="text-yellow-200">info@cookmypapers.com</span></p>
            <p>Phone: <span className="text-yellow-200">(123) 456-7890</span></p>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">🌍 Follow Us</h3>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-facebook hover:text-facebook-700">
                  <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-700" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-twitter hover:text-twitter-700">
                  <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-500" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-instagram hover:text-instagram-700">
                  <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-600" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-linkedin hover:text-linkedin-700">
                  <Linkedin className="w-6 h-6 text-blue-700 hover:text-blue-800" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-800">
                  <Github className="w-6 h-6 text-gray-700 hover:text-gray-800" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-8 text-center">
          <p className="text-yellow-200">&copy; 2023 cookmypapers. All rights reserved. ✨</p>
        </div>
      </div>
    </footer>
  )
}
