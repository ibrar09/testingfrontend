// src/components/modals/ResetPasswordModal.jsx
import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import Modal from "./Modal";
import toast from "react-hot-toast";

const ResetPasswordModal = ({ isOpen, onClose, email, onSuccess }) => {
  const { resetPassword, login } = useAuth();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleOtpChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < otp.length - 1) document.getElementById(`otp-${index + 1}`)?.focus();
    if (!value && index > 0) document.getElementById(`otp-${index - 1}`)?.focus();
  };

  const handleReset = async (e) => {
    e.preventDefault();
    setError("");

    const otpValue = otp.join("");

    if (otpValue.length !== 6) return setError("Enter the full 6-digit OTP.");
    if (!password || !confirmPassword) return setError("Please fill both password fields.");
    if (password !== confirmPassword) return setError("Passwords do not match.");

    setLoading(true);
    try {
      const res = await resetPassword(email, otpValue, password);

      if (res.success) {
        toast.success("Password reset successfully! Logging you in...");
        const loginRes = await login(email, password);

        if (loginRes.success) {
          toast.success("Logged in successfully!");
          onClose();
          onSuccess();
        } else {
          toast.error("Password reset but login failed. Please login manually.");
          onClose();
          onSuccess();
        }
      } else {
        setError(res.message || "Failed to reset password.");
      }
    } catch (err) {
      setError(err.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Reset Your Password">
      <form onSubmit={handleReset} className="space-y-5">
        {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

        <div className="flex justify-between gap-2">
          {otp.map((val, i) => (
            <input
              key={i}
              id={`otp-${i}`}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center text-xl border rounded-xl focus:ring-2 focus:ring-[#1392E0] outline-none"
              value={val}
              onChange={(e) => handleOtpChange(e.target.value, i)}
            />
          ))}
        </div>

        <input
          type="password"
          placeholder="New Password"
          className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#1392E0]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#1392E0]"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 text-white text-lg font-semibold rounded-xl transition-all"
          style={{ backgroundColor: "#023A9A" }}
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </Modal>
  );
};

export default ResetPasswordModal;
