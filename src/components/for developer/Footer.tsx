import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">CookMyPapers 👨‍💻</h3>
            <p>Serving up delicious websites and mouth-watering code since 2023.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul>
              <li><Link href="#services" className="hover:text-purple-400">Services</Link></li>
              <li><Link href="#pricing" className="hover:text-purple-400">Pricing</Link></li>
              <li><Link href="#faq" className="hover:text-purple-400">FAQ</Link></li>
              <li><Link href="#contact" className="hover:text-purple-400">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-purple-400">Twitter</a></li>
              <li><a href="#" className="hover:text-purple-400">Facebook</a></li>
              <li><a href="#" className="hover:text-purple-400">LinkedIn</a></li>
              <li><a href="#" className="hover:text-purple-400">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 CookMyPapers. All rights reserved. Bon appétit! 🍽️</p>
        </div>
      </div>
    </footer>
  )
}

