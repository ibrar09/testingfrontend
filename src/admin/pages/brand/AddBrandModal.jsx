import React, { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import api from "../../../api/api"; // ✅ Use centralized axios instance

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const AddBrandModal = ({ open, onClose, onAdd }) => {
  const [form, setForm] = useState({
    name: "",
    logo_url: "",
    description: "",
    website: "",
    status: "active",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name.trim()) {
      alert("Brand name is required");
      return;
    }

    setLoading(true);
    try {
      const res = await api.post("/brands", form, {
        headers: { "Content-Type": "application/json" },
      });

      onAdd(res.data); // ✅ Corrected here
      setForm({
        name: "",
        logo_url: "",
        description: "",
        website: "",
        status: "active",
      });
      onClose(); // ✅ Close modal after success
    } catch (err) {
      console.error("Failed to add brand:", err.response?.data || err.message);
      alert(err.response?.data?.error || "Failed to add brand");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Logo URL"
          name="logo_url"
          value={form.logo_url}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Website"
          name="website"
          value={form.website}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Status"
          name="status"
          value={form.status}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={loading}
          fullWidth
        >
          {loading ? "Adding..." : "Add Brand"}
        </Button>
      </Box>
    </Modal>
  );
};

export default AddBrandModal;
