"use client"
import React from 'react';

import Link from "next/link";
import ProductList from './ProductList';


const CardItem = () => {
   
   const products = [
    {
      id: 1,
       stock: true,
      img: "./products/zip.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One PC",
      oldPrice: "$499.00",
      newPrice: "$499.00",
       rating: "review (4)"
    },
    {
      id: 2,
       stock: false,
      img: "./products/zip1.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$120.00",
      newPrice: "$90.00",
      rating: "review (4)",
 
    },
    {
      id: 3,
       stock: true,
      img: "./products/zip.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$80.00",
      newPrice: "$60.00",
      rating: "review (4)"
    },
    {
      id: 4,
       stock: true,
      img: "./products/zip1.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$70.00",
      newPrice: "$50.00",
     rating: "review (4)"
    },
    {
      id: 5,
       stock: false,
      img: "./products/zip.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$150.00",
      newPrice: "$120.00",
     rating: "review (4)"
    },
    {
      id: 6,
      stock: true,
     img: "./products/zip1.png",
      image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$400.00",
      newPrice: "$350.00",
     rating: "review (4)"
    },
    {
      id: 7,
      stock: false,
      img: "./products/zip.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$200.00",
      newPrice: "$170.00",
       rating: "review (4)"
    },
   
  ];


  return (
    <div className=" max-w-7xl mx-auto px-4 py-10 my-12 ">

      {/* Promo Bar */}
      <div className="bg-[#F5F7FF] text-center flex justify-center items-center py-5 gap-2">
        <img src="./logo-img/zip.png" alt="" />
        <p className='text-xl '><span className="text-[#00AEB8] text-xl">|</span>  own it now, up to 6 months interest free</p>
      </div>
      {/* mobile */}

       <div>
    <div >
  
  <div class="relative 
              w-full h-[200px] block
              md:w-hidden md:h-hidden 
              overflow-hidden rounded-lg">

   
    <img 
      src="./products/aside1.png" 
      alt="MSI Laptops"
      class="w-full h-full object-cover"
    />

  
    <div class="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center">
      
      <h2 class="text-white font-semibold text-lg md:text-xl">
        MSI Laptops
      </h2>

      <a href="#" class="text-white underline text-sm mt-2">
        See All Products
      </a>

    </div>

  </div>

   </div>
  </div>

      <div className=" grid md:grid-cols-5 gap-16 mt-5 ">
         <div>
    
  {/* desktop layout */}
  <div class="relative 
             hidden md:block
              md:w-[229px] md:h-[346px] 
              overflow-hidden rounded-lg">

   
    <img 
      src="./products/aside1.png" 
      alt="MSI Laptops"
      class="w-full h-full object-cover"
    />

  
    <div class="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center">
      
      <h2 class="text-white font-semibold text-lg md:text-xl">
        MSI Laptops
      </h2>

      <a href="#" class="text-white underline text-sm mt-2">
        See All Products
      </a>

    </div>

  </div>


  </div>

              
        {/* Products */}
        <div className=" col-span-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-10 gap-5">
          {products?.slice(0, 5)?.map((product) => (
            <ProductList key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
};



export default CardItem;