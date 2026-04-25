"use client"




import Filter from "@/component/Filters/Filter";
import FilterBy from "@/component/Filters/FilterBy";
import FilteringProduct from "@/component/Filters/FilteringProduct";
import Singleproduct from "@/component/Filters/Singleproduct";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FiChevronDown, FiGrid, FiMenu } from "react-icons/fi";



const Page = () => {
 const[value,setvalue]=useState(false)
  const[position,setposition]=useState(false)
   const changePosition=()=>{
  setposition(!position)

  

 }
 const [open,setOpen]=useState(false);
 const menuOpen=()=>{
  setOpen(!open)
 }

  
 const change=()=>{
  setvalue(!value)

 }

  return (
    <div className="max-w-7xl mx-auto px-4 overflow-hidden mb-20">
      
      {/* TOP BANNER */}
      <div className="mb-6 space-y-5">
       <Image  src="/slider/slider-1.png" alt="banner" width={1200} height={400} className=" md:block hidden w-full h-auto"/>
       <div>
        <p className="text-gray-300 my-5">Home  ›  Laptops  ›  Everyday Use Notebooks  ›  MSI Prestige Series  ›  MSI WS Series</p>
        <h1 className="font-bold text-xl">MSI PS Series (20)</h1>
        

        {/* mobile */}
        <div className='md:hidden relative  flex justify-center gap-5 mt-10  items-center max-sm:pr-5 '>
         <div  className="flex justify-center  px-4 py-2   border border-gray-300 rounded-md items-center font-bold text-xl text-gray-500 gap-5">Filter By <div
        onClick={() => change(!value)}
        className="px-3 py-2  flex justify-between items-center">   {
        value ? (
          <span   className={`fixed top-18 left-0  w-[300px] bg-white shadow-lg z-50 transform transition-transform duration-200 ${
          value ? "translate-x-6" : "-translate-x-full"
        }`}>
            <FilterBy></FilterBy>
          </span> ): <span>  
        <FiChevronDown className={`${value ? "rotate-180" : ""}`} /></span>
      }
      
      </div>
      </div>

        {/* Sidebar */}
       
           
          
                <div className="px-4 py-2  border border-gray-300">
                   {
                       <button  onClick={()=>changePosition()}>{position?  <span className="flex px-3 text-xl font-bold items-center gap-2">
            <span className="text-gray-500">Sort By:</span>
            <select className="  px-2 py-1 text-sm">
              <option>Position</option>
              <option>Price</option>
              <option>Name</option>
            </select>
          </span>:  <span className="flex  px-3  items-center gap-2 text-xl font-bold">
            <span className="text-gray-500">Sort By:</span>
            <select className=" px-2 py-1 text-sm">
              <option>Position</option>
              <option>Price</option>
              <option>Name</option>
            </select>
          </span>  }</button>
                    }
                </div>
        </div> 
       </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="md:flex mt-10 flex-col md:flex-row gap-8">
        
        {/* LEFT SIDEBAR */}
        <div className="w-full md:w-[280px] md:block hidden shrink-0">
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
      <div className="md:flex hidden flex-col md:flex-row justify-between items-start md:items-center gap-3 rounded-lg p-3">
        
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
            <button className="p-2 border rounded hover:bg-gray-100"  onClick={()=>menuOpen()}>
              <FiMenu size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* FILTER TAGS */}
      <div className="md:flex hidden md:flex-wrap mb-10 items-center gap-2">
        
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
          <div>
            {
              open?  <FilteringProduct />:<Singleproduct></Singleproduct>
            }

          </div>
            <div  className="md:hidden mt-10 block">
                <Filter/>
            </div>
        </div>

      </div>
      
    </div>
  );
};

export default Page;

