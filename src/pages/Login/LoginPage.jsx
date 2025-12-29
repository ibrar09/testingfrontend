import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Google icon

const LoginPage = () => {
  const { login, loginWithGoogle, loading } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) return alert("Please enter email and password!");

    try {
      const res = await login(form.email, form.password);
      console.log("✅ Login successful:", res);
      navigate("/shop"); // redirect to store page after login
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
      console.error("❌ Login error:", err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        <div className="my-5 flex items-center justify-center space-x-3">
          <span className="h-px w-12 bg-gray-300"></span>
          <span className="text-gray-400 font-medium">OR</span>
          <span className="h-px w-12 bg-gray-300"></span>
        </div>

        <button
          onClick={loginWithGoogle}
          className="flex items-center justify-center w-full py-3 border border-gray-300 rounded-xl hover:shadow-lg transition duration-300"
        >
          <FcGoogle className="mr-2 text-xl" />
          Continue with Google
        </button>

        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>
            Forgot password?{" "}
            <Link to="/forgot-password" className="text-blue-600 font-semibold">
              Reset
            </Link>
          </p>
          <p className="mt-2">
            No account?{" "}
            <Link to="/register" className="text-blue-600 font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
