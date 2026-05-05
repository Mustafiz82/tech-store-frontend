"use client";

import { useState } from "react";

export default function FilteringProduct() {
    const products = [
    {
      id: 1,
      isActive: true,
      img: "./products/p-img-4.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One PC",
      oldPrice: "$499.00",
      newPrice: "$499.00",
       rating: "review (4)",
    },
    {
      id: 2,
      isActive: true,
      img: "./products/p-img-1.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$120.00",
      newPrice: "$90.00",
      rating: "review (4)",
 
    },
    {
      id: 3,
      isActive: false,
      img: "./products/p-img-2.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$80.00",
      newPrice: "$60.00",
      rating: "review (4)",
    },
    {
      id: 4,
      isActive: true,
      img: "./products/p-img-3.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$70.00",
      newPrice: "$50.00",
     rating: "review (4)",
    },
    {
      id: 5,
      isActive: true,
      img: "./products/p-img-3.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$150.00",
      newPrice: "$120.00",
     rating: "review (4)",
    },
    {
      id: 6,
      isActive: false,
     img: "./products/p-img-3.png",
      image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$400.00",
      newPrice: "$350.00",
     rating: "review (4)",
    },
    {
      id: 7,
      isActive: true,
      img: "./products/p-img-2.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$200.00",
      newPrice: "$170.00",
       rating: "review (4)",
    },
    {
      id: 8,
      isActive: true,
       img: "./products/p-img-4.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$130.00",
      newPrice: "$100.00",
       rating: "review (4)",
    },
    {
      id: 9,
      isActive: false,
       img: "./products/p-img-2.png",
        image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$600.00",
      newPrice: "$520.00",
       rating: "review (4)",
    },
  
      {
      id: 10,
      isActive: true,
      img: "./products/p-img-4.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One PC",
      oldPrice: "$499.00",
      newPrice: "$499.00",
       rating: "review (4)",
    },
    {
      id: 11,
      isActive: true,
      img: "./products/p-img-1.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$120.00",
      newPrice: "$90.00",
      rating: "review (4)",
 
    },
    {
      id:12,
      isActive: false,
      img: "./products/p-img-2.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$80.00",
      newPrice: "$60.00",
      rating: "review (4)",
    },
    {
      id: 13,
      isActive: true,
      img: "./products/p-img-3.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$70.00",
      newPrice: "$50.00",
     rating: "review (4)",
    },
    {
      id: 14,
      isActive: true,
      img: "./products/p-img-3.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$150.00",
      newPrice: "$120.00",
     rating: "review (4)",
    },
    {
      id: 15,
      isActive: false,
     img: "./products/p-img-3.png",
      image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$400.00",
      newPrice: "$350.00",
     rating: "review (4)",
    },
    {
      id: 16,
      isActive: true,
      img: "./products/p-img-2.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$200.00",
      newPrice: "$170.00",
       rating: "review (4)",
    },
    {
      id: 17,
      isActive: true,
       img: "./products/p-img-4.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$130.00",
      newPrice: "$100.00",
       rating: "review (4)",
    },
    {
      id: 18,
      isActive: false,
       img: "./products/p-img-2.png",
        image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$600.00",
      newPrice: "$520.00",
       rating: "review (4)",
    },
    {
      id:19,
      isActive: true,
      img: "./products/p-img-3.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$499.00",
      newPrice: "$450.00",
       rating: "review (4)",
    },
      {
      id:20,
      isActive: true,
      img: "./products/p-img-4.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One PC",
      oldPrice: "$499.00",
      newPrice: "$499.00",
       rating: "review (4)",
    }

  ];
 
  const [page, setPage] = useState(2);

  return (
    <div className="max-w-7xl mx-auto px-4 ">
       {/* Products */}
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {products.map((product) => {
          const {id,stock,img,image,description,oldPrice,newPrice,rating  } = product;

            return (
              <div  key={id}  className=" p-3 hover:shadow-md transition h-[346px] w-[200px]" >
                <p className="text-green-600 text-xs mb-1">
                  ● {stock ?  "Out of stock" :"In stock" }
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
      

      {/* PAGINATION */}
      <div className="flex mt-10 justify-center items-center gap-2">
        {/* Prev */}
        <button className="w-8 h-8 rounded-full border flex items-center justify-center">
          ‹
        </button>

        {/* Pages */}
        {[1, 2, 3, "...", 15].map((p, i) => (
          <button
            key={i}
            onClick={() => typeof p === "number" && setPage(p)}
            className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm ${
              page === p
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
      <div className='hidden md:block mt-20 text-gray-300'>
               <p>MSI has unveiled the Prestige Series line of business-class and gaming notebooks. Tuned for color accuracy, the Prestige Series also leverages True Color Technology, which allows users to adjust the display profile to best fit their computing needs.

There are six different screen profiles, which are tuned for gaming, reducing eye fatigue, sRGB color accuracy, increasing clarity for words and lines, reducing harmful blue light, and optimizing contrast for watching movies.
Given the various display profiles and discrete graphics chip, the Prestige Series notebooks can be used for various design work as well as for office tasks given that the screen can be adjusted for better clarity, color accuracy, or for eye strain reduction. Users working with video or 3D rendering will appreciate the     movie mode for which contrast is increased.

Home users or students can benefit from the anti-blue and the office mode options, both of which are designed to reduce eye strain. This is helpful when working on the computer for extended periods of time. Additionally, in their down time, students can also use the gamer mode to increase the screen brightness.</p>
      </div>
    </div>
  );
}