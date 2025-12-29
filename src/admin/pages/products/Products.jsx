import React, { useState, useEffect, useMemo } from "react";
import {
  Box,
  Button,
  Typography,
  Chip,
  CircularProgress,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AddProductModal from "./AddProductModal";
import EditProductModal from "./EditProductModal";
import axios from "axios";
import { debounce } from "lodash";
import * as XLSX from "xlsx"; // Add this import for client-side Excel generation

import { BACKEND_URL } from "../../../api/config";

const SERVER_URL = BACKEND_URL;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [detailOpen, setDetailOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${SERVER_URL}/api/v1/products`);
      const data = res.data.data || res.data;

      const mapped = data.map((p) => {
        const features = Array.isArray(p.key_features)
          ? p.key_features
          : typeof p.key_features === "string"
            ? JSON.parse(p.key_features)
            : [];

        const images = Array.isArray(p.image_urls)
          ? p.image_urls.map((url) => (url.startsWith("http") ? url : `${SERVER_URL}${url}`))
          : typeof p.image_urls === "string"
            ? [p.image_urls.startsWith("http") ? p.image_urls : `${SERVER_URL}${p.image_urls}`]
            : [];

        return {
          ...p,
          category_name: p.category_name || (p.category?.name ?? "-"),
          brand_name: p.brand_name || (p.brand?.name ?? "-"),
          oldprice: p.oldprice || "",
          key_features: features,
          image_urls: images,
        };
      });

      setProducts(mapped);
      setFilteredProducts(mapped);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Debounced search
  const handleSearch = useMemo(
    () =>
      debounce((query) => {
        if (!query) return setFilteredProducts(products);
        const filtered = products.filter((p) =>
          p.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
      }, 300),
    [products]
  );

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery, handleSearch]);

  // Add product
  const handleAdd = (newProduct) => {
    const mappedProduct = mapProduct(newProduct);
    setProducts((prev) => [...prev, mappedProduct]);
    setFilteredProducts((prev) => [...prev, mappedProduct]);
    setIsAddOpen(false);
  };

  // Edit product
  const handleEdit = (updatedProduct) => {
    const mappedProduct = mapProduct(updatedProduct);
    setProducts((prev) => prev.map((p) => (p.id === mappedProduct.id ? mappedProduct : p)));
    setFilteredProducts((prev) => prev.map((p) => (p.id === mappedProduct.id ? mappedProduct : p)));
    setIsEditOpen(false);
  };

  // Map product for consistent data
  const mapProduct = (p) => ({
    ...p,
    category_name: p.category_name || (p.category?.name ?? "-"),
    brand_name: p.brand_name || (p.brand?.name ?? "-"),
    oldprice: p.oldprice || "",
    key_features: Array.isArray(p.key_features)
      ? p.key_features
      : typeof p.key_features === "string"
        ? JSON.parse(p.key_features)
        : [],
    image_urls: Array.isArray(p.image_urls)
      ? p.image_urls.map((url) => (url.startsWith("http") ? url : `${SERVER_URL}${url}`))
      : typeof p.image_urls === "string"
        ? [p.image_urls.startsWith("http") ? p.image_urls : `${SERVER_URL}${p.image_urls}`]
        : [],
  });

  // Delete product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${SERVER_URL}/api/v1/products/${id}`);
      setProducts((prev) => prev.filter((p) => p.id !== id));
      setFilteredProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Failed to delete product:", err);
      alert("Failed to delete product");
    }
  };

  // Download PDF with filters
  const handleDownloadPdf = async () => {
    try {
      const filters = {
        search: searchQuery,
      };

      const response = await axios.post(`${SERVER_URL}/api/v1/products/products/pdf`, filters, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data], { type: "application/pdf" }));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `products_${Date.now()}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error("Failed to download PDF:", err);
      alert("Failed to download PDF");
    }
  };

  // Download Excel with filters - tries backend first, falls back to client-side
  const handleDownloadExcel = async () => {
    try {
      // First try the backend endpoint
      const filters = {
        search: searchQuery,
      };

      const response = await axios.post(`${SERVER_URL}/api/v1/products/pdf`, filters, {
        responseType: "blob",
      });

      // If backend returns a response, use it
      if (response.data) {
        const url = window.URL.createObjectURL(new Blob([response.data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        }));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `products_${Date.now()}.xlsx`);
        document.body.appendChild(link);
        link.click();
        link.remove();
      }
    } catch (backendErr) {
      console.warn("Backend Excel endpoint not available, generating client-side:", backendErr);

      // Fallback to client-side Excel generation
      generateExcelClientSide();
    }
  };

  // Client-side Excel generation as fallback
  const generateExcelClientSide = () => {
    try {
      // Prepare data for Excel
      const excelData = filteredProducts.map(product => ({
        ID: product.id,
        "Product Name": product.name,
        Category: product.category_name,
        Brand: product.brand_name,
        Subcategory: product.subcategory || "-",
        "New Release": product.is_new_release ? "Yes" : "No",
        "Best Seller": product.is_best_seller ? "Yes" : "No",
        Price: product.price,
        "Old Price": product.oldprice || "-",
        Stock: product.stock,
        "Stock Status": product.stock === 0 ? "Out of Stock" : product.stock <= 10 ? "Low Stock" : "In Stock",
        "Key Features": Array.isArray(product.key_features) ? product.key_features.join("; ") : "-",
        "Image URL": product.image_urls && product.image_urls.length > 0 ? product.image_urls[0] : "-",
        Created: product.created_at ? new Date(product.created_at).toLocaleDateString() : "-",
        Updated: product.updated_at ? new Date(product.updated_at).toLocaleDateString() : "-",
        Description: product.description || "-",
      }));

      // Create workbook and worksheet
      const ws = XLSX.utils.json_to_sheet(excelData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Products");

      // Generate Excel file
      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const data = new Blob([excelBuffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });

      // Download file
      const url = window.URL.createObjectURL(data);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `products_${Date.now()}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error("Failed to generate Excel client-side:", err);
      alert("Failed to generate Excel file. Please try again.");
    }
  };

  // Columns for DataGrid
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "image",
      headerName: "Image",
      width: 80,
      renderCell: (params) =>
        params.row.image_urls[0] ? (
          <img
            src={params.row.image_urls[0]}
            alt="thumbnail"
            style={{ width: 50, height: 50, borderRadius: 6, objectFit: "cover" }}
          />
        ) : (
          "No Image"
        ),
    },
    { field: "name", headerName: "Product Name", flex: 1, minWidth: 150 },
    { field: "category_name", headerName: "Category", width: 150 },
    { field: "brand_name", headerName: "Brand", width: 150 },
    { field: "subcategory", headerName: "Subcategory", width: 150 },
    {
      field: "is_new_release",
      headerName: "New Release",
      width: 120,
      renderCell: (params) => (params.value ? "Yes" : "No"),
    },
    {
      field: "is_best_seller",
      headerName: "Best Seller",
      width: 120,
      renderCell: (params) => (params.value ? "Yes" : "No"),
    },
    { field: "price", headerName: "Price", width: 100 },
    { field: "oldprice", headerName: "Old Price", width: 100 },
    {
      field: "stock",
      headerName: "Stock",
      width: 150,
      renderCell: (params) => {
        const value = params.value;
        let color = "success";
        let label = `${value} in stock`;

        if (value === 0) {
          color = "error";
          label = "Out of Stock";
        } else if (value <= 10) {
          color = "warning";
        }

        return <Chip label={label} color={color} size="small" />;
      },
    },
    {
      field: "key_features",
      headerName: "Key Features",
      flex: 1,
      minWidth: 180,
      renderCell: (params) =>
        params.value && Array.isArray(params.value)
          ? params.value.slice(0, 3).join(", ") + (params.value.length > 3 ? ` +${params.value.length - 3} more` : "")
          : "-",
    },
    {
      field: "details",
      headerName: "Details",
      width: 120,
      renderCell: (params) => (
        <Button
          size="small"
          variant="outlined"
          onClick={() => {
            setSelectedProduct(params.row);
            setDetailOpen(true);
          }}
        >
          View
        </Button>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            size="small"
            variant="outlined"
            onClick={() => {
              setSelectedProduct(params.row);
              setIsEditOpen(true);
            }}
          >
            Edit
          </Button>
          <Button size="small" color="error" onClick={() => handleDelete(params.row.id)}>
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
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
          mb: 2,
          alignItems: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Products Management
        </Typography>
        <TextField
          placeholder="Search Products..."
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: 250 }}
        />
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="contained" onClick={() => setIsAddOpen(true)}>
            + Add Product
          </Button>
          <Button variant="contained" color="secondary" onClick={handleDownloadPdf}>
            Download PDF
          </Button>
          <Button variant="contained" color="success" onClick={handleDownloadExcel}>
            Download Excel
          </Button>
        </Box>
      </Box>

      {filteredProducts.length === 0 ? (
        <Typography>No products found.</Typography>
      ) : (
        <Box sx={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={filteredProducts}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10, 20, 50]}
            disableSelectionOnClick
            autoHeight
          />
        </Box>
      )}

      {/* Modals */}
      <AddProductModal open={isAddOpen} onClose={() => setIsAddOpen(false)} onAdd={handleAdd} />
      <EditProductModal
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onEdit={handleEdit}
        product={selectedProduct}
      />

      <Modal open={detailOpen} onClose={() => setDetailOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            borderRadius: 2,
            p: 3,
            width: { xs: "90%", sm: 600 },
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <Typography variant="h6" mb={2}>
            Product Details - {selectedProduct?.name}
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                {selectedProduct &&
                  Object.entries(selectedProduct).map(([key, value]) => (
                    <TableRow key={key}>
                      <TableCell sx={{ fontWeight: "bold" }}>{key.replace(/_/g, " ")}</TableCell>
                      <TableCell>
                        {Array.isArray(value) ? value.join(", ") : value?.toString() || "-"}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ mt: 2, textAlign: "right" }}>
            <Button variant="contained" onClick={() => setDetailOpen(false)}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Products;