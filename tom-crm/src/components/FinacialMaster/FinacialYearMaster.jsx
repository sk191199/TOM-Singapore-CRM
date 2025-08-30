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
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/DeleteOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const staticYears = [
  {
    code: "FY2024",
    start: "2024-01-01",
    end: "2024-12-31",
    active: true,
  },
  {
    code: "FY2023",
    start: "2023-01-01",
    end: "2023-12-31",
    active: false,
  },
];

const FinacialYearMaster = () => {
  return (
    <Box sx={{ p: 4, bgcolor: "#f7fafd", minHeight: "100vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <CalendarMonthIcon sx={{ fontSize: 36, color: "#1976d2", mr: 1 }} />
        <Typography variant="h5" fontWeight={700}>
          Financial Year Master
        </Typography>
      </Box>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField
            label="Financial Year Code"
            size="small"
            sx={{ flex: "1 1 250px" }}
          />
          <TextField
            label="Start Date"
            size="small"
            type="date"
            InputLabelProps={{ shrink: true }}
            sx={{ flex: "1 1 250px" }}
          />
          <TextField
            label="End Date"
            size="small"
            type="date"
            InputLabelProps={{ shrink: true }}
            sx={{ flex: "1 1 250px" }}
          />
          <FormControlLabel control={<Checkbox />} label="Active" sx={{ ml: 2 }} />
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
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {staticYears.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{row.code}</TableCell>
                <TableCell>{row.start}</TableCell>
                <TableCell>{row.end}</TableCell>
                <TableCell>
                  {row.active ? (
                    <CheckIcon sx={{ color: "green" }} />
                  ) : (
                    <CloseIcon sx={{ color: "red" }} />
                  )}
                </TableCell>
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

export default FinacialYearMaster;