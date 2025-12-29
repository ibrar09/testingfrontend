// src/pages/AdminDashboard/Users/EditUserModal.jsx
import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
  CircularProgress,
} from "@mui/material";
import api from "../../../api/api"; // ✅ centralized API

const EditUserModal = ({ open, onClose, onEdit, user }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "user",
    status: "active",
  });

  const [loading, setLoading] = useState(false);

  // Load user data when modal opens
  useEffect(() => {
    if (user && open) {
      setForm({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        role: user.role || "user",
        status: user.status || "active",
      });
    }
  }, [user, open]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const res = await api.put(`/users/${user.id}`, form); // ✅ centralized API
      const updatedUser = res.data.user || form;

      onEdit(updatedUser); // Update parent Users table immediately
      onClose();           // Close modal
    } catch (err) {
      console.error("🔴 Update user error:", err.response?.data || err.message);
      alert(err.response?.data?.error || "Failed to update user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={() => !loading && onClose()}>
      <Box
        sx={{
          p: 4,
          bgcolor: "white",
          width: 420,
          borderRadius: 2,
          boxShadow: 5,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography variant="h6" mb={2} fontWeight="bold">
          Edit User
        </Typography>

        <TextField
          fullWidth
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          select
          fullWidth
          label="Role"
          name="role"
          value={form.role}
          onChange={handleChange}
          margin="normal"
        >
          <MenuItem value="user">User</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="staff">Staff</MenuItem>
        </TextField>

        <TextField
          select
          fullWidth
          label="Status"
          name="status"
          value={form.status}
          onChange={handleChange}
          margin="normal"
        >
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
          <MenuItem value="banned">Banned</MenuItem>
        </TextField>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          disabled={loading}
          onClick={handleSubmit}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Update User"}
        </Button>
      </Box>
    </Modal>
  );
};

export default EditUserModal;
