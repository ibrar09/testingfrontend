import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import api from "../../../api/api"; // centralized axios instance

const CouponsPage = () => {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [editData, setEditData] = useState({});
  const [formLoading, setFormLoading] = useState(false);

  // Fetch all coupons
  const fetchCoupons = async () => {
    try {
      setLoading(true);
      const res = await api.get("/coupons");
      setCoupons(res.data.data || res.data); // Ensure we get an array
    } catch (err) {
      console.error("Error fetching coupons:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  // Add / Edit coupon
  const handleSubmit = async () => {
    if (!editData.code?.trim()) {
      alert("Coupon code is required");
      return;
    }

    try {
      setFormLoading(true);
      if (editData.id) {
        await api.put(`/coupons/${editData.id}`, editData);
      } else {
        await api.post("/coupons", editData);
      }
      setOpenDialog(false);
      setEditData({});
      fetchCoupons();
    } catch (err) {
      console.error("Error saving coupon:", err);
      alert(err.response?.data?.error || "Failed to save coupon");
    } finally {
      setFormLoading(false);
    }
  };

  // Delete coupon
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this coupon?")) return;
    try {
      await api.delete(`/coupons/${id}`);
      fetchCoupons();
    } catch (err) {
      console.error("Error deleting coupon:", err);
      alert("Failed to delete coupon");
    }
  };

  // DataGrid columns
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "code", headerName: "Code", width: 150 },
    { field: "description", headerName: "Description", width: 200 },
    { field: "discount_type", headerName: "Type", width: 120 },
    { field: "discount_value", headerName: "Value", width: 120 },
    { field: "status", headerName: "Status", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <Box>
          <Button
            size="small"
            onClick={() => {
              setEditData(params.row);
              setOpenDialog(true);
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

  // Dialog form
  const renderDialog = () => (
    <Dialog
      open={openDialog}
      onClose={() => setOpenDialog(false)}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>{editData?.id ? "Edit Coupon" : "Add Coupon"}</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          margin="normal"
          label="Code"
          value={editData?.code || ""}
          onChange={(e) => setEditData({ ...editData, code: e.target.value })}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Description"
          value={editData?.description || ""}
          onChange={(e) =>
            setEditData({ ...editData, description: e.target.value })
          }
        />
        <TextField
          select
          fullWidth
          margin="normal"
          label="Discount Type"
          value={editData?.discount_type || ""}
          onChange={(e) =>
            setEditData({ ...editData, discount_type: e.target.value })
          }
        >
          <MenuItem value="percentage">Percentage</MenuItem>
          <MenuItem value="fixed">Fixed</MenuItem>
        </TextField>
        <TextField
          fullWidth
          margin="normal"
          label="Discount Value"
          type="number"
          value={editData?.discount_value || ""}
          onChange={(e) =>
            setEditData({ ...editData, discount_value: e.target.value })
          }
        />
        <TextField
          fullWidth
          margin="normal"
          label="Status"
          select
          value={editData?.status || "active"}
          onChange={(e) =>
            setEditData({ ...editData, status: e.target.value })
          }
        >
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="expired">Expired</MenuItem>
          <MenuItem value="disabled">Disabled</MenuItem>
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={formLoading}
        >
          {formLoading ? "Saving..." : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h5">Coupons</Typography>
        <Button
          variant="contained"
          onClick={() => {
            setEditData({});
            setOpenDialog(true);
          }}
        >
          Add Coupon
        </Button>
      </Box>

      {loading ? (
        <CircularProgress />
      ) : (
        <DataGrid
          rows={coupons}
          columns={columns}
          getRowId={(row) => row.id}
          autoHeight
          pageSize={10}
        />
      )}

      {openDialog && renderDialog()}
    </Box>
  );
};

export default CouponsPage;
