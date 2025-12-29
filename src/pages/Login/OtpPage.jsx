import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const VerifyOtp = () => {
  const { verifyOtp, resendOtp } = useAuth(); // Added resendOtp
  const location = useLocation();
  const navigate = useNavigate();

  // Get email from previous page (Register or Login)
  const email = location.state?.email;

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  // Timer state
  const [timer, setTimer] = useState(60); // 60 seconds
  const [canResend, setCanResend] = useState(false);

  // Countdown effect
  useEffect(() => {
    if (timer === 0) {
      setCanResend(true);
      return;
    }

    const countdown = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer]);

  // Handle OTP verification
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email not found. Please go back and try again.");
      return;
    }

    setLoading(true);
    console.log("📨 OTP Verification Started", { email, otp });

    try {
      const res = await verifyOtp(email, otp);

      if (res?.message && res.message.includes("verified")) {
        toast.success("OTP verified successfully!");
        navigate("/shop", { replace: true }); // Redirect to shop
      } else {
        toast.error(res?.message || "OTP verification failed!");
      }
    } catch (err) {
      console.error("❌ OTP verification error:", err);
      toast.error(err.message || "OTP verification failed!");
    } finally {
      setLoading(false);
    }
  };

  // Handle resend OTP
  const handleResend = async () => {
    if (!email) return;

    setLoading(true);
    try {
      const res = await resendOtp(email);
      if (res?.otpSent) {
        toast.success("OTP resent successfully!");
        setTimer(60); // Reset timer
        setCanResend(false);
      } else {
        toast.error(res?.message || "Failed to resend OTP");
      }
    } catch (err) {
      console.error("❌ Resend OTP error:", err);
      toast.error(err.message || "Failed to resend OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>
      <p className="text-gray-600 mb-4">
        OTP sent to: <b>{email}</b>
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Processing..." : "Verify OTP"}
        </button>
      </form>

      {/* Timer and Resend */}
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
    </div>
  );
};

export default VerifyOtp;
