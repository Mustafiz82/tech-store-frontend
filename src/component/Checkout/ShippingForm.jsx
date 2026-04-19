export default function ShippingForm() {
  return (

    
   
      
    <div className=" p-6 rounded-lg ">


        <h2 className="text-xl font-semibold mb-4  border-gray-200 border-b pb-2">
        Shipping Address
      </h2>

      <form className="space-y-4 text-sm">

        <div  className="md:w-[565px] w-full">
          <label className="block mb-1 font-bold">Email Address *</label>
          <input className="w-full border border-gray-300 rounded px-3 py-2" />
          <p className="text-xs text-gray-400 mt-1">
            You can create an account after checkout.
          </p>
        </div>

        
          <div  className="md:w-[565px] w-full">
            <label className="font-bold">First Name *</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div   className="md:w-[565px] w-full">
            <label className="font-bold">Last Name *</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
       

        <div  className="md:w-[565px] w-full">
          <label className="font-bold">Company *</label>
          <input className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div  className="md:w-[565px] w-full">
          <label className="font-bold">Street Address *</label>
          <input className="w-full border border-gray-300 rounded px-3 py-2 mb-2" />
          <input className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div className="md:w-[565px] w-full">
          <label className="font-bold">City *</label>
          <input className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div className="md:w-[565px] w-full">
          <label className="font-bold">State/Province *</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option>Select region</option>
          </select>
        </div>

        <div className="md:w-[565px] w-full">
          <label className="font-bold">Zip/Postal Code *</label>
          <input className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div className="md:w-[565px] w-full">
          <label className="font-bold">Country *</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option>United States</option>
          </select>
        </div>

        <div className="md:w-[565px] w-full">
          <label className="font-bold">Phone Number *</label>
          <input className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

      </form>


      <div className="border-t  mt-5 border-gray-200">
      
      <div className="w-full  p-6 rounded-xl">
        
        {/* Standard Rate */}
        <label className="flex items-start justify-between  pb-4 mb-4 cursor-pointer">
          <div className="flex items-start gap-3">
            <input
              type="radio"
              name="shipping"
              defaultChecked
              className="mt-1 w-5 h-5 text-blue-600"
            />

            <div>
              <h3 className="font-semibold text-gray-800">
                Standard Rate
              </h3>
              <p className="text-sm text-gray-500">
                Price may vary depending on the item/destination. Shop Staff will contact you. $21.00
              </p>
            </div>
          </div>

          <p className="font-semibold text-gray-800">$21.00</p>
        </label>

        {/* Pickup */}
        <label className="flex items-start justify-between cursor-pointer">
          <div className="flex items-start gap-3">
            <input
              type="radio"
              name="shipping"
              className="mt-1 w-5 h-5 text-blue-600"
            />

            <div>
              <h3 className="font-semibold text-gray-800">
                Pickup from store
              </h3>
              <p className="text-sm text-gray-500">
                1234 Street Address City Address, 1234
              </p>
            </div>
          </div>

          <p className="font-semibold text-gray-800">$0.00</p>
        </label>

        {/* Button */}
        <button className="mt-6 w-40 bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition">
          Next
        </button>

      </div>

    </div>

      
    </div>


      
  
  );
}



