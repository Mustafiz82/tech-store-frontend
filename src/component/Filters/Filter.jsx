
"use client";



export default function Filter() {
 
  return (
    <div className="space-y-5">
      {/* EXTRA SIDEBAR */}
      <div className="md:w-[300px] w-full  bg-[#F5F7FF] p-5 rounded-lg text-center">
        <h3 className="font-bold mb-3">Brands</h3>
        <button className="px-10 py-2 border rounded-full">
          All Brands
        </button>

        <div className="grid grid-cols-2 gap-4 mt-5">
          <img src="/logo-img/img-1.png" alt="" />
          <img src="/logo-img/img-2.png" alt="" />
          <img src="/logo-img/img-1.png" alt="" />
          <img src="/logo-img/img-2.png" alt="" />
          <img src="/logo-img/img-3.png" alt="" />
          <img src="/logo-img/img-6.png" alt="" />
        </div>
      </div>

      {/* COMPARE */}
      <div className="md:w-[300px] w-full  bg-[#F5F7FF] text-center py-10 px-5 rounded-lg">
        <h3 className="font-bold">Compare Products</h3>
        <p>You have no items to compare.</p>
      </div>

      {/* WISHLIST */}
      <div className="md:w-[300px] w-full  bg-[#F5F7FF] text-center py-10 px-5 rounded-lg">
        <h3 className="font-bold">My Wish List</h3>
        <p>You have no items in your wish list.</p>
      </div>

      {/* BANNER */}
      <div>
        <img
          className="md:w-[300px] w-full  h-[465px] object-cover rounded-lg"
          src="./slider/image 49.png"
          alt="banner"
        />
      </div>
       <div className='md:hidden block mt-20 text-gray-300'>
               <p className='mt-20 text-gray-300'>MSI has unveiled the Prestige Series line of business-class and gaming notebooks. Tuned for color accuracy, the Prestige Series also leverages True Color Technology, which allows users to adjust the display profile to best fit their computing needs.

There are six different screen profiles, which are tuned for gaming, reducing eye fatigue, sRGB color accuracy, increasing clarity for words and lines, reducing harmful blue light, and optimizing contrast for watching movies.
Given the various display profiles and discrete graphics chip, the Prestige Series notebooks can be used for various design work as well as for office tasks given that the screen can be adjusted for better clarity, color accuracy, or for eye strain reduction. Users working with video or 3D rendering will appreciate the     movie mode for which contrast is increased.

Home users or students can benefit from the anti-blue and the office mode options, both of which are designed to reduce eye strain. This is helpful when working on the computer for extended periods of time. Additionally, in their down time, students can also use the gamer mode to increase the screen brightness.</p>
    <div className="flex justify-center items-center">
        <button className="py-3 mt-10 text-center  px-5 border border-gray-300 text-gray-400 rounded-2xl">More</button>
    </div>
      </div>
    </div>
  );
}