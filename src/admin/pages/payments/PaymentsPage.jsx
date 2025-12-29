// src/admin/pages/payments/AdminPaymentsPage.jsx
import React, { useEffect, useState } from "react";
import {
  DataGrid,
  GridToolbar,
} from "@mui/x-data-grid";
import axios from "axios";
import {
  Box,
  Typography,
  Chip,
  Card,
  CardContent,
  IconButton,
  Tooltip,
  CircularProgress,
  Snackbar,
  Alert,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from "@mui/material";
import { Visibility, Refresh, Receipt } from "@mui/icons-material";

// ✅ Use environment variable
const API_BASE = process.env.REACT_APP_API_BASE_URL;

const AdminPaymentsPage = () => {
  const [payments, setPayments] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  // Get token from localStorage
  const getAuthToken = () => {
    return localStorage.getItem("token") || sessionStorage.getItem("token");
  };

  // Axios instance with auth header
  const api = axios.create({
    baseURL: API_BASE,
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
  });

  // Fetch all payments
  const fetchPayments = async () => {
    try {
      setLoading(true);
      const response = await api.get("/payments");
      
      console.log("✅ Payments API Response:", response.data);
      
      // Extract payments from the response structure
      let paymentsData = [];
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        paymentsData = response.data.data;
      } else if (Array.isArray(response.data)) {
        paymentsData = response.data;
      }
      
      // Transform payments data
      const transformedPayments = paymentsData.map((payment) => {
        const safePayment = payment || {};
        const safeOrder = safePayment.order || {};
        const safeUser = safePayment.user || safePayment.order?.user || {};
        
        return {
          // Payment info
          id: safePayment.id,
          payment_reference: safePayment.payment_reference || "N/A",
          payment_method: safePayment.payment_method,
          amount: safePayment.amount ? `$${parseFloat(safePayment.amount).toFixed(2)}` : "$0.00",
          status: safePayment.status,
          transaction_date: safePayment.transaction_date ? new Date(safePayment.transaction_date).toLocaleDateString() : "N/A",
          
          // Order info
          order_id: safePayment.order_id,
          order_number: safeOrder.order_number || `ORD-${safePayment.order_id}`,
          order_total: safeOrder.total ? `$${parseFloat(safeOrder.total).toFixed(2)}` : "$0.00",
          order_status: safeOrder.status || "unknown",
          
          // User info
          customer_name: safeUser.name || "Unknown",
          customer_email: safeUser.email || "N/A",
          
          // Raw data for details
          gateway_response: safePayment.gateway_response,
          _raw: safePayment
        };
      });
      
      setPayments(transformedPayments);
      
    } catch (err) {
      console.error("❌ Error fetching payments:", err);
      showSnackbar("Failed to fetch payments", "error");
      
      if (err.response?.status === 401) {
        window.location.href = "/admin/login";
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const handleViewDetails = (payment) => {
    setSelectedPayment(payment);
    setDetailOpen(true);
  };

  const handleEdit = (payment) => {
    setSelectedPayment(payment);
    setEditOpen(true);
  };

  const handleSave = async () => {
    try {
      await api.put(`/payments/${selectedPayment.id}`, {
        status: selectedPayment.status,
      });
      
      setEditOpen(false);
      fetchPayments();
      showSnackbar("Payment updated successfully", "success");
    } catch (err) {
      console.error("Error updating payment:", err);
      showSnackbar("Failed to update payment", "error");
    }
  };

  const handleRefresh = () => {
    fetchPayments();
  };

  const showSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Status chip colors
  const getStatusColor = (status) => {
    const colors = {
      successful: "success",
      completed: "success",
      pending: "warning",
      processing: "info", 
      failed: "error",
      refunded: "warning",
      cancelled: "error"
    };
    return colors[status] || "default";
  };

  const getPaymentMethodColor = (method) => {
    const colors = {
      paypal: "primary",
      card: "secondary",
      cod: "warning",
      bank_transfer: "info",
      wallet: "success"
    };
    return colors[method] || "default";
  };

  // Format gateway response for display
  const formatGatewayResponse = (response) => {
    try {
      if (!response) return "No gateway response";
      const parsed = JSON.parse(response);
      return JSON.stringify(parsed, null, 2);
    } catch (error) {
      return response || "Invalid response format";
    }
  };

  const columns = [
    { 
      field: "id", 
      headerName: "ID", 
      width: 70 
    },
    { 
      field: "payment_reference", 
      headerName: "Reference", 
      width: 180 
    },
    { 
      field: "order_number", 
      headerName: "Order #", 
      width: 140 
    },
    { 
      field: "customer_name", 
      headerName: "Customer", 
      width: 160 
    },
    { 
      field: "customer_email", 
      headerName: "Email", 
      width: 200 
    },
    { 
      field: "amount", 
      headerName: "Amount", 
      width: 100 
    },
    { 
      field: "order_total", 
      headerName: "Order Total", 
      width: 110 
    },
    { 
      field: "payment_method", 
      headerName: "Method", 
      width: 120,
      renderCell: (params) => (
        <Chip 
          label={params.value} 
          color={getPaymentMethodColor(params.value)}
          size="small"
          variant="outlined"
        />
      )
    },
    { 
      field: "status", 
      headerName: "Status", 
      width: 130,
      renderCell: (params) => (
        <Chip 
          label={params.value} 
          color={getStatusColor(params.value)}
          size="small"
          variant="outlined"
        />
      )
    },
    { 
      field: "order_status", 
      headerName: "Order Status", 
      width: 130,
      renderCell: (params) => (
        <Chip 
          label={params.value} 
          color={getStatusColor(params.value)}
          size="small"
          variant="outlined"
        />
      )
    },
    { 
      field: "transaction_date", 
      headerName: "Date", 
      width: 120 
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Tooltip title="View Details">
            <IconButton
              size="small"
              color="primary"
              onClick={() => handleViewDetails(params.row)}
            >
              <Visibility />
            </IconButton>
          </Tooltip>
          <Tooltip title="Receipt">
            <IconButton
              size="small"
              color="secondary"
              onClick={() => handleViewDetails(params.row)}
            >
              <Receipt />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  // Calculate totals for summary
  const totalPayments = payments.length;
  const totalAmount = payments.reduce((sum, payment) => {
    const amountValue = payment.amount ? parseFloat(payment.amount.replace('$', '')) : 0;
    return sum + amountValue;
  }, 0);
  
  const successfulPayments = payments.filter(payment => 
    payment.status === 'successful' || payment.status === 'completed'
  ).length;
  
  const pendingPayments = payments.filter(payment => payment.status === 'pending').length;

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height={400} flexDirection="column" gap={2}>
        <CircularProgress />
        <Typography>Loading payments...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", p: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h4" component="h1" fontWeight="bold">
          Payments Management
        </Typography>
        <Button 
          startIcon={<Refresh />} 
          onClick={handleRefresh}
          variant="outlined"
        >
          Refresh
        </Button>
      </Box>

      {/* Summary Cards */}
      <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
        <Card sx={{ minWidth: 200, flex: 1 }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              Total Payments
            </Typography>
            <Typography variant="h4" component="div">
              {totalPayments}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 200, flex: 1 }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              Total Amount
            </Typography>
            <Typography variant="h4" component="div" color="success.main">
              ${totalAmount.toFixed(2)}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 200, flex: 1 }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              Successful
            </Typography>
            <Typography variant="h4" component="div" color="success.main">
              {successfulPayments}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 200, flex: 1 }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              Pending
            </Typography>
            <Typography variant="h4" component="div" color="warning.main">
              {pendingPayments}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Payments Table */}
      <Card>
        <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
          <DataGrid
            rows={payments}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            getRowId={(row) => row.id}
            loading={loading}
            sx={{ 
              height: 600, 
              border: 0,
              '& .MuiDataGrid-cell': {
                borderBottom: '1px solid',
                borderColor: 'divider'
              }
            }}
            pageSize={10}
            rowsPerPageOptions={[10, 25, 50]}
            pagination
            disableSelectionOnClick
          />
        </CardContent>
      </Card>

      {/* Payment Details Dialog */}
      <Dialog open={detailOpen} onClose={() => setDetailOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          Payment Details - {selectedPayment?.payment_reference}
        </DialogTitle>
        <DialogContent>
          {selectedPayment && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 2 }}>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                <TextField
                  label="Payment Reference"
                  value={selectedPayment.payment_reference}
                  InputProps={{ readOnly: true }}
                  fullWidth
                />
                <TextField
                  label="Payment Method"
                  value={selectedPayment.payment_method}
                  InputProps={{ readOnly: true }}
                  fullWidth
                />
                <TextField
                  label="Amount"
                  value={selectedPayment.amount}
                  InputProps={{ readOnly: true }}
                  fullWidth
                />
                <TextField
                  label="Status"
                  value={selectedPayment.status}
                  InputProps={{ readOnly: true }}
                  fullWidth
                />
                <TextField
                  label="Order Number"
                  value={selectedPayment.order_number}
                  InputProps={{ readOnly: true }}
                  fullWidth
                />
                <TextField
                  label="Transaction Date"
                  value={selectedPayment.transaction_date}
                  InputProps={{ readOnly: true }}
                  fullWidth
                />
                <TextField
                  label="Customer Name"
                  value={selectedPayment.customer_name}
                  InputProps={{ readOnly: true }}
                  fullWidth
                />
                <TextField
                  label="Customer Email"
                  value={selectedPayment.customer_email}
                  InputProps={{ readOnly: true }}
                  fullWidth
                />
              </Box>
              
              {selectedPayment.gateway_response && (
                <TextField
                  label="Gateway Response"
                  value={formatGatewayResponse(selectedPayment.gateway_response)}
                  InputProps={{ readOnly: true }}
                  multiline
                  rows={6}
                  fullWidth
                />
              )}
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDetailOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Payment Dialog */}
      <Dialog open={editOpen} onClose={() => setEditOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          Edit Payment Status
        </DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 2 }}>
          <TextField
            select
            fullWidth
            label="Payment Status"
            value={selectedPayment?.status || ""}
            onChange={(e) =>
              setSelectedPayment({ ...selectedPayment, status: e.target.value })
            }
          >
            {["pending", "processing", "successful", "completed", "failed", "refunded", "cancelled"].map(
              (opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              )
            )}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AdminPaymentsPage;
