import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="bg-white shadow-md py-4"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-600 flex items-center">
          CookMyPapers 👨‍💻
        </Link>
        
        {/* Sidebar Toggle Button for Small Screens */}
        <button 
          onClick={toggleSidebar} 
          className="md:hidden text-gray-600 hover:text-purple-600 focus:outline-none"
        >
          <span role="img" aria-label="menu">🍔</span>
        </button>

        {/* Navbar for Larger Screens */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="#services" className="text-gray-600 hover:text-purple-600">Services 📋</Link></li>
            <li><Link href="#pricing" className="text-gray-600 hover:text-purple-600">Pricing 💰</Link></li>
            <li><Link href="#faq" className="text-gray-600 hover:text-purple-600">FAQ ❓</Link></li>
            <li><Link href="/developer/samples" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">View Coding portfolio ✉️</Link></li>
          </ul>
        </nav>
      </div>

      {/* Sidebar for Small Screens */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="fixed inset-0 bg-black bg-opacity-100 md:hidden"
        onClick={toggleSidebar} // Close sidebar when clicking outside
      >
        <motion.div
          className="fixed top-0 left-0 w-2/3 bg-white shadow-md py-4 px-6 z-10 rounded-xl"
          initial={{ x: '-100%' }}
          animate={{ x: isOpen ? 0 : '-100%' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <ul className="space-y-6 mt-10">
            <li><Link href="#services" className="text-gray-800 hover:text-purple-600">Services 📋</Link></li>
            <li><Link href="#pricing" className="text-gray-800 hover:text-purple-600">Pricing 💰</Link></li>
            <li><Link href="#faq" className="text-gray-800 hover:text-purple-600">FAQ ❓</Link></li>
            <li><Link href="#contact" className="bg-purple-600 text-white px-4 py-2 rounded-3xl hover:bg-purple-700">Contact Us ✉️</Link></li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.header>
  )
}
