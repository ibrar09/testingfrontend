// src/components/ProtectedRoute/ProtectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>; // waiting for auth check
  if (!user) return <Navigate to="/login" replace />; // not logged in

  if (allowedRoles && user.role && allowedRoles.includes(user.role)) {
    return <Outlet />; // user allowed, render child routes
  }

  return <Navigate to="/" replace />; // unauthorized
};

export default ProtectedRoute;
