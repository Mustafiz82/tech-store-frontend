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
    <div className=" xl:px-40 lg:px-28 sm:px-20 my-12 px-5">

      {/* Promo Bar */}
      <div className="bg-[#F5F7FF] text-center flex justify-center items-center py-5 gap-2">
        <img src="./logo-img/zip.png" alt="" />
        <p className='text-xl '><span className="text-[#00AEB8] text-xl">|</span>  own it now, up to 6 months interest free</p>
      </div>

      <div className=" grid md:grid-cols-5 gap-16 mt-5 ">


       <div className="relative  hidden md:block h-[346px] w-[229px] ">
     <img
      src="./products/aside1.png"
      className="h-[346px] md:w-[229px]  object-cover rounded-xl"
      />

      {/* Overlay */}
     <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl">
    
          <div className="text-center">
              <h2 className="text-white text-xl font-bold">
                 Custom Builds
              </h2>
              <p className="text-white text-sm underline mt-2">
                 See all products
              </p>
         </div>

       </div>
    </div>
             {/* mobile */}
         <div className="relative w-full h-[250px] md:hidden rounded-xl overflow-hidden">
      
      {/* Image */}
        <img
          src="./products/aside1.png" alt="Custom Builds"className="object-cover w-full"/>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
        
        <h2 className="text-white text-xl md:text-2xl font-bold">
          Custome Builds
        </h2>

        <a
          href="/products"
          className="text-white text-sm mt-2 underline hover:text-gray-300 transition"
        >
          See All Products
        </a>

      </div>
    </div>


        {/* Products */}
        <div className=" col-span-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {products?.slice(0, 5)?.map((product) => (
            <ProductList key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
};



export default CardItem;