
"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/component/ContextAPI/AuthProvider";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react"; // npm install lucide-react

const Page = () => {
  const { user, loginUser, googleSignIn, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!loading && user && user.emailVerified) {
      router.push("/dashboard");
    }
  }, [user, loading, router]);

  // Handle Email & Password Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await loginUser(email, password);
     
      router.push("./dashboard"); 
       e.target.reset(); 
    } catch (err) {
      
      e.target.reset(); 
      alert("Error: Invalid email or password."); 
    }
  };

   const handleGoogleLogin =async () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        router.push('/dashboard'); 
      })
      .catch((error) => console.log(error));
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-8 text-center">Customer Login</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT: SIGN IN FORM */}
        <div className="bg-gray-100 p-8 rounded-md shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Registered Customers</h2>
          <form onSubmit={handleEmailLogin} className="space-y-5">
            <div>
              <label className="text-sm font-medium">Email *</label>
              <input 
                name="email" 
                type="email" 
                required 
               
                placeholder={user ? "" : "Enter your email"}
                className="w-full mt-2 px-4 h-[42px] border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500" 
              />
            </div>

            <div className="relative">
              <label className="text-sm font-medium">Password *</label>
              <input 
                name="password" 
                type={showPassword ? "password":"text"} 
                required 
              
                placeholder={showPassword ? "" : "Enter password"}
                autoComplete="new-password"
                  
                className="w-full mt-2 px-4 h-[42px] border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500" 
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition font-bold">
              Sign In
            </button>
          </form>

            <button type="button" onClick={handleGoogleLogin}  className="w-full mt-5 text-black py-3 rounded-lg font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-100">
                 <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" alt="Google" />
                 Sign Up With Google
              </button>
        </div>

        {/* RIGHT: CREATE ACCOUNT - NO CHANGE HERE */}
        <div className="bg-gray-50 p-8 poppins rounded-md  border border-dashed border-gray-300">
          <h1 className="text-lg font-bold mb-4">New Customer?</h1>
          <p className="text-sm text-gray-500 mb-6">Creating an account has many benefits: </p>
          <p>•  Check out faster</p>
          <p>•  Keep more than one address</p>
          <p>•  Track orders and more</p>
         <div className="flex flex-col justify-center items-center text-center mt-10">
           <button 
            onClick={() => router.push("/register")} 
            className="bg-blue-600 text-white px-10 py-2 rounded-full text-sm hover:bg-gray-800 transition uppercase font-bold"
          >
            Create An Account
          </button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Page;