import React, { useState, useEffect } from "react";
import { Box, Button, Typography, CircularProgress, Switch } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AddBannerModal from "./AddBannerModal";
import EditBannerModal from "./EditBannerModal";
import api from "../../../api/api"; // ✅ Use centralized axios instance

const Banners = () => {
  const [banners, setBanners] = useState([]);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch banners from backend
  const fetchBanners = async () => {
    try {
      const res = await api.get("/banners"); // ✅ use api instance
      const data = res.data.data || res.data;

      const mapped = data
        .map((b) => ({ ...b, id: b.id })) // required for DataGrid
        .sort((a, b) => b.priority - a.priority); // sort by priority descending

      setBanners(mapped);
    } catch (err) {
      console.error("Failed to fetch banners:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  // Add banner handler
  const handleAdd = (newBanner) => {
    setBanners((prev) => [...prev, { ...newBanner, id: newBanner.id }]);
    setIsAddOpen(false);
  };

  // Edit banner handler
  const handleEdit = (updatedBanner) => {
    setBanners((prev) =>
      prev.map((b) => (b.id === updatedBanner.id ? { ...updatedBanner } : b))
    );
    setIsEditOpen(false);
  };

  // Delete banner handler
  const handleDelete = async (id) => {
    try {
      await api.delete(`/banners/${id}`); // ✅ use api instance
      setBanners((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      console.error("Failed to delete banner:", err);
      alert("Failed to delete banner");
    }
  };

  // Toggle active status inline
  const toggleActive = async (id, current) => {
    try {
      const res = await api.put(`/banners/${id}`, { active: !current }); // ✅ use api instance
      handleEdit(res.data.data);
    } catch (err) {
      console.error("Failed to toggle active:", err);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", flex: 1, minWidth: 150 },
    { field: "subtitle", headerName: "Subtitle", flex: 1, minWidth: 150 },
    {
      field: "image_url",
      headerName: "Image",
      width: 120,
      renderCell: (params) =>
        params.value ? (
          <img
            src={`${process.env.REACT_APP_API_BASE_URL}${params.value}`} // ✅ use env variable
            alt="Banner"
            style={{ width: 80, height: 50, objectFit: "cover", borderRadius: 4 }}
          />
        ) : (
          "No Image"
        ),
    },
    { field: "target_type", headerName: "Target Type", width: 120 },
    { field: "target_value", headerName: "Target Value", width: 150 },
    {
      field: "active",
      headerName: "Active",
      width: 100,
      renderCell: (params) => (
        <Switch
          checked={params.value}
          onChange={() => toggleActive(params.row.id, params.value)}
          color="primary"
        />
      ),
    },
    { field: "priority", headerName: "Priority", width: 100, type: "number" },
    { field: "start_date", headerName: "Start Date", width: 140 },
    { field: "end_date", headerName: "End Date", width: 140 },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      renderCell: (params) => (
        <Box>
          <Button
            size="small"
            onClick={() => {
              setSelectedBanner(params.row);
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
          Banners Management
        </Typography>
        <Button variant="contained" onClick={() => setIsAddOpen(true)}>
          + Add Banner
        </Button>
      </Box>

      <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={banners}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          disableSelectionOnClick
          getRowId={(row) => row.id}
        />
      </Box>

      <AddBannerModal
        open={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onAdd={handleAdd}
      />
      <EditBannerModal
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onEdit={handleEdit}
        banner={selectedBanner}
      />
    </Box>
  );
};

export default Banners;
