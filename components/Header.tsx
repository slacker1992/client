"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { Colors } from "@/theme";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 10,
        background: Colors.primary[500],
        alignItems: "center",
        padding: 3,
      }}
    >
      <Typography
        variant="h5"
        color="initial"
        sx={{
          fontSize: 16,
          color: "white",
          fontWeight: 600,
        }}
      >
        Employee Manager
      </Typography>
    </Box>
  );
};

export default Header;
