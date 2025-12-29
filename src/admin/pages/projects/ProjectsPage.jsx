import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Chip, Tooltip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import api from "../../../api/api"; // ✅ import centralized axios instance
import AddProjectModal from "./AddProjectModal";
import EditProjectModal from "./EditProjectModal";

// -------------------- NORMALIZE IMAGE --------------------
const normalizeImage = (img, folder = "projects") => {
  if (!img) return null;
  const raw = typeof img === "string" ? img : img.image_url;
  if (!raw) return null;
  // ✅ Use relative path only; base URL is handled by backend / API
  return `/uploads/${folder}/${raw.replace(/^\/uploads\/?/, "")}`;
};

// -------------------- NORMALIZE PROJECT DATA --------------------
const normalizeProject = (project) => {
  const galleryImages = Array.isArray(project.images)
    ? project.images.map((img) => normalizeImage(img, "projects")).filter(Boolean)
    : [];
  const testimonial = project.testimonials?.[0] || {};
  const testimonialImage = testimonial.image ? normalizeImage(testimonial.image, "testimonials") : null;

  return {
    id: project.id ?? project._id ?? project.data?.id,
    name: project.name || "",
    category: project.category || "",
    client: project.client || "",
    year: project.year || "",
    duration: project.duration || "",
    budget: project.budget || "",
    featured: project.featured || false,
    image: normalizeImage(project.image, "projects") || galleryImages[0] || null,
    images: galleryImages,
    testimonial: testimonial,
    testimonialImage: testimonialImage,
    challengeSolution: [
      ...(project.challenges || []).map((c) => ({ ...c, type: "challenge" })),
      ...(project.solutions || []).map((s) => ({ ...s, type: "solution" })),
    ],
    investment: project.investments?.[0] || project.investment || {},
  };
};

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  // -------------------- FETCH PROJECTS --------------------
  const fetchProjects = async () => {
    try {
      const { data } = await api.get("/projects"); // ✅ use api instance
      const normalized = Array.isArray(data)
        ? data.map(normalizeProject)
        : Array.isArray(data.data)
        ? data.data.map(normalizeProject)
        : [];
      setProjects(normalized);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // -------------------- ADD / EDIT / DELETE --------------------
  const handleAdd = async (formData) => {
    try {
      const { data } = await api.post("/projects", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const newProject = normalizeProject(data.data || data.project || data);
      setProjects((prev) => [...prev, newProject]);
      setIsAddOpen(false);
    } catch (err) {
      console.error("Error adding project:", err);
    }
  };

  const handleEdit = async (formData) => {
    if (!selectedProject) return;
    try {
      const { data } = await api.put(`/projects/${selectedProject.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const updatedProject = normalizeProject(data.data || data.project || data);
      setProjects((prev) =>
        prev.map((p) => (p.id === selectedProject.id ? updatedProject : p))
      );
      setIsEditOpen(false);
      setSelectedProject(null);
    } catch (err) {
      console.error("Error updating project:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      await api.delete(`/projects/${id}`);
      setProjects((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Error deleting project:", err);
    }
  };

  // -------------------- DATAGRID COLUMNS --------------------
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "images",
      headerName: "Images",
      width: 160,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        const images = [params.row.image, ...(params.row.images || [])].filter(Boolean);
        return (
          <Box sx={{ display: "flex", gap: 1 }}>
            {images.map((img, idx) => (
              <Tooltip key={idx} title={`Image ${idx + 1}`} arrow>
                <img
                  src={img || "/placeholder.png"}
                  alt={`img-${idx}`}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 8,
                    objectFit: "cover",
                    transition: "transform 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </Tooltip>
            ))}
          </Box>
        );
      },
    },
    {
      field: "testimonialImage",
      headerName: "Testimonial",
      width: 60,
      sortable: false,
      filterable: false,
      renderCell: (params) =>
        params.row.testimonialImage ? (
          <img
            src={params.row.testimonialImage}
            alt="testimonial"
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #3B82F6",
              transition: "transform 0.3s",
            }}
          />
        ) : (
          "—"
        ),
    },
    { field: "name", headerName: "Project Name", flex: 1, minWidth: 180 },
    { field: "category", headerName: "Category", width: 150 },
    { field: "client", headerName: "Client", width: 150 },
    { field: "year", headerName: "Year", width: 90 },
    { field: "duration", headerName: "Duration", width: 110 },
    { field: "budget", headerName: "Budget", width: 120 },
    {
      field: "featured",
      headerName: "Featured",
      width: 110,
      renderCell: (params) =>
        params.value ? (
          <Chip label="Yes" color="success" size="small" sx={{ fontWeight: "bold" }} />
        ) : (
          <Chip label="No" size="small" sx={{ fontWeight: "bold" }} />
        ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 220,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Tooltip title="Edit Project">
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => {
                setSelectedProject(params.row);
                setIsEditOpen(true);
              }}
            >
              Edit
            </Button>
          </Tooltip>
          <Tooltip title="Delete Project">
            <Button
              size="small"
              color="error"
              variant="outlined"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </Button>
          </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="#1E40AF">
          Projects Management
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #3B82F6 0%, #06B6D4 100%)",
            color: "#fff",
            "&:hover": { background: "linear-gradient(90deg, #2563EB 0%, #0891B2 100%)" },
          }}
          onClick={() => setIsAddOpen(true)}
        >
          + Add Project
        </Button>
      </Box>

      <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={projects}
          columns={columns}
          getRowId={(row) => row.id}
          pageSize={8}
          rowsPerPageOptions={[8]}
          disableSelectionOnClick
          getRowHeight={() => "auto"}
          sx={{
            "& .MuiDataGrid-row:hover": { backgroundColor: "#F3F4F6" },
            "& .MuiDataGrid-columnHeader": { backgroundColor: "#E0E7FF", fontWeight: "bold" },
          }}
        />
      </Box>

      <AddProjectModal open={isAddOpen} onClose={() => setIsAddOpen(false)} onAdd={handleAdd} />

      {selectedProject && (
        <EditProjectModal
          open={isEditOpen}
          onClose={() => {
            setIsEditOpen(false);
            setSelectedProject(null);
          }}
          project={selectedProject}
          onEdit={handleEdit}
        />
      )}
    </Box>
  );
};

export default ProjectsPage;
