import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Pagination,
} from "@mui/material";
import StorageIcon from "@mui/icons-material/Storage";
import SaveIcon from "@mui/icons-material/Save";

const staticCurrencies = [
  { id: 1, currency: "AED", rate: 4.284445 },
  { id: 2, currency: "AFN", rate: 79.602334 },
  { id: 3, currency: "ALL", rate: 97.482057 },
  { id: 4, currency: "AMD", rate: 447.405721 },
  { id: 5, currency: "ANG", rate: 2.087916 },
  { id: 6, currency: "AOA", rate: 1069.799666 },
  { id: 7, currency: "ARS", rate: 1543.250095 },
  { id: 8, currency: "AUD", rate: 1.788180 },
  { id: 9, currency: "AWG", rate: 2.102850 },
  { id: 10, currency: "AZN", rate: 1.981067 },
];

const CurrencyMaster = () => {
  return (
    <Box sx={{ p: 4, bgcolor: "#f7fafd", minHeight: "100vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <StorageIcon sx={{ fontSize: 36, color: "#1976d2", mr: 1 }} />
        <Typography variant="h5" fontWeight={700}>
          Currency Master
        </Typography>
      </Box>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button
            variant="contained"
            color="error"
            startIcon={<SaveIcon />}
            sx={{ bgcolor: "#f44336" }}
          >
            Post Rates
          </Button>
          <Button variant="outlined" sx={{ bgcolor: "#fff" }}>
            Refresh Rates
          </Button>
        </Box>
        <Table sx={{ mt: 2 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Currency</TableCell>
              <TableCell>Exchange Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {staticCurrencies.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.currency}</TableCell>
                <TableCell>{row.rate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Pagination count={5} page={1} shape="rounded" />
        </Box>
        <Typography sx={{ mt: 2, color: "green", fontWeight: 500 }}>
          Currency rates have been successfully Refreshed!
        </Typography>
      </Paper>
    </Box>
  );
};

export default CurrencyMaster;