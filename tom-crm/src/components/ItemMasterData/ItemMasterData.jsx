import React, { useRef } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

const itemGroups = ["Fasteners", "Raw Material", "Tools"];
const currencies = ["SGD", "USD", "EUR"];
const uoms = ["Piece", "Box", "Kg", "Meter", "Litre"];

const ItemMasterData = () => {
  const qrInputRef = useRef();
  const barcodeInputRef = useRef();

  return (
    <Box sx={{ p: 4, bgcolor: "#f7fafd", minHeight: "100vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Inventory2Icon sx={{ fontSize: 36, color: "#1976d2", mr: 1 }} />
        <Typography variant="h5" fontWeight={700}>
          Item Master
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
        >
          Clear
        </Button>
      </Box>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField
            label="Item Code"
            size="small"
            value="ITEM-010"
            InputProps={{ readOnly: true }}
            sx={{ flex: "1 1 250px" }}
          />
          <TextField
            label="Item Name"
            size="small"
            value="Hex Bolts"
            sx={{ flex: "1 1 250px" }}
          />
          <FormControl sx={{ flex: "1 1 250px" }} size="small">
            <InputLabel>Item Group</InputLabel>
            <Select label="Item Group" defaultValue="Fasteners">
              {itemGroups.map((group) => (
                <MenuItem key={group} value={group}>
                  {group}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField
            label="Description"
            size="small"
            value="Stainless steel hex bolts M10"
            multiline
            sx={{ flex: "2 1 500px" }}
          />
          <TextField
            label="HSN Code"
            size="small"
            value="7318"
            sx={{ flex: "1 1 150px" }}
          />
          <TextField
            label="Qty"
            size="small"
            value="1000"
            sx={{ flex: "1 1 150px" }}
          />
          <TextField
            label="Unit Price"
            size="small"
            value="2.5"
            sx={{ flex: "1 1 150px" }}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
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
          <FormControl sx={{ flex: "1 1 250px" }} size="small">
            <InputLabel>UOM</InputLabel>
            <Select label="UOM" defaultValue="Piece">
              {uoms.map((uom) => (
                <MenuItem key={uom} value={uom}>
                  {uom}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Remarks"
            size="small"
            value="Used for assembly"
            sx={{ flex: "2 1 400px" }}
          />
        </Box>
        {/* QR Code and Barcode Section */}
        <Box sx={{ display: "flex", gap: 6, mt: 4 }}>
          {/* QR Code Section */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
              QR Code
            </Typography>
            <Box
              sx={{
                border: "1px solid #cfd8dc",
                borderRadius: 2,
                width: 120,
                height: 120,
                mb: 2,
                bgcolor: "#fff",
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                variant="outlined"
                component="label"
                sx={{ fontWeight: 600, minWidth: 120 }}
              >
                Choose File
                <input ref={qrInputRef} type="file" hidden />
              </Button>
              <Typography sx={{ fontSize: 14, color: "#888" }}>
                No file chosen
              </Typography>
            </Box>
            <Button
              variant="outlined"
              sx={{ mt: 1, fontWeight: 600, minWidth: 120 }}
            >
              Upload QR
            </Button>
          </Box>
          {/* Barcode Section */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
              Barcode
            </Typography>
            <TextField
              label="Barcode"
              size="small"
              sx={{ mb: 2, width: 180 }}
            />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                variant="outlined"
                component="label"
                sx={{ fontWeight: 600, minWidth: 120 }}
              >
                Choose File
                <input ref={barcodeInputRef} type="file" hidden />
              </Button>
              <Typography sx={{ fontSize: 14, color: "#888" }}>
                No file chosen
              </Typography>
            </Box>
            <Button
              variant="outlined"
              sx={{ mt: 1, fontWeight: 600, minWidth: 120 }}
            >
              Upload Barcode
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ItemMasterData;