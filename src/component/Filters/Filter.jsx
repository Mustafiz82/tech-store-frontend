
// "use client";

// import React from 'react';

// import { useState } from "react";
// import { FiX, FiChevronDown } from "react-icons/fi";

// export default function Filter() {
//     const priceRanges = [
//   { label: "$0.00 - $1,000.00", count: 19 },
//   { label: "$1,000.00 - $2,000.00", count: 21 },
//   { label: "$2,000.00 - $3,000.00", count: 9 },
//   { label: "$3,000.00 - $4,000.00", count: 6 },
//   { label: "$4,000.00 - $5,000.00", count: 3 },
//   { label: "$5,000.00 - $6,000.00", count: 1 },
//   { label: "$6,000.00 - $7,000.00", count: 1 },
//   { label: "$7,000.00 And Above", count: 1 },
// ];

//   const brands = [
//     { name: "ROCCAT", img: "/brands/roccat.png" },
//     { name: "MSI", img: "/brands/msi.png" },
//     { name: "Thermaltake", img: "/brands/thermaltake.png" },
//     { name: "ADATA", img: "/brands/adata.png" },
//     { name: "HP", img: "/brands/hp.png" },
//     { name: "GIGABYTE", img: "/brands/gigabyte.png" },
//   ];
//   const [openCategory, setOpenCategory] = useState(true);
//   const [openPrice, setOpenPrice] = useState(true);
//   const [openColor, setOpenColor] = useState(true);
//   const [openBrands, setOpenBrands] = useState(true);

//   return (
//     <div>
//       {/* Header */}
//      <section  className="w-[300px] bg-gray-100 h-full p-5 rounded-lg">
//              <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-semibold">Filter By</h2>
//         <FiX className="cursor-pointer" />
//       </div>

//       <hr className="mb-4" />

//       {/* CATEGORY */}
//       <div className="mb-4">
//         <button
//           onClick={() => setOpenCategory(!openCategory)}
//           className="w-full flex justify-between items-center font-medium"
//         >
//           Category
//           <FiChevronDown
//             className={`transition-transform ${
//               openCategory ? "rotate-180" : ""
//             }`}
//           />
//         </button>

//         {openCategory && (
//           <div className="mt-3 space-y-2 text-sm text-gray-600">
//             <div className="flex justify-between">
//               <span>CUSTOM PCS</span> <span>15</span>
//             </div>
//             <div className="flex justify-between">
//               <span>MSI ALL-IN-ONE PCS</span> <span>45</span>
//             </div>
//             <div className="flex justify-between">
//               <span>HP/COMPAQ PCS</span> <span>1</span>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* PRICE */}
//       <div className="mb-4">
//         <button
//           onClick={() => setOpenPrice(!openPrice)}
//           className="w-full flex justify-between items-center font-medium"
//         >
//           Price
//           <FiChevronDown
//             className={`transition-transform ${
//               openPrice ? "rotate-180" : ""
//             }`}
//           />
//         </button>

//       {openPrice && (
//       <div className="mt-3 space-y-2 text-sm text-gray-600">
//        {priceRanges.map((item, i) => (
//           <div key={i} className="flex justify-between cursor-pointer hover:text-black">
//           <span>{item.label}</span>
//           <span>{item.count}</span>
//           </div>
//             ))}
//       </div>
//      )}
//       </div>

//       {/* COLOR */}
//       <div className="mb-4">
//         <button
//           onClick={() => setOpenColor(!openColor)}
//           className="w-full flex justify-between items-center font-medium"
//         >
//           Color
//           <FiChevronDown
//             className={`transition-transform ${
//               openColor ? "rotate-180" : ""
//             }`}
//           />
//         </button>

//         {openColor && (
//           <div className="flex gap-3 mt-3">
//             <div className="w-6 h-6 bg-black rounded-full cursor-pointer"></div>
//             <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-blue-500 cursor-pointer"></div>
//           </div>
//         )}
//       </div>

//       {/* FILTER NAME (dummy like design) */}
//       <div className="mb-4">
//         <button className="w-full flex justify-between items-center font-medium">
//           Filter Name
//           <FiChevronDown />
//         </button>
//       </div>

//       {/* BRANDS */}
//       <div className="mb-6">
//         <button
//           onClick={() => setOpenBrands(!openBrands)}
//           className="w-full flex justify-between items-center font-medium"
//         >
//           Brands
//           <FiChevronDown
//             className={`transition-transform ${
//               openBrands ? "rotate-180" : ""
//             }`}
//           />
//         </button>

//         {openBrands && (
//           <div className="mt-3 space-y-2 text-sm text-gray-600">
//             {[
//               ["ADATA", 19],
//               ["HP", 21],
//               ["TP-Link", 9],
//               ["ASUS", 6],
//               ["Toshiba", 3],
//               ["CANON", 1],
//               ["LG", 1],
//               ["MSI", 1],
//             ].map(([name, count]) => (
//               <div key={name} className="flex justify-between">
//                 <span>{name}</span> <span>{count}</span>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* APPLY BUTTON */}
//       <button className="w-full bg-blue-600 text-white py-3 rounded-full font-medium">
//         Apply Filters (2)
//       </button>
//      </section>


