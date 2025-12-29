// src/context/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import api, { BACKEND_URL } from "../api/api"; // centralized axios instance
import { useAuth } from "./AuthContext";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user, token } = useAuth();
  const [cart, setCart] = useState([]);

  const API_CART = "/cart-items"; // relative to api.defaults.baseURL

  // -----------------------------
  // Helper: normalize image URLs
  // -----------------------------
  const normalizeImage = (img) => {
    const fallback = "/images/placeholder.png";

    if (!img) return fallback;

    if (typeof img === "string") {
      try {
        if (img.startsWith("[") && img.endsWith("]")) {
          const parsed = JSON.parse(img);
          if (Array.isArray(parsed) && parsed.length > 0) return normalizeImage(parsed[0]);
        }
      } catch {}

      if (img.startsWith("http")) return img;
      if (img.startsWith("/uploads")) return `${BACKEND_URL}${img}`;
      if (img.startsWith("uploads")) return `${BACKEND_URL}/${img}`;

      return img || fallback;
    }

    if (Array.isArray(img)) return img.length > 0 ? normalizeImage(img[0]) : fallback;
    if (img && img.image_url) return normalizeImage(img.image_url);

    return fallback;
  };

  // -----------------------------
  // FETCH CART
  // -----------------------------
  const fetchCartFromBackend = async () => {
    if (!user || !token) {
      const localCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(localCart);
      return;
    }

    try {
      const res = await api.get(`${API_CART}/user/${user.id}`);
      const backendCart = Array.isArray(res.data) ? res.data : res.data.data || [];

      const normalizedCart = backendCart.map((item) => {
        const product = item.product || {};
        let images = [];

        if (product.image_urls) {
          try {
            const parsedUrls = JSON.parse(product.image_urls);
            if (Array.isArray(parsedUrls) && parsedUrls.length > 0) {
              images = parsedUrls.map(normalizeImage);
            } else {
              images = ["/images/placeholder.png"];
            }
          } catch {
            images = [normalizeImage(product.image_urls)];
          }
        } else if (Array.isArray(product.images)) {
          images = product.images.map(normalizeImage);
        } else if (typeof product.images === "string") {
          try {
            const parsed = JSON.parse(product.images);
            images = Array.isArray(parsed) ? parsed.map(normalizeImage) : [normalizeImage(parsed)];
          } catch {
            images = [normalizeImage(product.images)];
          }
        } else {
          images = ["/images/placeholder.png"];
        }

        return {
          id: item.id,
          quantity: item.quantity,
          price: Number(product.price || 0),
          oldPrice: Number(product.oldprice || 0),
          stockAmount: product.stockAmount ?? product.stock ?? 10,
          inStock: product.inStock ?? (product.stock > 0) ?? true,
          title: product.display_name || product.name || "Unknown Product",
          description: product.display_description || product.description || "",
          images,
          product_id: item.product_id,
          variant_id: item.variant_id,
        };
      });

      setCart(normalizedCart);
    } catch (err) {
      console.error("Failed to fetch cart:", err.response?.data || err.message);
      setCart([]);
    }
  };

  // -----------------------------
  // ADD TO CART
  // -----------------------------
  const addToCart = async (product) => {
    if (!user) {
      const localCart = JSON.parse(localStorage.getItem("cart")) || [];
      const existing = localCart.find((i) => i.product_id === product.id);
      if (existing) existing.quantity += 1;
      else localCart.push({ ...product, quantity: 1 });

      localStorage.setItem("cart", JSON.stringify(localCart));
      setCart(localCart);
      toast.success("Added to cart (Local)");
      return;
    }

    try {
      const payload = {
        user_id: user.id,
        product_id: product.id,
        variant_id: product.variant_id || null,
        quantity: 1,
      };

      await api.post(API_CART, payload);
      await fetchCartFromBackend();
      toast.success("Added to cart");
    } catch (err) {
      console.error("Add cart error:", err.response?.data || err.message);
      toast.error("Failed to add to cart");
    }
  };

  // -----------------------------
  // UPDATE QUANTITY
  // -----------------------------
  const updateQuantity = async (id, quantity) => {
    if (!user || !token) {
      const localCart = JSON.parse(localStorage.getItem("cart")) || [];
      const item = localCart.find((i) => i.id === id || i.product_id === id);
      if (!item) return;
      item.quantity = quantity;
      localStorage.setItem("cart", JSON.stringify(localCart));
      setCart(localCart);
      return;
    }

    try {
      await api.put(`${API_CART}/${id}`, { quantity });
      await fetchCartFromBackend();
    } catch (err) {
      console.error("Update quantity error:", err.response?.data || err.message);
    }
  };

  // -----------------------------
  // REMOVE ITEM
  // -----------------------------
  const removeFromCart = async (id) => {
    if (!user || !token) {
      const localCart = JSON.parse(localStorage.getItem("cart")) || [];
      const filtered = localCart.filter((i) => i.id !== id && i.product_id !== id);
      localStorage.setItem("cart", JSON.stringify(filtered));
      setCart(filtered);
      return;
    }

    try {
      await api.delete(`${API_CART}/${id}`);
      await fetchCartFromBackend();
    } catch (err) {
      console.error("Remove cart item error:", err.response?.data || err.message);
    }
  };

  // -----------------------------
  // CLEAR CART
  // -----------------------------
  const clearCart = async () => {
    if (!user || !token) {
      localStorage.removeItem("cart");
      setCart([]);
      return;
    }

    try {
      await api.delete(`${API_CART}/clear/${user.id}`);
      setCart([]);
    } catch (err) {
      console.error("Clear cart error:", err.response?.data || err.message);
    }
  };

  // -----------------------------
  // Load cart whenever user/token changes
  // -----------------------------
  useEffect(() => {
    fetchCartFromBackend();
  }, [user, token]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        fetchCartFromBackend,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
