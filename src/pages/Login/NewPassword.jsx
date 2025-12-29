import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ResetPasswordRequestPage = () => {
  const { requestPasswordReset } = useAuth();
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("📮 [ResetRequestPage] Submit clicked with email:", email);

    if (!email) {
      alert("Enter your email!");
      return;
    }

    const result = await requestPasswordReset(email);

    console.log("📊 [ResetRequestPage] Response from AuthContext:", result);

    if (result.success) {
      console.log("➡️ [ResetRequestPage] Navigating to /reset-password");
      navigate("/reset-password/verify", { state: { email } });
    } else {
      console.log("❌ [ResetRequestPage] Failed reset request:", result.message);
      alert(result.message || "Failed to send OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition"
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordRequestPage;