//      <section>
//         <div className="w-[300px] bg-gray-100 mt-5 h-full p-5 rounded-lg">
//             <div className='text-center my-5'>
//                 <p className='font-bold'>Brands</p>
//                 <button className="  px-14   py-2  text-black border mt-3 rounded-full" >All Brands</button>
//             </div>
//             <div className='grid grid-cols-2 items-center gap-5 my-5 '>
//                 <img className='h-24 w-32' src="./logo-img/img-1.png" alt="" />
//                 <img src="./logo-img/img-1.png" alt="icon" />
//                 <img src="./logo-img/img-2.png" alt="icon" />
//                 <img src="./logo-img/img-3.png" alt="icon" />
//                 <img src="./logo-img/img-6.png" alt="icon" />
//                 <img  src="./logo-img/img-2.png"  alt="icon" />
//             </div>
//         </div>
//         <section>
//             <div className="w-[300px] bg-gray-100 text-center mt-5  py-10 px-5  mt-10 h-full  rounded-lg">
//                 <h3 className='font-bold '>Compare Products</h3>
//                 <p>You have no items to compare.</p>
//             </div>
//         </section>
//         <section>
//              <div className="w-[300px] bg-gray-100  text-center mt-5 h-full py-10 px-5 rounded-lg">
//                 <h3 className='font-bold'>My Wish List</h3>
//                 <p>You have no items in your wish list.</p>
//             </div>
//         </section>
//         <div className='mt-5'>
//             <img className='h-[465px]' src="./slider/image 49.png" alt="" />
//         </div>
//      </section>  
//                 <p className='md:hidden block'>MSI has unveiled the Prestige Series line of business-class and gaming notebooks. Tuned for color accuracy, the Prestige Series also leverages True Color Technology, which allows users to adjust the display profile to best fit their computing needs.

// There are six different screen profiles, which are tuned for gaming, reducing eye fatigue, sRGB color accuracy, increasing clarity for words and lines, reducing harmful blue light, and optimizing contrast for watching movies.
// Given the various display profiles and discrete graphics chip, the Prestige Series notebooks can be used for various design work as well as for office tasks given that the screen can be adjusted for better clarity, color accuracy, or for eye strain reduction. Users working with video or 3D rendering will appreciate the     movie mode for which contrast is increased.

// Home users or students can benefit from the anti-blue and the office mode options, both of which are designed to reduce eye strain. This is helpful when working on the computer for extended periods of time. Additionally, in their down time, students can also use the gamer mode to increase the screen brightness.</p>
 
//     </div>

    

//   );
// }




"use client";

import { useState } from "react";
import { FiX, FiChevronDown } from "react-icons/fi";

