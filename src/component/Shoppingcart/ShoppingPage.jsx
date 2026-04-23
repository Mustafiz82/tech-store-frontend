
"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiX, FiEdit2 } from "react-icons/fi";

export default function ShoppingPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "MSI MEG Trident X 10SD-1012AU Intel i7 10700K",
      price: 4349,
      qty: 1,
      image: "./products/p-img-3.png",
    },
    {
      id: 2,
      name: "MSI MEG Trident X 10SD-1012AU Intel i7 10700K",
      price: 4349,
      qty: 1,
      image: "./products/p-img-3.png",
    },
  ]);

  const [openShipping, setOpenShipping] = useState(true);
  const [openDiscount, setOpenDiscount] = useState(true);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 overflow-hidden py-10">
     <div className="md:flex flex-col md:flex-row gap-16">
        {/* LEFT SIDE */}
        <div>
         <p className="text-sm text-gray-500 mb-2">Home›  Shopping Cart</p>

      {/* Title */}
      <h1 className="text-2xl font-semibold mt-6">Shopping Cart</h1>

      {/* Table Header */}
      <div className="grid grid-cols-5 text-sm mt-10 font-bold  border-b border-gray-200 pb-3">
        <span className="col-span-2">Item</span>
        <span>Price</span>
        <span>Qty</span>
        <span>Subtotal</span>
      </div>

      {/* Items */}
      {cart.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-5 items-center border-b border-gray-200 py-6"
        >
          {/* ITEM */}
          <div className="col-span-2 md:flex  block gap-4">
            <img
              src={item.image}
              alt=""
              className="w-24 h-20 object-cover"
            />
            <p className="text-sm md:mt-0 mt-4 text-gray-700 leading-5">
              {item.name}
            </p>
          </div>

          {/* PRICE */}
          <p className="font-medium">${item.price.toFixed(2)}</p>

          {/* QTY */}
          <div>
            <input
              type="number"
              value={item.qty}
              className="w-16 border rounded-md px-2 py-1 text-center"
              readOnly
            />
          </div>

          {/* SUBTOTAL + ACTION */}
          <div className="flex block items-center justify-between">
            <p className="font-semibold">
              ${(item.price * item.qty).toFixed(2)}
            </p>

            <div className="flex flex-col gap-2 ml-3">
              <button className="w-7 h-7 flex items-center justify-center border rounded-full text-gray-400 hover:text-red-500">
                <FiX size={14} />
              </button>

              <button className="w-7 h-7 flex items-center justify-center border rounded-full text-gray-400">
                <FiEdit2 size={14} />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Bottom Buttons */}
      <div className="lg:flex justify-center items-center  block  gap-4 mt-6">
       <div>
         <button className="lg:px-6 px-16 lg:text-[18px]  text-xl py-2 border rounded-full text-gray-600">
          Continue Shopping
        </button>
       </div>

        <div className=" lg:mt-0 mt-6 ">
          <button className="lg:px-6 px-16 lg:text-[18px]  text-xl py-2 bg-black text-white rounded-full">
          Clear Shopping Cart
        </button>
        </div>
        <div className="lg:mt-0 mt-6">
        <button className=" lg:px-6 px-14 lg:text-[18px]  text-xl py-2 bg-black text-white rounded-full">
          Update Shopping Cart
        </button>
        </div>

      </div>
    </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-[400px] md:mt-0 mt-10">
          <div className="bg-gray-100 p-5 rounded-lg sticky top-6 space-y-5">
            <h2 className="text-2xl font-semibold">Summary</h2>

            {/* SHIPPING COLLAPSE */}
            <div>
              <button
                onClick={() => setOpenShipping(!openShipping)}
                className="w-full flex justify-between font-medium"
              >
                Estimate Shipping and Tax
                 <span className="transition-transform duration-300">
               <FiChevronDown
                  className={`w-5 h-5 ${
                    openShipping ? "rotate" : "rotate-0"
                  }`}
                />
                 </span>
              </button>
              <p className="text-sm text-gray-400">Enter your destination to get a shipping estimate.</p>

              {openShipping && (
                <div className="mt-4 space-y-3">
                  <div>
                    <label className="text-sm">Country</label>
                    <select className="w-full border rounded px-3 py-2 mt-1">
                      <option>Australia</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm">State/Province</label>
                    <input
                      type="text"
                      className="w-full border rounded px-3 py-2 mt-1"
                    />
                  </div>

                  <div>
                    <label className="text-sm">Zip/Postal Code</label>
                    <input
                      type="text"
                      className="w-full border rounded px-3 py-2 mt-1"
                    />
                  </div>

                  <div className="space-y-2 text-sm my-5">
                    <p className="font-bold">Standard Rate</p>
                    <label className=" gap-2 flex">
                      <input type="radio" name="shipping" defaultChecked />
                     <p className="text-sm"> Shop Staff will contact you. $21.00</p>
                    </label>
                     
                   <div className="my-5">
                     <p className="font-bold">Pickup from store</p>
                     <label className="flex gap-2">
                     
                      <input type="radio" name="shipping" />
                      1234 Street Adress City Address, 1234 $0.00
                    </label>
                   </div>
                  </div>
                </div>
              )}
            </div>

            {/* DISCOUNT COLLAPSE */}
            <div>
              <button
                onClick={() => setOpenDiscount(!openDiscount)}
                className="w-full flex justify-between font-medium"
              >
                Apply Discount Code
              <span className="transition-transform duration-300">
               <FiChevronDown
                  className={`w-5 h-5 ${
                    openShipping ? "rotate" : "rotate-0"
                  }`}
                />
                 </span>
              </button>

              {openDiscount && (
                <div className="mt-4">
                  <label className="text-sm">Enter discount code</label>
                  <input
                    type="text"
                    placeholder="Enter Discount code"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />

                  <button className="w-full mt-3 font-bold border-2 border-blue-5800 text-blue-800 py-2 rounded-full hover:bg-blue-800 hover:text-white">
                    Apply Discount
                  </button>
                </div>
              )}
            </div>

            {/* TOTAL */}
            <div className="border-t pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$21.00</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>$1.91</span>
              </div>

              <div className="flex justify-between font-semibold text-lg pt-2">
                <span>Order Total</span>
                <span>${subtotal + 21 + 1.91}</span>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="space-y-3 pt-3">
              <button className="w-full bg-blue-600 text-white py-3 rounded-full">
                Proceed to Checkout
              </button>

              <button className="w-full bg-yellow-400 py-3 rounded-full font-medium">
                Check out with PayPal
              </button>

              <button className="w-full border py-3 rounded-full">
                Check Out with Multiple Addresses
              </button>
                
            </div>
             <div className=" text-center flex py-5 gap-1">
                      <img className="w-10 h-6" src="./logo-img/zip.png" alt="" />
                     <p><span className="text-[#00AEB8] text-[10px]">|</span>  own it now, up to 6 months interest free</p>
                 </div>
          </div>
        </div>
      </div>

       
    </div>
  );
}

