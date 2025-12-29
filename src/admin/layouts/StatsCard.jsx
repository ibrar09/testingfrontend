// src/pages/AdminDashboard/components/StatsCard.jsx
import React from "react";
import { Box, Typography, LinearProgress, Avatar } from "@mui/material";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const StatsCard = ({ title, value, subtitle, icon, trend = 0, gradient, sparklineData }) => {
  const isPositive = trend >= 0;

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 3,
        color: "#fff",
        background: gradient || "linear-gradient(135deg, #0284C7 0%, #06B6D4 100%)",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 12px 25px rgba(0,0,0,0.2)",
        },
      }}
    >
      {/* Background icon */}
      <Box sx={{ position: "absolute", top: -10, right: -10, opacity: 0.2, fontSize: 80 }}>
        {icon}
      </Box>

      {/* Main Info */}
      <Typography variant="subtitle2" sx={{ fontWeight: 500, mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
        {value}
      </Typography>

      {/* Trend */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        {isPositive ? (
          <ArrowUpward fontSize="small" sx={{ mr: 0.5, color: "#D1FAE5" }} />
        ) : (
          <ArrowDownward fontSize="small" sx={{ mr: 0.5, color: "#FECACA" }} />
        )}
        <Typography variant="caption" sx={{ color: "#F3F4F6" }}>
          {Math.abs(trend)}% {isPositive ? "increase" : "decrease"} {subtitle}
        </Typography>
      </Box>

      {/* Mini Sparkline Chart */}
      {sparklineData && (
        <Box sx={{ width: "100%", height: 40 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sparklineData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="rgba(255,255,255,0.8)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      )}
    </Box>
  );
};

export default StatsCard;
