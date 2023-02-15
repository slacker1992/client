"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { Colors } from "../theme";

const Header = () => {
  return (
    <Box
      data-testid="header-menu"
      sx={{
        display: "flex",
        flexDirection: "row",

        height: 10,
        background: Colors.primary[500],
        alignItems: "center",
        padding: 3,
      }}
      width="100%"
    >
      <Typography
        data-testid="header-menu-title"
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
