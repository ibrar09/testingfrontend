import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const drawerWidth = 90;

const AdminLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Topbar */}
      <Topbar onMenuClick={handleDrawerToggle} drawerWidth={drawerWidth} />

      {/* Sidebar */}
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />

      {/* Main content */}
    <Box
  component="main"
  sx={{
    flexGrow: 1,
    p: 3,                  // padding around content (optional)
    pt: 6,                 // remove top padding
    ml: `${drawerWidth}px`, // shift content manually for sidebar
    width: `calc(100% - ${drawerWidth}px)`, // manual width
    minHeight: "140vh",
    bgcolor: "#f5f6fa",
  }}
>
  {/* Remove the Toolbar spacer if you don't want extra space */}
  <Outlet />
</Box>
    </Box>
  );
};

export default AdminLayout;
