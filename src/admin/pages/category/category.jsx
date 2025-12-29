import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  CircularProgress,
  Chip,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AddCategoryModal from "./AddCategoryModal";
import EditCategoryModal from "./EditCategoryModal";
import api from "../../../api/api"; // ✅ Use centralized axios instance

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // -------------------- Fetch categories from backend --------------------
  const fetchCategories = async () => {
    try {
      const res = await api.get("/categories"); // ✅ updated
      const data = res.data.data || res.data;

      const mapped = data.map((cat) => ({
        ...cat,
        parent_name: cat.parent?.name || "-",
      }));

      setCategories(mapped);
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // -------------------- Handlers --------------------
  const handleAdd = (newCategory) => {
    const mapped = {
      ...newCategory,
      parent_name: newCategory.parent?.name || "-",
    };
    setCategories((prev) => [...prev, mapped]);
    setIsAddOpen(false);
  };

  const handleEdit = (updatedCategory) => {
    const mapped = {
      ...updatedCategory,
      parent_name: updatedCategory.parent?.name || "-",
    };
    setCategories((prev) =>
      prev.map((c) => (c.id === mapped.id ? mapped : c))
    );
    setIsEditOpen(false);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/categories/${id}`); // ✅ updated
      setCategories((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      console.error("Failed to delete category:", err);
      alert("Failed to delete category");
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Category Name", flex: 1, minWidth: 150 },
    { field: "description", headerName: "Description", flex: 1, minWidth: 200 },
    { field: "parent_name", headerName: "Parent Category", flex: 1, minWidth: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) =>
        params.value === "active" ? (
          <Chip label="Active" color="success" size="small" />
        ) : (
          <Chip label="Inactive" color="error" size="small" />
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
              setSelectedCategory(params.row);
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
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h5" fontWeight="bold">
          Categories Management
        </Typography>
        <Button variant="contained" onClick={() => setIsAddOpen(true)}>
          + Add Category
        </Button>
      </Box>

      <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={categories}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          disableSelectionOnClick
        />
      </Box>

      <AddCategoryModal
        open={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onAdd={handleAdd}
      />
      <EditCategoryModal
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onEdit={handleEdit}
        category={selectedCategory}
      />
    </Box>
  );
};

export default Categories;
