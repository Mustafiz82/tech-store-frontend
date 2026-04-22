"use client"




import Filter from "@/component/Filters/Filter";
import FilterBy from "@/component/Filters/FilterBy";
import FilteringProduct from "@/component/Filters/FilteringProduct";
import Image from "next/image";
import { useState } from "react";
import { FiChevronDown, FiGrid, FiMenu } from "react-icons/fi";



const Page = () => {
 const[value,setvalue]=useState(false)
  const[position,setposition]=useState(false)
   const changePosition=()=>{
  setposition(!position)

 }

  
 const change=()=>{
  setvalue(!value)

 }

  return (
    <div className="max-w-7xl mx-auto px-4  mb-20">
      
      {/* TOP BANNER */}
      <div className="mb-6 space-y-5">
       <Image  src="/slider/slider-1.png" alt="banner" width={1200} height={400} className=" md:block hidden w-full h-auto"/>
       <div>
        <p className="text-gray-300 my-5">Home  ›  Laptops  ›  Everyday Use Notebooks  ›  MSI Prestige Series  ›  MSI WS Series</p>
        <h1 className="font-bold text-xl">MSI PS Series (20)</h1>
        

        {/* mobile */}
        <div className='lg:hidden flex justify-center gap-10 mt-10 text-2xl
         items-center max-sm:pr-5 '>
          <div>
             {/* 🔹 Top Button */}
      <button
        onClick={() => change(!value)}
        className="px-4 py-2 border rounded-md w-[300px] flex justify-between items-center"
      >
        Filter By
        <FiChevronDown className={`${open ? "rotate-180" : ""}`} />
      </button>
      {/* 🔹 Dropdown Panel */}
      {/* {
        value ? (
          <div className="absolute top-12 left-0 w-full bg-white shadow-lg border rounded-md p-4 z-50">
            <FilterBy></FilterBy>
</div> ): null
      } */}
          </div>
                <div className="px-8 py-5 border border-gray-300">
                   {
                       <button  onClick={()=>changePosition()}>{position?  <div className="flex px-3 text-xl font-bold items-center gap-2">
            <span className="text-gray-500">Sort By:</span>
            <select className="  px-2 py-1 text-sm">
              <option>Position</option>
              <option>Price</option>
              <option>Name</option>
            </select>
          </div>   :  <div className="flex  px-3  items-center gap-2 text-xl font-bold">
            <span className="text-gray-500">Sort By:</span>
            <select className=" px-2 py-1 text-sm">
              <option>Position</option>
              <option>Price</option>
              <option>Name</option>
            </select>
          </div>  }</button>
                    }
                </div>
        </div>

          
       </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex mt-10 flex-col lg:flex-row gap-8">
        
        {/* LEFT SIDEBAR */}
        <div className="w-full lg:w-[280px] md:block hidden shrink-0">
          <div className=" sticky top-6">
             <div className="mb-5">
               <FilterBy></FilterBy>
             </div>
            <Filter/>
          </div>
        </div>

        {/* RIGHT PRODUCTS */}
        <div className="flex-1">
               <div className="space-y-4">
      
      {/* TOP BAR */}
      <div className="md:flex hidden flex-col lg:flex-row justify-between items-start lg:items-center gap-3 rounded-lg p-3">
        
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
      <div className="md:flex hidden flex-wrap mb-10 items-center gap-2">
        
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
            <div className="md:hidden mt-10 block">
                <Filter/>
            </div>
        </div>

      </div>
      
    </div>
  );
};

export default Page;

