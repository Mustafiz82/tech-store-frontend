"use client";

import { useState } from "react";
import { Menu, ShoppingCart, User, Search, X } from "lucide-react";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="bg-blue-600 px-4 py-3 flex items-center gap-3">

        {/* Menu Icon */}
        <Menu
          onClick={() => setOpen(true)}
          className="text-white w-6 h-6 cursor-pointer"
        />

        {/* Search */}
        <div className="flex items-center bg-white rounded-full px-3 py-2 flex-1">
          <Search className="text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search here"
            className="ml-2 w-full outline-none text-sm"
          />
        </div>

        {/* Cart */}
        <div className="relative">
          <ShoppingCart className="text-white w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-white text-blue-600 text-xs px-1 rounded-full">
            2
          </span>
        </div>

        {/* User */}
        <User className="text-white w-6 h-6" />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[260px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-bold">Menu</h2>
          <X
            onClick={() => setOpen(false)}
            className="cursor-pointer"
          />
        </div>

        {/* Menu Items */}
        <ul className="p-4 space-y-4 text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">Laptops</li>
          <li className="hover:text-blue-600 cursor-pointer">Desktop PCs</li>
          <li className="hover:text-blue-600 cursor-pointer">Networking Devices</li>
          <li className="hover:text-blue-600 cursor-pointer">Printers & Scanners</li>
          <li className="hover:text-blue-600 cursor-pointer">PC Parts</li>
          <li className="hover:text-blue-600 cursor-pointer">Repairs</li>
          <li className="text-blue-600 font-semibold">Our Deals</li>
        </ul>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}
    </>
  );
};

export default MobileNavbar;