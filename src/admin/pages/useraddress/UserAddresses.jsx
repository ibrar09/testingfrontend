// src/pages/AdminDashboard/UserAddresses/UserAddresses.jsx
import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Chip, CircularProgress, Alert } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AddUserAddressModal from "./AddUserAddressModal";
import EditUserAddressModal from "./EditUserAddressModal";
import api from "../../../api/api"; // ✅ centralized API instance

const UserAddresses = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all addresses (admin)
  const fetchAddresses = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await api.get("/user-addresses"); // ✅ centralized API
      const mapped = res.data.map(addr => ({
        ...addr,
        user_name: addr.user?.name || "-",
      }));
      setAddresses(mapped);
    } catch (err) {
      console.error("Failed to fetch addresses:", err);
      setError(err.response?.data?.error || err.message || "Failed to fetch addresses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  // Add new address
  const handleAdd = async (newAddressData) => {
    try {
      const res = await api.post("/user-addresses", newAddressData); // ✅ centralized API
      const mapped = {
        ...res.data.address,
        user_name: res.data.address.user?.name || "-",
      };
      setAddresses(prev => [...prev, mapped]);
      setIsAddOpen(false);
    } catch (err) {
      console.error("Failed to add address:", err);
      alert(err.response?.data?.error || "Failed to add address");
    }
  };

  // Edit existing address
  const handleEdit = async (updatedAddressData) => {
    try {
      const res = await api.put(`/user-addresses/${updatedAddressData.id}`, updatedAddressData); // ✅ centralized API
      const updatedData = {
        ...res.data.address,
        user_name: res.data.address.user?.name || "-",
      };
      setAddresses(prev =>
        prev.map(a => (a.id === updatedData.id ? updatedData : a))
      );
      setIsEditOpen(false);
    } catch (err) {
      console.error("Failed to update address:", err);
      alert(err.response?.data?.error || "Failed to update address");
    }
  };

  // Delete an address
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this address?")) return;
    try {
      await api.delete(`/user-addresses/${id}`); // ✅ centralized API
      setAddresses(prev => prev.filter(a => a.id !== id));
    } catch (err) {
      console.error("Failed to delete address:", err);
      alert(err.response?.data?.error || "Failed to delete address");
    }
  };

  // DataGrid columns
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "user_name", headerName: "User Name", width: 150 },
    { field: "full_name", headerName: "Full Name", width: 150 },
    { field: "phone", headerName: "Phone", width: 120 },
    { field: "address_line1", headerName: "Address Line 1", flex: 1 },
    { field: "address_line2", headerName: "Address Line 2", flex: 1 },
    { field: "city", headerName: "City", width: 120 },
    { field: "state", headerName: "State", width: 120 },
    { field: "postal_code", headerName: "Postal Code", width: 100 },
    { field: "country", headerName: "Country", width: 120 },
    {
      field: "is_default",
      headerName: "Default",
      width: 100,
      renderCell: (params) =>
        params.value ? (
          <Chip label="Yes" color="success" size="small" />
        ) : (
          <Chip label="No" color="default" size="small" />
        ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      renderCell: (params) => (
        <Box>
          <Button
            size="small"
            onClick={() => {
              setSelectedAddress(params.row);
              setIsEditOpen(true);
            }}
          >
            Edit
          </Button>
          <Button
            size="small"
            color="error"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  // Loading & error handling
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          User Addresses
        </Typography>
        <Button variant="contained" onClick={() => setIsAddOpen(true)}>
          + Add Address
        </Button>
      </Box>

      <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={addresses}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          disableSelectionOnClick
        />
      </Box>

      <AddUserAddressModal
        open={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onAdd={handleAdd}
      />
      <EditUserAddressModal
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onEdit={handleEdit}
        address={selectedAddress}
      />
    </Box>
  );
};

export default UserAddresses;
