// import React from 'react';

// const page = () => {
//     return (
//     <div className="max-w-7xl mx-auto px-4 py-10">

//       <p className="text-sm text-gray-500 mb-2"> Home • Login </p>

//       <h1 className="text-3xl font-semibold mb-8">Customer Login</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//         {/* LEFT */}
//         <div className="bg-gray-100 p-8 rounded-md">

//           <h2 className="text-lg font-semibold mb-2">Registered Customers </h2>

//           <p className="text-sm text-gray-500 mb-6">
//             If you have an account, sign in with your email address.
//           </p>

//           <form className="space-y-5">

//             <div>
//               <label className="text-sm font-medium">
//                 Email <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full mt-2 px-4 h-[42px] border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
//               />
//             </div>

//             <div>
//               <label className="text-sm font-medium">
//                 Password <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="Your Password"
//                 className="w-full mt-2 px-4 h-[42px] border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
//               />
//             </div>

//             <div className="flex items-center gap-6 pt-2">
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition"
//               >
//                 Sign In
//               </button>

//               <a href="#" className="text-sm text-blue-600 hover:underline">
//                 Forgot Your Password?
//               </a>
//             </div>

//           </form>
//         </div>

//         {/* RIGHT */}
//         <div className="bg-gray-100 p-8 rounded-md">

//           <h2 className="text-lg font-semibold mb-4">
//             New Customer?
//           </h2>

//           <p className="text-sm text-gray-500 mb-4">
//             Creating an account has many benefits:
//           </p>

//           <ul className="text-sm text-gray-500 space-y-2 mb-6">
//             <li>• Check out faster</li>
//             <li>• Keep more than one address</li>
//             <li>• Track orders and more</li>
//           </ul>

//           <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition">
//             Create An Account
//           </button>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default page;

// "use client";

// import { useAuth } from "@/component/ContextAPI/AuthProvider";
// import React, { useState } from "react";





// const Page = () => {
//   const {loginUser,google}=useAuth()

//    const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//         e.preventDefault();

//   const email = e.target.email.value;
//   const password = e.target.password.value;

//   console.log(email,password);
  

//          loginUser(email, password)
//       .then((res) => {
//         console.log(res.user);
//         alert("Login Success ✅");
//       })
//       .catch((err) => {
//         console.log(err.message);
//         alert(err.message);
//       });


//       google (email, password)
//         .then((result) => {

//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;

//     const user = result.user;
//     console.log(user);
    
    
//   }).catch((error) => {
//      console.log(err.message);
//         alert(error.message);
//   });
     
//    };



   


//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <p className="text-sm text-gray-500 mb-2"> Home • Login </p>

//       <h1 className="text-3xl font-semibold mb-8">Customer Login</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//         {/* LEFT */}
//         <div className="bg-gray-100 p-8 rounded-md">

//           <h2 className="text-lg font-semibold mb-2">
//             Registered Customers
//           </h2>

//           <p className="text-sm text-gray-500 mb-6">
//             If you have an account, sign in with your email address.
//           </p>

//           {/* 🔥 form updated */}
//           <form onSubmit={handleLogin} className="space-y-5">

//             <div>
//               <label className="text-sm font-medium">
//                 Email <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 name="email"
               
//                 className="w-full mt-2 px-4 h-[42px] border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
//               />
//             </div>

//             <div>
//               <label className="text-sm font-medium">
//                 Password <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="Your Password"
//                 name="password"
               
//                 className="w-full mt-2 px-4 h-[42px] border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
//               />
//             </div>

//             <div className="flex items-center gap-6 pt-2">
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition"
//               >
//                 Sign In
//               </button>

//               <a href="#" className="text-sm text-blue-600 hover:underline">
//                 Forgot Your Password?
//               </a>
//             </div>

//           </form>
//         </div>

//         {/* RIGHT */}
//         <div className="bg-gray-100 p-8 rounded-md">

//           <h2 className="text-lg font-semibold mb-4">
//             New Customer?
//           </h2>

//           <p className="text-sm text-gray-500 mb-4">
//             Creating an account has many benefits:
//           </p>

//           <ul className="text-sm text-gray-500 space-y-2 mb-6">
//             <li>• Check out faster</li>
//             <li>• Keep more than one address</li>
//             <li>• Track orders and more</li>
//           </ul>

