// src/components/layouts/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import CampaignIcon from "@mui/icons-material/Campaign";
import AssignmentIcon from "@mui/icons-material/Assignment";

const drawerWidth = 240;

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const location = useLocation();

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/admin/dashboard" },
    { text: "Products", icon: <Inventory2Icon />, path: "/admin/products" },
    { text: "Users", icon: <PeopleIcon />, path: "/admin/users" },
    { text: "Admin Settings", icon: <SettingsIcon />, path: "/admin/settings" },
    { text: "Orders", icon: <ShoppingCartIcon />, path: "/admin/orders" },
    { text: "Projects", icon: <AssignmentIcon />, path: "/admin/projects" },
    { text: "Customers", icon: <PeopleIcon />, path: "/admin/customers" },
    { text: "Category", icon: <CategoryIcon />, path: "/admin/category" },
    { text: "Brands", icon: <SettingsIcon />, path: "/admin/brand" },
    { text: "User Address", icon: <SettingsIcon />, path: "/admin/useraddress" },
    // { text: "Product Variant", icon: <SettingsIcon />, path: "/admin/productvarient" },
    { text: "Order Items", icon: <AssignmentIcon />, path: "/admin/ordersitems" },
    { text: "Payments", icon: <PaymentIcon />, path: "/admin/payment" },
    { text: "Shipments", icon: <LocalShippingIcon />, path: "/admin/shipment" },
    { text: "Coupons", icon: <CampaignIcon />, path: "/admin/coupons" },
    { text: "Banners", icon: <CampaignIcon />, path: "/admin/banners" },
    { text: "InvoiceRequest", icon: <CampaignIcon />, path: "/admin/invoice-request" },
  ];

  const drawerContent = (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h6"
        sx={{
          m: 2,
          fontWeight: "bold",
          color: "#fff",
          textAlign: "center",
        }}
      >
        Maaj Admin
      </Typography>

      <List sx={{ flexGrow: 1, overflowY: "auto" }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              "&.Mui-selected": { backgroundColor: "#1565c0" },
              "&:hover": { backgroundColor: "#1565c0" },
              color: "#fff",
            }}
          >
            <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { width: drawerWidth, backgroundColor: "#1976d2" },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#1976d2",
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
