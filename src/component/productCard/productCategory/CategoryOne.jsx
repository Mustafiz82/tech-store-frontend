"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  "MSI GS Series",
  "MSI GT Series",
  "MSI GL Series",
  "MSI GE Series",
];

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

const CategoryOne = () => {
  const [active, setActive] = useState(0);

  return (
    <div className=" xl:px-40 lg:px-28 sm:px-20 my-12 px-5">

      {/* Tabs */}
      <div className="flex gap-6 mb-6 text-sm font-semibold">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`${
              active === index
                ? "text-black border-b-2 border-black"
                : "text-gray-400"
            } pb-1`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Layout */}
      <div className="grid md:grid-cols-5 gap-5">

        {/* Left Banner */}
        <div className="relative hidden md:block col-span-1 h-[346px] md:w-[229px] ">
          <img
            src="./products/aside1.png"
            alt="banner"
            
            className="object-cover h-[346px] md:w-[229px] rounded-xl"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl">
            <div className="text-center">
              <h2 className="text-white text-lg font-bold">
                MSI Laptops
              </h2>
              <p className="text-white text-xs underline mt-2">
                See All Products
              </p>
            </div>
          </div>
        </div>
             {/* mobile */}
         <div className="relative w-full h-[250px] md:hidden rounded-xl overflow-hidden">
      
      {/* Image */}
      <img
        src="./products/aside1.png"
        alt="Custom Builds"
        
        className="object-cover w-full"
      />

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
        <div className="col-span-4 grid grid-cols-2 lg:grid-cols-5 gap-5">
          {products.slice(0, 5).map((product) => {
          const {id,stock,img,image,description,oldPrice,newPrice,rating  } = product;

            return (
              <div
                key={id}
                className=" p-3 hover:shadow-md transition h-[346px] w-[200px]"
              >
                <p className="text-green-600 text-xs mb-1">
                  ● {stock ? "In stock" : "Out of stock"}
                </p>

                <div className="h-[120px] flex items-center justify-center">
                  <img
                    src={img}
                    alt={img}
                    className="object-contain h-[346px] w-[229px]"
                  />
                </div>

                <div className="text-yellow-500 text-sm mt-8">
                  <img src={image} alt="" />
                  <p>{rating}</p>
                </div>

                <h3 className="text-xs mt-1 line-clamp-2">
                  {description}
                </h3>

                <div className="mt-2">
                  <span className="text-gray-400 line-through text-xs mr-1">
                    ${oldPrice}
                  </span>
                  <p className="font-bold">${newPrice}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryOne;