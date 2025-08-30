import React from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/DeleteOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";

const companyTypes = ["Pte Ltd", "LLP", "Sole Proprietor"];
const staticCompanies = [
  {
    name: "InfoComm IT Solutions",
    uen: "201512345Z",
    gst: "TEST12345",
    type: "Pte Ltd",
    city: "Singapore",
    phone: "91234567",
  },
  {
    name: "Tech Onshore MEP-Prefabricators Pte Ltd",
    uen: "199507962E",
    gst: "",
    type: "Pte Ltd",
    city: "Singapore",
    phone: "98765432",
  },
];

const CompanyDetails = () => {
  return (
    <Box sx={{ p: 4, bgcolor: "#f7fafd", minHeight: "100vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <BusinessIcon sx={{ fontSize: 36, color: "#1976d2", mr: 1 }} />
        <Typography variant="h5" fontWeight={700}>
          Company Master
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
          <TextField
            label="Company Name"
            size="small"
            sx={{ flex: "1 1 300px" }}
          />
          <TextField
            label="UEN (Unique Entity Number)"
            size="small"
            sx={{ flex: "1 1 300px" }}
          />
          <TextField
            label="GST Registration Number"
            size="small"
            sx={{ flex: "1 1 300px" }}
          />
          <FormControl sx={{ flex: "1 1 300px" }} size="small">
            <InputLabel>Company Type</InputLabel>
            <Select label="Company Type" defaultValue="">
              <MenuItem value="">-- Select Type --</MenuItem>
              {companyTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Date of Incorporation"
            size="small"
            type="date"
            InputLabelProps={{ shrink: true }}
            sx={{ flex: "1 1 300px" }}
          />
          <TextField
            label="Street Address"
            size="small"
            sx={{ flex: "1 1 300px" }}
          />
          <TextField
            label="Building / Unit Number"
            size="small"
            sx={{ flex: "1 1 300px" }}
          />
          <TextField
            label="City"
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
            defaultValue="Singapore"
            sx={{ flex: "1 1 300px" }}
          />
          <TextField
            label="Email"
            size="small"
            sx={{ flex: "1 1 300px" }}
          />
          <TextField
            label="Phone Number"
            size="small"
            sx={{ flex: "1 1 300px" }}
          />
          <TextField
            label="Website (optional)"
            size="small"
            sx={{ flex: "1 1 300px" }}
          />
          <Box sx={{ flex: "1 1 300px", display: "flex", alignItems: "center", mt: 1 }}>
            <Typography sx={{ mr: 2 }}>Company Logo</Typography>
            <Button variant="outlined" component="label" size="small">
              Choose File
              <input type="file" hidden />
            </Button>
            <Typography sx={{ ml: 2, fontSize: 14, color: "#888" }}>
              No file chosen
            </Typography>
          </Box>
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
              <TableCell>Company Name</TableCell>
              <TableCell>UEN</TableCell>
              <TableCell>GST No.</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {staticCompanies.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.uen}</TableCell>
                <TableCell>{row.gst}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<EditIcon />}
                    sx={{ bgcolor: "#ffc107", color: "#333", fontWeight: 600 }}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default CompanyDetails;