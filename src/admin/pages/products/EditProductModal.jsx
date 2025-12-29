// src/pages/AdminDashboard/Products/EditProductModal.jsx
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Stack,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import api from "../../../api/api";

const EditProductModal = ({ open, onClose, product, onEdit }) => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    category_id: "",
    brand_id: "",
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

  // Fetch categories and brands
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

  // Set form when product changes
  useEffect(() => {
    if (!product) return;

    const features = Array.isArray(product.key_features)
      ? product.key_features
      : product.key_features
      ? JSON.parse(product.key_features)
      : [""];

    const previews = Array.isArray(product.image_urls)
      ? product.image_urls
      : product.image_url
      ? [product.image_url]
      : [""];

    setForm({
      id: product.id,
      name: product.name || "",
      category_id: product.category_id || "",
      brand_id: product.brand_id || "",
      subcategory: product.subcategory || "",
      description: product.description || "",
      price: product.price || "",
      oldprice: product.oldprice || "",
      sku: product.sku || "",
      stock: product.stock || 0,
      status: product.status || "active",
      image_files: [],
      image_previews: previews,
      key_features: features,
      material: product.details?.material || "",
      color: product.details?.color || "",
      size: product.details?.size || "",
      feature: product.details?.feature || "",
      model_number: product.details?.model_number || "",
      payment: product.details?.payment || "",
      usage: product.details?.usage || "",
      delivery_time: product.details?.delivery_time || "",
      note: product.details?.note || "",
      is_new_release: product.is_new_release || false,
      is_best_seller: product.is_best_seller || false,
    });
  }, [product]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith("key_features_")) {
      const index = parseInt(name.split("_")[2], 10);
      setForm((prev) => {
        const newFeatures = [...prev.key_features];
        newFeatures[index] = value;
        return { ...prev, key_features: newFeatures };
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

  // Image handling
  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const files = [...form.image_files];
    const previews = [...form.image_previews];
    files[index] = file;
    previews[index] = URL.createObjectURL(file);

    setForm((prev) => ({
      ...prev,
      image_files: files,
      image_previews: previews,
    }));
  };

  const addImageField = () => {
    setForm((prev) => ({
      ...prev,
      image_files: [...prev.image_files, null],
      image_previews: [...prev.image_previews, ""],
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

  // Submit form
  const handleSubmit = async () => {
    if (!form.name || !form.price) {
      alert("Please fill Name and Price");
      return;
    }

    const payload = new FormData();
    payload.append("name", form.name);
    payload.append("description", form.description);
    payload.append("price", form.price);
    if (form.oldprice) payload.append("oldprice", form.oldprice);
    payload.append("sku", form.sku || `SKU-${Date.now()}`);
    payload.append("stock", form.stock);
    payload.append("status", form.status);
    payload.append("category_id", form.category_id);
    payload.append("brand_id", form.brand_id);
    payload.append("subcategory", form.subcategory);
    payload.append("is_new_release", form.is_new_release);
    payload.append("is_best_seller", form.is_best_seller);

    form.key_features
      .filter((f) => f.trim() !== "")
      .forEach((f, i) => payload.append(`key_features[${i}]`, f));

    payload.append("material", form.material);
    payload.append("color", form.color);
    payload.append("size", form.size);
    payload.append("feature", form.feature);
    payload.append("model_number", form.model_number);
    payload.append("payment", form.payment);
    payload.append("usage", form.usage);
    payload.append("delivery_time", form.delivery_time);
    payload.append("note", form.note);

    form.image_files.forEach((file) => {
      if (file) payload.append("images", file);
    });

    try {
      const res = await api.put(`/products/${form.id}`, payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      onEdit(res.data.data);
      onClose();
    } catch (err) {
      console.error("Update product error:", err.response || err.message);
      alert(
        `Failed to update product: ${err.response?.data?.message || err.message || "Unknown error"}`
      );
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Edit Product</DialogTitle>
      <DialogContent dividers>
        <Stack spacing={2}>
          {/* Basic Info */}
          <TextField label="Product Name" name="name" value={form.name} onChange={handleChange} fullWidth required />

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField select label="Category" name="category_id" value={form.category_id} onChange={handleChange} fullWidth required>
              {categories.map((cat) => (
                <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
              ))}
            </TextField>

            <TextField select label="Brand" name="brand_id" value={form.brand_id} onChange={handleChange} fullWidth required>
              {brands.map((b) => (
                <MenuItem key={b.id} value={b.id}>{b.name}</MenuItem>
              ))}
            </TextField>

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
                <TextField value={f} onChange={handleChange} name={`key_features_${idx}`} placeholder="Feature" fullWidth />
                <IconButton color="error" onClick={() => removeFeatureField(idx)}><Remove /></IconButton>
              </Stack>
            ))}
            <Button startIcon={<Add />} onClick={addFeatureField}>Add Feature</Button>
          </Box>

          {/* Images */}
          <Box>
            <Typography variant="subtitle1">Images</Typography>
            {form.image_previews.map((src, idx) => (
              <Stack key={idx} direction="row" spacing={1} alignItems="center" mb={1}>
                <img src={src} alt="preview" style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 4 }} />
                <Button variant="outlined" component="label">
                  Change
                  <input type="file" hidden accept="image/*" onChange={(e) => handleImageChange(e, idx)} />
                </Button>
                <IconButton color="error" onClick={() => removeImageField(idx)}><Remove /></IconButton>
              </Stack>
            ))}
            <Button startIcon={<Add />} onClick={addImageField}>Add Image</Button>
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
        <Button variant="contained" onClick={handleSubmit}>Save Changes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProductModal;
