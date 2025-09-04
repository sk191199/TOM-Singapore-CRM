import React from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  IconButton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import ClearIcon from "@mui/icons-material/DeleteOutline";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const staticRows = [
  {
    userId: "Manager",
    userName: "Sasikumar",
    email: "sasi@gmail.com",
    role: "Manager",
    companyDb: "TOM_ERP",
    active: true,
    read: false,
    edit: true,
    delete: false,
  },
  {
    userId: "Manager1",
    userName: "Naveen",
    email: "naveenj@infocom.sg",
    role: "Manager",
    companyDb: "TOM_ERP",
    active: true,
    read: false,
    edit: true,
    delete: false,
  },
  {
    userId: "Manager2",
    userName: "Praveen",
    email: "praveen@tom.sg",
    role: "Manager",
    companyDb: "TOM_ERP",
    active: true,
    read: false,
    edit: true,
    delete: false,
  },
  {
    userId: "Prod01",
    userName: "Sanchita Saxena",
    email: "",
    role: "Production",
    companyDb: "TOM_ERP",
    active: true,
    read: false,
    edit: true,
    delete: false,
  },
  {
    userId: "SUP-Main",
    userName: "Sumit Kumar",
    email: "",
    role: "",
    companyDb: "TOM_ERP",
    active: true,
    read: false,
    edit: true,
    delete: false,
  },
];

const roles = ["Manager", "Production", "Admin"];

const UserMaster = () => {
  return (
    <Box sx={{ p: 2, bgcolor: "#f7fafd", minHeight: "100vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2, justifyContent: "space-between" }}>
        <Box sx={{display:"flex", alignItems:"center"}}>
          <PersonIcon sx={{ fontSize: 36, color: "#1976d2", mr: 0.4 }} />
          <Typography variant="h5" fontWeight={700}>
            User Creation
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<FileDownloadIcon />}
            sx={{ bgcolor: "#fff" }}
          >
            Export
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
          <Button
            variant="contained"
            color="error"
            startIcon={<SaveIcon />}
            sx={{ bgcolor: "#f44336" }}
          >
            Save
          </Button>
        </Box>
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
            label="User ID *"
            size="small"
            sx={{ flex: "1 1 200px" }}
          />
          <TextField
            label="Password *"
            size="small"
            sx={{ flex: "1 1 200px" }}
          />
          <TextField
            label="User Name"
            size="small"
            sx={{ flex: "1 1 200px" }}
          />
          <TextField label="Email ID" size="small" sx={{ flex: "1 1 200px" }} />
          <FormControl sx={{ flex: "1 1 200px" }} size="small">
            <InputLabel>Role *</InputLabel>
            <Select label="Role *" defaultValue="">
              <MenuItem value="">--Select Role--</MenuItem>
              {roles.map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ flex: "1 1 200px" }} size="small">
            <InputLabel>Company DB *</InputLabel>
            <Select label="Company DB *" defaultValue="TOM_ERP">
              <MenuItem value="TOM_ERP">TOM_ERP</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
          <FormControlLabel control={<Checkbox />} label="Read" />
          <FormControlLabel control={<Checkbox />} label="Edit" />
          <FormControlLabel control={<Checkbox />} label="Delete" />
          <FormControlLabel control={<Checkbox />} label="Active" />
        </Box>
        
      </Paper>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Email ID</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Company DB</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Read</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {staticRows.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{row.userId}</TableCell>
                <TableCell>{row.userName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.companyDb}</TableCell>
                <TableCell>
                  <Checkbox checked={row.active} disabled />
                </TableCell>
                <TableCell>
                  <Checkbox checked={row.read} disabled />
                </TableCell>
                <TableCell>
                  <Checkbox checked={row.edit} disabled />
                </TableCell>
                <TableCell>
                  <Checkbox checked={row.delete} disabled />
                </TableCell>
                <TableCell>
                  <IconButton>
                    <EditIcon />
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

export default UserMaster;
