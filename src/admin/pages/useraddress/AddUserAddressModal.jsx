// src/pages/AdminDashboard/UserAddresses/AddUserAddressModal.jsx
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import api from "../../../api/api"; // ✅ centralized API

const AddUserAddressModal = ({ open, onClose, onAdd }) => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    user_id: "",
    full_name: "",
    phone: "",
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
    is_default: false,
  });

  // Fetch users for dropdown
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get("/users"); // ✅ centralized API
        setUsers(res.data.data || res.data);
      } catch (err) {
        console.error("Failed to fetch users", err);
      }
    };
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await api.post("/user-addresses", form); // ✅ centralized API
      onAdd(res.data);
      setForm({
        user_id: "",
        full_name: "",
        phone: "",
        address_line1: "",
        address_line2: "",
        city: "",
        state: "",
        postal_code: "",
        country: "",
        is_default: false,
      });
    } catch (err) {
      console.error("Failed to add address", err);
      alert(err.response?.data?.error || "Failed to add address");
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add User Address</DialogTitle>
      <DialogContent>
        <TextField
          select
          label="User"
          name="user_id"
          value={form.user_id}
          onChange={handleChange}
          fullWidth
          margin="normal"
        >
          {users.map((user) => (
            <MenuItem key={user.id} value={user.id}>
              {user.name} ({user.email})
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Full Name"
          name="full_name"
          value={form.full_name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Address Line 1"
          name="address_line1"
          value={form.address_line1}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Address Line 2"
          name="address_line2"
          value={form.address_line2}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="City"
          name="city"
          value={form.city}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="State"
          name="state"
          value={form.state}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Postal Code"
          name="postal_code"
          value={form.postal_code}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Country"
          name="country"
          value={form.country}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          select
          label="Default Address"
          name="is_default"
          value={form.is_default ? "true" : "false"}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              is_default: e.target.value === "true",
            }))
          }
          fullWidth
          margin="normal"
        >
          <MenuItem value="true">Yes</MenuItem>
          <MenuItem value="false">No</MenuItem>
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUserAddressModal;
