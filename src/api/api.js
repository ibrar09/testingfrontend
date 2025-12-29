// src/api/api.js
import axios from "axios";
import { BACKEND_URL, API_BASE_URL } from "./config";

// ✅ Base API URL
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Optional: attach JWT token automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
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

// ✅ Centralized backend URL for images


export { BACKEND_URL, API_BASE_URL };
export default api;
