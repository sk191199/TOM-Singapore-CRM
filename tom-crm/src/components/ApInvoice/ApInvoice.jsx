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
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import InfoIcon from "@mui/icons-material/Info";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import DescriptionIcon from "@mui/icons-material/Description";

const staticInvoices = [
  {
    docEntry: 1,
    docNum: "INV00312025",
    docDate: "2025-08-27",
    vendorCode: "V001",
    vendorName: "Supply Hub Pte Ltd",
  },
];

const docTypes = ["Open", "Closed"];
const invoiceTypes = ["Item", "Service"];
const vendors = [
  { code: "V001", name: "Supply Hub Pte Ltd" },
  { code: "V002", name: "Global Parts LLP" },
];
const subsidiaries = ["--Select--", "Tech Offshore Marine (s) Pte Ltd"];
const departments = ["--Select--", "Procurement", "Operations"];
const classes = ["--Select--", "Class A", "Class B"];
const locations = ["--Select--", "Singapore", "Malaysia"];
const currencies = ["SGD", "USD", "EUR"];
const uoms = ["Piece", "Box", "Kg"];
const taxCodes = ["GST", "VAT"];
const purchaseEmployees = ["Akshat Saxena", "John Doe"];

const ApInvoice = () => {
  const [showForm, setShowForm] = useState(false);
  const [itemRows, setItemRows] = useState([
    {
      itemCode: "",
      itemDesc: "",
      qty: 0,
      rate: 0,
      uom: "",
      taxCode: "",
      discountPct: 0,
      priceAfterDiscount: 0,
      amount: 0,
    },
  ]);

  const handleAddRow = () => {
    setItemRows([
      ...itemRows,
      {
        itemCode: "",
        itemDesc: "",
        qty: 0,
        rate: 0,
        uom: "",
        taxCode: "",
        discountPct: 0,
        priceAfterDiscount: 0,
        amount: 0,
      },
    ]);
  };

  return (
    <Box sx={{ p: 4, bgcolor: "#f7fafd", minHeight: "100vh" }}>
      {!showForm ? (
        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <DescriptionIcon sx={{ fontSize: 36, color: "#1976d2", mr: 1 }} />
            <Typography variant="h5" fontWeight={700}>
              AP Invoice Preparation List
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <FormControlLabel
              control={<Checkbox />}
              label="Select All"
              sx={{ mr: 2 }}
            />
            <Button
              variant="contained"
              color="error"
              startIcon={<SaveIcon />}
              sx={{ bgcolor: "#f44336", fontWeight: 600, mr: 2 }}
            >
              Export Selected
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              sx={{ bgcolor: "#1976d2", fontWeight: 600 }}
              onClick={() => setShowForm(true)}
            >
              + New Invoice
            </Button>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>DocEntry</TableCell>
                <TableCell>DocNum</TableCell>
                <TableCell>DocDate</TableCell>
                <TableCell>Vendor Code</TableCell>
                <TableCell>Vendor Name</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {staticInvoices.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>{row.docEntry}</TableCell>
                  <TableCell>{row.docNum}</TableCell>
                  <TableCell>{row.docDate}</TableCell>
                  <TableCell>{row.vendorCode}</TableCell>
                  <TableCell>{row.vendorName}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="warning"
                      startIcon={<EditIcon />}
                      sx={{ fontWeight: 600 }}
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      ) : (
        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <DescriptionIcon sx={{ fontSize: 36, color: "#1976d2", mr: 1 }} />
            <Typography variant="h5" fontWeight={700}>
              AP Invoice Preparation
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              variant="outlined"
              startIcon={<CancelIcon />}
              sx={{ fontWeight: 600, mr: 1 }}
              onClick={() => setShowForm(false)}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              startIcon={<SaveIcon />}
              sx={{ fontWeight: 600, mr: 1 }}
            >
              Save Draft
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ bgcolor: "#f44336", fontWeight: 600 }}
            >
              Submit
            </Button>
          </Box>
          {/* Vendor Information */}
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PersonIcon sx={{ color: "#1976d2", mr: 1 }} />
              <Typography variant="h6" fontWeight={700}>
                Vendor Information
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <FormControl sx={{ flex: "1 1 250px" }} size="small">
                <InputLabel>Vendor Code *</InputLabel>
                <Select label="Vendor Code *" defaultValue="">
                  <MenuItem value="">--Select--</MenuItem>
                  {vendors.map((v) => (
                    <MenuItem key={v.code} value={v.code}>
                      {v.code}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ flex: "1 1 250px" }} size="small">
                <InputLabel>Vendor Name *</InputLabel>
                <Select label="Vendor Name *" defaultValue="">
                  <MenuItem value="">--Select--</MenuItem>
                  {vendors.map((v) => (
                    <MenuItem key={v.name} value={v.name}>
                      {v.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Contact Person *"
                size="small"
                sx={{ flex: "1 1 250px" }}
              />
            </Box>
          </Box>
          {/* Invoice Details */}
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <ArticleIcon sx={{ color: "#1976d2", mr: 1 }} />
              <Typography variant="h6" fontWeight={700}>
                Invoice Details
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <TextField
                label="Invoice Number"
                size="small"
                value="INV00312025"
                sx={{ flex: "1 1 200px" }}
              />
              <TextField
                label="Posting Date"
                size="small"
                type="date"
                InputLabelProps={{ shrink: true }}
                sx={{ flex: "1 1 200px" }}
                value="2025-08-27"
              />
              <TextField
                label="Document Due Date"
                size="small"
                type="date"
                InputLabelProps={{ shrink: true }}
                sx={{ flex: "1 1 200px" }}
                value="2025-08-27"
              />
              <FormControl sx={{ flex: "1 1 200px" }} size="small">
                <InputLabel>Document Type</InputLabel>
                <Select label="Document Type" defaultValue="Open">
                  {docTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ flex: "1 1 200px" }} size="small">
                <InputLabel>Invoice Type</InputLabel>
                <Select label="Invoice Type" defaultValue="Item">
                  {invoiceTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <TextField
                label="Location"
                size="small"
                sx={{ flex: "1 1 200px" }}
              />
              <FormControl sx={{ flex: "1 1 200px" }} size="small">
                <InputLabel>Subsidiary</InputLabel>
                <Select label="Subsidiary" defaultValue="">
                  {subsidiaries.map((s) => (
                    <MenuItem key={s} value={s}>
                      {s}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ flex: "1 1 200px" }} size="small">
                <InputLabel>Department</InputLabel>
                <Select label="Department" defaultValue="">
                  {departments.map((d) => (
                    <MenuItem key={d} value={d}>
                      {d}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ flex: "1 1 200px" }} size="small">
                <InputLabel>Class</InputLabel>
                <Select label="Class" defaultValue="">
                  {classes.map((c) => (
                    <MenuItem key={c} value={c}>
                      {c}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
                value="1.00"
                sx={{ flex: "1 1 200px" }}
              />
            </Box>
          </Box>
          {/* Item Details */}
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <InfoIcon sx={{ color: "#1976d2", mr: 1 }} />
              <Typography variant="h6" fontWeight={700}>
                Item Details
              </Typography>
            </Box>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>S.No.</TableCell>
                  <TableCell>Item Code</TableCell>
                  <TableCell>Item Description</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Rate</TableCell>
                  <TableCell>UOM</TableCell>
                  <TableCell>Tax Code</TableCell>
                  <TableCell>Discount %</TableCell>
                  <TableCell>Price After Discount</TableCell>
                  <TableCell>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {itemRows.map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>
                      <FormControl size="small" sx={{ minWidth: 100 }}>
                        <Select defaultValue="">
                          <MenuItem value="">--Select--</MenuItem>
                          <MenuItem value="ITEM-001">ITEM-001</MenuItem>
                          <MenuItem value="ITEM-002">ITEM-002</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <TextField size="small" />
                    </TableCell>
                    <TableCell>
                      <TextField size="small" type="number" defaultValue={0} />
                    </TableCell>
                    <TableCell>
                      <TextField size="small" type="number" defaultValue={0} />
                    </TableCell>
                    <TableCell>
                      <FormControl size="small" sx={{ minWidth: 80 }}>
                        <Select defaultValue="">
                          <MenuItem value="">--Select--</MenuItem>
                          {uoms.map((uom) => (
                            <MenuItem key={uom} value={uom}>
                              {uom}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <FormControl size="small" sx={{ minWidth: 80 }}>
                        <Select defaultValue="">
                          <MenuItem value="">--Select--</MenuItem>
                          {taxCodes.map((tc) => (
                            <MenuItem key={tc} value={tc}>
                              {tc}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <TextField size="small" type="number" defaultValue={0} />
                    </TableCell>
                    <TableCell>
                      <TextField size="small" type="number" defaultValue={0} />
                    </TableCell>
                    <TableCell>
                      <TextField size="small" type="number" defaultValue={0} />
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
              onClick={handleAddRow}
            >
              Add Row
            </Button>
          </Box>
          {/* Bill/Ship/Remarks */}
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <FormControl sx={{ flex: "1 1 250px" }} size="small">
              <InputLabel>Bill To</InputLabel>
              <Select label="Bill To" defaultValue="">
                <MenuItem value="">--Select--</MenuItem>
                {vendors.map((v) => (
                  <MenuItem key={v.name} value={v.name}>
                    {v.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Bill To Address"
              size="small"
              multiline
              rows={2}
              sx={{ flex: "2 1 400px" }}
            />
          </Box>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <FormControl sx={{ flex: "1 1 250px" }} size="small">
              <InputLabel>Ship To</InputLabel>
              <Select label="Ship To" defaultValue="">
                <MenuItem value="">--Select--</MenuItem>
                {vendors.map((v) => (
                  <MenuItem key={v.name} value={v.name}>
                    {v.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Ship To Address"
              size="small"
              multiline
              rows={2}
              sx={{ flex: "2 1 400px" }}
            />
          </Box>
          {/* Extra Invoice Details */}
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <Box sx={{ flex: "1 1 250px" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <InfoIcon sx={{ color: "#1976d2", mr: 1 }} />
                <Typography variant="h6" fontWeight={700}>
                  Extra Invoice Details
                </Typography>
              </Box>
              <TextField label="E-Way Bill No" size="small" fullWidth sx={{ mb: 1 }} />
              <Button variant="contained" color="info" sx={{ fontWeight: 600, mb: 2 }}>
                Generate E-Way Bill
              </Button>
            </Box>
            <Box sx={{ flex: "1 1 250px" }}>
              <TextField label="IRN No" size="small" fullWidth sx={{ mb: 1 }} />
              <Button variant="contained" color="info" sx={{ fontWeight: 600, mb: 2 }}>
                Generate IRN
              </Button>
            </Box>
            <Box sx={{ flex: "1 1 250px" }}>
              <Box
                sx={{
                  border: "1px solid #cfd8dc",
                  borderRadius: 2,
                  width: 120,
                  height: 120,
                  mb: 1,
                  bgcolor: "#fff",
                }}
              />
              <Button variant="contained" color="info" sx={{ fontWeight: 600 }}>
                Generate QR
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <FormControl sx={{ flex: "1 1 250px" }} size="small">
              <InputLabel>Purchase Employee</InputLabel>
              <Select label="Purchase Employee" defaultValue={purchaseEmployees[0]}>
                {purchaseEmployees.map((emp) => (
                  <MenuItem key={emp} value={emp}>
                    {emp}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Remarks"
              size="small"
              sx={{ flex: "2 1 400px" }}
            />
          </Box>
          {/* Totals */}
          <Box sx={{ display: "flex", gap: 4, mb: 2 }}>
            <Box>
              <Typography variant="subtitle2">Subtotal</Typography>
              <Typography variant="h6" fontWeight={700}>
                $0.00
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">Tax (9%)</Typography>
              <Typography variant="h6" fontWeight={700}>
                $0.00
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">Discount</Typography>
              <Typography variant="h6" fontWeight={700}>
                $0.00
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">Total Amount</Typography>
              <Typography variant="h6" fontWeight={700} color="error">
                0.00
              </Typography>
            </Box>
          </Box>
          {/* Terms & Conditions */}
          <Box sx={{ mt: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <ArticleIcon sx={{ color: "#1976d2", mr: 1 }} />
              <Typography variant="h6" fontWeight={700}>
                Terms & Conditions
              </Typography>
            </Box>
            <TextField
              label="Enter terms and conditions here..."
              size="small"
              multiline
              rows={3}
              fullWidth
            />
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default ApInvoice;