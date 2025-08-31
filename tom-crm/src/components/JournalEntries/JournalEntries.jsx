import React, { useState } from "react";
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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import RefreshIcon from "@mui/icons-material/Refresh";
import DeleteIcon from "@mui/icons-material/Delete";

const currencies = ["SGD", "USD", "EUR"];
const statusList = ["Open", "Posted"];
const accounts = ["Cash", "Bank", "Sales", "Purchase"];
const costCenters = ["--Select--", "Admin", "Sales", "IT"];
const projects = ["--Select--", "Project A", "Project B"];
const departments = ["--Select--", "Dept 1", "Dept 2"];

const JournalEntries = () => {
  const [showForm, setShowForm] = useState(false);
  const [lines, setLines] = useState([
    {
      account: "",
      costCenter: "",
      project: "",
      dept: "",
      debit: "",
      credit: "",
      remarks: "",
    },
    {
      account: "",
      costCenter: "",
      project: "",
      dept: "",
      debit: "",
      credit: "",
      remarks: "",
    },
  ]);

  const handleAddLine = () => {
    setLines([
      ...lines,
      {
        account: "",
        costCenter: "",
        project: "",
        dept: "",
        debit: "",
        credit: "",
        remarks: "",
      },
    ]);
  };

  const handleDeleteLine = (idx) => {
    setLines(lines.filter((_, i) => i !== idx));
  };

  return (
    <Box sx={{ p: 4, bgcolor: "#f7fafd", minHeight: "100vh" }}>
      {!showForm ? (
        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <MenuBookIcon sx={{ fontSize: 36, color: "#1976d2", mr: 1 }} />
            <Typography variant="h5" fontWeight={700}>
              Journal Entries
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              variant="contained"
              color="error"
              startIcon={<AddIcon />}
              sx={{ bgcolor: "#f44336", fontWeight: 600, mr: 2 }}
              onClick={() => setShowForm(true)}
            >
              + New Entry
            </Button>
            <Button
              variant="outlined"
              startIcon={<RefreshIcon />}
              sx={{ fontWeight: 600 }}
            >
              Refresh
            </Button>
          </Box>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography fontWeight={600}>Recent Journal Entries</Typography>
          </Paper>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <TextField
              label=""
              size="small"
              sx={{ flex: "1 1 200px" }}
              placeholder="Search..."
            />
            <Button variant="outlined" sx={{ fontWeight: 600 }}>
              Search
            </Button>
          </Box>
        </Paper>
      ) : (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
            Journal Entry
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <TextField
              label="Journal No."
              size="small"
              value="JE202508270001"
              sx={{ flex: "1 1 200px" }}
            />
            <TextField
              label="Date"
              size="small"
              type="date"
              InputLabelProps={{ shrink: true }}
              value="2025-08-27"
              sx={{ flex: "1 1 200px" }}
            />
            <FormControl sx={{ flex: "1 1 200px" }} size="small">
              <InputLabel>Currency</InputLabel>
              <Select label="Currency" defaultValue="">
                <MenuItem value="">--Select--</MenuItem>
                {currencies.map((cur) => (
                  <MenuItem key={cur} value={cur}>
                    {cur}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Exchange Rate"
              size="small"
              value="0.00"
              sx={{ flex: "1 1 200px" }}
            />
            <TextField
              label="Status"
              size="small"
              value="Open"
              sx={{ flex: "1 1 200px" }}
            />
          </Box>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <TextField
              label="Reference No."
              size="small"
              sx={{ flex: "1 1 200px" }}
            />
            <TextField
              label="Source Module / Doc"
              size="small"
              value="AP/AR/Manual etc"
              sx={{ flex: "1 1 200px" }}
            />
          </Box>
          <TextField
            label="Remarks / Narration"
            size="small"
            multiline
            rows={3}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Account</TableCell>
                <TableCell>Cost Center</TableCell>
                <TableCell>Project</TableCell>
                <TableCell>Dept</TableCell>
                <TableCell>Debit</TableCell>
                <TableCell>Credit</TableCell>
                <TableCell>Remarks</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lines.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>
                    <FormControl size="small" sx={{ minWidth: 100 }}>
                      <Select defaultValue="">
                        <MenuItem value="">--Select--</MenuItem>
                        {accounts.map((acc) => (
                          <MenuItem key={acc} value={acc}>
                            {acc}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <FormControl size="small" sx={{ minWidth: 100 }}>
                      <Select defaultValue="">
                        {costCenters.map((cc) => (
                          <MenuItem key={cc} value={cc}>
                            {cc}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <FormControl size="small" sx={{ minWidth: 100 }}>
                      <Select defaultValue="">
                        {projects.map((p) => (
                          <MenuItem key={p} value={p}>
                            {p}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <FormControl size="small" sx={{ minWidth: 100 }}>
                      <Select defaultValue="">
                        {departments.map((d) => (
                          <MenuItem key={d} value={d}>
                            {d}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <TextField size="small" type="number" defaultValue="" />
                  </TableCell>
                  <TableCell>
                    <TextField size="small" type="number" defaultValue="" />
                  </TableCell>
                  <TableCell>
                    <TextField size="small" />
                  </TableCell>
                  <TableCell>
                    <IconButton color="error" onClick={() => handleDeleteLine(idx)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            sx={{ mt: 2, fontWeight: 600 }}
            onClick={handleAddLine}
          >
            Add Line
          </Button>
          <Box sx={{ display: "flex", gap: 4, mt: 2 }}>
            <Typography fontWeight={600}>Total Debit: 0.00</Typography>
            <Typography fontWeight={600}>Total Credit: 0.00</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            <Button
              variant="contained"
              color="error"
              startIcon={<SaveIcon />}
              sx={{ bgcolor: "#f44336", fontWeight: 600 }}
            >
              Submit
            </Button>
            <Button
              variant="outlined"
              sx={{ fontWeight: 600 }}
            >
              Send for Approval
            </Button>
            <Button
              variant="outlined"
              startIcon={<CancelIcon />}
              sx={{ fontWeight: 600 }}
              onClick={() => setShowForm(false)}
            >
              Cancel
            </Button>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default JournalEntries;