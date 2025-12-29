// src/pages/AdminDashboard/Projects/EditProjectModal.jsx
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
  FormControlLabel,
  Switch,
  MenuItem,
  Typography,
  Divider,
} from "@mui/material";

const currencies = ["SAR", "USD", "EUR"];
const categories = ["Retail", "Architecture", "Interior", "Fit-Out"];

const EditProjectModal = ({ open, onClose, project, onEdit }) => {
  const [form, setForm] = useState(null);

  useEffect(() => {
    if (project) {
      // 🔧 Normalize structure to prevent undefined
      setForm({
        ...project,
        images: project.images || [],
        challenges: project.challenges || [],
        solutions: project.solutions || [],
        testimonials: project.testimonials || [],
        investments: project.investments || [],
      });
    }
  }, [project]);

  if (!form) return null;

  // ------------------- Handlers -------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = (e) => {
    setForm((prev) => ({ ...prev, featured: e.target.checked }));
  };

  const handleNestedChange = (section, index, field, value) => {
    const updated = [...form[section]];
    updated[index][field] = value;
    setForm((prev) => ({ ...prev, [section]: updated }));
  };

  const handleAddItem = (section, newItem) => {
    setForm((prev) => ({ ...prev, [section]: [...prev[section], newItem] }));
  };

  const handleRemoveItem = (section, index) => {
    const updated = form[section].filter((_, i) => i !== index);
    setForm((prev) => ({ ...prev, [section]: updated }));
  };

  const handleSubmit = () => {
    // 🧩 Prepare data exactly like your backend expects
    const formatted = {
      ...form,
      challenges: form.challenges.map((c) => ({
        id: c.id,
        title: c.title || "",
        content: c.content || "",
        icon: c.icon || null,
        icon_bg_color: c.icon_bg_color || null,
        icon_text_color: c.icon_text_color || null,
      })),
      solutions: form.solutions.map((s) => ({
        id: s.id,
        title: s.title || "",
        content: s.content || "",
      })),
      testimonials: form.testimonials.map((t) => ({
        id: t.id,
        name: t.name || "",
        title: t.title || "",
        company: t.company || "",
        quote: t.quote || "",
        rating: t.rating || "5.0",
      })),
      investments: form.investments.map((inv) => ({
        id: inv.id,
        price: inv.price || "",
        currency: inv.currency || "SAR",
        cta_text: inv.cta_text || "—",
        features: inv.features?.map((f) => ({
          id: f.id,
          feature: f.feature || "",
        })) || [],
      })),
    };

    console.log("🟢 Submitting updated project:", formatted);
    onEdit(formatted);
  };

  // ------------------- UI -------------------
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Edit Project</DialogTitle>

      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            label="Project Name"
            name="name"
            value={form.name || ""}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            select
            label="Category"
            name="category"
            value={form.category || ""}
            onChange={handleChange}
            fullWidth
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Client"
            name="client"
            value={form.client || ""}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Year"
            name="year"
            type="number"
            value={form.year || ""}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Duration"
            name="duration"
            value={form.duration || ""}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Budget"
            name="budget"
            value={form.budget || ""}
            onChange={handleChange}
            fullWidth
          />
          <FormControlLabel
            control={<Switch checked={!!form.featured} onChange={handleToggle} />}
            label="Featured"
          />
          <TextField
            label="Description"
            name="description"
            value={form.description || ""}
            onChange={handleChange}
            multiline
            rows={3}
            fullWidth
          />

          {/* ---------------- Challenges ---------------- */}
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6">Challenges</Typography>
          {form.challenges.map((item, index) => (
            <Stack key={index} direction="row" spacing={1}>
              <TextField
                label="Title"
                value={item.title || ""}
                onChange={(e) =>
                  handleNestedChange("challenges", index, "title", e.target.value)
                }
                fullWidth
              />
              <TextField
                label="Content"
                value={item.content || ""}
                onChange={(e) =>
                  handleNestedChange("challenges", index, "content", e.target.value)
                }
                fullWidth
              />
              <Button
                color="error"
                onClick={() => handleRemoveItem("challenges", index)}
              >
                Delete
              </Button>
            </Stack>
          ))}
          <Button
            onClick={() =>
              handleAddItem("challenges", { title: "", content: "" })
            }
          >
            + Add Challenge
          </Button>

          {/* ---------------- Solutions ---------------- */}
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6">Solutions</Typography>
          {form.solutions.map((item, index) => (
            <Stack key={index} direction="row" spacing={1}>
              <TextField
                label="Title"
                value={item.title || ""}
                onChange={(e) =>
                  handleNestedChange("solutions", index, "title", e.target.value)
                }
                fullWidth
              />
              <TextField
                label="Content"
                value={item.content || ""}
                onChange={(e) =>
                  handleNestedChange("solutions", index, "content", e.target.value)
                }
                fullWidth
              />
              <Button
                color="error"
                onClick={() => handleRemoveItem("solutions", index)}
              >
                Delete
              </Button>
            </Stack>
          ))}
          <Button
            onClick={() =>
              handleAddItem("solutions", { title: "", content: "" })
            }
          >
            + Add Solution
          </Button>

          {/* ---------------- Testimonials ---------------- */}
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6">Testimonials</Typography>
          {form.testimonials.map((t, index) => (
            <Stack key={index} direction="row" spacing={1}>
              <TextField
                label="Name"
                value={t.name || ""}
                onChange={(e) =>
                  handleNestedChange("testimonials", index, "name", e.target.value)
                }
                fullWidth
              />
              <TextField
                label="Quote"
                value={t.quote || ""}
                onChange={(e) =>
                  handleNestedChange("testimonials", index, "quote", e.target.value)
                }
                fullWidth
              />
              <Button
                color="error"
                onClick={() => handleRemoveItem("testimonials", index)}
              >
                Delete
              </Button>
            </Stack>
          ))}
          <Button
            onClick={() =>
              handleAddItem("testimonials", {
                name: "",
                quote: "",
                company: "",
                title: "",
                rating: "5.0",
              })
            }
          >
            + Add Testimonial
          </Button>

          {/* ---------------- Investments ---------------- */}
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6">Investments</Typography>
          {form.investments.map((inv, index) => (
            <Stack key={index} spacing={1}>
              <Stack direction="row" spacing={1}>
                <TextField
                  label="Price"
                  value={inv.price || ""}
                  onChange={(e) =>
                    handleNestedChange("investments", index, "price", e.target.value)
                  }
                  fullWidth
                />
                <TextField
                  select
                  label="Currency"
                  value={inv.currency || "SAR"}
                  onChange={(e) =>
                    handleNestedChange("investments", index, "currency", e.target.value)
                  }
                  fullWidth
                >
                  {currencies.map((c) => (
                    <MenuItem key={c} value={c}>
                      {c}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>

              <TextField
                label="CTA Text"
                value={inv.cta_text || ""}
                onChange={(e) =>
                  handleNestedChange("investments", index, "cta_text", e.target.value)
                }
                fullWidth
              />

              <Typography variant="subtitle2">Features:</Typography>
              {inv.features?.map((f, fIndex) => (
                <Stack key={fIndex} direction="row" spacing={1}>
                  <TextField
                    label="Feature"
                    value={f.feature || ""}
                    onChange={(e) => {
                      const updatedFeatures = [...inv.features];
                      updatedFeatures[fIndex].feature = e.target.value;
                      const updatedInv = [...form.investments];
                      updatedInv[index].features = updatedFeatures;
                      setForm((prev) => ({ ...prev, investments: updatedInv }));
                    }}
                    fullWidth
                  />
                  <Button
                    color="error"
                    onClick={() => {
                      const updatedFeatures = inv.features.filter(
                        (_, i) => i !== fIndex
                      );
                      const updatedInv = [...form.investments];
                      updatedInv[index].features = updatedFeatures;
                      setForm((prev) => ({ ...prev, investments: updatedInv }));
                    }}
                  >
                    Delete
                  </Button>
                </Stack>
              ))}
              <Button
                onClick={() => {
                  const updatedInv = [...form.investments];
                  updatedInv[index].features = [
                    ...(inv.features || []),
                    { feature: "" },
                  ];
                  setForm((prev) => ({ ...prev, investments: updatedInv }));
                }}
              >
                + Add Feature
              </Button>
              <Divider />
            </Stack>
          ))}
          <Button
            onClick={() =>
              handleAddItem("investments", {
                price: "",
                currency: "SAR",
                cta_text: "—",
                features: [],
              })
            }
          >
            + Add Investment
          </Button>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProjectModal;
