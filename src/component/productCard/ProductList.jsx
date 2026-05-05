

"use client";



const ProductList = ({ product }) => {
       const {id,stock,img,image,description,oldPrice,newPrice,rating  } = product;

  return (
    <div>
        {/* Products */}
        <div >
         
              <div
                key={id}
                className=" hover:shadow-md transition mt-5 h-[346px] w-[200px]"
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
                 <div className=" mt-14">
                  
                <div className="text-yellow-500 text-sm">
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
      </div>
  );
};

export default ProductList;