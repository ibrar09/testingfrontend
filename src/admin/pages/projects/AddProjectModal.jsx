import React, { useState } from "react";
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
  Switch,
  Typography,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";

const currencies = ["SAR", "USD", "EUR"];

const AddProjectModal = ({ open, onClose, onAdd }) => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    client: "",
    year: new Date().getFullYear(),
    duration: "",
    budget: "",
    featured: false,
    teamSize: 1,
    image: null,
    images: [],
    description: "",
    challengeSolution: [
      { type: "challenge", title: "Challenge", content: "", icon: "⚡" },
      { type: "solution", title: "Solution", content: "", icon: "💡" },
    ],
    testimonial: {
      quote: "",
      name: "",
      title: "",
      company: "",
      rating: 5,
      image: null,
    },
    investment: {
      price: "",
      currency: currencies[0],
      features: "",
      ctaText: "Request Quote",
    },
  });

  const [snackbar, setSnackbar] = useState({ open: false, type: "success", message: "" });

  // ---------------- Handlers ----------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = (e) => setForm((prev) => ({ ...prev, featured: e.target.checked }));

  const handleChallengeSolutionChange = (index, field, value) => {
    const updated = [...form.challengeSolution];
    updated[index][field] = value;
    setForm((prev) => ({ ...prev, challengeSolution: updated }));
  };

  const handleTestimonialChange = (field, value) => {
    setForm((prev) => ({ ...prev, testimonial: { ...prev.testimonial, [field]: value } }));
  };

  const handleInvestmentChange = (field, value) => {
    setForm((prev) => ({ ...prev, investment: { ...prev.investment, [field]: value } }));
  };

  // ---------------- Image Handlers ----------------
  const handleMainImageChange = (e) => {
    if (e.target.files[0]) setForm((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleGalleryImagesChange = (e) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files);
      setForm((prev) => ({ ...prev, images: [...prev.images, ...newImages] }));
    }
  };

  const handleTestimonialImageChange = (e) => {
    if (e.target.files[0]) {
      setForm((prev) => ({ ...prev, testimonial: { ...prev.testimonial, image: e.target.files[0] } }));
    }
  };

  const handleRemoveGalleryImage = (index) => {
    setForm((prev) => {
      const newImages = [...prev.images];
      newImages.splice(index, 1);
      return { ...prev, images: newImages };
    });
  };

  // ---------------- Submit ----------------
  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      // Basic fields
      [
        "name",
        "category",
        "client",
        "year",
        "duration",
        "budget",
        "teamSize",
        "description",
      ].forEach((key) => formData.append(key, form[key]));
      formData.append("featured", form.featured);

      // Challenge/Solution
      formData.append("challengeSolution", JSON.stringify(form.challengeSolution));

      // Testimonial (without image)
      const testimonialData = { ...form.testimonial, image: undefined };
      formData.append("testimonial", JSON.stringify(testimonialData));

      // Investment
      formData.append(
        "investment",
        JSON.stringify({
          ...form.investment,
          features: form.investment.features
            ? form.investment.features.split(",").map((f) => f.trim())
            : [],
        })
      );

      // Files
      if (form.image) formData.append("image", form.image);
      form.images.forEach((file) => formData.append("images", file));
      if (form.testimonial.image) formData.append("testimonialImage", form.testimonial.image);

      // ✅ Call parent onAdd, which uses the centralized API instance
      await onAdd(formData);

      // Show success message
      setSnackbar({ open: true, type: "success", message: "Project added successfully!" });

      // Reset form
      setForm({
        name: "",
        category: "",
        client: "",
        year: new Date().getFullYear(),
        duration: "",
        budget: "",
        featured: false,
        teamSize: 1,
        image: null,
        images: [],
        description: "",
        challengeSolution: [
          { type: "challenge", title: "Challenge", content: "", icon: "⚡" },
          { type: "solution", title: "Solution", content: "", icon: "💡" },
        ],
        testimonial: { quote: "", name: "", title: "", company: "", rating: 5, image: null },
        investment: { price: "", currency: currencies[0], features: "", ctaText: "Request Quote" },
      });

      onClose();
    } catch (error) {
      console.error(error);
      setSnackbar({ open: true, type: "error", message: "Failed to add project. Try again!" });
    }
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
        <DialogTitle>Add New Project</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField label="Project Name" name="name" value={form.name} onChange={handleChange} fullWidth />
            <TextField label="Category" name="category" value={form.category} onChange={handleChange} fullWidth />
            <TextField label="Client" name="client" value={form.client} onChange={handleChange} fullWidth />
            <TextField label="Year" name="year" type="number" value={form.year} onChange={handleChange} fullWidth />
            <TextField label="Duration" name="duration" value={form.duration} onChange={handleChange} fullWidth />
            <TextField label="Budget" name="budget" value={form.budget} onChange={handleChange} fullWidth />
            <TextField label="Team Size" name="teamSize" type="number" value={form.teamSize} onChange={handleChange} fullWidth />
            <FormControlLabel control={<Switch checked={form.featured} onChange={handleToggle} />} label="Featured" />

            <Typography>Main Image</Typography>
            <input type="file" accept="image/*" onChange={handleMainImageChange} />
            {form.image && <Typography variant="caption">{form.image.name}</Typography>}

            <Typography>Gallery Images</Typography>
            <input type="file" accept="image/*" multiple onChange={handleGalleryImagesChange} />
            {form.images.length > 0 && (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                {form.images.map((file, i) => (
                  <Box key={i} sx={{ position: "relative", border: "1px solid #ccc", borderRadius: 1, p: 0.5 }}>
                    <Typography variant="caption">{file.name}</Typography>
                    <Button size="small" onClick={() => handleRemoveGalleryImage(i)}
                      sx={{ position: "absolute", top: -8, right: -8, minWidth: "20px", height: "20px", fontSize: "10px", p: 0 }}>
                      ×
                    </Button>
                  </Box>
                ))}
              </Box>
            )}

            <Typography>Testimonial Image</Typography>
            <input type="file" accept="image/*" onChange={handleTestimonialImageChange} />
            {form.testimonial.image && <Typography variant="caption">{form.testimonial.image.name}</Typography>}

            <TextField label="Description" name="description" value={form.description} onChange={handleChange} multiline rows={3} fullWidth />

            {form.challengeSolution.map((item, index) => (
              <TextField
                key={index}
                label={`${item.title} Content`}
                value={item.content}
                onChange={(e) => handleChallengeSolutionChange(index, "content", e.target.value)}
                multiline
                rows={2}
                fullWidth
              />
            ))}

            <TextField label="Testimonial Quote" value={form.testimonial.quote} onChange={(e) => handleTestimonialChange("quote", e.target.value)} fullWidth />
            <TextField label="Testimonial Name" value={form.testimonial.name} onChange={(e) => handleTestimonialChange("name", e.target.value)} fullWidth />
            <TextField label="Testimonial Title" value={form.testimonial.title} onChange={(e) => handleTestimonialChange("title", e.target.value)} fullWidth />
            <TextField label="Testimonial Company" value={form.testimonial.company} onChange={(e) => handleTestimonialChange("company", e.target.value)} fullWidth />
            <TextField label="Testimonial Rating" type="number" value={form.testimonial.rating} onChange={(e) => handleTestimonialChange("rating", e.target.value)} fullWidth />

            <TextField label="Investment Price" value={form.investment.price} onChange={(e) => handleInvestmentChange("price", e.target.value)} fullWidth />
            <TextField select label="Investment Currency" value={form.investment.currency} onChange={(e) => handleInvestmentChange("currency", e.target.value)} fullWidth>
              {currencies.map((cur) => (
                <MenuItem key={cur} value={cur}>{cur}</MenuItem>
              ))}
            </TextField>
            <TextField label="Investment Features (comma separated)" value={form.investment.features} onChange={(e) => handleInvestmentChange("features", e.target.value)} fullWidth />
            <TextField label="CTA Text" value={form.investment.ctaText} onChange={(e) => handleInvestmentChange("ctaText", e.target.value)} fullWidth />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>Add Project</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.type}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddProjectModal;
