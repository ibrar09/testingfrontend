// src/admin/pages/shipment/ShipmentsPage.jsx
import React, { useEffect, useState } from "react";
import api from "../../../api/api"; // Centralized axios instance
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminShipments = () => {
  const [shipments, setShipments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState("");
  const [manualOrder, setManualOrder] = useState(""); // Manual input
  const [status, setStatus] = useState("processing");
  const [courier, setCourier] = useState("Aramex");
  const [trackingNumber, setTrackingNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  const couriers = ["Aramex", "SMSA", "Naqel", "DHL", "FedEx"];

  // Fetch shipments
  const fetchShipments = async () => {
    setLoading(true);
    try {
      const res = await api.get("/shipments");
      setShipments(res.data.data || []);
    } catch (err) {
      toast.error("Failed to fetch shipments");
      console.error(err.response?.data || err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch available orders
  const fetchOrders = async () => {
    try {
      const res = await api.get("/orders");
      setOrders(res.data.data || []);
    } catch (err) {
      console.error("Failed to fetch orders:", err.response?.data || err);
    }
  };

  useEffect(() => {
    fetchShipments();
    fetchOrders();
  }, []);

  // Create shipment
  const handleCreateShipment = async () => {
    const orderToUse = manualOrder.trim() || selectedOrder;
    if (!orderToUse)
      return toast.warning("Please select or enter an order number");

    setActionLoading(true);
    try {
      const res = await api.post("/shipments", {
        order_number: orderToUse, // Send order_number
        status,
        courier_name: courier,
        tracking_number: trackingNumber || null,
      });

      setShipments((prev) => [...prev, res.data.shipment]);
      toast.success("Shipment created successfully!");
      setSelectedOrder("");
      setManualOrder("");
      setStatus("processing");
      setCourier("Aramex");
      setTrackingNumber("");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to create shipment");
      console.error(err.response?.data || err);
    } finally {
      setActionLoading(false);
    }
  };

  // Update shipment
  const handleUpdateShipment = async (shipmentId, updates) => {
    setActionLoading(true);
    try {
      await api.put(`/shipments/${shipmentId}`, updates);
      setShipments((prev) =>
        prev.map((s) => (s.id === shipmentId ? { ...s, ...updates } : s))
      );
      toast.success("Shipment updated!");
    } catch (err) {
      toast.error("Failed to update shipment");
      console.error(err.response?.data || err);
    } finally {
      setActionLoading(false);
    }
  };

  // Delete shipment
  const handleDeleteShipment = async (shipmentId) => {
    if (!window.confirm("Are you sure you want to delete this shipment?")) return;
    setActionLoading(true);
    try {
      await api.delete(`/shipments/${shipmentId}`);
      setShipments((prev) => prev.filter((s) => s.id !== shipmentId));
      toast.success("Shipment deleted!");
    } catch (err) {
      toast.error("Failed to delete shipment");
      console.error(err.response?.data || err);
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) return <div className="p-6">Loading Shipments...</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <ToastContainer position="top-right" />

      <h1 className="text-2xl font-semibold mb-6">📦 Admin Shipments</h1>

      {/* Create Shipment */}
      <div className="bg-white shadow-md rounded-lg p-5 mb-6">
        <h2 className="text-lg font-semibold mb-4">Create Shipment</h2>
        <div className="flex flex-col md:flex-row gap-3">
          {/* Select Order */}
          <select
            value={selectedOrder}
            onChange={(e) => setSelectedOrder(e.target.value)}
            className="border rounded-md p-2 w-full md:w-1/3"
          >
            <option value="">Select Order</option>
            {orders.map((o) => (
              <option key={o.id} value={o.order_number}>
                {o.order_number} - {o.customer_name}
              </option>
            ))}
          </select>

          {/* Manual Order Number */}
          <input
            type="text"
            placeholder="Or paste order number"
            value={manualOrder}
            onChange={(e) => setManualOrder(e.target.value)}
            className="border rounded-md p-2 w-full md:w-1/3"
          />

          {/* Status */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded-md p-2 w-full md:w-1/6"
          >
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>

          {/* Courier */}
          <select
            value={courier}
            onChange={(e) => setCourier(e.target.value)}
            className="border rounded-md p-2 w-full md:w-1/6"
          >
            {couriers.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          {/* Tracking Number */}
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Tracking Number (optional)"
            className="border rounded-md p-2 w-full md:w-1/4"
          />

          {/* Create Button */}
          <button
            onClick={handleCreateShipment}
            disabled={actionLoading}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {actionLoading ? "Creating..." : "Create"}
          </button>
        </div>
      </div>

      {/* Shipments Table */}
      <div className="bg-white shadow-md rounded-lg p-5 overflow-x-auto">
        <table className="min-w-full border divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              {["ID", "Order #", "Status", "Delivery Date", "Admin Comment", "Courier", "Tracking", "Actions"].map(
                (h) => (
                  <th key={h} className="text-left text-sm font-medium text-gray-600 px-4 py-2">{h}</th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {shipments.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center text-gray-400 py-4">
                  No shipments found
                </td>
              </tr>
            ) : (
              shipments.map((s) => (
                <tr key={s.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{s.id}</td>
                  <td className="px-4 py-2">{s.order_number}</td>
                  <td className="px-4 py-2">
                    <select
                      value={s.status}
                      onChange={(e) => handleUpdateShipment(s.id, { status: e.target.value })}
                      className="border rounded-md p-1 text-sm"
                    >
                      <option value="processing">Processing</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                    </select>
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="date"
                      value={s.delivery_date?.split("T")[0] || ""}
                      onChange={(e) => handleUpdateShipment(s.id, { delivery_date: e.target.value })}
                      className="border rounded-md p-1 text-sm w-full"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      value={s.admin_comment || ""}
                      onChange={(e) => handleUpdateShipment(s.id, { admin_comment: e.target.value })}
                      placeholder="Add comment"
                      className="border rounded-md p-1 text-sm w-full"
                    />
                  </td>
                  <td className="px-4 py-2">{s.courier_name}</td>
                  <td className="px-4 py-2">
                    {s.tracking_number ? (
                      <a
                        href={s.tracking_url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-indigo-600 text-white px-3 py-1 rounded-md text-xs hover:bg-indigo-700"
                      >
                        Track
                      </a>
                    ) : (
                      <span className="text-gray-400 text-xs">N/A</span>
                    )}
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleUpdateShipment(s.id, { status: "delivered" })}
                      className="bg-green-600 text-white px-3 py-1 rounded-md text-xs hover:bg-green-700"
                    >
                      Delivered
                    </button>
                    <button
                      onClick={() => handleDeleteShipment(s.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded-md text-xs hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminShipments;
