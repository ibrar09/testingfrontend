// src/UserDashboard/api/apiConfig.js
import axios from "axios";
import { API_BASE_URL } from "../../api/config";

// Create an axios instance for API calls
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add interceptors to attach JWT token from localStorage
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // replace with your auth storage
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for logging errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("[API ERROR]", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
