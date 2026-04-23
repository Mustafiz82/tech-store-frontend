"use client"
import React, { useState } from "react";
import Filter from '@/component/Filters/Filter';
import FilterBy from '@/component/Filters/FilterBy';
import Image from 'next/image';

import { FiGrid, FiMenu, FiHeart, FiRepeat, FiEye  } from 'react-icons/fi';




const page = () => {
 
    const [currentPage,setCurrentPage] =useState(1);
     const data=[1, 2, 3,4,5,6,7,"...", 15];
      const products = [
    {
      id: 1,
      isActive: true,
     image:"./logo-img/Group-star 133.png",
       img:"./products/p-img-1.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One PC",
      oldPrice: "$499.00",
      newPrice: "$499.00",
       rating: "review (4)",
    },
    {
      id: 2,
      isActive: true,
      image:"./logo-img/Group-star 133.png",
       img:"./products/p-img-2.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$120.00",
      newPrice: "$90.00",
      rating: "review (4)",
 
    },
    {
      id: 3,
      isActive: false,
       image:"./logo-img/Group-star 133.png",
       img:"./products/p-img-3.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$80.00",
      newPrice: "$60.00",
      rating: "review (4)",
    },
    {
      id: 4,
      isActive: true,
       image:"./logo-img/Group-star 133.png",
       img:"./products/p-img-4.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$70.00",
      newPrice: "$50.00",
     rating: "review (4)",
    },
    {
      id: 5,
      isActive: true,
      image:"./logo-img/Group-star 133.png",
       img:"./products/p-img-3.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$150.00",
      newPrice: "$120.00",
     rating: "review (4)",
    },
    {
      id: 6,
      isActive: false,
     image:"./logo-img/Group-star 133.png",
        img:"./products/p-img-3.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$400.00",
      newPrice: "$350.00",
     rating: "review (4)",
    },
    {
      id: 7,
      isActive: true,
     image:"./logo-img/Group-star 133.png",
       img:"./products/p-img-4.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$200.00",
      newPrice: "$170.00",
       rating: "review (4)",
    },
    {
      id: 8,
      isActive: true,
        image:"./logo-img/Group-star 133.png",
       img:"./products/p-img-3.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$130.00",
      newPrice: "$100.00",
       rating: "review (4)",
    },
    {
      id: 9,
      isActive: false,
      image:"./logo-img/Group-star 133.png",
        img:"./products/p-img-2.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$600.00",
      newPrice: "$520.00",
       rating: "review (4)",
    },
  
      {
      id: 10,
      isActive: true,
      image:"./logo-img/Group-star 133.png",
        img:"./products/p-img-1.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One PC",
      oldPrice: "$499.00",
      newPrice: "$499.00",
       rating: "review (4)",
    },


  ];
 
    return (
        <div>
            <div className='max-w-7xl mx-auto md:block hidden px-4 overflow-hidden mb-20'>
                <div className='mb-10'>
                    <div>
                      <Image  src="/slider/slider-1.png" alt="banner" width={1200} height={400} className=" md:block hidden w-full h-auto"/>
                    </div>
                     <p className="text-gray-300 my-5">Home  ›  Laptops  ›  Everyday Use Notebooks  ›  MSI Prestige Series  ›  MSI WS Series</p>
                   <h1 className="font-bold text-xl">MSI PS Series (20)</h1>
                </div>
                <div  className='md:flex md:justify-center  md:mt-0 mt-10 gap-5 '>
                    <div className='space-y-5'>
                        <FilterBy></FilterBy>
                        <Filter></Filter>
                    </div>
                     <div>
                           <div className='flex justify-between  '>
                            <div><p className="text-sm text-gray-600 ml-5">  Items 1-35 of 61 </p></div>
                          <div className="flex justify-around items-center gap-3">
                                  
                                  {/* SORT */}
                                  <div className="flex border px-3 border-gray-300 items-center gap-2 text-sm">
                                    <span className="text-gray-500">Sort By:</span>
                                    <select className=" rounded px-2 py-1 text-sm">
                                      <option>Position</option>
                                      <option>Price</option>
                                      <option>Name</option>
                                    </select>
                                  </div>
                        
                                  {/* SHOW */}
                                  <div className="flex border px-3 border-gray-300 items-center gap-2 text-sm">
                                    <span className="text-gray-500">Show:</span>
                                    <select className=" rounded px-2 py-1 text-sm">
                                      <option>35 per page</option>
                                      <option>20 per page</option>
                                      <option>50 per page</option>
                                    </select>
                                  </div>
                        
                                  {/* VIEW ICONS */}
                                  <div className="flex items-center gap-2">
                                    <button className="p-2 border rounded hover:bg-gray-100">
                                      <FiGrid size={16} />
                                    </button>
                                    <button className="p-2 border rounded hover:bg-gray-100">
                                      <FiMenu size={16} />
                                    </button>
                                  </div>
                                </div>
                           </div>
                           <div className="flex flex-wrap mb-10 items-center gap-2">
        
                           
                         <div className="flex ml-5 items-center gap-2 border border-gray-300 px-3 py-1 text-sm">
                               CUSTOM PCS (24) <span className="text-red-500 cursor-pointer">✕</span>
                         </div>

                         <div className="flex items-center gap-2 border border-gray-300 px-3 py-1 text-sm ">  HP/COMPAQ PCS (24)
                             <span className="text-red-500 cursor-pointer">✕</span>
                         </div>

                         {/* CLEAR */}
                         <button className="px-3 py-1 border border-gray-300  ">Clear All </button>
                          </div>
                          <div>
                          
                            <div className="space-y-6 p-4">
                         {products.slice(0,6).map((item) => (
                      <div  key={item.id} className="w-full border border-gray-200 bg-white  p-4 flex flex-col md:flex-row gap-6 items-center"  >
       
                      <div>
               
                       <img  src={item.img} alt={item.name} className="w-40 object-contain" />
                
                          <img src={item.image} alt={item.name} />
                       </div>

          {/* 🔹 Middle Content */}
          <div className="w-full md:w-2/3">
            

            {/* SKU */}
            <p className="text-xs text-gray-400 mb-2">
              SKU: {item.sku}
            </p>
              {/* 🔹 Right Info */}
          <div className="flex justify-between items-center">
            
              <h2 className=" w-1/2 font-semibold text-gray-800 mb-1">
              {item.description}
            </h2>
            <div className="space-y-1 text-right">
              <p>CPU: N/A </p>
              <p>Featured: N/A </p>
              <p>UI Ports: N/A</p>
            </div>

           
          </div>
           
        
            <div className="flex items-center gap-5 mb-3">
              {item.oldPrice && (
                <span className="text-gray-400 line-through text-sm">
                  ${item.oldPrice}
                </span>
              )}
              <span className="text-lg font-bold text-gray-800">
                ${item.price}
              </span>
            </div>

            <div className='flex justify-between'>
              {/* Button */}
            <button className="px-4 py-2  border-2 font-bold border-blue-800 text-blue-800 rounded-full hover:bg-blue-800 hover:text-blue-800 transition">
              Add To Cart
            </button>
             <div className="flex gap-3 mt-4 text-gray-400">
              <FiRepeat className="cursor-pointer hover:text-blue-500" />
              <FiHeart className="cursor-pointer hover:text-red-500" />
              <FiEye className="cursor-pointer hover:text-blue-500" />
            </div>
            </div>
          </div>

          
        </div>
      ))}
    </div>
    {/* PAGINATION */}
      <div className="flex mt-10 justify-center items-center gap-2">
        {/* Prev */}
        <button className="w-8 h-8 rounded-full border flex items-center justify-center">
          ‹
        </button>

        {/* Pages */}
        {data.map((p, i) => (
          <button
            key={i}
            onClick={() => typeof p === "number" && setCurrentPage(p)}
            className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm ${
              currentPage === p
                ? "bg-gray-200 font-semibold"
                : "text-gray-500"
            }`}
          >
            {p}
          </button>
        ))}

        {/* Next */}
        <button className="w-8 h-8 rounded-full border flex items-center justify-center">
          ›
        </button>
      </div>
      <div className=' mt-20 ml-5 text-gray-300'>
               <p>MSI has unveiled the Prestige Series line of business-class and gaming notebooks. Tuned for color accuracy, the Prestige Series also leverages True Color Technology, which allows users to adjust the display profile to best fit their computing needs.

There are six different screen profiles, which are tuned for gaming, reducing eye fatigue, sRGB color accuracy, increasing clarity for words and lines, reducing harmful blue light, and optimizing contrast for watching movies.
Given the various display profiles and discrete graphics chip, the Prestige Series notebooks can be used for various design work as well as for office tasks given that the screen can be adjusted for better clarity, color accuracy, or for eye strain reduction. Users working with video or 3D rendering will appreciate the     movie mode for which contrast is increased.

Home users or students can benefit from the anti-blue and the office mode options, both of which are designed to reduce eye strain. This is helpful when working on the computer for extended periods of time. Additionally, in their down time, students can also use the gamer mode to increase the screen brightness.</p>
      </div>
                          </div>
                              
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;





