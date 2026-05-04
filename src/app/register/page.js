// "use client";
// import React, { useState } from "react";
// import { useAuth } from "@/component/ContextAPI/AuthProvider";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// // optional: install lucide-react for icons (npm install lucide-react)
// import { Eye, EyeOff } from "lucide-react"; 

// const RegisterPage = () => {
//   const { registerUser, verifyEmail, googleSignIn } = useAuth();
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const router = useRouter();

//   // Password Restriction Logic
//   const validatePassword = (password) => {
//     const minLength = 8;
//     const hasUpperCase = /[A-Z]/.test(password);
//     const hasLowerCase = /[a-z]/.test(password);
//     const hasNumber = /[0-9]/.test(password);
//     const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

//     if (password.length < minLength) return "Password must be at least 8 characters long.";
//     if (!hasUpperCase) return "Password must have at least one uppercase letter.";
//     if (!hasLowerCase) return "Password must have at least one lowercase letter.";
//     if (!hasNumber) return "Password must have at least one number.";
//     if (!hasSpecialChar) return "Password must have at least one special character.";
    
//     return null; // No errors
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setError("");

//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     const confirmPassword = e.target.confirmPassword.value;

//     // 1. Check Restrictions
//     const passwordError = validatePassword(password);
//     if (passwordError) {
//       return setError(passwordError);
//     }

//     // 2. Check Match
//     if (password !== confirmPassword) {
//       return setError("Passwords do not match!");
//     }

//     try {
//       const result = await registerUser(email, password);
//       await verifyEmail(result.user);
//       router.push("/dashboard");
      
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleGoogle = async () => {
//     try {
//       await googleSignIn();
//       router.push("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <h1 className="text-3xl font-semibold mb-8">Create New Customer Account</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="bg-gray-100 p-8 rounded-md shadow-sm">
//           <h2 className="text-lg font-semibold mb-4 text-blue-600">Personal Information</h2>
          
//           {error && <p className="text-red-500 text-sm mb-4 bg-red-100 p-2 rounded border border-red-200">{error}</p>}

//           <form onSubmit={handleSignUp} className="space-y-5">
//             <div>
//               <label className="text-sm font-medium">Email Address *</label>
//               <input name="email" type="email" required placeholder="Enter email" className="w-full mt-2 px-4 h-[42px] border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500" />
//             </div>

//             {/* PASSWORD FIELD WITH HIDE/SHOW */}
//             <div className="relative">
//               <label className="text-sm font-medium">Password *</label>
//               <input
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 required
//                 placeholder="8+ chars, Upper, Lower, Special"
//                 className="w-full mt-2 px-4 h-[42px] border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-[38px] text-gray-500 hover:text-blue-600"
//               >
//                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>

//             {/* CONFIRM PASSWORD FIELD WITH HIDE/SHOW */}
//             <div className="relative">
//               <label className="text-sm font-medium">Confirm Password *</label>
//               <input
//                 name="confirmPassword"
//                 type={showConfirmPassword ? "text" : "password"}
//                 required
//                 placeholder="Repeat password"
//                 className="w-full mt-2 px-4 h-[42px] border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 className="absolute right-3 top-[38px] text-gray-500 hover:text-blue-600"
//               >
//                 {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>

//             <div className="flex flex-col gap-4 pt-2">
//               <button type="submit" className="bg-blue-600 text-white px-8 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition uppercase">
//                 Create An Account
//               </button>

//               {/* <button type="button" onClick={handleGoogle} className="bg-white border border-gray-300 text-gray-700 px-8 py-2 rounded-full text-sm font-bold hover:bg-gray-50 transition flex items-center justify-center gap-2">
//                 <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" alt="Google" />
//                 Sign Up With Google
//               </button> */}
//             </div>
//           </form>
//         </div>

//         {/* RIGHT SIDE INFO */}
//         <div className="bg-blue-50 p-8 rounded-md border border-blue-100">
//           <h2 className="text-lg font-semibold mb-4">Password Requirements:</h2>
//           <ul className="text-sm text-gray-500 space-y-2">
//             <li>✔ Minimum 8 characters</li>
//             <li>✔ At least one uppercase letter (A-Z)</li>
//             <li>✔ At least one lowercase letter (a-z)</li>
//             <li>✔ At least one number (0-9)</li>
//             <li>✔ At least one special character (!@#$)</li>
//           </ul>
//           <div className="mt-10 pt-6 border-t border-blue-200">
//             <Link href="/login" className="text-blue-600 font-bold hover:underline">Already have an account? Login</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;


"use client";
import React, { useState } from "react";
import { useAuth } from "@/component/ContextAPI/AuthProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Loader2 } from "lucide-react"; 

const RegisterPage = () => {
  const { registerUser, verifyEmail, updateUserName } = useAuth(); // updateUserName auth provider এ থাকতে হবে
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  // Input common style
  const inputStyle = "w-full mt-2 px-4 h-[45px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all";

  // Password Validation Logic
  const validatePassword = (password) => {
    if (password.length < 8) return "Password must be at least 8 characters.";
    if (!/[A-Z]/.test(password)) return "Add at least one uppercase letter.";
    if (!/[a-z]/.test(password)) return "Add at least one lowercase letter.";
    if (!/[0-9]/.test(password)) return "Add at least one number.";
    if (!/[!@#$%^&*]/.test(password)) return "Add at least one special character.";
    return null;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    // Validations
    const passwordError = validatePassword(password);
    if (passwordError) {
        setError(passwordError);
        setLoading(false);
        return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const result = await registerUser(email, password);
      
     
      if(updateUserName) await updateUserName(name); 
      
      await verifyEmail(result.user);
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Form */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
            <p className="text-gray-500 mt-2">Join us today! Please enter your details.</p>
          </div>
          
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm mb-6 border border-red-100 animate-pulse">
              {error}
            </div>
          )}

          <form onSubmit={handleSignUp} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="text-sm font-semibold text-gray-700">Full Name *</label>
              <input name="name" type="text" required placeholder="John Doe" className={inputStyle} />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-gray-700">Email Address *</label>
              <input name="email" type="email" required placeholder="example@mail.com" className={inputStyle} />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="text-sm font-semibold text-gray-700">Password *</label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                className={inputStyle}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[42px] text-gray-400 hover:text-blue-600 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="text-sm font-semibold text-gray-700">Confirm Password *</label>
              <input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                className={inputStyle}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-[42px] text-gray-400 hover:text-blue-600"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : "CREATE ACCOUNT"}
            </button>
          </form>
        </div>

        {/* Right Side: Info Card */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-white shadow-xl">
            <h2 className="text-xl font-bold mb-4">Why create an account?</h2>
            <ul className="space-y-4 text-blue-100 text-sm">
              <li className="flex items-center gap-3">
                <span className="bg-blue-500/30 p-1 rounded-full text-white">✔</span>
                Track your orders easily
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-blue-500/30 p-1 rounded-full text-white">✔</span>
                Get exclusive member discounts
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-blue-500/30 p-1 rounded-full text-white">✔</span>
                Faster checkout process
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Security Standards:</h2>
            <div className="grid grid-cols-1 gap-3">
               {/* Requirements with icon pointers */}
               {['8+ Characters', 'Uppercase & Lowercase', 'Numbers', 'Special Characters'].map((item) => (
                 <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                   {item}
                 </div>
               ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 text-sm">Already have an account?</p>
              <Link href="/login" className="text-blue-600 font-bold hover:underline mt-1 inline-block">
                Log In Now
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RegisterPage;