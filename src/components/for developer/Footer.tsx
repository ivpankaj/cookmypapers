import Link from 'next/link'
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-3xl font-bold mb-4 text-purple-400 hover:text-purple-500 transition duration-300 animate__animated animate__fadeIn">CookMyPapers 👨‍💻</h3>
            <p className="text-lg animate__animated animate__pulse animate__infinite">Serving up delicious websites and mouth-watering code since 2025 Jan. 🌐🍕</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4 animate__animated animate__fadeIn animate__delay-1s">Quick Links</h4>
            <ul>
              <li>
                <Link href="#services" className="hover:text-purple-400 transition duration-200 animate__animated animate__zoomIn animate__delay-2s">
                  <span role="img" aria-label="services">🛠️</span> Services
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-purple-400 transition duration-200 animate__animated animate__zoomIn animate__delay-2.5s">
                  <span role="img" aria-label="pricing">💸</span> Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-purple-400 transition duration-200 animate__animated animate__zoomIn animate__delay-3s">
                  <span role="img" aria-label="faq">❓</span> FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-purple-400 transition duration-200 animate__animated animate__zoomIn animate__delay-3.5s">
                  <span role="img" aria-label="contact">📞</span> Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-4 animate__animated animate__fadeIn animate__delay-1.5s">Connect With Us</h4>
            <ul className="flex space-x-6 justify-center md:justify-start">
              <li>
                <a href="#" className="text-blue-400 hover:text-blue-500 transition duration-200 animate__animated animate__fadeIn animate__delay-2s">
                  <FaTwitter size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-700 transition duration-200 animate__animated animate__fadeIn animate__delay-2.5s">
                  <FaFacebook size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-800 hover:text-blue-900 transition duration-200 animate__animated animate__fadeIn animate__delay-3s">
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="text-pink-500 hover:text-pink-600 transition duration-200 animate__animated animate__fadeIn animate__delay-3.5s">
                  <FaInstagram size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm animate__animated animate__fadeIn animate__delay-4s">&copy; 2025 Jan CookMyPapers. All rights reserved. Bon appétit! 🍽️</p>
        </div>
      </div>
    </footer>
  )
}
