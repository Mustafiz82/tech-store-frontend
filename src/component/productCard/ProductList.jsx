

"use client";

import Link from "next/link";
import Image from "next/image";

const ProductList = ({ product }) => {
       const {id,stock,img,image,description,oldPrice,newPrice,rating  } = product;

  return (
    <div className="grid md:grid-cols-5 gap-5">
        {/* Products */}
        <div className="col-span-4 grid grid-cols-2 lg:grid-cols-5 gap-5">
         
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
            
         
        </div>
      </div>
  );
};

export default ProductList;