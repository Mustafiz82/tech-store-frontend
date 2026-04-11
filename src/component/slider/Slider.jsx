// "use client";
// import { useState, useEffect } from "react";

// // Slider data
// export const sliderData = [
//   {
//     id: 1,
//     title: "Beautiful Landscape",
//     image: "/slider/slider-img.png",
//   },
//   {
//     id: 2,
//     title: "City View",
//     image: "/slider/slider-img.png",
//   },
//   {
//     id: 3,
//     title: "Beach Sunset",
//     image: "/slider/slider-img.png",
//   },
// ];

// export default function DoubleSlider() {
//   const [slides, setSlides] = useState([]);
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     // Simulate API fetch
//     setTimeout(() => setSlides(sliderData), 500);
//   }, []);

//   const nextSlide = () => {
//     setCurrent((prev) =>
//       prev + 2 >= slides.length ? 0 : prev + 2
//     );
//   };

//   const prevSlide = () => {
//     setCurrent((prev) =>
//       prev - 2 < 0
//         ? slides.length % 2 === 0
//           ? slides.length - 2
//           : slides.length - 1
//         : prev - 2
//     );
//   };

//   if (!slides.length) return <div>Loading...</div>;

//   // Get two slides to display
//   const visibleSlides = slides.slice(current, current + 1);
//   if (visibleSlides.length < 1) {
//     visibleSlides.push(slides[0]); // loop back if only 1 left
//   }

//   return (
//     <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-lg shadow-lg">
//       {/* Slides */}
//       <div className="flex transition-transform duration-600">
//         {visibleSlides.map((slide) => (
//           <div key={slide.id} className="w-full">
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-[328px] object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white"
//       >
//         ❮
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white"
//       >
//         ❯
//       </button>
//     </div>
//   );
// }




// {images.map((img, index) => (
//   <img
//     key={img.id}
//     src={img.url}
//     alt="slider"
//     className={...}
//   />
// ))}

"use client";

import { useState } from "react";

const images = [
 "/slider/slider-img.png",
  "/slider/slider-img.png",
  "/slider/slider-img.png",
 
];


export default function Slider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="w-full flex justify-center px-4">
      <div className="relative w-full max-w-6xl overflow-hidden rounded-2xl shadow-lg">
        {/* Images */}
        {images?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="slider"
            className={`absolute w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px] object-cover transition-opacity duration-500 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
          
        ))}

        {/* Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
        >
          ❯
        </button>

       
      </div>
    </div>
  );
}


