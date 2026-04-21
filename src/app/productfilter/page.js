import Filter from '@/component/Filters/Filter';
import FilteringProduct from '@/component/Filters/FilteringProduct';
import Image from 'next/image';
import React from 'react';
import img from "/public/slider/slider-1.png"

const page = () => {
    return (
        <div className=" max-w-7xl mx-auto px-4 mt-10 mb-20">

            <div>
                <Image src={img} alt="img" />
            </div>
          <div className='flex gap-10'>
             <div className='w-1/4'> <Filter></Filter></div>
            <div className='w-full'><FilteringProduct></FilteringProduct></div>
          </div>
        </div>
    );
};

export default page;