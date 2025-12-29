import React from "react";
import { Grid, Card, CardContent, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";

// ======= Dummy Data =======
const salesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3200 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 7000 },
];

const recentOrders = [
  { id: 1, customer: "John Doe", product: "Premium Paint Set", amount: "$299", status: "Delivered" },
  { id: 2, customer: "Sarah Smith", product: "Cordless Screwdriver", amount: "$229", status: "Pending" },
  { id: 3, customer: "Michael Lee", product: "LED Wall Sconce", amount: "$189", status: "Shipped" },
  { id: 4, customer: "Emma Johnson", product: "Marble Tile", amount: "$89", status: "Cancelled" },
];

const Dashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Dashboard Overview
      </Typography>

      {/* ======== TOP METRICS CARDS ======== */}
      <Grid container spacing={3}>
        {[
          { title: "Total Orders", value: "1,240", icon: <ShoppingCartIcon color="primary" /> },
          { title: "Total Revenue", value: "$45,230", icon: <MonetizationOnIcon color="success" /> },
          { title: "Total Customers", value: "892", icon: <PeopleIcon color="secondary" /> },
          { title: "Active Products", value: "320", icon: <InventoryIcon color="action" /> },
        ].map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card elevation={2}>
              <CardContent>
                <Box display="flex" alignItems="center" gap={2}>
                  {stat.icon}
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      {stat.title}
                    </Typography>
                    <Typography variant="h6" fontWeight="bold">
                      {stat.value}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* ======== SALES CHART ======== */}
      <Box mt={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Monthly Sales Overview
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#3f51b5" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Box>

      {/* ======== RECENT ORDERS TABLE ======== */}
      <Box mt={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Recent Orders
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.product}</TableCell>
                      <TableCell>{order.amount}</TableCell>
                      <TableCell>
                        <Chip
                          label={order.status}
                          color={
                            order.status === "Delivered"
                              ? "success"
                              : order.status === "Pending"
                              ? "warning"
                              : order.status === "Cancelled"
                              ? "error"
                              : "info"
                          }
                          size="small"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Dashboard;
