// src/components/RegisterModal.jsx
import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import Modal from "./Modal";
import toast from "react-hot-toast";

const RegisterModal = ({ isOpen, onClose, switchToLogin, switchToOtp }) => {
  const { register, loginWithGoogle, loading } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [error, setError] = useState(""); // ✅ Inline error state

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // reset previous error

    // ✅ Basic validation
    if (!form.name || !form.email || !form.password) {
      setError("Please fill all required fields.");
      return;
    }

    try {
      const res = await register(form.name, form.email, form.phone, form.password);
      if (res) {
        toast.success("Registration successful! OTP sent to your email.");
        switchToOtp(form.email);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Try again.");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create Account">
      <button
        onClick={loginWithGoogle}
        className="flex items-center justify-center w-full py-3 border rounded-xl hover:shadow-lg transition mb-4"
      >
        <FcGoogle className="mr-2 text-xl" /> Continue with Google
      </button>

      <form onSubmit={handleSubmit} className="space-y-3">
        {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1392E0]"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1392E0]"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone (optional)"
          value={form.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1392E0]"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1392E0]"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl font-semibold text-white"
          style={{ backgroundColor: "#023A9A" }}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      <div className="mt-4 text-center text-gray-600 text-sm">
        <p>
          Already have account?{" "}
          <span className="text-[#1392E0] cursor-pointer" onClick={switchToLogin}>
            Login
          </span>
        </p>
      </div>
    </Modal>
  );
};

export default RegisterModal;
