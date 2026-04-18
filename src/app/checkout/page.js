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
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">

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
  );
}