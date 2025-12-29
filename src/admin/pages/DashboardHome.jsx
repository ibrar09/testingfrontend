// src/pages/AdminDashboard/DashboardHome.jsx
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
} from "@mui/material";
import StatsCard from "../layouts/StatsCard";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { ShoppingCart, Inventory, AttachMoney, People, Notifications } from "@mui/icons-material";

const summary = {
  totalProducts: 120,
  totalOrders: 75,
  totalRevenue: 45200,
  totalCustomers: 56,
};

const revenueData = [
  { month: "Jan", revenue: 5000 },
  { month: "Feb", revenue: 7000 },
  { month: "Mar", revenue: 8000 },
  { month: "Apr", revenue: 6000 },
  { month: "May", revenue: 10000 },
];

const ordersData = [
  { month: "Jan", orders: 15 },
  { month: "Feb", orders: 20 },
  { month: "Mar", orders: 22 },
  { month: "Apr", orders: 18 },
  { month: "May", orders: 25 },
];

const DashboardHome = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 3 }}>
      {/* Page Title */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Admin Dashboard
        </Typography>
        <Avatar sx={{ bgcolor: "#0284C7" }}>
          <Notifications />
        </Avatar>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 5 }}>
        <Grid item xs={12} sm={6} md={3}>
         <StatsCard
  title="Products"
  value={summary.totalProducts}
  subtitle="All time"
  trend={12}
  icon={<Inventory fontSize="large" />}
  gradient="linear-gradient(135deg,#0284C7,#06B6D4)"
  sparklineData={[
    { value: 80 },
    { value: 90 },
    { value: 75 },
    { value: 100 },
    { value: 95 },
  ]}
/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
  title="Orders"
  value={summary.totalOrders}
  subtitle="This month"
  trend={-5}
  icon={<ShoppingCart fontSize="large" />}
  gradient="linear-gradient(135deg,#16A34A,#86EFAC)"
  sparklineData={[
    { value: 12 },
    { value: 15 },
    { value: 20 },
    { value: 18 },
    { value: 22 },
  ]}
/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            title="Revenue"
            value={`SAR ${summary.totalRevenue}`}
            subtitle="YTD"
            trend={15}
            icon={<AttachMoney fontSize="large" />}
            gradient="linear-gradient(135deg,#F59E0B,#FDE68A)"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            title="Customers"
            value={summary.totalCustomers}
            subtitle="Active users"
            trend={8}
            icon={<People fontSize="large" />}
            gradient="linear-gradient(135deg,#EF4444,#FCA5A5)"
          />
        </Grid>
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 3, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}>
            <Typography variant="h6" mb={2} fontWeight={600}>
              Revenue Trend
            </Typography>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={revenueData}>
                <CartesianGrid stroke="#f0f0f0" strokeDasharray="5 5" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#0284C7" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 3, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}>
            <Typography variant="h6" mb={2} fontWeight={600}>
              Orders Trend
            </Typography>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={ordersData}>
                <CartesianGrid stroke="#f0f0f0" strokeDasharray="5 5" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="orders" stroke="#16A34A" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* Recent Orders Table */}
      <Box mt={5}>
        <Typography variant="h6" mb={2} fontWeight={600}>
          Recent Orders
        </Typography>
        <Paper sx={{ borderRadius: 3, overflow: "hidden", boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#0284C7" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff" }}>Order #</TableCell>
                <TableCell sx={{ color: "#fff" }}>Customer</TableCell>
                <TableCell sx={{ color: "#fff" }}>Status</TableCell>
                <TableCell sx={{ color: "#fff" }}>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Replace with backend data */}
              <TableRow hover>
                <TableCell>001</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>Confirmed</TableCell>
                <TableCell>SAR 1200</TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell>002</TableCell>
                <TableCell>Jane Smith</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>SAR 850</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Box>
    </Box>
  );
};

export default DashboardHome;
