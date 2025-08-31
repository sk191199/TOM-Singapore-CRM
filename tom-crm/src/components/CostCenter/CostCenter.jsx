import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import LayersIcon from "@mui/icons-material/Layers";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/DeleteOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";

const staticCenters = [
  { code: "CC100", name: "Administration", active: true },
  { code: "CC200", name: "Sales & Marketing", active: true },
  { code: "CC300", name: "Finance & Accounting", active: true },
  { code: "CC400", name: "Human Resources", active: true },
  { code: "CC500", name: "IT & Support", active: true },
  { code: "CC600", name: "Operations", active: true },
  { code: "CC700", name: "Research & Development", active: true },
  { code: "CC800", name: "Logistics & Warehouse", active: true },
];

const CostCenter = () => {
  return (
    <Box sx={{ p: 4, bgcolor: "#f7fafd", minHeight: "100vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <LayersIcon sx={{ fontSize: 36, color: "#1976d2", mr: 1 }} />
        <Typography variant="h5" fontWeight={700}>
          Cost Center Creation
        </Typography>
      </Box>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField
            label="Code"
            size="small"
            sx={{ flex: "1 1 200px" }}
          />
          <TextField
            label="Name"
            size="small"
            sx={{ flex: "2 1 400px" }}
          />
          <FormControlLabel
            control={<Checkbox />}
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
          <Button
            variant="contained"
            color="primary"
            startIcon={<CancelIcon />}
            sx={{ bgcolor: "#1976d2" }}
          >
            Cancel
          </Button>
        </Box>
      </Paper>
      <Paper sx={{ p: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Code</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {staticCenters.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{row.code}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <Checkbox checked={row.active} disabled />
                </TableCell>
                <TableCell>
                  <IconButton sx={{ bgcolor: "#e0e0e0" }}>
                    <EditIcon sx={{ color: "#333" }} />
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

export default CostCenter;