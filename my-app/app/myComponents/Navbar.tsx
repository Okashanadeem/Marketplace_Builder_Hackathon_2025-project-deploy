import { Heart, Search, ShoppingCart, UserX } from 'lucide-react';
import React from 'react';
import MobileNavbar from './mobileMenu';
import Link from 'next/link';
import logo from '../../public/images/Meubel House_Logos-05.png';
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
      {/* Mobile Navbar */}
      <MobileNavbar />

      {/* Desktop Navbar */}
      <div className="hidden md:flex h-[60px] w-full justify-between items-center px-8 bg-gradient-to-r from-blue-50 via-blue-100 to-white shadow-lg text-black">
        {/* Brand Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-gray-800 hover:text-blue-600 transition-colors duration-300" aria-label="Go to homepage">
            <Image
              src={logo}
              alt="Meubel House logo"
              width={70}
              height={5}
              className="object-contain hover:scale-105 transition-transform duration-300" // Image styling
            />
          </Link>
        </div>

        {/* Links Section */}
        <div>
          <ul className="flex gap-12">
            <li>
              <Link href="/" className="text-lg font-medium text-gray-800 hover:text-[#867747] active:text-blue-700 transition-colors duration-300" aria-label="Go to home page">Home</Link>
            </li>
            <li>
              <Link href="/shop" className="text-lg font-medium text-gray-800 hover:text-[#867747] active:text-blue-700 transition-colors duration-300" aria-label="Go to shop page">Shop</Link>
            </li>
            <li>
              <Link href="/about" className="text-lg font-medium text-gray-800 hover:text-[#867747] active:text-blue-700 transition-colors duration-300" aria-label="Go to about page">About</Link>
            </li>
            <li>
              <Link href="/contact" className="text-lg font-medium text-gray-800 hover:text-[#867747] active:text-blue-700 transition-colors duration-300" aria-label="Go to contact page">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Icons Section */}
        <div className="flex gap-8 items-center">
          <Link href="/account" className="text-lg text-gray-800 hover:text-[#8d7d47] active:text-blue-700 transition-colors duration-300" aria-label="Go to account page">
            <UserX className="w-7 h-7" />
          </Link>
          <Heart className="w-7 h-7 text-gray-800 hover:text-[#8d7d47] active:text-blue-700 transition-colors duration-300" aria-label="Favorites" />
          <Link href="/cart" className="text-lg text-gray-800 hover:text-[#8d7d47] active:text-blue-700 transition-colors duration-300" aria-label="Go to cart">
            <ShoppingCart className="w-7 h-7" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
