import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, Typography, Box, InputBase, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";

const SIDEBAR_WIDTH = 230;

const Navbar = ({ onMenuClick, sidebarOpen }) => {
  const userInitials = "AG";
  const [time, setTime] = useState(new Date());
  const day = time.toLocaleDateString("en-US", { weekday: "long" });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "#2d3748",
        zIndex: 1201,
        left: sidebarOpen ? `${SIDEBAR_WIDTH}px` : 0,
        width: sidebarOpen ? `calc(100% - ${SIDEBAR_WIDTH}px)` : "100%",
        transition: "left 0.3s, width 0.3s",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ minHeight: 64, px: 3 }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onMenuClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 0, fontWeight: 500 }}>
          TOM CRM
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", bgcolor: "#fff", borderRadius: 1, px: 1 }}>
            <SearchIcon sx={{ color: "#232d3b", mr: 1 }} />
            <InputBase
              placeholder="Search menu..."
              sx={{ width: 180, fontSize: 16, color: "#232d3b" }}
              inputProps={{ 'aria-label': 'search menu' }}
            />
          </Box>
          <IconButton color="inherit">
            <HomeIcon />
          </IconButton>
          <IconButton color="inherit">
            <ArrowBackIcon />
          </IconButton>
          <Typography sx={{ fontSize: 15 }}>
            {time.toLocaleTimeString("en-US", { hour12: false })}
          </Typography>
          <Typography sx={{ fontSize: 15 }}>{day}</Typography>
          <Avatar sx={{ bgcolor: "#1976d2", width: 32, height: 32, fontSize: 16 }}>{userInitials}</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;