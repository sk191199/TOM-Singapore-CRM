import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

const ChangePassword = () => {
  return (
    <Box sx={{ p: 4, bgcolor: "#f7fafd", minHeight: "100vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <LockIcon sx={{ fontSize: 36, color: "#1976d2", mr: 1 }} />
        <Typography variant="h5" fontWeight={700}>
          Change Password
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mb: 2 }}>
        <Button
          variant="contained"
          color="error"
          startIcon={<SaveIcon />}
          sx={{ bgcolor: "#f44336" }}
        >
          Update Password
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<CancelIcon />}
          sx={{ bgcolor: "#1976d2" }}
        >
          Cancel
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Paper
          sx={{
            p: 4,
            borderRadius: 3,
            width: "100%",
            maxWidth: 600,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
          elevation={3}
        >
          <TextField
            label="Username"
            value="akshat.saxena016@gmail.com"
            fullWidth
            InputProps={{ readOnly: true }}
          />
          <TextField
            label="Old Password"
            type="password"
            fullWidth
          />
          <TextField
            label="New Password"
            type="password"
            fullWidth
          />
          <TextField
            label="Confirm New Password"
            type="password"
            fullWidth
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default ChangePassword;