import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import logo from '../../public/images/Meubel House_Logos-05.png';
import Image from "next/image";
import { Menu, Home, ShoppingCart, Info, Users, Heart } from 'lucide-react'; // Import relevant icons

export default function MobileNavbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-50 via-blue-100 to-white shadow-md sticky top-0 z-50 md:hidden">
      {/* Brand Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-gray-800 hover:text-blue-600 transition-colors duration-300">
          <Image
            src={logo}
            alt="Meubel House Logo"
            width={70}
            height={50}
            className="object-contain hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* Sheet for Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button 
            variant="outline" 
            className="text-gray-800 hover:text-blue-600 border border-gray-400 hover:border-blue-500 rounded-md py-2 px-4 transition-all duration-300" 
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[250px] bg-gradient-to-r from-blue-50 via-blue-100 to-white shadow-md">
          <SheetHeader>
            <SheetTitle className="text-xl font-medium text-gray-800">Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col space-y-4 mt-4">
            <Link href="/" className="flex items-center gap-2 text-lg font-medium text-gray-800 hover:bg-[#FBEBB5] px-4 py-2 rounded-lg transition-all duration-300">
              <Home className="w-5 h-5 text-gray-800" /> Home
            </Link>
            <Link href="/shop" className="flex items-center gap-2 text-lg font-medium text-gray-800 hover:bg-[#FBEBB5] px-4 py-2 rounded-lg transition-all duration-300">
              <ShoppingCart className="w-5 h-5 text-gray-800" /> Shop
            </Link>
            <Link href="/cart" className="flex items-center gap-2 text-lg font-medium text-gray-800 hover:bg-[#FBEBB5] px-4 py-2 rounded-lg transition-all duration-300">
              <ShoppingCart className="w-5 h-5 text-gray-800" /> Cart
            </Link>
            <Link href="/about" className="flex items-center gap-2 text-lg font-medium text-gray-800 hover:bg-[#FBEBB5] px-4 py-2 rounded-lg transition-all duration-300">
              <Info className="w-5 h-5 text-gray-800" /> About
            </Link>
            <Link href="/contact" className="flex items-center gap-2 text-lg font-medium text-gray-800 hover:bg-[#FBEBB5] px-4 py-2 rounded-lg transition-all duration-300">
              <Users className="w-5 h-5 text-gray-800" /> Contact
            </Link>
            <Link href="/account" className="flex items-center gap-2 text-lg font-medium text-gray-800 hover:bg-[#FBEBB5] px-4 py-2 rounded-lg transition-all duration-300">
              <Users className="w-5 h-5 text-gray-800" /> My Account
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
