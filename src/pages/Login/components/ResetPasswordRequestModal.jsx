// src/components/modals/ForgotPassword.jsx
import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import ResetPasswordModal from "./ResetPasswordModal";
import Modal from "./Modal";

const ForgotPassword = ({ isOpen, onClose }) => {
  const { requestPasswordReset } = useAuth();
  const [email, setEmail] = useState("");
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // ✅ Inline error state

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError(""); // reset previous error

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    setLoading(true);
    try {
      const res = await requestPasswordReset(email);
      if (res.success) {
        setIsResetModalOpen(true); // Open reset modal
      } else {
        setError(res.message || "Failed to send OTP. Try again.");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || err.message || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title="Forgot Password">
        <form onSubmit={handleForgotPassword} className="space-y-4">
          {error && <p className="text-red-500 text-sm font-medium">{error}</p>} {/* ✅ Inline error */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1392E0]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full py-3 font-semibold text-white rounded-xl"
            style={{ backgroundColor: "#023A9A" }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send OTP"}
          </button>
        </form>
      </Modal>

      <ResetPasswordModal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        email={email}
        onSuccess={() => {
          setIsResetModalOpen(false); // Close reset modal
          onClose();                  // Close forgot password modal
        }}
      />
    </>
  );
};

export default ForgotPassword;
