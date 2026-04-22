// import Filter from '@/component/Filters/Filter';
// import FilteringProduct from '@/component/Filters/FilteringProduct';
// import Image from 'next/image';
// import React from 'react';
// import img from "./slider/slider-1.png";

// const page = () => {
//     return (
//         <div className=" max-w-7xl mx-auto px-4 mt-10 mb-20">

//             <div>
//                 <Image src={img} alt="img" />
//             </div>
//           <div className='flex gap-2'>
//              <div className='w-1/4'> <Filter></Filter></div>
//             <div className='w-full'><FilteringProduct></FilteringProduct></div>
//           </div>
//         </div>
//     );
// };

// export default page;



import Filter from "@/component/Filters/Filter";
import FilteringProduct from "@/component/Filters/FilteringProduct";
import Image from "next/image";
import { FiGrid, FiMenu } from "react-icons/fi";



const Page = () => {
  return (
    <div className="max-w-7xl mx-auto px-4  mb-20">
      
      {/* TOP BANNER */}
      <div className="mb-6 space-y-5">
       <Image  src="/slider/slider-1.png" alt="banner" width={1200} height={400} className="w-full h-auto"/>
       <div>
        <p className="text-gray-300">Home  ›  Laptops  ›  Everyday Use Notebooks  ›  MSI Prestige Series  ›  MSI WS Series</p>
        <h1 className="font-bold text-2xl">MSI PS Series (20)</h1>
       </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex mt-10 flex-col lg:flex-row gap-8">
        
        {/* LEFT SIDEBAR */}
        <div className="w-full lg:w-[280px] shrink-0">
          <div className="sticky top-6">
            <Filter />
          </div>
        </div>

        {/* RIGHT PRODUCTS */}
        <div className="flex-1">
               <div className="space-y-4">
      
      {/* TOP BAR */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 rounded-lg p-3">
        
        {/* LEFT */}
        <p className="text-sm text-gray-600">
          Items 1-35 of 61
        </p>

        {/* RIGHT */}
        <div className="flex flex-wrap items-center gap-3">
          
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

      {/* FILTER TAGS */}
      <div className="flex flex-wrap mb-10 items-center gap-2">
        
        {/* TAG */}
        <div className="flex items-center gap-2 border border-gray-300 px-3 py-1 text-sm">
          CUSTOM PCS (24)
          <span className="text-red-500 cursor-pointer">✕</span>
        </div>

        <div className="flex items-center gap-2 border border-gray-300 px-3 py-1 text-sm ">
          HP/COMPAQ PCS (24)
          <span className="text-red-500 cursor-pointer">✕</span>
        </div>

        {/* CLEAR */}
        <button className="px-3 py-1 border border-gray-300  ">
          Clear All
        </button>
      </div>
    </div>
          <FilteringProduct />
        </div>

      </div>
    </div>
  );
};

export default Page;

