"use client"
import Link from 'next/link';
import { BiCodeAlt } from 'react-icons/bi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { HyperTextDemo } from './HoverText';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Brand Name */}
        <div className="text-yellow-400 text-2xl font-bold uppercase tracking-wide cursor-pointer flex items-center">
          <HyperTextDemo/>
        </div>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden text-yellow-400 text-2xl focus:outline-none"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars />
        </button>

        {/* Navigation Links */}
        <ul className="hidden lg:flex flex-wrap space-x-6 mt-2">
          <li className="group relative">
      
          </li>
     
          <li className="group relative">
            <Link href="/contact" className="text-lg uppercase hover:text-yellow-400 transition-all duration-300">
              ☎️ Contact Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li className="group relative">
            <Link href="/about" className="text-lg uppercase hover:text-yellow-400 transition-all duration-300">
              🕯️ About Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li className="group relative">
   
          </li>
        </ul>

        {/* Developer Page Button */}
        <div className="hidden lg:block mt-4 lg:mt-0">
          <Link
            href="/developer"
            className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded-full shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-110 flex items-center"
          >
            <span className="text-xl text-blue-600 mr-2">
              <BiCodeAlt />
            </span>
            For Coding Works
          </Link>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-black z-40 flex flex-col items-start p-4 space-y-4 text-white">
          <button
            className="text-yellow-400 text-2xl self-end focus:outline-none"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes />
          </button>
    
          <Link href="/signin" className="text-lg uppercase hover:text-yellow-400 transition-all duration-300">
            🔐 Sign In
          </Link>
          <Link href="/contact" className="text-lg uppercase hover:text-yellow-400 transition-all duration-300">
            ☎️ Contact Us
          </Link>
          <Link href="/about" className="text-lg uppercase hover:text-yellow-400 transition-all duration-300">
            🕯️ About Us
          </Link>
          <Link href="/samples" className="text-lg uppercase hover:text-yellow-400 transition-all duration-300">
            🗃️ Samples
          </Link>
          <Link
            href="/developer"
            className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded-full shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-110 flex items-center"
          >
            <span className="text-xl text-blue-600 mr-2">
              <BiCodeAlt />
            </span>
            For Coding Works
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
