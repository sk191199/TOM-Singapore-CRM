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
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import PrintIcon from "@mui/icons-material/Print";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import DescriptionIcon from "@mui/icons-material/Description";
import InfoIcon from "@mui/icons-material/Info";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";

const staticQuotations = [
  {
    docEntry: 4,
    docNum: "SQ02782025",
    docDate: "2025-08-13",
    customerCode: "C001",
    customerName: "Tech Vision Pte Ltd",
    docType: "Open",
  },
  {
    docEntry: 5,
    docNum: "SQ03142025",
    docDate: "2025-08-18",
    customerCode: "C001",
    customerName: "Tech Vision Pte Ltd",
    docType: "Open",
  },
  {
    docEntry: 6,
    docNum: "SQ03172025",
    docDate: "2025-08-18",
    customerCode: "C001",
    customerName: "Tech Vision Pte Ltd",
    docType: "Open",
  },
];

const docTypes = ["Open", "Closed"];
const customers = ["Tech Vision Pte Ltd", "Green Solutions LLP"];
const projects = ["Jurong One Smart City", "Marina Bay FinTech Park"];
const quotationTypes = ["Item", "Service"];
const subsidiaries = ["--Select--", "Tech Offshore Marine (s) Pte Ltd"];
const currencies = ["SGD", "USD", "EUR"];
const uoms = ["Piece", "Box", "Kg"];
const taxCodes = ["GST", "VAT"];

