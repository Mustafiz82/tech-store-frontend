// "use client";

// import { useState } from "react";
// import { Menu, ShoppingCart, User, Search, X} from "lucide-react";


// const MobileNavbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="sticky top-0 right-0 left-0">
//       {/* Navbar */}
//       <div className="bg-blue-600 max-w-7xl mx-auto px-10 py-4 flex items-center gap-3">

//         {/* Menu Icon */}
//         <Menu
//           onClick={() => setOpen(true)}
//           className="text-white w-6 h-6 cursor-pointer"
//         />

//         {/* Search */}
//         <div className="flex items-center bg-white rounded-full px-3 py-2 flex-1">
//           <Search className="text-gray-400 w-4 h-4" />
//           <input
//             type="text"
//             placeholder="Search here"
//             className="ml-2 w-full outline-none text-sm"
//           />
//         </div>

//         {/* Cart */}
//         <div className="relative">
//           <ShoppingCart className="text-white w-6 h-6" />
//           <span className="absolute -top-2 -right-2 bg-white text-blue-600 text-xs px-1 rounded-full">
//             2
//           </span>
//         </div>

//         {/* User */}
        
//         <img src="./icon/5.png" alt="icon" />
//       </div>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full w-[260px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
//           open ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >

//         {/* Header */}
//         <div className="flex items-center justify-between p-4 border-b">
//           <h2 className="font-bold">Menu</h2>
//           <X
//             onClick={() => setOpen(false)}
//             className="cursor-pointer"
//           />
//         </div>

//         {/* Menu Items */}
//         <ul className="p-4 space-y-4 text-gray-700">
//           <li className="hover:text-blue-600 cursor-pointer">Laptops</li>
//           <li className="hover:text-blue-600 cursor-pointer">Desktop PCs</li>
//           <li className="hover:text-blue-600 cursor-pointer">Networking Devices</li>
//           <li className="hover:text-blue-600 cursor-pointer">Printers & Scanners</li>
//           <li className="hover:text-blue-600 cursor-pointer">PC Parts</li>
//           <li className="hover:text-blue-600 cursor-pointer">Repairs</li>
//           <li className="text-blue-600 font-semibold">Our Deals</li>
//         </ul>
//       </div>

//       {/* Overlay */}
//       {open && (
//         <div
//           onClick={() => setOpen(false)}
//           className="fixed inset-0 bg-black/40 z-40"
//         ></div>
//       )}
//     </div>

    
//   );
// };

// export default MobileNavbar;

"use client";
import React, { useState } from "react";
import { useAuth } from "@/component/ContextAPI/AuthProvider";
import { Menu, ShoppingCart, User, Search, X, LogOut, LayoutDashboard } from "lucide-react";
import Link from "next/link";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useAuth(); // Accessing Auth Data

  // Function to close sidebar when a link is clicked
  const closeSidebar = () => setOpen(false);

  return (
    <div className="sticky top-0 right-0 left-0 z-50 md:hidden">
      {/* Navbar Top Bar */}
      <div className="bg-blue-600 px-6 py-4 flex items-center gap-3 shadow-md">
        
        {/* Menu Icon */}
        <Menu
          onClick={() => setOpen(true)}
          className="text-white w-6 h-6 cursor-pointer"
        />

        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-full px-3 py-2 flex-1">
          <Search className="text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search here"
            className="ml-2 w-full outline-none text-xs"
          />
        </div>

        {/* Cart */}
       
       <Link href="./shoppingcart" className="relative">   <ShoppingCart className="text-white w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-white text-blue-600 text-[10px] px-1 rounded-full font-bold">
            2
          </span></Link>
        

        {/* Top Bar User Profile / Login Link */}
        {user ? (
          <Link href="/dashboard">
            <img 
              src={user?.photoURL || "https://i.pravatar.cc/40"} 
              alt="user" 
              className="w-8 h-8 rounded-full border-2 border-white object-cover" 
            />
          </Link>
        ) : (
          <Link href="/login">
             <User className="text-white w-6 h-6" />
          </Link>
        )}
      </div>

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-5 border-b bg-gray-50">
          <div className="flex items-center gap-3">
            {user ? (
              <>
                <img 
                   src={user?.photoURL || "https://i.pravatar.cc/40"} 
                   className="w-10 h-10 rounded-full" 
                   alt="profile" 
                />
                <div className="overflow-hidden">
                   <p className="text-sm font-bold truncate w-32">{user?.email}</p>
                   <p className="text-[10px] text-green-600 font-medium">Online</p>
                </div>
              </>
            ) : (
              <h2 className="font-bold text-gray-800">Main Menu</h2>
            )}
          </div>
          <X onClick={closeSidebar} className="cursor-pointer text-gray-500" />
        </div>

        {/* Sidebar Items */}
        <div className="flex flex-col h-full justify-between pb-20">
          <ul className="p-5 space-y-5 text-gray-700 font-medium">
            {/* Category Links */}
            <li className="hover:text-blue-600"><Link href="/laptops" onClick={closeSidebar}>Laptops</Link></li>
            <li className="hover:text-blue-600"><Link href="/desktops" onClick={closeSidebar}>Desktop PCs</Link></li>
            <li className="hover:text-blue-600"><Link href="/parts" onClick={closeSidebar}>PC Parts</Link></li>
            <li className="hover:text-blue-600"><Link href="/repairs" onClick={closeSidebar}>Repairs</Link></li>
            <li className="text-blue-600 font-bold border-b pb-2"><Link href="/deals" onClick={closeSidebar}>Our Deals</Link></li>

            {/* DASHBOARD SECTION (Only if logged in) */}
            {user && (
              <div className="pt-2 space-y-4">
                <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">Account</p>
                <li className="flex items-center gap-3 hover:text-blue-600">
                  <LayoutDashboard size={18} />
                  <Link href="/dashboard" onClick={closeSidebar}>Dashboard</Link>
                </li>
                <li className="flex items-center gap-3 hover:text-blue-600">
                  <User size={18} />
                  <Link href="/dashboard" onClick={closeSidebar}>My Profile</Link>
                </li>
              </div>
            )}
          </ul>

          {/* Bottom Action: Login or Logout */}
          <div className="p-5 border-t">
            {user ? (
              <button
                onClick={() => { logOut(); closeSidebar(); }}
                className="flex items-center justify-center gap-2 w-full bg-red-50 text-red-600 py-3 rounded-lg font-bold transition"
              >
                <LogOut size={18} /> Logout
              </button>
            ) : (
              <Link
                href="/login"
                onClick={closeSidebar}
                className="flex items-center justify-center w-full bg-blue-600 text-white py-3 rounded-lg font-bold transition shadow-md"
              >
                Sign In / Register
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Overlay Background */}
      {open && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        ></div>
      )}
    </div>
  );
};

export default MobileNavbar;