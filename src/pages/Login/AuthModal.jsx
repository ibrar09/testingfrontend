// // src/Auth/AuthModal.jsx
// import React, { useState, useEffect } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import { useAuth } from "../../context/AuthContext";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const modalVariants = {
//   hidden: { opacity: 0, y: -50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
//   exit: { opacity: 0, y: 50, transition: { duration: 0.2 } },
// };

// const AuthModal = ({ isOpen, onClose, defaultMode = "login" }) => {
//   const { login, register, verifyOtp, requestOtpLogin, loginWithOtp, loginWithGoogle, user } = useAuth();
//   const navigate = useNavigate();

//   const [mode, setMode] = useState(defaultMode);
//   const [loading, setLoading] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");

//   useEffect(() => {
//     if (user && isOpen) {
//       onClose();
//       resetForm();
//       navigate("/shop"); // Redirect after successful login
//     }
//   }, [user, isOpen, onClose, navigate]);

//   const resetForm = () => {
//     setName(""); setEmail(""); setPassword(""); setPhone(""); setOtp("");
//     setMode("login");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       if (mode === "login") {
//         await login({ email, password });
//         toast.success("✅ Login successful");
//       } else if (mode === "register") {
//         await register({ name, email, password, phone });
//         toast.success("OTP sent to your email");
//         setMode("verifyOtp");
//       } else if (mode === "verifyOtp") {
//         await verifyOtp({ email, otp });
//         toast.success("✅ OTP verified successfully");
//       } else if (mode === "requestOtpLogin") {
//         await requestOtpLogin(email);
//         toast.success("✅ OTP sent to your email");
//         setMode("otpLogin");
//       } else if (mode === "otpLogin") {
//         await loginWithOtp({ email, otp });
//         toast.success("✅ Logged in with OTP");
//       }
//     } catch (err) {
//       console.error("Auth Modal Error:", err.response?.data || err.message);
//       toast.error(err.response?.data?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   // Helper function to get submit button text
//   const getButtonText = () => {
//     if (loading) return "Processing...";
//     switch (mode) {
//       case "login": return "Login";
//       case "register": return "Register";
//       case "verifyOtp": return "Verify OTP";
//       case "requestOtpLogin": return "Send OTP";
//       case "otpLogin": return "Login with OTP";
//       default: return "Submit";
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//       <Toaster />
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 sm:p-8 relative"
//             variants={modalVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => { onClose(); resetForm(); }}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//             >
//               ✕
//             </button>

//             {/* Title */}
//             <h2 className="text-2xl font-semibold mb-4 text-center">
//               {mode === "login" ? "Login" :
//                mode === "register" ? "Register" :
//                mode === "verifyOtp" ? "Verify OTP" :
//                mode === "requestOtpLogin" ? "Request OTP Login" :
//                "Login with OTP"}
//             </h2>

//             {/* Form */}
//             <motion.form onSubmit={handleSubmit} className="space-y-3">
//               {mode === "register" && (
//                 <>
//                   <input
//                     type="text"
//                     placeholder="Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="w-full p-3 border rounded"
//                     required
//                   />
//                   <input
//                     type="text"
//                     placeholder="Phone"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
//                     className="w-full p-3 border rounded"
//                     required
//                   />
//                 </>
//               )}

//               {["login","register","verifyOtp","requestOtpLogin","otpLogin"].includes(mode) && (
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full p-3 border rounded"
//                   required
//                 />
//               )}

//               {["login","register"].includes(mode) && (
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full p-3 border rounded"
//                   required
//                 />
//               )}

//               {["verifyOtp","otpLogin"].includes(mode) && (
//                 <input
//                   type="text"
//                   placeholder="Enter OTP"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   className="w-full p-3 border rounded"
//                   required
//                 />
//               )}

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-full py-3 text-white font-semibold rounded-lg ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
//               >
//                 {getButtonText()}
//               </button>
//             </motion.form>

//             {/* Google Login */}
//             {["login","register"].includes(mode) && (
//               <button
//                 onClick={loginWithGoogle}
//                 className="w-full mt-3 py-3 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100"
//               >
//                 <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2"/>
//                 Login with Google
//               </button>
//             )}

//             {/* Mode Switch */}
//             <div className="text-center mt-3">
//               {mode === "login" && (
//                 <>
//                   <p>Don't have an account? <button onClick={() => setMode("register")} className="text-blue-600 underline">Register</button></p>
//                   <p className="mt-1"><button onClick={() => setMode("requestOtpLogin")} className="text-blue-600 underline text-sm">Login with OTP</button></p>
//                 </>
//               )}
//               {mode === "register" && (
//                 <p>Already have an account? <button onClick={() => setMode("login")} className="text-blue-600 underline">Login</button></p>
//               )}
//               {mode === "requestOtpLogin" && (
//                 <p className="mt-1">Back to <button onClick={() => setMode("login")} className="text-blue-600 underline text-sm">Login</button></p>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default AuthModal;
