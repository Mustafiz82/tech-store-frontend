"use client";
import React from 'react';

const Instagram = () => {

 const instagram=[
  { "id": 1, 
    "description": "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
    "date":'01.09.2020',
    "img":"./Instagram/1.png" },
   { "id": 2, 
     "description": "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
     "date":'01.09.2020',

      "img":"./Instagram/1.png" },
   { "id": 3, 
     "description": "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
     "date":'01.09.2020',

      "img":"./Instagram/1.png" },
   { "id": 4, 
     "description": "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
     "date":'01.09.2020',

     "img":"./Instagram/1.png" },
  { "id": 5, 
     "description": "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
    "date":'01.09.2020',

     "img":"./Instagram/1.png" },
  { "id": 6, 
     "description": "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
     "date":'01.09.2020',

     "img":"./Instagram/1.png" },
  { "id": 7, 
     "description": "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
    "date":'01.09.2020',

     "img":"./Instagram/1.png" },
 
     { "id": 8, 
    "description": "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
     "date":'01.09.2020',
     "img":"./Instagram/1.png" },
 
     { "id": 9, 
    "description": "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
     "date":'01.09.2020',
     "img":"./Instagram/1.png" },
 
]
 

    return (
        <div  className='hidden md:block  max-w-7xl mx-auto px-4 mt-12'>
          <p  className='font-bold Poppins'>Follow us on Instagram for News, Offers & More</p>
            <div  className=' grid lg:grid-cols-6 md:grid-cols-4 gap-1  '>

                {
          instagram?.slice(0,9).map(data=> (
            <div key={data.id} className=' mt-5'>
              <div>
                  <div className=''>
                 <img  src={data.img} alt="" />
                 </div>
                <div className='px-3 py-2 text-center text-[12px]'>
                  <p>{data.description}</p>
                  <p className='text-gray-400 mt-2'>{data.date}</p>
               </div>
             </div>
            </div>
          ))
        }
                 
               
            </div>
            
        </div>
    );
};

export default Instagram;




  