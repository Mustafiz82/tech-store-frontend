import React from 'react';

const Images = () => {

    const img=[
         { "id": 1, 
           "img":"./logo-img/img-1.png" },
         { "id": 2, 
           "img":"./logo-img/img-2.png" },
         { "id": 3, 
           "img":"./logo-img/img-3.png" },
         { "id": 4, 
           "img":"./logo-img/img-4.png" },
         { "id": 5, 
           "img":"./logo-img/img-5.png" },
         { "id": 6, 
           "img":"./logo-img/img-6.png" },
         { "id": 7, 
           "img":"./logo-img/img-7.png" },
    ]
    return (
        <div  className='   xl:px-40 lg:px-28 sm:px-20 px-5'>
            <div  className=' grid lg:grid-cols-7 md:grid-cols-3 grid-cols-2  gap-5 my-12 '>

                {
                   img?.slice(0,7).map(data => (
                    <div key={data.id} className='p-2 mt-5'>
                   
                     <div>
                         <img  className='w-36 h-24'  src={data.img} alt="" />
                     </div>
                
                  </div>
            
          ))
        }
                 
               
            </div>
            
        </div>
    );
};

export default Images;