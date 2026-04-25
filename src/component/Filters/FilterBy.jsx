"use client"

import React from 'react';
import { FiX, FiChevronDown } from "react-icons/fi";
import { useState } from "react";
const FilterBy = () => {
     // MAIN DROPDOWN
      const [openFilter, setOpenFilter] = useState(true);
    
      // INNER COLLAPSE
      const [openCategory, setOpenCategory] = useState(true);
      const [openPrice, setOpenPrice] = useState(true);
      const [openColor, setOpenColor] = useState(true);
      const [openBrands, setOpenBrands] = useState(true);
    
      // DATA
      const priceRanges = [
        { label: "$0.00 - $1,000.00", count: 19 },
        { label: "$1,000.00 - $2,000.00", count: 21 },
        { label: "$2,000.00 - $3,000.00", count: 9 },
        { label: "$3,000.00 - $4,000.00", count: 6 },
        { label: "$4,000.00 - $5,000.00", count: 3 },
        { label: "$5,000.00 - $6,000.00", count: 1 },
        { label: "$6,000.00 - $7,000.00", count: 1 },
        { label: "$7,000.00 And Above", count: 1 },
      ];
    return (
        <div>
              {/* FILTER BOX */}
      <div className="w-[300px] bg-[#F5F7FF] p-5 rounded-lg">
        
        {/* HEADER (MAIN DROPDOWN) */}
        <button
          onClick={() => setOpenFilter(!openFilter)}
          className="w-full flex justify-between items-center mb-4"
        >
          <span className="text-lg font-semibold">Filter By</span>

          <FiChevronDown
            className={`transition-transform duration-300 ${
              openFilter ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* COLLAPSE CONTENT */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            openFilter ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <hr className="mb-4" />

          {/* CATEGORY */}
          <div className="mb-4">
            <button
              onClick={() => setOpenCategory(!openCategory)}
              className="w-full flex justify-between items-center font-medium"
            >
              Category
              <FiChevronDown
                className={`transition-transform ${
                  openCategory ? "rotate-180" : ""
                }`}
              />
            </button>

            {openCategory && (
              <div className="mt-3 space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>CUSTOM PCS</span> <span>15</span>
                </div>
                <div className="flex justify-between">
                  <span>MSI ALL-IN-ONE PCS</span> <span>45</span>
                </div>
                <div className="flex justify-between">
                  <span>HP/COMPAQ PCS</span> <span>1</span>
                </div>
              </div>
            )}
          </div>

          {/* PRICE */}
          <div className="mb-4">
            <button
              onClick={() => setOpenPrice(!openPrice)}
              className="w-full flex justify-between items-center font-medium"
            >
              Price
              <FiChevronDown
                className={`transition-transform ${
                  openPrice ? "rotate-180" : ""
                }`}
              />
            </button>

            {openPrice && (
              <div className="mt-3 space-y-2 text-sm text-gray-600">
                {priceRanges.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between cursor-pointer hover:text-black"
                  >
                    <span>{item.label}</span>
                    <span>{item.count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* COLOR */}
          <div className="mb-4">
            <button
              onClick={() => setOpenColor(!openColor)}
              className="w-full flex justify-between items-center font-medium"
            >
              Color
              <FiChevronDown
                className={`transition-transform ${
                  openColor ? "rotate-180" : ""
                }`}
              />
            </button>

            {openColor && (
              <div className="flex gap-3 mt-3">
                <div className="w-6 h-6 bg-black rounded-full cursor-pointer"></div>
                <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-blue-500 cursor-pointer"></div>
              </div>
            )}
          </div>

          {/* BRANDS */}
          <div className="mb-6">
            <button
              onClick={() => setOpenBrands(!openBrands)}
              className="w-full flex justify-between items-center font-medium"
            >
              Brands
              <FiChevronDown
                className={`transition-transform ${
                  openBrands ? "rotate-180" : ""
                }`}
              />
            </button>

            {openBrands && (
              <div className="mt-3 space-y-2 text-sm text-gray-600">
                {[
                  ["ADATA", 19],
                  ["HP", 21],
                  ["TP-Link", 9],
                  ["ASUS", 6],
                  ["Toshiba", 3],
                  ["CANON", 1],
                  ["LG", 1],
                  ["MSI", 1],
                ].map(([name, count]) => (
                  <div key={name} className="flex justify-between">
                    <span>{name}</span>
                    <span>{count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* APPLY BUTTON */}
          <button className="w-full bg-blue-600 text-white py-3 text-sm rounded-full font-medium">
            Apply Filters (2)
          </button>
        </div>
      </div>
        </div>
    );
};

export default FilterBy;