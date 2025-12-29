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
import api from "../../../api/api"; // Axios instance

const OrderItemsPage = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [itemsRes, ordersRes, productsRes] = await Promise.all([
        api.get("/order-items"),
        api.get("/orders"),
        api.get("/products"),
      ]);

      const items = itemsRes?.data || [];
      const ordersData = ordersRes?.data?.data || [];
      const productsData = productsRes?.data?.data || [];

      const mappedItems = items.map((item) => ({
        ...item,
        order_number: ordersData.find((o) => o.id === item.order_id)?.order_number || "-",
        product_name: productsData.find((p) => p.id === item.product_id)?.name || "-",
      }));

      setOrderItems(mappedItems);
      setOrders(ordersData);
      setProducts(productsData);
    } catch (error) {
      console.error("Failed to fetch order items:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      if (editData.id) {
        await api.put(`/order-items/${editData.id}`, editData);
      } else {
        await api.post(`/order-items`, editData);
      }
      setOpenDialog(false);
      fetchData();
    } catch (error) {
      console.error("Failed to save order item:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      await api.delete(`/order-items/${id}`);
      fetchData();
    } catch (error) {
      console.error("Failed to delete order item:", error);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "order_number", headerName: "Order Number", flex: 1, minWidth: 120 },
    { field: "product_name", headerName: "Product", flex: 1, minWidth: 150 },
    { field: "quantity", headerName: "Qty", width: 90 },
    { field: "price", headerName: "Price", width: 110 },
    { field: "total", headerName: "Total", width: 110 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <Box display="flex" gap={1}>
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

  const renderDialog = () => (
    <Dialog
      open={openDialog}
      onClose={() => setOpenDialog(false)}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>{editData?.id ? "Edit Order Item" : "Add Order Item"}</DialogTitle>
      <DialogContent>
        <TextField
          select
          fullWidth
          margin="normal"
          label="Order"
          value={editData.order_id || ""}
          onChange={(e) => setEditData({ ...editData, order_id: e.target.value })}
        >
          {orders.map((o) => (
            <MenuItem key={o.id} value={o.id}>
              {o.order_number}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          fullWidth
          margin="normal"
          label="Product"
          value={editData.product_id || ""}
          onChange={(e) => setEditData({ ...editData, product_id: e.target.value })}
        >
          {products.map((p) => (
            <MenuItem key={p.id} value={p.id}>
              {p.name}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          fullWidth
          margin="normal"
          label="Quantity"
          type="number"
          value={editData.quantity || ""}
          onChange={(e) => setEditData({ ...editData, quantity: Number(e.target.value) })}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Price"
          type="number"
          value={editData.price || ""}
          onChange={(e) => setEditData({ ...editData, price: Number(e.target.value) })}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Total"
          type="number"
          value={editData.total || ""}
          onChange={(e) => setEditData({ ...editData, total: Number(e.target.value) })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <Box p={3} sx={{ width: "100%" }}>
      <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ xs: "stretch", sm: "center" }} mb={2} gap={2}>
        <Typography variant="h5">Order Items</Typography>
        <Button
          variant="contained"
          onClick={() => {
            setEditData({});
            setOpenDialog(true);
          }}
        >
          Add Item
        </Button>
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ width: "100%" }}>
          <DataGrid
            rows={orderItems}
            columns={columns}
            getRowId={(row) => row.id}
            autoHeight
            initialState={{ pagination: { paginationModel: { pageSize: 10, page: 0 } } }}
            pageSizeOptions={[10, 25, 50, 100]}
            sx={{
              "& .MuiDataGrid-cell": {
                whiteSpace: "normal",
                wordWrap: "break-word",
                lineHeight: "1.4 !important",
                maxHeight: "80px",
              },
              "& .MuiDataGrid-row": { maxHeight: "80px !important" },
            }}
          />
        </Box>
      )}

      {openDialog && renderDialog()}
    </Box>
  );
};

export default OrderItemsPage;
