import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Github, Mail, MessageCircle, X } from 'lucide-react'

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
            <p>
              <a href="mailto:cookmypapers@outlook.com" className="flex items-center space-x-2 hover:text-yellow-200">
                <Mail className="w-5 h-5 text-red-600" />
                <span>cookmypapers@outlook.com</span>
              </a>
            </p>
            <p>
              <a href="https://wa.me/919911064724" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-yellow-200">
                <MessageCircle className="w-5 h-5 text-green-600" />
                <span>+91 9911064724</span>
              </a>
            </p>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">🌍 Follow Us</h3>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                  <Facebook className="w-6 h-6 text-blue-600" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <X className="w-6 h-6 text-gray-400" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
                  <Instagram className="w-6 h-6 text-pink-500" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
                  <Linkedin className="w-6 h-6 text-blue-700" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
                  <Github className="w-6 h-6 text-gray-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-8 text-center">
          <p className="text-yellow-200">&copy; 2025 cookmypapers. All rights reserved. ✨</p>
        </div>
      </div>
    </footer>
  )
}
