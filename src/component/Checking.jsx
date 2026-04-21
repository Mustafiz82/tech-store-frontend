"use client"


const productData = {
  id: 1,
  name: "MSI MPG Trident 3",
  price: 3299,

  about: {
    h4:"Be the first to review this product",
    description:
      "MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop",
    colors: ["black", "gray", "lightgray"],
  },

  details: [
    "Intel Core i7-10700F",
    "Intel H410",
    "NVIDIA RTX 2060 SUPER 8GB",
    "16GB RAM DDR4",
    "512GB SSD + 2TB HDD",
  ],

  specs: [
    { key: "CPU", value: "N/A" },
    { key: "Featured", value: "N/A" },
    { key: "I/O Ports", value: "N/A" },
  ],

  image: "/pc.png",
};


import { useState } from "react";

const Checking= () => {
 const [activeTab, setActiveTab] = useState("about");
  const [qty, setQty] = useState(1);
  const product = productData;

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10 mb-20">

      {/* TOP BAR */}
      <div className="flex justify-between   items-center mb-6 flex-wrap gap-4">
        
        {/* Tabs */}
        <div className="flex gap-6">
          {["about", "details", "specs"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 border-b-2 capitalize ${
                activeTab === tab
                  ? "border-blue-500 text-gray-400"
                  : "border-transparent text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="md:flex md:items-center hidden md:gap-3">
          <span className="text-sm">
            On Sale from <b>${product.price}</b>
          </span>

          {/* Quantity */}
          <div className="flex border rounded overflow-hidden">
            <button
              onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
              className="px-3"
            >
              -
            </button>
            <span className="px-4">{qty}</span>
            <button
              onClick={() => setQty(qty + 1)}
              className="px-3"
            >
              +
            </button>
          </div>

          {/* ADD TO CART */}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition">
            Add to Cart
          </button>

          {/* PAYPAL */}
          <button className="bg-yellow-400 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition">
            PayPal
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex justify-between  flex-col-reverse md:flex-row gap-20 items-center">
        
        {/* LEFT */}
        <div className="md:w-1/2 w-full">
          <p className="text-sm text-gray-400 mb-2">
            Home • Laptops • MSI WS Series
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            {product.name}
          </h2>

          {/* ABOUT */}
          {activeTab === "about" && (
            <div>
              <h4>{product.about.h4}</h4>
              <p className="text-gray-600 mb-4">
                {product.about.description}
              </p>

              <div className="flex gap-3 mb-4">
                {product.about.colors.map((color, i) => (
                  <span
                    key={i}
                    className="w-6 h-6 rounded-full border"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>
          )}

          {/* DETAILS */}
          {activeTab === "details" && (
            <ul className="list-disc ml-5 text-gray-600 space-y-2">
              {product.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {/* SPECS */}
          {activeTab === "specs" && (
            <div className=" rounded-lg overflow-hidden">
              {product.specs.map((spec, i) => (
                <div key={i} className="grid grid-cols-2  bg-gray-100 " >
                  <span className="p-3 ">
                    {spec.key}
                  </span>
                  <span className="p-3">{spec.value}</span>
                </div>
              ))}
            </div>
          )}

          <p className="mt-5 text-sm">
            Have a Question?{" "}
            <span className="text-blue-500 cursor-pointer">
              Contact Us
            </span>
          </p>
          <div className="md:hidden mt-5 block">

             <div className="flex items-center gap-4">
        
        {/* Quantity */}
      
         
              <div className="flex justify-center items-center  h-10 mt-5 border rounded overflow-hidden">
            <button
              onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
              className="px-3"
            >
              -
            </button>
            <span className="px-4">{qty}</span>
            <button
              onClick={() => setQty(qty + 1)}
              className="px-3"
            >
              +
            </button>
          </div>

        {/* Add to Cart */}
        <button className="flex-1 h-12 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
          Add to Cart
        </button>

        {/* PayPal */}
        <button className="flex items-center justify-center gap-2 h-12 px-4 bg-yellow-400 rounded-full font-semibold hover:bg-yellow-500 transition">
          PayPal
        </button>
         

             </div>

                 {/* Bottom Info */}
                 <div className="bg-gray-100 mt-5 text-center py-3 rounded-lg text-gray-700">
                 On Sale from <span className="font-semibold">$3,299.00</span>
           </div>
          </div>
        </div>
        

        {/* RIGHT */}
        <div className="">
          
           <div className=" flex gap-10  items-center justify-between ">
            

         
             <div className="   top-1/3 flex flex-col gap-3">
               <span className="w-8 h-8 border rounded-full flex items-center justify-center">❤</span>
               <span className="w-8 h-8 border rounded-full flex items-center justify-center">≡</span>
               <span className="w-8 h-8 border rounded-full flex items-center justify-center">✉</span>
             </div>
      
                <div>
                  
                  <img src='./products/p-img-4.png'  alt="product"  className="w-[260px] md:w-[320px] object-contain"  />
                   <div className="md:ml-20 text-center flex justify-center items-center py-5 gap-2">
                      <img src="./img/primary 1.png" alt="" />
                     <p><span className="text-[#00AEB8] text-xl">|</span>  own it now, up to 6 months<br></br> interest free</p>
                 </div>
            </div>


           </div>
         
        </div>
      </div>
    </div>
  );
};

export default Checking;










