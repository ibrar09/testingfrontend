import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import api from "../../../api/api"; // ✅ Use centralized axios instance

const EditCategoryModal = ({ open, onClose, onEdit, category }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [parentId, setParentId] = useState(null);
  const [status, setStatus] = useState("active");
  const [categories, setCategories] = useState([]);

  // Set form values when category changes
  useEffect(() => {
    if (category) {
      setName(category.name);
      setDescription(category.description);
      setParentId(category.parent_id || "");
      setStatus(category.status);
    }
  }, [category]);

  // Fetch all categories for parent selection
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/categories"); // ✅ updated
        setCategories(res.data.data || res.data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = async () => {
    if (!name.trim()) {
      alert("Category name is required");
      return;
    }

    try {
      const res = await api.put(`/categories/${category.id}`, {
        name,
        description,
        parent_id: parentId,
        status,
      }); // ✅ updated

      onEdit(res.data.data || res.data); // Ensure we get the updated category
      onClose(); // Close modal after success
    } catch (err) {
      console.error("Failed to update category:", err);
      alert(err.response?.data?.error || "Failed to update category");
    }
  };

  if (!category) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ p: 3, width: 400, margin: "100px auto", bgcolor: "white" }}>
        <Typography variant="h6" mb={2}>
          Edit Category
        </Typography>

        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
        />

        <TextField
          select
          label="Parent Category"
          value={parentId || ""}
          onChange={(e) => setParentId(e.target.value)}
          fullWidth
          margin="normal"
        >
          <MenuItem value="">None</MenuItem>
          {categories
            .filter((c) => c.id !== category?.id) // Prevent self as parent
            .map((c) => (
              <MenuItem key={c.id} value={c.id}>
                {c.name}
              </MenuItem>
            ))}
        </TextField>

        <TextField
          select
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          fullWidth
          margin="normal"
        >
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
        </TextField>

        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
          fullWidth
        >
          Save Changes
        </Button>
      </Box>
    </Modal>
  );
};

export default EditCategoryModal;
