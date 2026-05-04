// "use client";


// import { useAuth } from "@/component/ContextAPI/AuthProvider";
// import { Search, ShoppingCart } from "lucide-react";

// const NavbarDesk = () => {

//   const {user, setUser,number ,click}=useAuth()

  
//   return (
//    <div className="bg-white shadow-sm border-b-gray-100  sticky top-0">
//      <div className="hidden   md:flex items-center justify-between py-6   max-w-7xl mx-auto  px-4 ">

//       {/* Left: Logo */}
//       <div className="flex items-center gap-3">
//         <div className="w-10 h-10flex items-center justify-center  font-bold">
//           <img src="./icon/1.png" alt="img" />
//         </div>
//       </div>



//       {/* Middle: Menu */}
//       <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
//         <a href="#">Laptops</a>
//         <a href="#">Desktop PCs</a>
//         <a href="#">Networking Devices</a>
//         <a href="#">Printers & Scanners</a>
//         <a href="#">PC Parts</a>
//         <a href="#">All Other Products</a>
//         <a href="#">Repairs</a>

//         {/* Deals Button */}
//         <a
//           href="src/component/Login/LoginPage.jsx"
//           className="ml-2 px-4 py-1 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
//           Our Deals
//         </a>
//       </div>

//       {/* Right: Icons */}
//       <div className="flex items-center gap-5">
        
//         {/* Search */}
//         <Search className="w-5 h-5 text-gray-600 cursor-pointer" />

//         {/* Cart */}
//         <div className="relative cursor-pointer">
//           <ShoppingCart className="w-5 h-5 text-gray-600" />
//           <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1 rounded-full">
//             2
//           </span>
//         </div>

//         {/* User Avatar */}
//         <img
//           src="https://i.pravatar.cc/40"
//           alt="user"
//           className="w-8 h-8 rounded-full object-cover cursor-pointer"
//         />
//       </div>
//     </div>
//    </div>
//   );
// };

// export default NavbarDesk;

"use client";
import React, { useState } from "react";
import { useAuth } from "@/component/ContextAPI/AuthProvider";
import { Search, ShoppingCart, LogOut, User, LayoutDashboard } from "lucide-react";
import Link from "next/link";

const NavbarDesk = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false); // Dropdown state

  return (
    <div className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="hidden md:flex items-center justify-between py-6 max-w-7xl mx-auto px-4">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center font-bold">
            <img src="/icon/1.png" alt="Logo" />
          </div>
        </Link>

        {/* Middle: Menu */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600">Laptops</Link>
          <Link href="/" className="hover:text-blue-600">Desktop PCs</Link>
          <Link href="/" className="hover:text-blue-600">PC Parts</Link>
          <Link href="/" className="hover:text-blue-600">Repairs</Link>

          <Link
            href="/"
            className="ml-2 px-4 py-1 border border-blue-600 text-blue-600 rounded-full "
          >
            Our Deals
          </Link>
        </div>

        {/* Right: Icons & Profile */}
        <div className="flex items-center gap-5">
          <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600" />

          {/* Cart */}
          <div className="relative cursor-pointer group">
            <Link href="./shoppingcart">
            <ShoppingCart className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">
              2
            </span>
            </Link>
          </div>

          {/* AUTH SECTION */}
          {user ? (
            <div className="relative">
              {/* User Avatar - Toggles Dropdown */}
              <img
                onClick={() => setIsOpen(!isOpen)}
                src={user?.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                alt="user"
                className="w-9 h-9 rounded-full border-2 border-transparent hover:border-blue-600 object-cover cursor-pointer transition"
              />

              {/* Dropdown Menu */}
              {isOpen && (
                <div 
                  className="absolute right-0 mt-3 w-48 bg-white border border-gray-100 rounded-md shadow-lg py-2 z-50"
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <div className="px-4 py-2 border-b border-gray-50">
                    <p className="text-xs text-green-500">Online</p>
                    <p className="text-sm font-bold truncate">{user?.email}</p>
                  </div>

                  <Link 
                    href="/dashboard" 
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition"
                  >
                    <LayoutDashboard size={16} /> Dashboard
                  </Link>

                  <Link 
                    href="/dashboard" 
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition"
                  >
                    <User size={16} /> My Profile
                  </Link>

                  <button
                    onClick={() => logOut()}
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition border-t border-gray-50 mt-1"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Sign In Button for Logged Out users */
            <Link 
              href="/login" 
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition shadow-sm"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarDesk;