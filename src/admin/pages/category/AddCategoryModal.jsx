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

const AddCategoryModal = ({ open, onClose, onAdd }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [parentId, setParentId] = useState(null);
  const [status, setStatus] = useState("active");
  const [categories, setCategories] = useState([]);

  // Fetch categories for parent selection
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/categories");
        setCategories(res.data.data || res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await api.post("/categories", {
        name,
        description,
        parent_id: parentId,
        status,
      });

      // Call parent handler to update state
      onAdd(res.data);

      // Reset form
      setName("");
      setDescription("");
      setParentId(null);
      setStatus("active");
    } catch (err) {
      console.error(err);
      alert("Failed to add category");
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ p: 3, width: 400, margin: "100px auto", bgcolor: "white" }}>
        <Typography variant="h6" mb={2}>
          Add Category
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
          {categories.map((c) => (
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

        <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
          Add
        </Button>
      </Box>
    </Modal>
  );
};

export default AddCategoryModal;
