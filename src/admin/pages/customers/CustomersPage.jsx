import React, { useState, useMemo } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// Dummy customer data
const dummyCustomers = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", totalOrders: 5 },
  { id: 2, name: "Sarah Smith", email: "sarah@example.com", phone: "987-654-3210", totalOrders: 2 },
  { id: 3, name: "Michael Lee", email: "michael@example.com", phone: "555-123-4567", totalOrders: 10 },
  { id: 4, name: "Emma Johnson", email: "emma@example.com", phone: "555-987-6543", totalOrders: 3 },
];

const CustomersPage = () => {
  const [customers, setCustomers] = useState(dummyCustomers);
  const [search, setSearch] = useState("");

  // Filtered customers based on search
  const filteredCustomers = useMemo(() => {
    if (!search) return customers;
    return customers.filter(
      (c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, customers]);

  const handleDelete = (id) => {
    setCustomers((prev) => prev.filter((c) => c.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "totalOrders", headerName: "Total Orders", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      renderCell: (params) => (
        <Box>
          <Button size="small" onClick={() => alert(`Edit customer ${params.row.id}`)}>
            Edit
          </Button>
          <Button size="small" color="error" onClick={() => handleDelete(params.row.id)}>
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Customers Management
      </Typography>

      {/* Search Box */}
      <Box mb={2} display="flex" justifyContent="flex-end">
        <TextField
          label="Search by name or email"
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>

      <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={filteredCustomers}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          disableSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default CustomersPage;
