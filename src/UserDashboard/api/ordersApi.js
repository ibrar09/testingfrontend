// src/api/ordersApi.js
import axios from "axios";
import { API_BASE_URL } from "../../api/config";

const API_URL = `${API_BASE_URL}/orders`;

// ✅ Fetch all orders for the logged-in user
export const getUserOrders = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("User is not logged in");

    // Fixed URL to match backend route
    const res = await axios.get(`${API_URL}/my/orders`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    // extract the array from res.data.data
    if (res.data && Array.isArray(res.data.data)) {
      return res.data.data; // this is the array of orders
    } else {
      console.warn("getUserOrders: API did not return an array", res.data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching user orders:", error);
    return [];
  }
};

// Get details for a single order
export const getOrderById = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }
};
