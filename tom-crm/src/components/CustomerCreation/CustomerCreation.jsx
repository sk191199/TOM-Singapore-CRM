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
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

const staticCustomers = [
  {
    code: "C001",
    name: "Tech Vision Pte Ltd",
    type: "Customer",
    uen: "201512345Z",
    companyType: "Private Limited",
    gst: "M2-1234567-8",
    currency: "SGD",
    status: "Approved",
  },
  {
    code: "C002",
    name: "Green Solutions LLP",
    type: "Customer",
    uen: "201812345Z",
    companyType: "Private Limited",
    gst: "M2-2345678-9",
    currency: "SGD",
    status: "Approved",
  },
  {
    code: "C003",
    name: "Bright Future Co.",
    type: "Customer",
    uen: "53412345X",
    companyType: "Sole Proprietorship",
    gst: "M2-3456789-0",
    currency: "SGD",
    status: "Pending",
  },
  {
    code: "C004",
    name: "Starship Enterprise Pte Ltd",
    type: "Customer",
    uen: "201612345Z",
    companyType: "Private Limited",
    gst: "M2-4567890-1",
    currency: "SGD",
    status: "Approved",
  },
  {
    code: "C005",
    name: "PixelWorks SG",
    type: "Customer",
    uen: "202022345Z",
    companyType: "Private Limited",
    gst: "M2-5678901-2",
    currency: "USD",
    status: "Pending",
  },
];

const companyTypes = ["Private Limited", "Sole Proprietorship", "LLP"];
const customerTypes = ["Customer", "Vendor"];
const currencies = ["SGD", "USD", "EUR"];
const priceLists = ["Standard", "Premium"];

const CustomerCreation = () => {
  const [showForm, setShowForm] = useState(false);
  const [bankRows, setBankRows] = useState([{ bankName: "", accountNo: "", swift: "", branch: "", address: "" }]);

  const handleAddBankRow = () => {
    setBankRows([...bankRows, { bankName: "", accountNo: "", swift: "", branch: "", address: "" }]);
  };

  return (
    <Box sx={{ p: 4, bgcolor: "#f7fafd", minHeight: "100vh" }}>
      {!showForm ? (
        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <GroupsIcon sx={{ fontSize: 36, color: "#1976d2", mr: 1 }} />
            <Typography variant="h5" fontWeight={700}>
              Customer Creation List
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              variant="contained"
              color="error"
              startIcon={<AddIcon />}
              sx={{ bgcolor: "#f44336", fontWeight: 600 }}
              onClick={() => setShowForm(true)}
            >
            New
            </Button>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Customer Code</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>UEN</TableCell>
                <TableCell>Company Type</TableCell>
                <TableCell>GST No</TableCell>
                <TableCell>Currency</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {staticCustomers.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell>{row.code}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.uen}</TableCell>
                  <TableCell>{row.companyType}</TableCell>
                  <TableCell>{row.gst}</TableCell>
                  <TableCell>{row.currency}</TableCell>
                  <TableCell>{row.status}</TableCell>
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
      ) : (
        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <PersonIcon sx={{ fontSize: 36, color: "#1976d2", mr: 1 }} />
            <Typography variant="h5" fontWeight={700}>
              Customer Creation
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              variant="contained"
              color="error"
              startIcon={<SaveIcon />}
              sx={{ bgcolor: "#f44336", fontWeight: 600, mr: 2 }}
            >
              Save
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<CancelIcon />}
              sx={{ bgcolor: "#1976d2", fontWeight: 600 }}
              onClick={() => setShowForm(false)}
            >
              Cancel
            </Button>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
            <TextField label="Customer Code" size="small" sx={{ flex: "1 1 250px" }} />
            <TextField label="Customer Name" size="small" sx={{ flex: "1 1 250px" }} />
            <FormControl sx={{ flex: "1 1 250px" }} size="small">
              <InputLabel>Customer Type</InputLabel>
              <Select label="Customer Type" defaultValue="">
                <MenuItem value="">--Select--</MenuItem>
                {customerTypes.map((type) => (
                  <MenuItem key={type} value={type}>{type}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField label="Subsidiary Type" size="small" sx={{ flex: "1 1 250px" }} />
            <TextField label="UEN" size="small" sx={{ flex: "1 1 250px" }} />
            <FormControl sx={{ flex: "1 1 250px" }} size="small">
              <InputLabel>Company Type</InputLabel>
              <Select label="Company Type" defaultValue="">
                <MenuItem value="">--Select Type--</MenuItem>
                {companyTypes.map((type) => (
                  <MenuItem key={type} value={type}>{type}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField label="GST Registration No." size="small" sx={{ flex: "1 1 250px" }} />
            <FormControl sx={{ flex: "1 1 250px" }} size="small">
              <InputLabel>Currency</InputLabel>
              <Select label="Currency" defaultValue="">
                <MenuItem value="">--Select--</MenuItem>
                {currencies.map((cur) => (
                  <MenuItem key={cur} value={cur}>{cur}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControlLabel control={<Checkbox />} label="GST Registered?" sx={{ flex: "1 1 250px", mt: 1 }} />
            <TextField label="Credit Limit" size="small" sx={{ flex: "1 1 250px" }} />
            <FormControl sx={{ flex: "1 1 250px" }} size="small">
              <InputLabel>Price List</InputLabel>
              <Select label="Price List" defaultValue="">
                <MenuItem value="">--Select--</MenuItem>
                {priceLists.map((pl) => (
                  <MenuItem key={pl} value={pl}>{pl}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField label="Contact Person" size="small" sx={{ flex: "1 1 250px" }} />
            <TextField label="Phone" size="small" sx={{ flex: "1 1 250px" }} />
            <TextField label="Email" size="small" sx={{ flex: "1 1 250px" }} />
          </Box>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <TextField label="Registered Address" size="small" multiline rows={2} fullWidth />
          </Box>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <TextField label="Billing Address" size="small" multiline rows={2} fullWidth />
          </Box>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <TextField label="Shipping Address" size="small" multiline rows={2} fullWidth />
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
              Bank Details
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
              <TextField label="Bank Name" size="small" sx={{ flex: "1 1 200px" }} />
              <TextField label="Account No" size="small" sx={{ flex: "1 1 200px" }} />
              <TextField label="SWIFT / IFSC" size="small" sx={{ flex: "1 1 200px" }} />
              <TextField label="Branch" size="small" sx={{ flex: "1 1 200px" }} />
              <TextField label="Address" size="small" sx={{ flex: "2 1 400px" }} />
            </Box>
            {bankRows.slice(1).map((_, idx) => (
              <Box key={idx} sx={{ display: "flex", gap: 2, mb: 1 }}>
                <TextField label="Bank Name" size="small" sx={{ flex: "1 1 200px" }} />
                <TextField label="Account No" size="small" sx={{ flex: "1 1 200px" }} />
                <TextField label="SWIFT / IFSC" size="small" sx={{ flex: "1 1 200px" }} />
                <TextField label="Branch" size="small" sx={{ flex: "1 1 200px" }} />
                <TextField label="Address" size="small" sx={{ flex: "2 1 400px" }} />
              </Box>
            ))}
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              sx={{ mt: 1, fontWeight: 600 }}
              onClick={handleAddBankRow}
            >
              Add Bank Row
            </Button>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default CustomerCreation;