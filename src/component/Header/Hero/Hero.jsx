// 'use client'

// import React, { useState, useEffect } from "react";


"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

const Hero = () => {
  const slides = [
    {
      id: 1,
      img: "./slider/slider-img.png",
    },
    {
      id: 2,
        img: "./slider/slider-img.png",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
        
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}        // ← arrow buttons
          pagination={{ clickable: true }} // ← dots clickable
          loop={true}
          className="w-full h-full"
        >
          {slides.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative w-full h-full">

                {/* Image */}
                <img
                  src={item.img}
                  alt="hero"
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Hero;














