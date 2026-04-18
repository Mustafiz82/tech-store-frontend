export default function LoginPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      <p className="text-sm text-gray-500 mb-2"> Home • Login </p>

      <h1 className="text-3xl font-semibold mb-8">Customer Login</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT */}
        <div className="bg-gray-100 p-8 rounded-md">

          <h2 className="text-lg font-semibold mb-2">Registered Customers </h2>

          <p className="text-sm text-gray-500 mb-6">
            If you have an account, sign in with your email address.
          </p>

          <form className="space-y-5">

            <div>
              <label className="text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full mt-2 px-4 h-[42px] border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="w-full mt-2 px-4 h-[42px] border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex items-center gap-6 pt-2">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition"
              >
                Sign In
              </button>

              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Your Password?
              </a>
            </div>

          </form>
        </div>

        {/* RIGHT */}
        <div className="bg-gray-100 p-8 rounded-md">

          <h2 className="text-lg font-semibold mb-4">
            New Customer?
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            Creating an account has many benefits:
          </p>

          <ul className="text-sm text-gray-500 space-y-2 mb-6">
            <li>• Check out faster</li>
            <li>• Keep more than one address</li>
            <li>• Track orders and more</li>
          </ul>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition">
            Create An Account
          </button>

        </div>

      </div>
    </div>
  );
}