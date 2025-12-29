// src/pages/AdminDashboard/Users/Users.jsx
import React, { useState, useEffect } from "react";
import { Box, Button, Typography, CircularProgress, Alert } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AddUserModal from "./AddUserModal";
import EditUserModal from "./EditUserModal";
import api from "../../../api/api"; // ✅ centralized API

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  // Fetch users from backend
  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await api.get("/users"); // ✅ centralized API
      const data = res.data.data || res.data;

      const mappedUsers = data.map((u) => ({
        id: u.id,
        name: u.name,
        email: u.email,
        phone: u.phone,
        role: u.role,
        status: u.status,
        created_at: u.created_at,
        default_address: u.default_address || "-",
      }));

      setUsers(mappedUsers);
    } catch (err) {
      console.error("Fetch users error:", err.response?.data || err.message);
      setError(err.response?.data?.error || err.message || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Add user handler
  const handleAdd = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
    setIsAddOpen(false);
  };

  // Edit user handler
  const handleEdit = (updatedUser) => {
    setUsers((prev) => prev.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    setIsEditOpen(false);
  };

  // Delete user handler
  const handleDelete = async (id) => {
    try {
      await api.delete(`/users/${id}`); // ✅ centralized API
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (err) {
      console.error("Failed to delete user:", err.response?.data || err.message);
      alert(err.response?.data?.error || "Failed to delete user");
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
    { field: "email", headerName: "Email", flex: 1, minWidth: 200 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "role", headerName: "Role", width: 120 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "default_address", headerName: "Default Address", flex: 1, minWidth: 200 },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      renderCell: (params) => (
        <Box>
          <Button
            size="small"
            onClick={() => {
              setSelectedUser(params.row);
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

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
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
          Users Management
        </Typography>
        <Button variant="contained" onClick={() => setIsAddOpen(true)}>
          + Add User
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          disableSelectionOnClick
          getRowId={(row) => row.id}
        />
      </Box>

      <AddUserModal
        open={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onAdd={handleAdd}
      />
      <EditUserModal
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onEdit={handleEdit}
        user={selectedUser}
      />
    </Box>
  );
};

export default Users;
