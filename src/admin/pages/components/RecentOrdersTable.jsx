// src/pages/AdminDashboard/components/RecentOrdersTable.jsx
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Box,
  Button,
} from "@mui/material";

// dummy orders
const sampleOrders = [
  { id: "ORD-1001", customer: "John Doe", date: "2025-10-10", total: 599.0, status: "Pending" },
  { id: "ORD-1002", customer: "Sara Ali", date: "2025-10-09", total: 1299.0, status: "Processing" },
  { id: "ORD-1003", customer: "Ahmad Khan", date: "2025-10-08", total: 299.0, status: "Completed" },
  { id: "ORD-1004", customer: "Lina Omar", date: "2025-10-05", total: 899.0, status: "Cancelled" },
];

const statusColor = (status) => {
  switch (status) {
    case "Pending":
      return "warning";
    case "Processing":
      return "info";
    case "Completed":
      return "success";
    case "Cancelled":
      return "error";
    default:
      return "default";
  }
};

const RecentOrdersTable = ({ orders = sampleOrders }) => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">Recent Orders</Typography>
          <Button size="small">View all</Button>
        </Box>

        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((o) => (
              <TableRow key={o.id}>
                <TableCell>{o.id}</TableCell>
                <TableCell>{o.customer}</TableCell>
                <TableCell>{o.date}</TableCell>
                <TableCell>{o.total.toFixed(2)}</TableCell>
                <TableCell>
                  <Chip label={o.status} color={statusColor(o.status)} size="small" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentOrdersTable;
