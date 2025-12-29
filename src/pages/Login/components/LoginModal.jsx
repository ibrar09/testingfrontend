// src/components/LoginModal.jsx
import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import Modal from "./Modal";

const LoginModal = ({ isOpen, onClose, switchToRegister, switchToForgot ,onLoginSuccess }) => {
  const { login, loginWithGoogle, loading } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // Error state
  const [touched, setTouched] = useState({ email: false, password: false }); // Track touched fields

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset previous errors

    if (!form.email || !form.password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
  await login(form.email, form.password);
  if (onLoginSuccess) onLoginSuccess(); // modal closes only on success
} catch (err) {
  const message = err.response?.data?.message || "Login failed. Please check your credentials.";
  setError(message); // ❌ now shows error inside the modal
}

  };

  // Validation messages for each field
  const getValidationMessage = (field) => {
    if (!touched[field]) return "";
    if (field === "email" && !form.email) return "Email is required.";
    if (field === "password" && !form.password) return "Password is required.";
    return "";
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Welcome Back">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* General form error */}
        {error && (
          <div className="bg-red-50 text-red-700 border border-red-200 px-4 py-2 rounded-md text-sm">
            {error}
          </div>
        )}

        {/* Email input */}
        <div>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            onBlur={() => setTouched({ ...touched, email: true })}
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
              getValidationMessage("email")
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-[#1392E0]"
            }`}
            required
          />
          {getValidationMessage("email") && (
            <p className="text-red-500 text-xs mt-1">{getValidationMessage("email")}</p>
          )}
        </div>

        {/* Password input */}
        <div>
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            onBlur={() => setTouched({ ...touched, password: true })}
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
              getValidationMessage("password")
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-[#1392E0]"
            }`}
            required
          />
          {getValidationMessage("password") && (
            <p className="text-red-500 text-xs mt-1">{getValidationMessage("password")}</p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl font-semibold text-white transition-colors duration-200"
          style={{ backgroundColor: "#023A9A" }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* Google login */}
      <button
        onClick={loginWithGoogle}
        className="flex items-center justify-center w-full py-3 mt-4 border rounded-xl hover:shadow-lg transition"
      >
        <FcGoogle className="mr-2 text-xl" /> Continue with Google
      </button>

      {/* Footer links */}
      <div className="mt-4 text-center text-gray-600 text-sm">
        <p>
          Forgot password?{" "}
          <span className="text-[#1392E0] cursor-pointer" onClick={switchToForgot}>
            Reset
          </span>
        </p>
        <p className="mt-2">
          No account?{" "}
          <span className="text-[#1392E0] cursor-pointer" onClick={switchToRegister}>
            Register
          </span>
        </p>
      </div>
    </Modal>
  );
};

export default LoginModal;
