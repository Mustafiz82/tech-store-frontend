import Checking from '@/component/Checking';
import React from 'react';



export default function Page() {
 
   const products = [
    {
        id:1,
       name: "MSI MPG Trident 3",
    desc: "MSI MPG Trident 3 10SC-005AU Intel i7 10700F, RTX 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD",
    image: "./products/p-img-3.png",
    sku: "D55IIA",
    colors: ["#1f2937", "#d6d3d1", "#e5e7eb"],
    },
  
  ];

    const items = ["Product Support", "FAQ", "Our Buyer Guide"];
  return (
    
    <section className="max-w-7xl mx-auto px-4 mt-10 mb-20">
         {/* product card */}
      <div className="border-b-gray-600 mt-5 bg-white">
       

       <Checking></Checking>

     
      </div>

     
     <section className='my-12 '>
         {/* HERO SECTION */}
      <div className="relative w-full h-[500px] overflow-hidden">

        <div className="absolute inset-0 bg-black"></div>

        <div
          className="absolute top-0 right-0 w-1/2 h-full bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage:
              "url('./img/backG.png')",}}>
               
              </div>

        <div className="absolute  inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-4">
          <div className="text-white max-w-lg">

            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              Outplay the Competition
            </h1>

            <p className="text-gray-300 text-sm mb-4">
             Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.


            </p>

            <p className="text-gray-400 text-xs">
              *Performance compared to i7-9700. Specs varies by model.
            </p>

          </div>
        </div>

      </div>
     </section>
     <section>
    <div
           className="w-full min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[420px] 
              bg-no-repeat bg-cover bg-center flex items-center"
        style={{  backgroundImage: "url('/img/BG.png')",}}>
   {/* Container */}
   <div className="max-w-6xl mx-auto w-full px-4">
    
    {/* Left content */}
    <div className="md:max-w-md max-w-sm space-y-4">

      {items.map((item, i) => (
        <div
          key={i}
          className="flex justify-between items-center bg-white/90 backdrop-blur-sm 
          border border-gray-300 rounded-md px-5 py-4 hover:shadow-sm transition"
        >
          <span className="text-sm font-medium text-gray-700">
            {item}
          </span>
          <span className="text-blue-500 text-lg">→</span>
        </div>
      ))}

    </div>

  </div>
</div>
     </section>

      {/* FEATURES SECTION */}
      <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-4">

        <div className="text-center max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Features
          </h2>
          <p className="text-gray-400 text-sm">
            The MPG series brings out the best in gamers.
          </p>
        </div>

        <div className="grid grid-cols-1 py-10 md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">

          {[17, 16, 17, 15].map((img, i) => (
            <div key={i}>
              <div className="w-20 h-20 mx-auto bg-black rounded-full flex items-center justify-center mb-4 border border-gray-700">
                <img
                  src={`/img/image ${img}.png`}
                  alt="icon"
                  className="w-12"
                />
              </div>

              <p className="text-sm font-medium">
                Feature Title
              </p>

              <p className="text-gray-400 text-xs mt-2">
                The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB lighting control and synchronization.
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}


// export default function ProductSection() {
//   const product = {
//     name: "MSI MPG Trident 3",
//     desc: "MSI MPG Trident 3 10SC-005AU Intel i7 10700F, RTX 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD",
//     image: "/img/product.png",
//     sku: "D55IIA",
//     colors: ["#1f2937", "#d6d3d1", "#e5e7eb"],
//   };

//   return (
//     <div className="w-full bg-gray-100 py-10">
//       <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">

        

//         {/* RIGHT */}
//         <div className="flex-1 flex flex-col items-center relative">

//           {/* Side Icons */}
//           <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-3">
//             {["❤", "≡", "✉"].map((icon, i) => (
//               <div
//                 key={i}
//                 className="w-8 h-8 border rounded-full flex items-center justify-center text-gray-400 text-sm"
//               >
//                 {icon}
//               </div>
//             ))}
//           </div>

//           {/* Image */}
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-[200px] sm:w-[240px] md:w-[280px] object-contain"
//           />

//           {/* Zip */}
//           <div className="mt-6 text-xs text-gray-500 flex items-center gap-2">
//             <span className="font-semibold text-black">zip</span>
//             <span>own it now, up to 6 months interest free</span>
//           </div>

//           {/* Dots */}
//           <div className="flex gap-2 mt-4">
//             {[0, 1, 2].map((_, i) => (
//               <span
//                 key={i}
//                 className={`w-2 h-2 rounded-full ${
//                   i === 0 ? "bg-blue-500" : "bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>

//         </div>

//       </div>

//       {/* MORE INFO */}
//       <div className="max-w-7xl mx-auto px-4 mt-6">
//         <p className="text-sm font-semibold text-gray-700 cursor-pointer">
//           + MORE INFORMATION
//         </p>
//       </div>
//     </div>
//   );
// }