//           <button
//            onClick={handleLogin}
//             className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition"
//           >
//             Create An Account
//           </button>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default Page;

// "use client";
// import React, { useState, useEffect } from "react";
// import { useAuth } from "@/component/ContextAPI/AuthProvider";
// import { useRouter } from "next/navigation";
// import { Eye, EyeOff } from "lucide-react"; // npm install lucide-react

// const Page = () => {
//   const { user, loginUser, googleSignIn, loading } = useAuth();
//   const [showPassword, setShowPassword] = useState(false);
//   const router = useRouter();

//   // 1. If user is already logged in and verified, send them to dashboard automatically
//   useEffect(() => {
//     if (!loading && user && user.emailVerified) {
//       router.push("/dashboard");
//     }
//   }, [user, loading, router]);

//   // Handle Email & Password Login
//   const handleEmailLogin = async (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     try {
//       const result = await loginUser(email, password);
      
      
//       // // Verification Check
//       // if (!result.user.emailVerified) {
//       //   alert("Please verify your email address first. Check your inbox.");
//       //   return;
//       // }

//       // alert("Login Success ✅");
     
//       router.push("./dashboard"); 
//          e.target.reset(!setShowPassword);
//     } catch (err) {
//       alert("Error: Invalid email or password."); 
//     }
//   };

//   // // Handle Google Sign In
//   // const handleGoogleAction = async () => {
//   //   try {
//   //     await googleSignIn();
//   //     alert("Google Login Success ✅");
//   //     router.push("./dashboard"); 
//   //   } catch (err) {
//   //     alert(err.message);
//   //   }
//   // };

//   if (loading) return <div className="text-center py-20">Loading...</div>;

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <h1 className="text-3xl font-semibold mb-8 text-center">Customer Login</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* LEFT: SIGN IN FORM */}
//         <div className="bg-gray-100 p-8 rounded-md shadow-sm">
//           <h2 className="text-lg font-semibold mb-4">Registered Customers</h2>
//           <form onSubmit={handleEmailLogin} className="space-y-5">
//             <div>
//               <label className="text-sm font-medium">Email *</label>
//               <input 
//                 name="email" 
//                 type="email" 
                
//                 required 
//                 placeholder={user ? "" : "Enter your email"}
//                 className="w-full mt-2 px-4 h-[42px] border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500" 
//               />
//             </div>

//             <div className="relative">
//               <label className="text-sm font-medium">Password *</label>
//               <input 
//                 name="password" 
//                 type={showPassword ? "text" : "password"} 
//                 required 
//                  placeholder="Enter password"
//                 className="w-full mt-2 px-4 h-[42px] border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500" 
//               />
//               {/* Show/Hide Toggle */}
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-[38px] text-gray-500"
//               >
//                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>

//             <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition font-bold">
//               Sign In
//             </button>
//           </form>

//           {/* <div className="mt-4 border-t pt-4">
//             <button 
//               onClick={handleGoogleAction}
//               className="w-full bg-white border border-gray-300 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-gray-50 transition"
//             >
//               <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="20" alt="google" />
//               Sign in with Google
//             </button>
//           </div> */}
//         </div>

//         {/* RIGHT: CREATE ACCOUNT */}
//         <div className="bg-gray-50 p-8 poppins rounded-md  border border-dashed border-gray-300">
//           <h1 className="text-lg font-bold mb-4">New Customer?</h1>
//           <p className="text-sm text-gray-500 mb-6">Creating an account has many benefits: </p>
//           <p>•  Check out faster</p>
//           <p>•  Keep more than one address</p>
//           <p>•  Track orders and more</p>
//          <div className="flex flex-col justify-center items-center text-center mt-10">
//            <button 
//             onClick={() => router.push("/register")} 
//             className="bg-blue-600 text-white px-10 py-2 rounded-full text-sm hover:bg-gray-800 transition uppercase font-bold"
//           >
//             Create An Account
//           </button>
//          </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

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
                type={showPassword ? "text" : "password"} 
                required 
              
                placeholder={showPassword ? "" : "Enter password"}
                  onChange={(e) => setQuery(e.target.value)}
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