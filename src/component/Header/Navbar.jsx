
"use client";
import React, { useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [cartCount] = useState(3);

  return (
    <div className="w-full ">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between py-4">
      
      {/* LEFT */}
      <div className=" ">
        <div className="text-2xl font-bold text-blue-600">
          LOGO
        </div>
      </div>

      {/* MIDDLE */}
      <div className="flex-1 flex items-center justify-center gap-6">
        <ul className="hidden lg:flex gap-6 text-gray-700 font-medium">
          <li>Laptops</li>
          <li>Desktop PCs</li>
          <li>Networking Devices</li>
          <li>Printers & Scanners</li>
          <li>PC Parts</li>
          <li>All Other Products</li>
          <li>Repairs</li>
        </ul>

        <button className="hidden lg:block border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition">
          Our Deals
        </button>
      </div>

      {/* RIGHT */}
      <div className=" flex items-center justify-end gap-4">
         
         <FiSearch className="text-gray-500 mr-2" />
        {/* Search (hidden md) */}
        <div className=" md:hidden flex items-center border rounded-full px-3 py-1">
            <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none text-sm w-24 md:hidden"
          />
        </div>

        {/* Cart */}
        <div className="relative cursor-pointer">
          🛒
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            3
          </span>
        </div>

        {/* Login */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Login
        </button>

      </div>

    </div>
  </div>
</div>
  );
};

export default Navbar;






