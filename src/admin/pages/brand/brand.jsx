// src/pages/AdminDashboard/Brands/Brands.jsx
import React, { useState, useEffect } from "react";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AddBrandModal from "./AddBrandModal";
import EditBrandModal from "./EditBrandModal";
import api from "../../../api/api"; // ✅ Use centralized axios instance

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch brands from backend
  const fetchBrands = async () => {
    try {
      const res = await api.get("/brands"); // ✅ use api instance
      const data = res.data.data || res.data;

      // Ensure every row has an id for DataGrid
      const mapped = data.map((b) => ({
        ...b,
        id: b.id, // crucial for DataGrid
      }));

      setBrands(mapped);
    } catch (err) {
      console.error("Failed to fetch brands:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  // Add brand handler
  const handleAdd = (newBrand) => {
    const mapped = {
      ...newBrand,
      id: newBrand.id, // ensure id exists
    };
    setBrands((prev) => [...prev, mapped]);
    setIsAddOpen(false);
  };

  // Edit brand handler
  const handleEdit = (updatedBrand) => {
    const mapped = {
      ...updatedBrand,
      id: updatedBrand.id,
    };
    setBrands((prev) =>
      prev.map((b) => (b.id === mapped.id ? mapped : b))
    );
    setIsEditOpen(false);
  };

  // Delete brand handler
  const handleDelete = async (id) => {
    try {
      await api.delete(`/brands/${id}`); // ✅ use api instance
      setBrands((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      console.error("Failed to delete brand:", err);
      alert("Failed to delete brand");
    }
  };

  // DataGrid columns
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Brand Name", flex: 1, minWidth: 180 },
    {
      field: "logo_url",
      headerName: "Logo",
      width: 100,
      renderCell: (params) =>
        params.value ? (
          <img
            src={params.value}
            alt="Logo"
            style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 4 }}
          />
        ) : (
          "No Logo"
        ),
    },
    { field: "description", headerName: "Description", flex: 2, minWidth: 200 },
    { field: "status", headerName: "Status", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      renderCell: (params) => (
        <Box>
          <Button
            size="small"
            onClick={() => {
              setSelectedBrand(params.row);
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
          Brands Management
        </Typography>
        <Button variant="contained" onClick={() => setIsAddOpen(true)}>
          + Add Brand
        </Button>
      </Box>

      <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={brands}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          disableSelectionOnClick
          getRowId={(row) => row.id} // ensure DataGrid uses id
        />
      </Box>

      <AddBrandModal
        open={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onAdd={handleAdd}
      />
      <EditBrandModal
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onEdit={handleEdit}
        brand={selectedBrand}
      />
    </Box>
  );
};

export default Brands;
