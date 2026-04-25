import React from 'react';

 const products = [
    {
      id: 1,
       stock: true,
      img: "./products/zip.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One PC",
      oldPrice: "$499.00",
      newPrice: "$499.00",
       rating: "review (4)"
    },
    {
      id: 2,
       stock: false,
      img: "./products/zip1.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$120.00",
      newPrice: "$90.00",
      rating: "review (4)",
 
    },
    {
      id: 3,
       stock: true,
      img: "./products/zip.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$80.00",
      newPrice: "$60.00",
      rating: "review (4)"
    },
    {
      id: 4,
       stock: true,
      img: "./products/zip1.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$70.00",
      newPrice: "$50.00",
     rating: "review (4)"
    },
    {
      id: 5,
       stock: false,
      img: "./products/zip.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$150.00",
      newPrice: "$120.00",
     rating: "review (4)"
    },
    {
      id: 6,
      stock: true,
     img: "./products/zip1.png",
      image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$400.00",
      newPrice: "$350.00",
     rating: "review (4)"
    },
    {
      id: 7,
      stock: false,
      img: "./products/zip.png",
       image:"./logo-img/Group-star 133.png",
      description: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$200.00",
      newPrice: "$170.00",
       rating: "review (4)"
    },
   
  ];

const CategoryThree = () => {
    return (
        <div className=" max-w-7xl mx-auto px-4 pt-10 my-12">

          {/* mobile */}

            <div>
    <div >
  
   <div className="relative w-full my-10 h-[200px] block md:hidden overflow-hidden rounded-lg">
      <img 
          src="/products/aside1.png"
           alt="MSI Laptops"
           className="w-full h-full object-cover"
     />

  
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center">
      
      <h2 className="text-white font-semibold text-lg md:text-xl">
        MSI Laptops
      </h2>

      <a href="#" className="text-white underline text-sm mt-2">
        See All Products
      </a>

    </div>

  </div>

   </div>
  </div>

            <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-5">


        {/* desktop layout */}
     <div className="md:relative 
             hidden md:block
              md:w-[229px] md:h-[346px] 
              overflow-hidden rounded-lg">

   
    <img 
      src="./products/aside1.png" 
      alt="MSI Laptops"
      className="w-full h-full object-cover"
    />

  
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center">
      
      <h2 className="text-white font-semibold text-lg md:text-xl">
        MSI Laptops
      </h2>

      <a href="#" className="text-white underline text-sm mt-2">
        See All Products
      </a>

    </div>

  </div>

        {/* Products */}
        <div className="col-span-4 grid grid-cols-2 lg:grid-cols-5 gap-5">
          {products.slice(0, 5).map((product) => {
          const {id,stock,img,image,description,oldPrice,newPrice,rating  } = product;

            return (
              <div
                key={id}
                className=" p-3 hover:shadow-md transition h-[346px] w-[200px]"
              >
                <p className="text-green-600 text-xs mb-1">
                  ● {stock ? "In stock" : "Out of stock"}
                </p>

                <div className="h-[120px] flex items-center justify-center">
                  <img
                    src={img}
                    alt={img}
                    className="object-contain h-[346px] w-[229px]"
                  />
                </div>

                <div className="text-yellow-500 text-sm mt-8">
                  <img src={image} alt="" />
                  <p>{rating}</p>
                </div>

                <h3 className="text-xs mt-1 line-clamp-2">
                  {description}
                </h3>

                <div className="mt-2">
                  <span className="text-gray-400 line-through text-xs mr-1">
                    ${oldPrice}
                  </span>
                  <p className="font-bold">${newPrice}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
        </div>
    );
};

export default CategoryThree;