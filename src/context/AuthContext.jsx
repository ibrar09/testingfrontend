import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api, { BACKEND_URL } from "../api/api"; // ✅ centralized API instance

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  // -------------------------------
  // Fetch current user on app load
  // -------------------------------
  // AuthContext.jsx

useEffect(() => {
  const fetchUser = async () => {
    console.log("🔹 [AuthContext] Fetching current user...");

    // --- 1. Check URL for Google token ---
    const params = new URLSearchParams(window.location.search);
    const tokenFromUrl = params.get("token"); // ✅ must match backend query param
    if (tokenFromUrl) {
      console.log("🔹 [AuthContext] Found Google token in URL:", tokenFromUrl);
      localStorage.setItem("token", tokenFromUrl);
      setToken(tokenFromUrl);

      // Clean URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    // --- 2. Check localStorage token ---
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      console.log("🔹 [AuthContext] No token found, guest user");
      setUser(null);
      setToken(null);
      setLoading(false);
      return;
    }

    try {
      const res = await api.get("/auth/me", {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      console.log("🔹 [AuthContext] /me response:", res.data);
      setUser(res.data.user || null);
      setToken(storedToken);
    } catch (err) {
      console.error("❌ [AuthContext] Failed to fetch user:", err);
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  };

  fetchUser();
}, []);

  // -------------------------------
  // REGISTER
  // -------------------------------
  const register = async (name, email, phone, password, role = "user") => {
    console.log("🚀 [AuthContext] Register request:", { name, email, phone, role });
    try {
      const res = await api.post("/auth/register", { name, email, phone, password, role });
      console.log("✅ [AuthContext] Register response:", res.data);
      toast.success("OTP sent to your email!");
      return res.data;
    } catch (err) {
      console.error("❌ [AuthContext] Register error:", err.response?.data || err);
      toast.error(err.response?.data?.message || "Registration failed");
      return null;
    }
  };

  // -------------------------------
  // VERIFY OTP
  // -------------------------------
  const verifyOtp = async (email, otp) => {
    console.log("🔵 [AuthContext] Verify OTP request:", { email, otp });
    try {
      const res = await api.post("/auth/verify-otp", { email, otp });
      console.log("🟢 [AuthContext] OTP verify response:", res.data);

      if (res.data.accessToken) {
        localStorage.setItem("token", res.data.accessToken);
        setToken(res.data.accessToken);
        setUser(res.data.user);
        toast.success("OTP verified!");
        navigate("/shop");
      }

      return res.data;
    } catch (err) {
      console.error("❌ [AuthContext] OTP verify error:", err.response?.data || err);
      toast.error(err.response?.data?.message || "OTP verification failed");
      return null;
    }
  };

  // -------------------------------
  // LOGIN
  // -------------------------------
  const login = async (email, password) => {
  setLoading(true);
  console.log("🔵 [AuthContext] Login request:", { email });

  try {
    const res = await api.post("/auth/login", { email, password });
    console.log("🟢 [AuthContext] Login response:", res.data);

    if (res.data.accessToken) {
      localStorage.setItem("token", res.data.accessToken);
      setToken(res.data.accessToken);
      setUser(res.data.user);
      return res.data; // successful login
    }
  } catch (err) {
    console.error("❌ [AuthContext] Login error:", err.response?.data || err);
    // Throw the error so the modal can catch it
    throw err;
  } finally {
    setLoading(false);
  }
};

const resetPassword = async (email, otp, newPassword) => {
  try {
    const res = await api.post("/auth/reset-password", { email, otp, newPassword });
    return { success: true, message: res.data.message };
  } catch (err) {
    console.error("❌ [AuthContext] Reset password error:", err.response?.data || err);
    return { success: false, message: err.response?.data?.message || "Failed to reset password" };
  }
};


const requestPasswordReset = async (email) => {
  try {
    const res = await api.post("/auth/forgot-password", { email });
    toast.success(res.data.message || "OTP sent to your email");
    return { success: true, message: res.data.message };
  } catch (err) {
    console.error("❌ [AuthContext] Forgot password error:", err.response?.data || err);
    toast.error(err.response?.data?.message || "Failed to send OTP");
    return { success: false, message: err.response?.data?.message || "Failed to send OTP" };
  }
};

  // -------------------------------
  // LOGOUT
  // -------------------------------
  const logout = async () => {
    try {
      await api.get("/auth/logout");
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // -------------------------------
  // GOOGLE LOGIN
  // -------------------------------
  const loginWithGoogle = () => {
    setLoading(true);
    window.location.href = `${BACKEND_URL}/api/v1/auth/google`;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        axiosInstance: api,
        register,
        verifyOtp,
        login,
        resetPassword,
        requestPasswordReset,
        logout,
        loginWithGoogle,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
