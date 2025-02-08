import React from "react";
import { Fullscreen, Search,  Heart, ShoppingBag,  } from "lucide-react";
import Image from "next/image";

export function TopHead() {
  return (
    <div className="bg-gray-100 h-10  flex items-center justify-between py-4 px-6">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={40}
            height={40}
            className="items-start cursor-pointer"
          />
    <div className="bg-gray-100 border-b">
      <div className="container mx-auto flex items-center justify-end py-2 px-6 space-x-4">
        <a href="/FindaStore" className="text-sm text-gray-700 hover:text-gray-900 hidden md:block">
          Find a Store
        </a>
        <span className="hidden md:block text-gray-300">|</span>
        <a href="/Help" className="text-sm text-gray-700 hover:text-gray-900 hidden md:block">
          Help
        </a>
        <span className="hidden md:block text-gray-300">|</span>
        <a href="/JoinUs" className="text-sm text-gray-700 hover:text-gray-900 hidden md:block">
          Join Us
        </a>
        <span className="hidden md:block text-gray-300">|</span>
        <a href="/SignIn" className="text-sm text-gray-700 hover:text-gray-900 hidden md:block">
          Sign In
        </a>
      </div>
    </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="bg-white border-b ">
      <div className=" flex items-center justify-between py-2 px-4">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-4">
          <Image
            src="/logo2.png"
            alt="Nike Logo"
            width={50}
            height={50}
            className="cursor-pointer items-start"
          />
        </div>

        {/* Center Section: Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700 ml-64">
           
          <a href="/NewandFeature" className="hover:text-gray-900">
            New & Featured
          </a>
          <a href="/Men" className="hover:text-gray-900">
            Men
          </a>
          <a href="/Women" className="hover:text-gray-900">
            Women
          </a>
          <a href="/Kids" className="hover:text-gray-900">
            Kids
          </a>
          <a href="/Sales" className="hover:text-gray-900">
            Sales
          </a>
          <a href="SNKRS" className="hover:text-gray-900">
            SNKRS
          </a>
        </nav>

        {/* Right Section: Utility Icons and Search Box */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="w-64 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button className="absolute top-0 right-0 p-2 text-gray-700 hover:text-gray-900">
              <Search size={20} />
            </button>
          </div>

          <button className="p-2 text-gray-700 hover:text-gray-900">
            < Heart size={30} />
          </button>
          <button className="p-2 text-gray-700 hover:text-gray-900">
            <ShoppingBag size={30} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default function Navbar() {
  return (
    <>
      <TopHead />
      <Header />
    </>
  );
}
