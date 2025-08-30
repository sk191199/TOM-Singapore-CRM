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
import BusinessIcon from "@mui/icons-material/Business";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/DeleteOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const parentCompanies = [
  "Tech Offshore Marine (s) Pte Ltd",
  "Tech Offshore Marine (DQ) Pte Ltd",
  "Tech Electric & Automation Pte Ltd",
  "Tech Offshore Marine (SV) Pte Ltd",
];

const staticSubsidiaries = [
  {
    code: "TOM S Direct Owners M & E",
    name: "Tech Offshore Marine (s) Pte Ltd",
    uen: "200709673M",
    gst: "",
    email: "",
  },
  {
    code: "DQ SembCorp Group M & E",
    name: "Tech Offshore Marine (DQ) Pte Ltd",
    uen: "200704907R",
    gst: "",
    email: "",
  },
  {
    code: "TEA Keppel Fels M & E",
    name: "Tech Electric & Automation Pte Ltd",
    uen: "198700264M",
    gst: "",
    email: "",
  },
  {
    code: "TMO Keppel Shipyard M & E",
    name: "Tech Electric & Automation Pte Ltd",
    uen: "200512260M",
    gst: "",
    email: "",
  },
  {
    code: "SV SembCorp Group M & E",
    name: "Tech Offshore Marine (SV) Pte Ltd",
    uen: "200608955Z",
    gst: "",
    email: "",
  },
];

const SubsidairyCompany = () => {
  return (
    <Box sx={{ p: 4, bgcolor: "#f7fafd", minHeight: "100vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <BusinessIcon sx={{ fontSize: 36, color: "#1976d2", mr: 1 }} />
        <Typography variant="h5" fontWeight={700}>
          Subsidiary Company Master
        </Typography>
      </Box>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            mb: 2,
          }}
        >
          <FormControl sx={{ flex: "1 1 300px" }} size="small">
            <InputLabel>Parent Company</InputLabel>
            <Select label="Parent Company" defaultValue="">
              <MenuItem value="">-- Select Company --</MenuItem>
              {parentCompanies.map((company) => (
                <MenuItem key={company} value={company}>
                  {company}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Subsidiary Code"
            size="small"
            sx={{ flex: "1 1 300px" }}
          />
          <TextField
            label="Subsidiary Name"
            size="small"
            sx={{ flex: "1 1 300px" }}
          />
          <TextField
            label="UEN"
            size="small"
            sx={{ flex: "1 1 300px" }}
          />
          <TextField
            label="GST Number"
            size="small"
            sx={{ flex: "1 1 300px" }}
          />
          <TextField
            label="Email"
            size="small"
            sx={{ flex: "1 1 300px" }}
          />
          <TextField
            label="Phone"
            size="small"
            sx={{ flex: "1 1 300px" }}
          />
          <TextField
            label="Website"
            size="small"
            sx={{ flex: "1 1 300px" }}
          />
          <TextField
            label="Street"
            size="small"
            sx={{ flex: "1 1 300px" }}
          />
          <TextField
            label="City"
            size="small"
            sx={{ flex: "1 1 300px" }}
          />
          <TextField
            label="Building"
            size="small"
            sx={{ flex: "1 1 300px" }}
          />
          <TextField
            label="Postal Code"
            size="small"
            sx={{ flex: "1 1 300px" }}
          />
          <TextField
            label="Country"
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
              <TableCell>UEN</TableCell>
              <TableCell>GST</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {staticSubsidiaries.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{row.code}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.uen}</TableCell>
                <TableCell>{row.gst}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  <IconButton sx={{ bgcolor: "#03a9f4", mr: 1 }}>
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

export default SubsidairyCompany;