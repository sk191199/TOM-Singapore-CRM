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
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/DeleteOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";

const staticTerms = [
  { code: "PT001", name: "Net 30 Days", days: 30 },
  { code: "PT002", name: "Net 45 Days", days: 45 },
  { code: "PT003", name: "Immediate", days: 0 },
  { code: "PT004", name: "Net 60 Days", days: 60 },
];

const PaymentTermMaster = () => {
  return (
    <Box sx={{ p: 4, bgcolor: "#f7fafd", minHeight: "100vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <AttachMoneyIcon sx={{ fontSize: 36, color: "#1976d2", mr: 1 }} />
        <Typography variant="h5" fontWeight={700}>
          Payment Term Master
        </Typography>
      </Box>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 2,
          }}
        >
          <TextField
            label="Payment Term Code"
            size="small"
            sx={{ flex: "1 1 300px" }}
          />
          <TextField
            label="Payment Term Name"
            size="small"
            sx={{ flex: "1 1 300px" }}
          />
          <TextField
            label="Number of Days"
            size="small"
            sx={{ flex: "1 1 300px" }}
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
              <TableCell>Days</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {staticTerms.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{row.code}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.days}</TableCell>
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

export default PaymentTermMaster;