import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

const VerifyResetOtp = () => {
  const { verifyResetOtp, loading } = useAuth();
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp) return alert("Please enter OTP!");

    try {
      await verifyResetOtp(email, otp);
      alert("OTP verified! You can set a new password now.");
      navigate("/new-password", { state: { email } });
    } catch (err) {
      alert(err.response?.data?.message || "Invalid OTP");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Verify OTP
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Enter the OTP sent to <span className="font-semibold">{email}</span>
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-600 mb-1">OTP</label>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyResetOtp;
