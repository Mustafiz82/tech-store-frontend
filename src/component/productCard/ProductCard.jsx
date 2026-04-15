'use client'
 import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
 



const ProductCard = () => {
     const data = [
    {
      id: 1,
      isActive: true,
      img: "./products/p-img-4.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One PC",
      oldPrice: "$499.00",
      newPrice: "$499.00",
       rating: "review (4)"
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
      rating: "review (4)"
    },
    {
      id: 4,
      isActive: true,
      img: "./products/p-img-3.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$70.00",
      newPrice: "$50.00",
     rating: "review (4)"
    },
    {
      id: 5,
      isActive: true,
      img: "./products/p-img-3.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$150.00",
      newPrice: "$120.00",
     rating: "review (4)"
    },
    {
      id: 6,
      isActive: false,
     img: "./products/p-img-3.png",
      image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$400.00",
      newPrice: "$350.00",
     rating: "review (4)"
    },
    {
      id: 7,
      isActive: true,
      img: "./products/p-img-2.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$200.00",
      newPrice: "$170.00",
       rating: "review (4)"
    },
    {
      id: 8,
      isActive: true,
       img: "./products/p-img-4.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$130.00",
      newPrice: "$100.00",
       rating: "review (4)"
    },
    {
      id: 9,
      isActive: false,
       img: "./products/p-img-2.png",
        image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$600.00",
      newPrice: "$520.00",
       rating: "review (4)"
    },
    {
      id: 10,
      isActive: true,
      img: "./products/p-img-3.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$499.00",
      newPrice: "$450.00",
       rating: "review (4)"
    }
  ];


  return (
  

      
        <div className=" xl:px-40 lg:px-28 sm:px-20 my-12 px-5">
      <Swiper
     
        modules={[Navigation, Autoplay,Pagination]}
        navigation
        autoplay={{ delay: 2500 }}
        loop={true}
        spaceBetween={16}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
          1536: { slidesPerView: 6},
          
        }}
       >
        {data.map((item) => (
          <SwiperSlide  key={item.id}>
            
            {/* Card */}
            <div className="w-[234px] h-[346px]  p-4 transition">
              
            <div className="flex items-center justify-center">  {/* Image */}
              <img
                src={item.img}
                className="h-auto w-36 object-cover rounded"
              /></div>
                    {/* ⭐ Stars */}
              <div className=" p-6 w-[185px] flex justify-center items-center h-[85px] mt-6 items-center">
               <div>
                 <div className="text-yellow-400 flex gap-1 mt-3 items-center text-sm">
                  <img src={item.image} className="h-3 w-[73px]" alt="logo-image" />
                     <p className="text-gray-400">{item.rating}</p>
              </div>

              {/* Title */}
              <h2 className="text-sm font-semibold mt-2">
                {item.description}
              </h2>

              {/* Prices */}
              <p className="text-gray-400 line-through mt-2 text-sm">
                {item.oldPrice}
              </p>

              <p className="text-black font-medium font-bold">
                {item.newPrice}
              </p>
               </div>
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCard;