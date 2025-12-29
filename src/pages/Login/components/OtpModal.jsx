import React, { useState, useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import toast from "react-hot-toast";
import Modal from "./Modal"; // Your reusable modal component

const OtpModal = ({ isOpen, onClose, email }) => {
  const { verifyOtp, resendOtp } = useAuth();
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // ✅ Inline error state

  // Timer state
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  // Countdown effect
  useEffect(() => {
    if (!isOpen) return; // Stop timer when modal is closed
    if (timer === 0) {
      setCanResend(true);
      return;
    }

    const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(countdown);
  }, [timer, isOpen]);

  // Handle OTP verification
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // reset previous error

    if (!email) {
      setError("Email not found.");
      return;
    }

    if (!otp) {
      setError("Please enter the OTP.");
      return;
    }

    setLoading(true);
    try {
      const res = await verifyOtp(email, otp);

      if (res?.message?.toLowerCase().includes("verified")) {
        toast.success("OTP verified successfully!");
        onClose(); // Close modal after success
      } else {
        setError(res?.message || "OTP verification failed.");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || err.message || "OTP verification failed.");
    } finally {
      setLoading(false);
    }
  };

  // Handle resend OTP
  const handleResend = async () => {
    if (!email) return;

    setLoading(true);
    setError("");
    try {
      const res = await resendOtp(email);
      if (res?.otpSent) {
        toast.success("OTP resent successfully!");
        setTimer(60);
        setCanResend(false);
      } else {
        setError(res?.message || "Failed to resend OTP");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || err.message || "Failed to resend OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Verify OTP">
      <p className="text-gray-600 mb-4">
        OTP sent to: <b>{email}</b>
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Processing..." : "Verify OTP"}
        </button>
      </form>

      <div className="mt-4 text-center">
        {canResend ? (
          <button
            onClick={handleResend}
            className="text-blue-600 hover:underline"
            disabled={loading}
          >
            Resend OTP
          </button>
        ) : (
          <p className="text-gray-500">Resend OTP in {timer}s</p>
        )}
      </div>
    </Modal>
  );
};

export default OtpModal;
