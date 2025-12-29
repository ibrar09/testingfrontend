// src/layouts/StoreLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./StoreNavBar";
import Footer from "./Footer";
import { CartProvider } from "../../context/CartContext"; // ✅ make sure path is correct

const StoreLayout = () => (
  // ✅ Wrap everything with CartProvider
  <CartProvider>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  </CartProvider>
);

export default StoreLayout;
