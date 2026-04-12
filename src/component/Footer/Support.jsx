"use client";

import React from 'react';

const Support = () => {
    return (
  <div className='  xl:px-40 lg:px-28 sm:px-20 px-5'>
          <div className='sm:flex sm:justify-evenly sm:items-center my-12'>
            <div className=' sm:w-1/4  h-auto text-center py-3 px-2'>
                  <div className='flex items-center justify-center'>
                     <img className=' mb-3' src="./icon/2.png" alt="" />
                  </div>
                <h4 className='font-bold'>Product Support</h4>
                <p className='text-wrap'>Up to 3 years on-site warranty available for your peace of mind.</p>

            </div>
            <div className=' sm:w-1/4 h-auto  text-center py-3 px-2 md:mt-0  mt-3'>
                  <div className='flex items-center justify-center'>
                     <img className=' mb-3' src="./icon/3.png" alt="" />
                  </div>
                <h4 className='font-bold'>Personal Account</h4>
                <p className='text-wrap'>With big discounts, free delivery and a dedicated support specialist.</p>

            </div>
            <div className='  sm:w-1/4 h-auto  text-center py-3 px-2 md:mt-0  mt-3'>
                  <div className='flex items-center justify-center'>
                     <img className=' mb-3' src="./icon/4.png" alt="" />
                  </div>
                <h4 className='font-bold'>Amazing Savings</h4>
                <p className='text-wrap'>Up to 70% off new Products, you can be sure of the best price.</p>

            </div>
            
        </div>
  </div>
    );
};

export default Support;