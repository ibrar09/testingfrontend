import React, { useState } from "react";
import { Modal, Box, TextField, Button, MenuItem } from "@mui/material";
import api from "../../../api/api"; // ✅ Use your centralized axios instance

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

const AddBannerModal = ({ open, onClose, onAdd }) => {
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    target_type: "product",
    target_value: "",
    active: true,
    priority: 1,
    start_date: "",
    end_date: "",
    image: null, // file
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async () => {
    if (!form.image) {
      alert("Please select an image to upload");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        if (form[key] !== null && form[key] !== "") formData.append(key, form[key]);
      });

      // ✅ Use centralized API instance
      const res = await api.post("/banners", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      }); 

      onAdd(res.data.data);

      // Reset form
      setForm({
        title: "",
        subtitle: "",
        target_type: "product",
        target_value: "",
        active: true,
        priority: 1,
        start_date: "",
        end_date: "",
        image: null,
      });
    } catch (err) {
      console.error("Failed to add banner:", err);
      alert("Failed to add banner");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <TextField
          fullWidth
          label="Title"
          name="title"
          value={form.title}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Subtitle"
          name="subtitle"
          value={form.subtitle}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          select
          fullWidth
          label="Target Type"
          name="target_type"
          value={form.target_type}
          onChange={handleChange}
          sx={{ mb: 2 }}
        >
          <MenuItem value="product">Product</MenuItem>
          <MenuItem value="category">Category</MenuItem>
          <MenuItem value="custom">Custom</MenuItem>
        </TextField>
        <TextField
          fullWidth
          label="Target Value"
          name="target_value"
          value={form.target_value}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          type="number"
          label="Priority"
          name="priority"
          value={form.priority}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          type="date"
          label="Start Date"
          name="start_date"
          value={form.start_date}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          type="date"
          label="End Date"
          name="end_date"
          value={form.end_date}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <label>
            <input
              type="checkbox"
              name="active"
              checked={form.active}
              onChange={handleChange}
            />{" "}
            Active
          </label>
        </Box>
        <Button variant="contained" component="label" sx={{ mb: 2 }}>
          Upload Image
          <input
            type="file"
            name="image"
            hidden
            accept="image/*"
            onChange={handleChange}
          />
        </Button>
        {form.image && <Box sx={{ mb: 2 }}>Selected: {form.image.name}</Box>}

        <Button variant="contained" onClick={handleSubmit} disabled={loading}>
          {loading ? "Adding..." : "Add Banner"}
        </Button>
      </Box>
    </Modal>
  );
};

export default AddBannerModal;
