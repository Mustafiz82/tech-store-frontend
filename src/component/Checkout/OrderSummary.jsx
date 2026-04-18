export default function OrderSummary({ items }) {

  const total = items.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="bg-white p-5 rounded-lg shadow sticky top-6">

      <h2 className="text-lg font-semibold mb-4 border-b pb-2">
        Order Summary
      </h2>

      <p className="text-sm text-gray-500 mb-3">
        {items.length} Items in Cart
      </p>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3">

            <img
              src={item.image}
              alt={item.name}
              className="w-14 h-14 object-cover rounded"
            />

            <div className="text-sm">
              <p className="font-medium">{item.name}</p>
              <p className="text-gray-500">
                Qty {item.qty} • ${item.price}
              </p>
            </div>

          </div>
        ))}
      </div>

      <div className="border-t mt-4 pt-3 flex justify-between font-semibold">
        <span>Total</span>
        <span>${total}</span>
      </div>

    </div>
  );
}