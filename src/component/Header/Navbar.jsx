
"use client";
import React, { useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [cartCount] = useState(3);

  return (
    <div className="w-full ">
  <div className="  xl:px-40 lg:px-28 sm:px-20 px-5 mx-auto ">
    <div className="flex items-center justify-between py-4">
      
      {/* LEFT */}
      <div className=" ">
        <div className="text-2xl ">
         <img src="./icon/1.png" alt="" />
        </div>
      </div>

      {/* MIDDLE */}
      <div className="flex-1 flex items-center justify-center gap-6">
        <ul className="hidden lg:flex gap-4 text-black font-medium">
          <li>Laptops</li>
          <li>Desktop PCs</li>
          <li>Networking Devices</li>
          <li>Printers & Scanners</li>
          <li>PC Parts</li>
          <li>All Other Products</li>
          <li>Repairs</li>
        </ul>

        <button className="hidden lg:block border-2 border-blue-800 text-blue-800 font-bold px-4 py-2 rounded-full hover:bg-blue-800 hover:text-white transition">
          Our Deals
        </button>
      </div>

      {/* RIGHT */}
      <div className=" flex items-center justify-end gap-4">
         
         <FiSearch className="text-black mr-2" />
        {/* Search (hidden md) */}
        <div className=" md:hidden flex items-center border rounded-full px-3 py-1">
            <FiSearch className="text-black mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none  text-sm w-24 md:hidden"
          />
        </div>

        {/* Cart */}
        <div className="relative text-black cursor-pointer">
          🛒
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            3
          </span>
        </div>

        {/* Login */}
        <button className=" px-4 py-2 rounded-lg">
          <img src="./icon/logo-image.png" alt="" />
        </button>

      </div>

    </div>
  </div>
</div>
  );
};

export default Navbar;






