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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/DeleteOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const staticProjects = [
  {
    code: "PRJ0001",
    name: "Jurong One Smart City",
    start: "2025-01-15",
    end: "2026-06-30",
    status: "Active",
  },
  {
    code: "PRJ0002",
    name: "Marina Bay FinTech Park",
    start: "2024-11-01",
    end: "2025-12-31",
    status: "Active",
  },
  {
    code: "PRJ0003",
    name: "Sentosa Resort",
    start: "2026-01-01",
    end: "2026-10-15",
    status: "Inactive",
  },
  {
    code: "PRJ0004",
    name: "Jurong Digital District",
    start: "2025-08-01",
    end: "2027-05-30",
    status: "Active",
  },
];

const ProjectMaster = () => {
  return (
    <Box sx={{ p: 4, bgcolor: "#f7fafd", minHeight: "100vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <AccountTreeIcon sx={{ fontSize: 36, color: "#1976d2", mr: 1 }} />
        <Typography variant="h5" fontWeight={700}>
          Project Master
        </Typography>
      </Box>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField
            label="Project Code"
            size="small"
            sx={{ flex: "1 1 200px" }}
            defaultValue="PRJ0006"
          />
          <TextField
            label="Project Name"
            size="small"
            sx={{ flex: "2 1 400px" }}
          />
          <FormControl sx={{ flex: "1 1 200px" }} size="small">
            <InputLabel>Status</InputLabel>
            <Select label="Status" defaultValue="Active">
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField
            label="Start Date"
            size="small"
            type="date"
            InputLabelProps={{ shrink: true }}
            sx={{ flex: "1 1 200px" }}
          />
          <TextField
            label="End Date"
            size="small"
            type="date"
            InputLabelProps={{ shrink: true }}
            sx={{ flex: "1 1 200px" }}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Project Description"
            size="small"
            multiline
            rows={3}
            fullWidth
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
              <TableCell>Start</TableCell>
              <TableCell>End</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {staticProjects.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{row.code}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.start}</TableCell>
                <TableCell>{row.end}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <IconButton sx={{ bgcolor: "#1976d2", mr: 1 }}>
                    <EditIcon sx={{ color: "#fff" }} />
                  </IconButton>
                  <IconButton sx={{ bgcolor: "#f44336" }}>
                    <DeleteIcon sx={{ color: "#fff" }} />
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

export default ProjectMaster;