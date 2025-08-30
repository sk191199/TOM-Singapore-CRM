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
} from "@mui/material";
import StraightenIcon from "@mui/icons-material/Straighten";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/DeleteOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";

const staticUoms = [
  { id: 1, name: "Piece" },
  { id: 2, name: "Box" },
  { id: 3, name: "Kg" },
  { id: 4, name: "Meter" },
  { id: 5, name: "Litre" },
  { id: 6, name: "Packet" },
  { id: 7, name: "Can" },
  { id: 8, name: "Roll" },
];

const UomMaster = () => {
  return (
    <Box sx={{ p: 4, bgcolor: "#f7fafd", minHeight: "100vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <StraightenIcon sx={{ fontSize: 36, color: "#1976d2", mr: 1 }} />
        <Typography variant="h5" fontWeight={700}>
          UOM Master
        </Typography>
      </Box>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField
            label="UOM Name"
            size="small"
            sx={{ flex: "1 1 400px" }}
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
              <TableCell>ID</TableCell>
              <TableCell>UOM Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {staticUoms.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <IconButton sx={{ bgcolor: "#ffe082" }}>
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

export default UomMaster;