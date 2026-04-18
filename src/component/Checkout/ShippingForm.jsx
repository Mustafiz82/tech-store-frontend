export default function ShippingForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">

      <h2 className="text-xl font-semibold mb-4 border-b pb-2">
        Shipping Address
      </h2>

      <form className="space-y-4 text-sm">

        <div>
          <label className="block mb-1">Email Address *</label>
          <input className="w-full border rounded px-3 py-2" />
          <p className="text-xs text-gray-400 mt-1">
            You can create an account after checkout.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label>First Name *</label>
            <input className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label>Last Name *</label>
            <input className="w-full border rounded px-3 py-2" />
          </div>
        </div>

        <div>
          <label>Company *</label>
          <input className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label>Street Address *</label>
          <input className="w-full border rounded px-3 py-2 mb-2" />
          <input className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label>City *</label>
          <input className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label>State/Province *</label>
          <select className="w-full border rounded px-3 py-2">
            <option>Select region</option>
          </select>
        </div>

        <div>
          <label>Zip/Postal Code *</label>
          <input className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label>Country *</label>
          <select className="w-full border rounded px-3 py-2">
            <option>United States</option>
          </select>
        </div>

        <div>
          <label>Phone Number *</label>
          <input className="w-full border rounded px-3 py-2" />
        </div>

      </form>
    </div>
  );
}