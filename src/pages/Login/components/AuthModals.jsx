import React, { useState } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import ResetPasswordRequestModal from "./ResetPasswordRequestModal";
import ResetPasswordModal from "./ResetPasswordModal";
import VerifyOtpModal from "./VerifyOtpModal";
import toast from "react-hot-toast";

export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  const handleLoginSuccess = () => {
    toast.success("Login successful");
    onClose();
    onLoginSuccess?.();
  };

  return (
    <>
      {mode === "login" && (
        <LoginModal
          isOpen={true}
          onClose={onClose}
          switchToRegister={() => setMode("register")}
          switchToForgot={() => setMode("forgot")}
          onLoginSuccess={handleLoginSuccess}
          onOtpRequired={(e) => {
            setEmail(e);
            setMode("otp");
          }}
        />
      )}

      {mode === "register" && (
        <RegisterModal
          isOpen={true}
          onClose={onClose}
          switchToLogin={() => setMode("login")}
          switchToOtp={(e) => {
            setEmail(e);
            setMode("otp");
          }}
        />
      )}

      {mode === "forgot" && (
        <ResetPasswordRequestModal
          isOpen={true}
          onClose={onClose}
          onSuccess={(e) => {
            console.log("✅ OTP sent to:", e);
            setEmail(e);
            setMode("reset");
          }}
        />
      )}

      {mode === "reset" && (
        <ResetPasswordModal
          isOpen={true}
          email={email}
          onClose={() => setMode("login")}
          onSuccess={(  ) => {
            toast.success("Password reset successful");
            setMode("login");
          }}
        />
      )}

      {mode === "otp" && (
        <VerifyOtpModal
          isOpen={true}
          email={email}
          onClose={onClose}
          onSuccess={handleLoginSuccess}
        />
      )}
    </>
  );
}
