
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-yellow-400 text-2xl font-bold uppercase tracking-wide cursor-pointer">
          CookMyPapers
        </div>
        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li>
            <Link href="/"
              className="relative text-lg uppercase hover:text-yellow-400 transition-all duration-300">
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
              
            </Link>
          </li>
          <li>
            <Link href="/signin"
            className="relative text-lg uppercase hover:text-yellow-400 transition-all duration-300">
                Sign In
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
       
            </Link>
          </li>
          <li>
            <Link href="/contact"
           className="relative text-lg uppercase hover:text-yellow-400 transition-all duration-300">
                Contact Us
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
           
            </Link>
          </li>
          <li>
            <Link href="/about"
             className="relative text-lg uppercase hover:text-yellow-400 transition-all duration-300">
                About Us
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
           
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
