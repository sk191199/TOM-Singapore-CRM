import React from "react";
import {
  Box,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/DeleteOutline";
import ListIcon from "@mui/icons-material/List";

const staticRoles = [
  { role: "Logistics", active: true },
  { role: "Manager", active: true },
  { role: "Production", active: true },
  { role: "Supervisor", active: true },
];

const RoleMaster = () => {
  return (
    <Box sx={{ p: 4, bgcolor: "#f7fafd", minHeight: "100vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <PersonIcon sx={{ fontSize: 36, color: "#1976d2", mr: 1 }} />
        <Typography variant="h5" fontWeight={700}>
          Role Master
        </Typography>
      </Box>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 2,
          }}
        >
          <TextField
            label="Role Name *"
            size="small"
            sx={{ flex: "1 1 300px" }}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Active"
            sx={{ ml: 2 }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button
            variant="contained"
            color="error"
            startIcon={<SaveIcon />}
            sx={{ bgcolor: "#f44336" }}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            startIcon={<ClearIcon />}
            sx={{ bgcolor: "#fff" }}
          >
            Clear
          </Button>
        </Box>
      </Paper>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <ListIcon sx={{ color: "#1976d2", mr: 1 }} />
          <Typography variant="h6" fontWeight={600}>
            Existing Roles
          </Typography>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Role</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {staticRoles.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{row.role}</TableCell>
                <TableCell>
                  <Checkbox checked={row.active} disabled />
                </TableCell>
                <TableCell>
                  <IconButton sx={{ bgcolor: "#ffe082", mr: 1 }}>
                    <EditIcon sx={{ color: "#333" }} />
                  </IconButton>
                  <IconButton sx={{ bgcolor: "#81d4fa", mr: 1 }}>
                    <VpnKeyIcon sx={{ color: "#333" }} />
                  </IconButton>
                  <IconButton sx={{ bgcolor: "#ff8a80" }}>
                    <DeleteIcon sx={{ color: "#333" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default RoleMaster;