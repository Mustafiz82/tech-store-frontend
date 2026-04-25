"use client";


import { Search, ShoppingCart } from "lucide-react";

const Navbarb = () => {
  return (
   <div className="bg-white shadow-sm border-b-gray-100  sticky top-0">
     <div className="hidden   md:flex items-center justify-between py-6   max-w-7xl mx-auto  px-4 ">

      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10flex items-center justify-center  font-bold">
          <img src="./icon/1.png" alt="" />
        </div>
      </div>

      {/* Middle: Menu */}
      <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
        <a href="#">Laptops</a>
        <a href="#">Desktop PCs</a>
        <a href="#">Networking Devices</a>
        <a href="#">Printers & Scanners</a>
        <a href="#">PC Parts</a>
        <a href="#">All Other Products</a>
        <a href="#">Repairs</a>

        {/* Deals Button */}
        <a
          href="src/component/Login/LoginPage.jsx"
          className="ml-2 px-4 py-1 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition"
        >
          Our Deals
        </a>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-5">
        
        {/* Search */}
        <Search className="w-5 h-5 text-gray-600 cursor-pointer" />

        {/* Cart */}
        <div className="relative cursor-pointer">
          <ShoppingCart className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1 rounded-full">
            2
          </span>
        </div>

        {/* User Avatar */}
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-8 h-8 rounded-full object-cover cursor-pointer"
        />
      </div>
    </div>
   </div>
  );
};

export default Navbarb;