const SalesQuotation = () => {
  const [showForm, setShowForm] = useState(false);
  const [itemRows, setItemRows] = useState([
    {
      itemCode: "",
      itemDesc: "",
      qty: 0,
      rate: 0,
      uom: "",
      hsn: "",
      discountPct: 0,
      discountAmt: 0,
      taxCode: "",
      taxAmt: 0,
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
        hsn: "",
        discountPct: 0,
        discountAmt: 0,
        taxCode: "",
        taxAmt: 0,
        amount: 0,
      },
    ]);
  };

  return (
    <Box sx={{ p: 4, bgcolor: "#f7fafd", minHeight: "100vh" }}>
      {!showForm ? (
        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <ArticleIcon sx={{ fontSize: 26, color: "#1976d2", mr: 1 }} />
            <Typography variant="h6" fontWeight={400}>
              Sales Quotation Preparation
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
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
              New
            </Button>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox />
                  Select All
                </TableCell>
                <TableCell>DocEntry</TableCell>
                <TableCell>DocNum</TableCell>
                <TableCell>DocDate</TableCell>
                <TableCell>Customer Code</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Document Type</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {staticQuotations.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>{row.docEntry}</TableCell>
                  <TableCell>{row.docNum}</TableCell>
                  <TableCell>{row.docDate}</TableCell>
                  <TableCell>{row.customerCode}</TableCell>
                  <TableCell>{row.customerName}</TableCell>
                  <TableCell>{row.docType}</TableCell>
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
            <EditIcon sx={{ fontSize: 26, color: "#1976d2", mr: 1 }} />
            <Typography variant="h5" fontWeight={400}>
              Sales Quotation Preparation
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              variant="outlined"
              startIcon={<PrintIcon />}
              sx={{ fontWeight: 400, mr: 1 }}
            >
              Print
            </Button>
            <Button
              variant="outlined"
              startIcon={<CancelIcon />}
              sx={{ fontWeight: 400, mr: 1 }}
              onClick={() => setShowForm(false)}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              startIcon={<SaveIcon />}
              sx={{ fontWeight: 400, mr: 1 }}
            >
              Save Draft
            </Button>
            <Button
              variant="outlined"
              startIcon={<SwapHorizIcon />}
              sx={{ fontWeight: 400, mr: 1 }}
            >
              Convert to Order
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ bgcolor: "#f44336", fontWeight: 400 }}
            >
              Submit
            </Button>
          </Box>
          {/* Document Information */}
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <DescriptionIcon sx={{ color: "#1976d2", mr: 1 }} />
              <Typography variant="h6" fontWeight={400}>
                Document Information
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <TextField
                label="Document Number"
                size="small"
                value=""
                sx={{ flex: "1 1 250px" }}
              />
              <FormControl sx={{ flex: "1 1 250px" }} size="small">
                <InputLabel>Doc Type</InputLabel>
                <Select label="Doc Type" defaultValue="Open">
                  {docTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Posting Date"
                size="small"
                type="date"
                InputLabelProps={{ shrink: true }}
                sx={{ flex: "1 1 250px" }}
                value="2025-08-27"
              />
              <TextField
                label="Document Due Date"
                size="small"
                type="date"
                InputLabelProps={{ shrink: true }}
                sx={{ flex: "1 1 250px" }}
                value="2025-08-27"
              />
            </Box>
          </Box>
          {/* Customer Information */}
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PersonIcon sx={{ color: "#1976d2", mr: 1 }} />
              <Typography variant="h6" fontWeight={400}>
                Customer Information
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <FormControl sx={{ flex: "1 1 250px" }} size="small">
                <InputLabel>Customer Name *</InputLabel>
                <Select label="Customer Name *" defaultValue="">
                  <MenuItem value="">--Select--</MenuItem>
                  {customers.map((c) => (
                    <MenuItem key={c} value={c}>
                      {c}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ flex: "1 1 250px" }} size="small">
                <InputLabel>Project *</InputLabel>
                <Select label="Project *" defaultValue="">
                  <MenuItem value="">--Select--</MenuItem>
                  {projects.map((p) => (
                    <MenuItem key={p} value={p}>
                      {p}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Contact Person"
                size="small"
                sx={{ flex: "1 1 250px" }}
              />
            </Box>
          </Box>
          {/* Quotation Details */}
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <DescriptionIcon sx={{ color: "#1976d2", mr: 1 }} />
              <Typography variant="h6" fontWeight={400}>
                Quotation Details
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <FormControl sx={{ flex: "1 1 250px" }} size="small">
                <InputLabel>Quotation Type</InputLabel>
                <Select label="Quotation Type" defaultValue="Item">
                  {quotationTypes.map((qt) => (
                    <MenuItem key={qt} value={qt}>
                      {qt}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Place of Supply"
                size="small"
                sx={{ flex: "1 1 250px" }}
              />
              <FormControl sx={{ flex: "1 1 250px" }} size="small">
                <InputLabel>Subsidiary *</InputLabel>
                <Select label="Subsidiary *" defaultValue="">
                  {subsidiaries.map((s) => (
                    <MenuItem key={s} value={s}>
                      {s}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ flex: "1 1 250px" }} size="small">
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
                sx={{ flex: "1 1 250px" }}
              />
            </Box>
          </Box>
          {/* Item Details */}
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <InfoIcon sx={{ color: "#1976d2", mr: 1 }} />
              <Typography variant="h6" fontWeight={400}>
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
                  <TableCell>HSN Code</TableCell>
                  <TableCell>Discount %</TableCell>
                  <TableCell>Discount Amount</TableCell>
                  <TableCell>Tax Code</TableCell>
                  <TableCell>Tax Amount</TableCell>
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              sx={{ mt: 2, fontWeight: 400 }}
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
                <MenuItem value="Tech Vision Pte Ltd">Tech Vision Pte Ltd</MenuItem>
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
                <MenuItem value="Tech Vision Pte Ltd">Tech Vision Pte Ltd</MenuItem>
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
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <FormControl sx={{ flex: "1 1 250px" }} size="small">
              <InputLabel>Sales Employee</InputLabel>
              <Select label="Sales Employee" defaultValue="">
                <MenuItem value="">--Select--</MenuItem>
                <MenuItem value="John Doe">John Doe</MenuItem>
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
              <Typography variant="h6" fontWeight={400}>
                $0.00
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">Tax (9%)</Typography>
              <Typography variant="h6" fontWeight={400}>
                $0.00
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">Discount</Typography>
              <Typography variant="h6" fontWeight={400}>
                0.00
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">Total Amount</Typography>
              <Typography variant="h6" fontWeight={400} color="error">
                0.00
              </Typography>
            </Box>
          </Box>
          {/* Terms & Conditions */}
          <Box sx={{ mt: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <DescriptionIcon sx={{ color: "#1976d2", mr: 1 }} />
              <Typography variant="h6" fontWeight={400}>
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

export default SalesQuotation;