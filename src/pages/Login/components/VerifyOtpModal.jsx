// src/components/VerifyOtpModal.jsx
import React, { useState, useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import toast from "react-hot-toast";
import Modal from "./Modal";

const VerifyOtpModal = ({ isOpen, onClose, email, onSuccess }) => {
  const { verifyOtp, resendOtp } = useAuth();
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setTimer(60);
    setCanResend(false);
  }, [isOpen]);

  useEffect(() => {
    if (timer === 0) return setCanResend(true);
    const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Email missing!");

    setLoading(true);
    try {
      const res = await verifyOtp(email, otp);
      if (res?.message.includes("verified")) {
        toast.success("OTP verified!");
        onSuccess();
      } else {
        toast.error(res?.message || "OTP verification failed");
      }
    } catch (err) {
      toast.error(err.message || "Error verifying OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email) return;
    setLoading(true);
    try {
      const res = await resendOtp(email);
      if (res?.otpSent) {
        toast.success("OTP resent!");
        setTimer(60);
        setCanResend(false);
      }
    } catch (err) {
      toast.error("Failed to resend OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Verify OTP">
      <p className="mb-4 text-gray-600 text-center">OTP sent to <b>{email}</b></p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1392E0]"
          required
        />
        <button type="submit" disabled={loading} className="w-full py-3 rounded-xl font-semibold text-white" style={{ backgroundColor: "#023A9A" }}>
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>
      <div className="mt-3 text-center">
        {canResend ? (
          <button onClick={handleResend} className="text-[#1392E0] underline">Resend OTP</button>
        ) : (
          <p className="text-gray-500">Resend in {timer}s</p>
        )}
      </div>
    </Modal>
  );
};

export default VerifyOtpModal;
