import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
import api from "../../../api/api"; // Axios instance with baseURL

const ProductVariantsPage = () => {
  const { productId } = useParams();
  const [variants, setVariants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    variant_name: "",
    variant_value: "",
    sku: "",
    stock: "",
    additional_price: "",
  });

  // Fetch all variants for a product
  const fetchVariants = async () => {
    console.log("🔹 Fetching variants for productId:", productId);

    if (!productId) {
      console.warn("⚠️ productId is undefined. Check your route!");
      return;
    }

    setLoading(true);
    try {
      const res = await api.get(`/api/v1/product-variants/product/${productId}`);
      console.log("🔹 Variants API response:", res.data);
      setVariants(res.data.data || res.data || []);
    } catch (err) {
      console.error("Error fetching variants:", err.response || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVariants();
  }, [productId]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Open modal for Add/Edit
  const handleOpenModal = (variant = null) => {
    console.log("🔹 Opening modal for variant:", variant);

    if (variant) {
      setFormData(variant);
      setIsEditing(true);
    } else {
      setFormData({
        variant_name: "",
        variant_value: "",
        sku: "",
        stock: "",
        additional_price: "",
      });
      setIsEditing(false);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("🔹 Closing modal");
    setIsModalOpen(false);
  };

  // Add or Update Variant
  const handleSubmit = async () => {
    console.log("🔹 Submitting variant data:", formData);

    try {
      if (isEditing) {
        await api.put(`/api/v1/product-variants/${formData.id}`, formData);
      } else {
        await api.post(`/api/v1/product-variants`, { ...formData, product_id: productId });
      }
      console.log("🔹 Variant saved successfully");
      fetchVariants();
      setIsModalOpen(false);
    } catch (err) {
      console.error("Error saving variant:", err.response || err.message);
      alert(
        `Failed to save variant: ${err.response?.data?.message || err.message || "Unknown error"}`
      );
    }
  };

  // Delete Variant
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this variant?")) return;

    console.log("🔹 Deleting variant with id:", id);

    try {
      await api.delete(`/api/v1/product-variants/${id}`);
      fetchVariants();
    } catch (err) {
      console.error("Error deleting variant:", err.response || err.message);
      alert("Failed to delete variant.");
    }
  };

  // Table Columns
  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "variant_name", headerName: "Variant Name", flex: 1 },
    { field: "variant_value", headerName: "Variant Value", flex: 1 },
    { field: "sku", headerName: "SKU", flex: 1 },
    { field: "stock", headerName: "Stock", width: 100 },
    { field: "additional_price", headerName: "Additional Price", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <Box display="flex" gap={1}>
          <Button
            size="small"
            onClick={() => handleOpenModal(params.row)}
            variant="contained"
            color="primary"
          >
            Edit
          </Button>
          <Button
            size="small"
            onClick={() => handleDelete(params.row.id)}
            variant="outlined"
            color="error"
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box p={3} sx={{ width: "100%", maxWidth: "100%" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} flexWrap="wrap">
        <Typography variant="h5" mb={{ xs: 2, sm: 0 }}>
          Product Variants
        </Typography>
        <Button variant="contained" color="primary" onClick={() => handleOpenModal()}>
          + Add Variant
        </Button>
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ height: 500, width: "100%", overflowX: "auto" }}>
          <DataGrid
            rows={variants}
            columns={columns}
            getRowId={(row) => row.id}
            autoHeight
            pageSizeOptions={[5, 10, 25]}
            initialState={{
              pagination: { paginationModel: { pageSize: 10, page: 0 } },
            }}
          />
        </Box>
      )}

      {/* Add/Edit Modal */}
      <Dialog open={isModalOpen} onClose={handleCloseModal} fullWidth maxWidth="sm">
        <DialogTitle>{isEditing ? "Edit Variant" : "Add Variant"}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField
            label="Variant Name"
            name="variant_name"
            value={formData.variant_name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Variant Value"
            name="variant_value"
            value={formData.variant_value}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="SKU"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Stock"
            name="stock"
            type="number"
            value={formData.stock}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Additional Price"
            name="additional_price"
            type="number"
            value={formData.additional_price}
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            {isEditing ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProductVariantsPage;
