// src/pages/AdminDashboard/Users/AddUserModal.jsx
import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";
import api from "../../../api/api"; // ✅ centralized API

const AddUserModal = ({ open, onClose, onAdd }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "customer",
    status: "active",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await api.post("/users", form); // ✅ centralized API
      onAdd(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to add user");
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ p: 4, bgcolor: "white", mx: "auto", mt: "10%", width: 400 }}>
        <Typography variant="h6" mb={2}>
          Add User
        </Typography>
        <TextField fullWidth label="Name" name="name" value={form.name} onChange={handleChange} margin="normal" />
        <TextField fullWidth label="Email" name="email" value={form.email} onChange={handleChange} margin="normal" />
        <TextField fullWidth label="Phone" name="phone" value={form.phone} onChange={handleChange} margin="normal" />
        <TextField select fullWidth label="Role" name="role" value={form.role} onChange={handleChange} margin="normal">
          <MenuItem value="customer">Customer</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="staff">Staff</MenuItem>
        </TextField>
        <TextField select fullWidth label="Status" name="status" value={form.status} onChange={handleChange} margin="normal">
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
          <MenuItem value="banned">Banned</MenuItem>
        </TextField>
        <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>
          Add User
        </Button>
      </Box>
    </Modal>
  );
};

export default AddUserModal;
