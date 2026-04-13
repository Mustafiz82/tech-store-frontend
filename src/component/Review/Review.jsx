"use client"; 
 
 import React from 'react';


const Review = () => {
   
    return (
        <div className=' xl:px-40 lg:px-28 sm:px-20 px-5'>
            <div className='sm:py-15 py-7 sm:px-20 px-10  bg-[#F5F7FF]'>
                <div className=''>
                    <div className='flex gap-3'>
                         <img className='w-3 h-2' src="./icon/review.png" alt="" />
                           <p className='font-medium'>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</p>
                   </div>
                <p className='text-end mt-3'>- Tama Brown</p>
                </div>
                <div className='flex justify-between items-center'>
                      <div className='mt-3'>
                       
                         <button className='text-blue-700 border-2 border-blue px-5 py-2  font-bold  rounded-4xl '>Leave Us A Review</button>
                      </div>
                      <div>
                        <div className='flex gap-1'>
                        <img src="./icon/dotB.png" alt="" />
                        <img src="./icon/dot.png" alt="" />
                        <img src="./icon/dot.png" alt="" />
                        
                      </div>
                      </div>
                </div>
            </div>
            
        </div>
    );
};

export default Review;