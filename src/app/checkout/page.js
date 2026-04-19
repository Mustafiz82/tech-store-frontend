import OrderSummary from "@/component/Checkout/OrderSummary";
import ShippingForm from "@/component/Checkout/ShippingForm";


export default async function Page() {

  // 🔹 Future backend data
  const cartItems = [
    {
      id: 1,
      name: "MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER...",
      price: 3799,
      qty: 1,
      image: "./img/checkout-1.png",
    },
    {
      id: 2,
      name: "MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER...",
      price: 3799,
      qty: 1,
      image: "./img/checkout2.png",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
         <div className="w-full bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4">
        
        {/* Breadcrumb */}
        <p className="text-sm font-medium text-gray-700">
          Home <span className="mx-1">›</span> Shopping Cart{" "}
          <span className="mx-1">›</span>{" "}
          <span className="text-gray-700 font-medium">
            Checkout Process
          </span>
        </p>

        {/* Top Row */}
        <div className="md:flex block md:items-center md:justify-between mt-4 gap-4">
          
          {/* Title + Button */}
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-semibold">Checkout</h1>

            <button className="border-2 border-blue-500 text-blue-500 font-bold px-5 py-2 rounded-full hover:bg-blue-50 transition">
              Sign In
            </button>
          </div>

          {/* Stepper */}
          <div className="md:flex items-center w-full  hidden md:w-auto">
            
            {/* Step 1 */}
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm">
                ✓
              </div>
              <span className="ml-2 text-sm font-medium">Shipping</span>
            </div>

            {/* Line */}
            <div className="flex-1 md:w-24 h-px bg-blue-500 mx-3" />

            {/* Step 2 */}
            <div className="flex items-center text-gray-400">
              <div className="w-8 h-8 flex items-center justify-center rounded-full border text-sm">
                2
              </div>
              <span className="ml-2 text-sm">Review & Payments</span>
            </div>

          </div>
        </div>
      </div>
    </div>

        <div className=" grid md:grid-cols-3 bg-white gap-6">
          {/* LEFT FORM */}
        <div className="md:col-span-2">
          <ShippingForm />
        </div>

        {/* RIGHT SUMMARY */}
        <div>
          <OrderSummary items={cartItems} />
        </div>
        </div>

      </div>
    </div>
  );
}

