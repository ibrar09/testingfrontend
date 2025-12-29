// src/pages/AdminDashboard/Products/AddProductModal.jsx
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  IconButton,
  Stack,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
  Chip,
} from "@mui/material";
import { Add, Remove, CloudUpload } from "@mui/icons-material";
import api from "../../../api/api";

const AddProductModal = ({ open, onClose, onAdd }) => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category_id: "",
    brand_id: "",
    newCategoryName: "",
    newBrandName: "",
    showAddCategory: false,
    showAddBrand: false,
    subcategory: "",
    description: "",
    price: "",
    oldprice: "",
    sku: "",
    stock: 0,
    status: "active",
    image_files: [],
    image_previews: [],
    key_features: [""],
    material: "",
    color: "",
    size: "",
    feature: "",
    model_number: "",
    payment: "",
    usage: "",
    delivery_time: "",
    note: "",
    is_new_release: false,
    is_best_seller: false,
  });

  // Fetch categories & brands
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/categories");
        setCategories(res.data.data || res.data || []);
      } catch (err) {
        console.error("Fetch categories error:", err);
      }
    };
    const fetchBrands = async () => {
      try {
        const res = await api.get("/brands");
        setBrands(res.data.data || res.data || []);
      } catch (err) {
        console.error("Fetch brands error:", err);
      }
    };
    fetchCategories();
    fetchBrands();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith("key_features_")) {
      const index = parseInt(name.split("_")[2], 10);
      setForm((prev) => {
        const features = [...prev.key_features];
        features[index] = value;
        return { ...prev, key_features: features };
      });
    } else if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleStockChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setForm((prev) => ({
      ...prev,
      stock: value,
      status: value > 0 ? "active" : "inactive",
    }));
  };

  // Handle multiple image selection at once
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    const newImageFiles = [...form.image_files];
    const newImagePreviews = [...form.image_previews];

    files.forEach((file) => {
      if (file.type.startsWith('image/')) {
        newImageFiles.push(file);
        newImagePreviews.push(URL.createObjectURL(file));
      }
    });

    setForm((prev) => ({
      ...prev,
      image_files: newImageFiles,
      image_previews: newImagePreviews,
    }));
  };

  const removeImageField = (index) => {
    setForm((prev) => ({
      ...prev,
      image_files: prev.image_files.filter((_, i) => i !== index),
      image_previews: prev.image_previews.filter((_, i) => i !== index),
    }));
  };

  // Key features dynamic fields
  const addFeatureField = () =>
    setForm((prev) => ({ ...prev, key_features: [...prev.key_features, ""] }));

  const removeFeatureField = (index) =>
    setForm((prev) => ({
      ...prev,
      key_features: prev.key_features.filter((_, i) => i !== index),
    }));

  // Add new category inline
  const handleAddCategory = async () => {
    if (!form.newCategoryName.trim()) return alert("Enter category name");
    try {
      const res = await api.post("/categories", { name: form.newCategoryName });
      const newCategory = res.data.data || res.data;
      setCategories((prev) => [...prev, newCategory]);
      setForm((prev) => ({
        ...prev,
        category_id: newCategory.id,
        newCategoryName: "",
        showAddCategory: false,
      }));
    } catch (err) {
      console.error("Add category error:", err.response || err.message);
      alert("Failed to add category");
    }
  };

  // Add new brand inline
  const handleAddBrand = async () => {
    if (!form.newBrandName.trim()) return alert("Enter brand name");
    try {
      const res = await api.post("/brands", { name: form.newBrandName });
      const newBrand = res.data.data || res.data;
      setBrands((prev) => [...prev, newBrand]);
      setForm((prev) => ({
        ...prev,
        brand_id: newBrand.id,
        newBrandName: "",
        showAddBrand: false,
      }));
    } catch (err) {
      console.error("Add brand error:", err.response || err.message);
      alert("Failed to add brand");
    }
  };

  // Submit form
  const handleSubmit = async () => {
    if (!form.name || !form.price || !form.category_id || !form.brand_id) {
      alert("Please fill Name, Price, Category, and Brand");
      return;
    }

    const payload = new FormData();

    // Append all fields
    payload.append("name", form.name);
    payload.append("category_id", form.category_id);
    payload.append("brand_id", form.brand_id);
    payload.append("subcategory", form.subcategory);
    payload.append("description", form.description);
    payload.append("price", form.price);
    if (form.oldprice) payload.append("oldprice", form.oldprice);
    payload.append("sku", form.sku || `SKU-${Date.now()}`);
    payload.append("stock", form.stock);
    payload.append("status", form.status);
    payload.append("material", form.material);
    payload.append("color", form.color);
    payload.append("size", form.size);
    payload.append("feature", form.feature);
    payload.append("model_number", form.model_number);
    payload.append("payment", form.payment);
    payload.append("usage", form.usage);
    payload.append("delivery_time", form.delivery_time);
    payload.append("note", form.note);
    payload.append("is_new_release", form.is_new_release);
    payload.append("is_best_seller", form.is_best_seller);

    form.key_features
      .filter((f) => f.trim() !== "")
      .forEach((f, i) => payload.append(`key_features[${i}]`, f));

    form.image_files.forEach((file) => file && payload.append("images", file));

    try {
      const res = await api.post("/products", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      onAdd(res.data.data);
      onClose();

      // Reset form
      setForm({
        name: "",
        category_id: "",
        brand_id: "",
        newCategoryName: "",
        newBrandName: "",
        showAddCategory: false,
        showAddBrand: false,
        subcategory: "",
        description: "",
        price: "",
        oldprice: "",
        sku: "",
        stock: 0,
        status: "active",
        image_files: [],
        image_previews: [],
        key_features: [""],
        material: "",
        color: "",
        size: "",
        feature: "",
        model_number: "",
        payment: "",
        usage: "",
        delivery_time: "",
        note: "",
        is_new_release: false,
        is_best_seller: false,
      });
    } catch (err) {
      console.error("Add product error:", err.response || err.message);
      alert(
        `Failed to add product: ${err.response?.data?.message || err.message || "Unknown error"}`
      );
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Add New Product</DialogTitle>
      <DialogContent dividers>
        <Stack spacing={2}>
          {/* Basic Info */}
          <TextField label="Product Name" name="name" value={form.name} onChange={handleChange} fullWidth required />

          {/* Category Section */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Box sx={{ flex: 1 }}>
              {!form.showAddCategory ? (
                <Stack direction="row" spacing={1} alignItems="center">
                  <TextField 
                    select 
                    label="Category" 
                    name="category_id" 
                    value={form.category_id} 
                    onChange={handleChange} 
                    fullWidth 
                    required
                  >
                    <MenuItem value="">Select Category</MenuItem>
                    {categories.map((cat) => (
                      <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
                    ))}
                  </TextField>
                  <Button onClick={() => setForm((prev) => ({ ...prev, showAddCategory: true }))}>
                    + Add Category
                  </Button>
                </Stack>
              ) : (
                <Stack direction="row" spacing={1}>
                  <TextField
                    placeholder="New Category Name"
                    size="small"
                    value={form.newCategoryName}
                    onChange={handleChange}
                    name="newCategoryName"
                    fullWidth
                  />
                  <Button variant="contained" onClick={handleAddCategory}>Save</Button>
                  <Button color="error" onClick={() => setForm((prev) => ({ 
                    ...prev, 
                    newCategoryName: "", 
                    showAddCategory: false 
                  }))}>
                    Cancel
                  </Button>
                </Stack>
              )}
            </Box>

            {/* Brand Section */}
            <Box sx={{ flex: 1 }}>
              {!form.showAddBrand ? (
                <Stack direction="row" spacing={1} alignItems="center">
                  <TextField 
                    select 
                    label="Brand" 
                    name="brand_id" 
                    value={form.brand_id} 
                    onChange={handleChange} 
                    fullWidth 
                    required
                  >
                    <MenuItem value="">Select Brand</MenuItem>
                    {brands.map((b) => (
                      <MenuItem key={b.id} value={b.id}>{b.name}</MenuItem>
                    ))}
                  </TextField>
                  <Button onClick={() => setForm((prev) => ({ ...prev, showAddBrand: true }))}>
                    + Add Brand
                  </Button>
                </Stack>
              ) : (
                <Stack direction="row" spacing={1}>
                  <TextField
                    placeholder="New Brand Name"
                    size="small"
                    value={form.newBrandName}
                    onChange={handleChange}
                    name="newBrandName"
                    fullWidth
                  />
                  <Button variant="contained" onClick={handleAddBrand}>Save</Button>
                  <Button color="error" onClick={() => setForm((prev) => ({ 
                    ...prev, 
                    newBrandName: "", 
                    showAddBrand: false 
                  }))}>
                    Cancel
                  </Button>
                </Stack>
              )}
            </Box>

            <TextField label="Subcategory" name="subcategory" value={form.subcategory} onChange={handleChange} fullWidth />
          </Stack>

          <TextField label="Description" name="description" value={form.description} onChange={handleChange} fullWidth multiline minRows={2} />

          {/* Pricing & Stock */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField label="Price" name="price" type="number" value={form.price} onChange={handleChange} fullWidth required />
            <TextField label="Old Price" name="oldprice" type="number" value={form.oldprice} onChange={handleChange} fullWidth />
            <TextField label="Stock" name="stock" type="number" value={form.stock} onChange={handleStockChange} fullWidth />
            <TextField label="SKU" name="sku" value={form.sku} onChange={handleChange} fullWidth />
          </Stack>

          {/* Product Details */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField label="Material" name="material" value={form.material} onChange={handleChange} fullWidth />
            <TextField label="Color" name="color" value={form.color} onChange={handleChange} fullWidth />
            <TextField label="Size" name="size" value={form.size} onChange={handleChange} fullWidth />
            <TextField label="Feature" name="feature" value={form.feature} onChange={handleChange} fullWidth />
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField label="Model Number" name="model_number" value={form.model_number} onChange={handleChange} fullWidth />
            <TextField label="Payment" name="payment" value={form.payment} onChange={handleChange} fullWidth />
            <TextField label="Usage" name="usage" value={form.usage} onChange={handleChange} fullWidth />
            <TextField label="Delivery Time" name="delivery_time" value={form.delivery_time} onChange={handleChange} fullWidth />
          </Stack>

          <TextField label="Note" name="note" value={form.note} onChange={handleChange} fullWidth multiline minRows={2} />

          {/* Key Features */}
          <Box>
            <Typography variant="subtitle1">Key Features</Typography>
            {form.key_features.map((f, idx) => (
              <Stack key={idx} direction="row" spacing={1} alignItems="center" mb={1}>
                <TextField 
                  value={f} 
                  onChange={handleChange} 
                  name={`key_features_${idx}`} 
                  placeholder="Feature" 
                  fullWidth 
                />
                <IconButton color="error" onClick={() => removeFeatureField(idx)}>
                  <Remove />
                </IconButton>
              </Stack>
            ))}
            <Button startIcon={<Add />} onClick={addFeatureField}>Add Feature</Button>
          </Box>

          {/* Images - Multiple Upload at Once */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Images ({form.image_files.length} selected)
            </Typography>
            
            {/* Multiple Image Upload Button */}
            <Button
              component="label"
              variant="outlined"
              startIcon={<CloudUpload />}
              sx={{ mb: 2 }}
            >
              Upload Multiple Images
              <input
                type="file"
                hidden
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />
            </Button>

            {/* Selected Images Preview */}
            {form.image_previews.length > 0 && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Selected Images:
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {form.image_previews.map((src, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        position: 'relative',
                        width: 80,
                        height: 80,
                        mb: 1,
                      }}
                    >
                      <img
                        src={src}
                        alt={`preview-${idx}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: 4,
                        }}
                      />
                      <IconButton
                        size="small"
                        color="error"
                        sx={{
                          position: 'absolute',
                          top: -8,
                          right: -8,
                          bgcolor: 'background.paper',
                          '&:hover': { bgcolor: 'background.paper' },
                        }}
                        onClick={() => removeImageField(idx)}
                      >
                        <Remove fontSize="small" />
                      </IconButton>
                      <Chip
                        label={`Image ${idx + 1}`}
                        size="small"
                        sx={{
                          position: 'absolute',
                          bottom: 4,
                          left: 4,
                          bgcolor: 'rgba(0,0,0,0.6)',
                          color: 'white',
                          fontSize: '10px',
                          height: '20px',
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Box>
            )}
          </Box>

          {/* Checkboxes */}
          <Stack direction="row" spacing={2}>
            <FormControlLabel
              control={<Checkbox checked={form.is_new_release} onChange={handleChange} name="is_new_release" />}
              label="New Release"
            />
            <FormControlLabel
              control={<Checkbox checked={form.is_best_seller} onChange={handleChange} name="is_best_seller" />}
              label="Best Seller"
            />
          </Stack>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>Add Product</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddProductModal;