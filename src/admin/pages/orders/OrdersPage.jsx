import React, { useEffect, useState } from "react";
import {
  DataGrid,
  GridToolbar,
} from "@mui/x-data-grid";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Snackbar,
  Alert,
  Box,
  Typography,
  Chip,
  Card,
  CardContent,
  IconButton,
  Tooltip,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Visibility, Edit, Delete, Refresh, PictureAsPdf, GridView } from "@mui/icons-material";
import api from "../../../api/api"; // centralized axios instance
import * as XLSX from "xlsx"; // Import for client-side Excel generation

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [editData, setEditData] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [selectedOrderItems, setSelectedOrderItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const [filters, setFilters] = useState({
    search: "",
    status: "",
    payment_status: "",
    startDate: "",
    endDate: "",
  });

  // Fetch orders
  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await api.get("/orders");
      let ordersData = response.data?.data || [];

      // Apply frontend filters
      if (filters.search) {
        ordersData = ordersData.filter((o) =>
          `${o.order_number} ${o.user?.name} ${o.user?.email}`
            .toLowerCase()
            .includes(filters.search.toLowerCase())
        );
      }
      if (filters.status) {
        ordersData = ordersData.filter((o) => o.status === filters.status);
      }
      if (filters.payment_status) {
        ordersData = ordersData.filter((o) => o.payment_status === filters.payment_status);
      }
      if (filters.startDate) {
        ordersData = ordersData.filter(
          (o) => new Date(o.created_at) >= new Date(filters.startDate)
        );
      }
      if (filters.endDate) {
        ordersData = ordersData.filter(
          (o) => new Date(o.created_at) <= new Date(filters.endDate)
        );
      }

      const transformedOrders = ordersData.map((order) => {
        const subtotal = parseFloat(order.subtotal) || 0;
        const tax = parseFloat(order.tax) || 0;
        const shipping = parseFloat(order.shipping) || 0;
        const total = parseFloat(order.total) || 0;

        const fullAddress = order.address
          ? `${order.address.full_name}, ${order.address.phone}, ${order.address.address_line1}${order.address.address_line2 ? ", " + order.address.address_line2 : ""}, ${order.address.city}, ${order.address.state ? order.address.state + ", " : ""}${order.address.country} - ${order.address.postal_code}`
          : "N/A";

        return {
          id: order.id,
          order_number: order.order_number,
          customer_name: order.user?.name || "Unknown",
          customer_email: order.user?.email || "N/A",
          user_id: order.user_id,
          subtotal: `$${subtotal.toFixed(2)}`,
          tax: `$${tax.toFixed(2)}`,
          shipping: `$${shipping.toFixed(2)}`,
          total: `$${total.toFixed(2)}`,
          status: order.status || "pending",
          payment_status: order.payment_status || "unpaid",
          payment_method: order.payment_method || "N/A",
          created_at: order.created_at ? new Date(order.created_at).toLocaleDateString() : "N/A",
          items_count: Array.isArray(order.items) ? order.items.length : 0,
          rawItems: order.items || [],
          address: order.address || {},
          full_address: fullAddress,
          rawOrder: order, // Keep raw order data for Excel export
        };
      });

      setOrders(transformedOrders);
    } catch (err) {
      console.error("Error fetching orders:", err);
      showSnackbar("Failed to fetch orders", "error");
      if (err.response?.status === 401) window.location.href = "/admin/login";
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const showSnackbar = (message, severity) => setSnackbar({ open: true, message, severity });
  const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

  const handleEdit = (order) => { setEditData(order); setOpenEdit(true); };
  const handleSave = async () => {
    try {
      await api.put(`/orders/${editData.id}`, {
        status: editData.status,
        payment_status: editData.payment_status,
      });
      setOpenEdit(false);
      fetchOrders();
      showSnackbar("Order updated successfully", "success");
    } catch (err) {
      console.error("Error updating order:", err);
      showSnackbar("Failed to update order", "error");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;
    try {
      await api.delete(`/orders/${id}`);
      fetchOrders();
      showSnackbar("Order deleted successfully", "success");
    } catch (err) {
      console.error("Error deleting order:", err);
      showSnackbar("Failed to delete order", "error");
    }
  };

  const handleViewDetails = (order) => {
    setSelectedOrderItems(order.rawItems);
    setOpenDetails(true);
  };

  const handleRefresh = () => fetchOrders();

  const handleExportPDF = async (orderId = null) => {
    try {
      const payload = { ...filters };
      if (orderId) payload.orderId = orderId;

      const response = await api.post("/orders/export-pdf", payload, { responseType: "blob" });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        orderId ? `order_${orderId}_${Date.now()}.pdf` : `orders_${Date.now()}.pdf`
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error("PDF download failed:", err);
      showSnackbar("Failed to download PDF", "error");
    }
  };

  // Client-side Excel generation
  const handleExportExcel = (orderId = null) => {
    try {
      let dataToExport = [];
      
      if (orderId) {
        // Export single order
        const order = orders.find(o => o.id === orderId);
        if (!order) {
          showSnackbar("Order not found", "error");
          return;
        }
        
        // Create detailed order data
        const orderData = order.rawOrder || order;
        dataToExport = [
          ["Order Details", "", "", ""],
          ["Order Number:", order.order_number, "Order Date:", order.created_at],
          ["Customer:", order.customer_name, "Email:", order.customer_email],
          ["Status:", order.status, "Payment Status:", order.payment_status],
          ["Payment Method:", order.payment_method, "", ""],
          ["Address:", order.full_address, "", ""],
          ["", "", "", ""],
          ["Order Items", "", "", ""],
          ["Product", "Variant", "Quantity", "Price"]
        ];
        
        // Add order items
        if (order.rawItems && Array.isArray(order.rawItems)) {
          order.rawItems.forEach((item, index) => {
            const product = item.productDetails || {};
            const variantName = item.variant?.name || "Default";
            const price = parseFloat(item.price || product.price || 0).toFixed(2);
            dataToExport.push([product.name || "Unknown Product", variantName, item.quantity, `$${price}`]);
          });
        }
        
        // Add summary
        dataToExport.push(["", "", "", ""]);
        dataToExport.push(["", "", "Subtotal:", order.subtotal]);
        dataToExport.push(["", "", "Tax:", order.tax]);
        dataToExport.push(["", "", "Shipping:", order.shipping]);
        dataToExport.push(["", "", "Total:", order.total]);
        
      } else {
        // Export all orders
        dataToExport = [
          ["Orders Report", "", "", "", "", "", "", "", "", "", ""],
          ["Generated:", new Date().toLocaleDateString(), "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", "", ""],
          ["ID", "Order #", "Customer", "Email", "Items", "Subtotal", "Tax", "Shipping", "Total", "Status", "Payment Status", "Payment Method", "Order Date"]
        ];
        
        orders.forEach(order => {
          dataToExport.push([
            order.id,
            order.order_number,
            order.customer_name,
            order.customer_email,
            order.items_count,
            order.subtotal.replace('$', ''),
            order.tax.replace('$', ''),
            order.shipping.replace('$', ''),
            order.total.replace('$', ''),
            order.status,
            order.payment_status,
            order.payment_method,
            order.created_at
          ]);
        });
        
        // Add summary row
        dataToExport.push(["", "", "", "", "", "", "", "", "", "", "", "", ""]);
        const totalOrders = orders.length;
        const totalRevenue = orders.reduce((sum, order) => sum + parseFloat(order.total.replace('$', '')) || 0, 0).toFixed(2);
        dataToExport.push(["", "", "Summary", "", "", "", "", "", "", "", "", "", ""]);
        dataToExport.push(["", "", "Total Orders:", totalOrders, "", "", "", "", "Total Revenue:", `$${totalRevenue}`, "", "", ""]);
      }
      
      // Create worksheet
      const ws = XLSX.utils.aoa_to_sheet(dataToExport);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, orderId ? `Order_${orderId}` : "Orders");
      
      // Generate Excel file
      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const data = new Blob([excelBuffer], { 
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
      });
      
      // Download file
      const url = window.URL.createObjectURL(data);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        orderId ? `order_${orderId}_${Date.now()}.xlsx` : `orders_${Date.now()}.xlsx`
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      showSnackbar(`Excel file downloaded successfully`, "success");
      
    } catch (err) {
      console.error("Excel generation failed:", err);
      showSnackbar("Failed to generate Excel file", "error");
    }
  };

  const handleCreateShipment = async (order) => {
    try {
      const res = await api.post("/shipments", { order_number: order.order_number, status: "processing" });
      showSnackbar(`Shipment created! Tracking: ${res.data.shipment.tracking_number}`, "success");
      fetchOrders();
    } catch (err) {
      console.error("Shipment creation failed:", err);
      showSnackbar("Failed to create shipment", "error");
    }
  };

  const getStatusColor = (status) => ({
    pending: "warning",
    processing: "info",
    shipped: "primary",
    delivered: "success",
    cancelled: "error",
  }[status] || "default");

  const getPaymentStatusColor = (status) => ({
    unpaid: "error",
    paid: "success",
    failed: "error",
    refunded: "warning",
  }[status] || "default");

  const getPaymentMethodColor = (method) => ({
    card: "primary",
    cod: "secondary",
    bank_transfer: "info",
    wallet: "success",
  }[method] || "default");

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "order_number", headerName: "Order #", width: 140 },
    { field: "customer_name", headerName: "Customer", width: 180 },
    { field: "customer_email", headerName: "Email", width: 200 },
    { field: "address", headerName: "Address", width: 180, renderCell: (params) => (
      <Tooltip title="View Full Address">
        <Button
          size="small"
          variant="outlined"
          onClick={() => {
            setSelectedOrderItems([{ type: "address", data: params.row.address }]);
            setOpenDetails(true);
          }}
        >
          View Address
        </Button>
      </Tooltip>
    )},
    { field: "items_count", headerName: "Items", width: 80, align: "center", headerAlign: "center" },
    { field: "subtotal", headerName: "Subtotal", width: 100 },
    { field: "tax", headerName: "Tax", width: 80 },
    { field: "shipping", headerName: "Shipping", width: 100 },
    { field: "total", headerName: "Total", width: 100 },
    { field: "status", headerName: "Status", width: 130, renderCell: (params) => <Chip label={params.value} color={getStatusColor(params.value)} size="small" variant="outlined" /> },
    { field: "payment_status", headerName: "Payment", width: 130, renderCell: (params) => <Chip label={params.value} color={getPaymentStatusColor(params.value)} size="small" variant="outlined" /> },
    { field: "payment_method", headerName: "Method", width: 120, renderCell: (params) => <Chip label={params.value} color={getPaymentMethodColor(params.value)} size="small" variant="outlined" /> },
    { field: "created_at", headerName: "Order Date", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      width: 330,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          <Tooltip title="View Details">
            <IconButton size="small" color="primary" onClick={() => handleViewDetails(params.row)}>
              <Visibility />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit Order">
            <IconButton size="small" color="secondary" onClick={() => handleEdit(params.row)}>
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete Order">
            <IconButton size="small" color="error" onClick={() => handleDelete(params.row.id)}>
              <Delete />
            </IconButton>
          </Tooltip>
          <Tooltip title="Create Shipment">
            <Button size="small" variant="contained" color="info" onClick={() => handleCreateShipment(params.row)}>📦</Button>
          </Tooltip>
          <Tooltip title="Export PDF">
            <IconButton size="small" color="error" onClick={() => handleExportPDF(params.row.id)}>
              <PictureAsPdf />
            </IconButton>
          </Tooltip>
          <Tooltip title="Export Excel">
            <IconButton size="small" color="success" onClick={() => handleExportExcel(params.row.id)}>
              <GridView />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  const totalRevenue = orders.reduce((sum, order) => sum + (parseFloat(order.total.replace('$','')) || 0), 0);
  const pendingOrders = orders.filter(order => order.status === 'pending').length;
  const paidOrders = orders.filter(order => order.payment_status === 'paid').length;

  const handleCopyItems = () => {
    if (!selectedOrderItems.length) return;
    if (selectedOrderItems[0].type === "address") return;

    const header = ["Product", "Variant", "Quantity", "Price"].join("\t");
    const rows = selectedOrderItems.map(item => {
      const product = item.productDetails || {};
      const variantName = item.variant?.name || "Default";
      const price = parseFloat(item.price || product.price || 0).toFixed(2);
      return [product.name || "Unknown Product", variantName, item.quantity, price].join("\t");
    });

    const text = [header, ...rows].join("\n");
    navigator.clipboard.writeText(text);
    showSnackbar("Order items copied! Paste in Excel or Notepad", "success");
  };

  if (loading) return (
    <Box display="flex" justifyContent="center" alignItems="center" height={400} flexDirection="column" gap={2}>
      <CircularProgress />
      <Typography>Loading orders...</Typography>
    </Box>
  );

  return (
    <Box sx={{ width: "100%", p: 3 }}>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h4" fontWeight="bold">Orders Management</Typography>
        <Button startIcon={<Refresh />} onClick={handleRefresh} variant="outlined">Refresh</Button>
      </Box>

      {/* Filters */}
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 3 }}>
        <TextField label="Search" value={filters.search} onChange={(e) => setFilters({ ...filters, search: e.target.value })} size="small" />
        <TextField select label="Status" value={filters.status} onChange={(e) => setFilters({ ...filters, status: e.target.value })} size="small">
          <MenuItem value="">All</MenuItem>
          {["pending","processing","shipped","delivered","cancelled"].map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
        </TextField>
        <TextField select label="Payment Status" value={filters.payment_status} onChange={(e) => setFilters({ ...filters, payment_status: e.target.value })} size="small">
          <MenuItem value="">All</MenuItem>
          {["unpaid","paid","failed","refunded"].map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
        </TextField>
        <TextField type="date" label="Start Date" InputLabelProps={{ shrink: true }} value={filters.startDate} onChange={(e) => setFilters({ ...filters, startDate: e.target.value })} size="small" />
        <TextField type="date" label="End Date" InputLabelProps={{ shrink: true }} value={filters.endDate} onChange={(e) => setFilters({ ...filters, endDate: e.target.value })} size="small" />
        <Button variant="contained" onClick={fetchOrders}>Apply Filters</Button>
        <Button variant="outlined" startIcon={<PictureAsPdf />} onClick={() => handleExportPDF()}>Export PDF</Button>
        <Button variant="outlined" startIcon={<GridView />} color="success" onClick={() => handleExportExcel()}>Export Excel</Button>
      </Box>

      {/* Summary Cards */}
      <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
        <Card sx={{ minWidth: 200, flex: 1 }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>Total Orders</Typography>
            <Typography variant="h4">{orders.length}</Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 200, flex: 1 }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>Total Revenue</Typography>
            <Typography variant="h4" color="success.main">${totalRevenue.toFixed(2)}</Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 200, flex: 1 }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>Pending Orders</Typography>
            <Typography variant="h4" color="warning.main">{pendingOrders}</Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 200, flex: 1 }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>Paid Orders</Typography>
            <Typography variant="h4" color="success.main">{paidOrders}</Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Orders Table */}
      <Card>
        <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
          <DataGrid
            rows={orders}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            getRowId={(row) => row.id}
            loading={loading}
            sx={{ height: 600, border: 0, '& .MuiDataGrid-cell': { borderBottom: '1px solid', borderColor: 'divider' } }}
            pageSize={10}
            rowsPerPageOptions={[10,25,50]}
            pagination
            disableSelectionOnClick
          />
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={openEdit} onClose={() => setOpenEdit(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Edit Order #{editData?.order_number}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 2 }}>
          <TextField select fullWidth label="Order Status" value={editData?.status || ""} onChange={(e) => setEditData({ ...editData, status: e.target.value })}>
            {["pending","processing","shipped","delivered","cancelled"].map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
          </TextField>
          <TextField select fullWidth label="Payment Status" value={editData?.payment_status || ""} onChange={(e) => setEditData({ ...editData, payment_status: e.target.value })}>
            {["unpaid","paid","failed","refunded"].map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>Save Changes</Button>
        </DialogActions>
      </Dialog>

      {/* View Details Dialog */}
      <Dialog open={openDetails} onClose={() => setOpenDetails(false)} maxWidth="md" fullWidth>
        <DialogTitle>{selectedOrderItems[0]?.type === "address" ? "Customer Address" : "Order Details"}</DialogTitle>
        <DialogContent>
          {selectedOrderItems.length === 0 ? (
            <Typography>No items in this order</Typography>
          ) : selectedOrderItems[0].type === "address" ? (
            <Box sx={{ p: 2 }}>
              <Typography variant="h6">Customer Address</Typography>
              <Typography><strong>Name:</strong> {selectedOrderItems[0].data.full_name}</Typography>
              <Typography><strong>Phone:</strong> {selectedOrderItems[0].data.phone}</Typography>
              <Typography><strong>Street:</strong> {selectedOrderItems[0].data.address_line1}</Typography>
              {selectedOrderItems[0].data.address_line2 && <Typography><strong>Address Line 2:</strong> {selectedOrderItems[0].data.address_line2}</Typography>}
              <Typography><strong>City:</strong> {selectedOrderItems[0].data.city}</Typography>
              {selectedOrderItems[0].data.state && <Typography><strong>State:</strong> {selectedOrderItems[0].data.state}</Typography>}
              <Typography><strong>Country:</strong> {selectedOrderItems[0].data.country}</Typography>
              <Typography><strong>Postal Code:</strong> {selectedOrderItems[0].data.postal_code}</Typography>
            </Box>
          ) : (
            <Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
                <Button variant="outlined" onClick={handleCopyItems}>Copy to Clipboard</Button>
              </Box>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Product</TableCell>
                      <TableCell>Variant</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {selectedOrderItems.map((item, idx) => {
                      const product = item.productDetails || {};
                      const variantName = item.variant?.name || "Default";
                      let imageUrl = [];

                      try {
                        imageUrl = JSON.parse(product.image_urls || "[]");
                      } catch (e) {
                        imageUrl = [];
                      }

                      return (
                        <TableRow key={idx}>
                          <TableCell>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                              {imageUrl[0] ? (
                                <img src={imageUrl[0]} alt={product.name} style={{ width: 40, height: 40, objectFit: "cover" }} />
                              ) : (
                                <Box sx={{ width: 40, height: 40, bgcolor: "#ccc" }} />
                              )}
                              <Typography>{product.name || "Unknown Product"}</Typography>
                            </Box>
                          </TableCell>
                          <TableCell>{variantName}</TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>${parseFloat(item.price || product.price || 0).toFixed(2)}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDetails(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>{snackbar.message}</Alert>
      </Snackbar>
    </Box>
  );
};

export default AdminOrdersPage;