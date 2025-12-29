import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

// Pages
import DashboardHome from "./pages/DashboardHome";
import ProductsPage from "./pages/products/Products";
import OrdersPage from "./pages/orders/OrdersPage";
import CustomersPage from "./pages/customers/CustomersPage";
import AdminSettings from "./pages/setting/AdminSettings";
import UsersPage from "./pages/users/UsersPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import CategoryPage from "./pages/category/category";
import BrandPage from "./pages/brand/brand";
import UserAddress from "./pages/useraddress/UserAddresses";
import ProductVarient from "./pages/productsvaient/ProductVariantsPage";
import OrderItems from "./pages/ordersitems/OrderItemsPage";
import PaymentsPage from "./pages/payments/PaymentsPage";
import ShipmentsPage from "./pages/shipment/ShipmentsPage";
import CouponsPage from "./pages/coupons/CouponsPage";
import Banners from "./pages/banner/Banners";

import InvoiceRequests from "./pages/InvoiceRequests/InvoiceRequests";

const AdminRoutes = () => (
  <Routes>

    {/* 🔥 Correct: Wrap AdminLayout inside ProtectedRoute */}
    <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
      <Route element={<AdminLayout />}>
        <Route path="dashboard" element={<DashboardHome />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="customers" element={<CustomersPage />} />
        <Route path="settings" element={<AdminSettings />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="category" element={<CategoryPage />} />
        <Route path="brand" element={<BrandPage />} />
        <Route path="useraddress" element={<UserAddress />} />
        <Route path="productvarient" element={<ProductVarient />} />
        <Route path="ordersitems" element={<OrderItems />} />
        <Route path="payment" element={<PaymentsPage />} />
        <Route path="shipment" element={<ShipmentsPage />} />
        <Route path="coupons" element={<CouponsPage />} />
        <Route path="banners" element={<Banners />} />
        <Route path="invoice-request" element={<InvoiceRequests />} />
      </Route>
    </Route>

  </Routes>
);

export default AdminRoutes;
