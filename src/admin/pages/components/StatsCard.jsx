// src/pages/AdminDashboard/components/StatsCard.jsx
import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const StatsCard = ({ title, value, subtitle, color = "primary.main" }) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="subtitle2" color="text.secondary">
            {title}
          </Typography>
          <Typography variant="h4" sx={{ color }}>
            {value}
          </Typography>
          {subtitle && (
            <Typography variant="caption" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
