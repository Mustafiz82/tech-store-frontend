'use client'

// import React from 'react';

// const Hero = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Hero;


import React, { useState, useEffect } from "react";





const Hero= () => {
  const slides = [
     {
      img: "./slider/slider-img.png",
    },
     {
      img: "./slider/slider-img.png",
    },
     {
      img: "./slider/slider-img.png",
    },
    
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className=" xl:px-40 lg:px-28 sm:px-20 px-5 ">
        <div className="relative w-full h-[173px]   sm:h-[173px] md:h-[328px]  overflow-hidden">
      
      {/* Image */}
      <img
        src={slides[current].img}
        alt="hero"
        className="w-full h-full  object-cover object-center"
      />

      {/* Overlay */}
      {/* <div className="absolute w-full h-[173px] sm:h-[173px] md:h-[328px]    xl:px-40 lg:px-28 sm:px-20 px-5  inset-0 bg-black/50"></div> */}

     

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 text-white text-lg sm:text-2xl"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 text-white text-lg sm:text-2xl"
      >
        ❯
      </button>

     
     
    </div>
    </div>
  );
};

export default Hero;