export default function Filter() {
  // MAIN DROPDOWN
  const [openFilter, setOpenFilter] = useState(true);

  // INNER COLLAPSE
  const [openCategory, setOpenCategory] = useState(true);
  const [openPrice, setOpenPrice] = useState(true);
  const [openColor, setOpenColor] = useState(true);
  const [openBrands, setOpenBrands] = useState(true);

  // DATA
  const priceRanges = [
    { label: "$0.00 - $1,000.00", count: 19 },
    { label: "$1,000.00 - $2,000.00", count: 21 },
    { label: "$2,000.00 - $3,000.00", count: 9 },
    { label: "$3,000.00 - $4,000.00", count: 6 },
    { label: "$4,000.00 - $5,000.00", count: 3 },
    { label: "$5,000.00 - $6,000.00", count: 1 },
    { label: "$6,000.00 - $7,000.00", count: 1 },
    { label: "$7,000.00 And Above", count: 1 },
  ];

  return (
    <div className="space-y-5">
      {/* FILTER BOX */}
      <div className="w-[300px] bg-gray-100 p-5 rounded-lg">
        
        {/* HEADER (MAIN DROPDOWN) */}
        <button
          onClick={() => setOpenFilter(!openFilter)}
          className="w-full flex justify-between items-center mb-4"
        >
          <h2 className="text-lg font-semibold">Filter By</h2>

          <FiChevronDown
            className={`transition-transform duration-300 ${
              openFilter ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* COLLAPSE CONTENT */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            openFilter ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <hr className="mb-4" />

          {/* CATEGORY */}
          <div className="mb-4">
            <button
              onClick={() => setOpenCategory(!openCategory)}
              className="w-full flex justify-between items-center font-medium"
            >
              Category
              <FiChevronDown
                className={`transition-transform ${
                  openCategory ? "rotate-180" : ""
                }`}
              />
            </button>

            {openCategory && (
              <div className="mt-3 space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>CUSTOM PCS</span> <span>15</span>
                </div>
                <div className="flex justify-between">
                  <span>MSI ALL-IN-ONE PCS</span> <span>45</span>
                </div>
                <div className="flex justify-between">
                  <span>HP/COMPAQ PCS</span> <span>1</span>
                </div>
              </div>
            )}
          </div>

          {/* PRICE */}
          <div className="mb-4">
            <button
              onClick={() => setOpenPrice(!openPrice)}
              className="w-full flex justify-between items-center font-medium"
            >
              Price
              <FiChevronDown
                className={`transition-transform ${
                  openPrice ? "rotate-180" : ""
                }`}
              />
            </button>

            {openPrice && (
              <div className="mt-3 space-y-2 text-sm text-gray-600">
                {priceRanges.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between cursor-pointer hover:text-black"
                  >
                    <span>{item.label}</span>
                    <span>{item.count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* COLOR */}
          <div className="mb-4">
            <button
              onClick={() => setOpenColor(!openColor)}
              className="w-full flex justify-between items-center font-medium"
            >
              Color
              <FiChevronDown
                className={`transition-transform ${
                  openColor ? "rotate-180" : ""
                }`}
              />
            </button>

            {openColor && (
              <div className="flex gap-3 mt-3">
                <div className="w-6 h-6 bg-black rounded-full cursor-pointer"></div>
                <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-blue-500 cursor-pointer"></div>
              </div>
            )}
          </div>

          {/* BRANDS */}
          <div className="mb-6">
            <button
              onClick={() => setOpenBrands(!openBrands)}
              className="w-full flex justify-between items-center font-medium"
            >
              Brands
              <FiChevronDown
                className={`transition-transform ${
                  openBrands ? "rotate-180" : ""
                }`}
              />
            </button>

            {openBrands && (
              <div className="mt-3 space-y-2 text-sm text-gray-600">
                {[
                  ["ADATA", 19],
                  ["HP", 21],
                  ["TP-Link", 9],
                  ["ASUS", 6],
                  ["Toshiba", 3],
                  ["CANON", 1],
                  ["LG", 1],
                  ["MSI", 1],
                ].map(([name, count]) => (
                  <div key={name} className="flex justify-between">
                    <span>{name}</span>
                    <span>{count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* APPLY BUTTON */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-full font-medium">
            Apply Filters (2)
          </button>
        </div>
      </div>

      {/* EXTRA SIDEBAR */}
      <div className="w-[300px] bg-gray-100 p-5 rounded-lg text-center">
        <h3 className="font-bold mb-3">Brands</h3>
        <button className="px-10 py-2 border rounded-full">
          All Brands
        </button>

        <div className="grid grid-cols-2 gap-4 mt-5">
          <img src="/logo-img/img-1.png" alt="" />
          <img src="/logo-img/img-2.png" alt="" />
          <img src="/logo-img/img-3.png" alt="" />
          <img src="/logo-img/img-6.png" alt="" />
        </div>
      </div>

      {/* COMPARE */}
      <div className="w-[300px] bg-gray-100 text-center py-10 px-5 rounded-lg">
        <h3 className="font-bold">Compare Products</h3>
        <p>You have no items to compare.</p>
      </div>

      {/* WISHLIST */}
      <div className="w-[300px] bg-gray-100 text-center py-10 px-5 rounded-lg">
        <h3 className="font-bold">My Wish List</h3>
        <p>You have no items in your wish list.</p>
      </div>

      {/* BANNER */}
      <div>
        <img
          className="w-[300px] h-[465px] object-cover rounded-lg"
          src="./slider/image 49.png"
          alt="banner"
        />
      </div>
       <div className='md:hidden block mt-20 text-gray-300'>
               <p className='mt-20 text-gray-300'>MSI has unveiled the Prestige Series line of business-class and gaming notebooks. Tuned for color accuracy, the Prestige Series also leverages True Color Technology, which allows users to adjust the display profile to best fit their computing needs.

There are six different screen profiles, which are tuned for gaming, reducing eye fatigue, sRGB color accuracy, increasing clarity for words and lines, reducing harmful blue light, and optimizing contrast for watching movies.
Given the various display profiles and discrete graphics chip, the Prestige Series notebooks can be used for various design work as well as for office tasks given that the screen can be adjusted for better clarity, color accuracy, or for eye strain reduction. Users working with video or 3D rendering will appreciate the     movie mode for which contrast is increased.

Home users or students can benefit from the anti-blue and the office mode options, both of which are designed to reduce eye strain. This is helpful when working on the computer for extended periods of time. Additionally, in their down time, students can also use the gamer mode to increase the screen brightness.</p>
    <div className="flex justify-center items-center">
        <button className="py-3 mt-10 text-center  px-5 border border-gray-300 text-gray-400 rounded-2xl">More</button>
    </div>
      </div>
    </div>
  );
}