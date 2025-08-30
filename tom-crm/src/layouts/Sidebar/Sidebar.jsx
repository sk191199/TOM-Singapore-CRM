import React, { useState } from "react";
import { Drawer, Box, List, ListItem, ListItemIcon, ListItemText, Typography, Collapse, Divider } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SettingsIcon from "@mui/icons-material/Settings";
import StorageIcon from "@mui/icons-material/Storage";
import GroupsIcon from "@mui/icons-material/Groups";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LockIcon from "@mui/icons-material/Lock";
import DescriptionIcon from "@mui/icons-material/Description";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import StraightenIcon from '@mui/icons-material/Straighten';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import HubIcon from '@mui/icons-material/Hub';

const SIDEBAR_WIDTH = 230;

// Add your adminSubMenu here or import it if defined elsewhere
const adminSubMenu = [
  // Example:
  { text: 'User Master', icon: <PeopleIcon />, path: '/administration/user-master' },
  { text: 'Role Master', icon: <GroupsIcon />, path: '/administration/role-master' },
  { text: 'Document Numbering', icon: <DescriptionIcon />, path: '/administration/document-numbering' },
  { text: 'Alerts', icon: <DescriptionIcon />, path: '/administration/alerts' },
  { text: 'Change Password', icon: <LockIcon />, path: '/administration/change-password' },
  { text: 'Company Details', icon: <BusinessCenterIcon />, path: '/administration/company-details' },
];

const masterSubMenu = [
  { text: 'Payment Term Master', icon: <CalendarMonthIcon />, path: '/master/payment-term' },
  { text: 'Currency Master', icon: <MonetizationOnIcon />, path: '/master/currency' },
  { text: 'UOM Master', icon: <StraightenIcon />, path: '/master/uom' },
  { text: 'Financial Year Creation', icon: <CalendarMonthIcon />, path: '/master/financial-year' },
  { text: 'Subsidiary Company Creation', icon: <CorporateFareIcon />, path: '/master/subsidiary-company' },
  { text: 'Project Master', icon: <AccountTreeIcon />, path: '/master/project-master' },
  { text: 'Cost Center', icon: <HubIcon />, path: '/master/cost-center' },
];

const menuItems = [
  {
    text: 'Administration',
    icon: <SettingsIcon />,
    path: '/administration',
    submenu: adminSubMenu,
  },
  {
    text: 'Master',
    icon: <StorageIcon />,
    path: '/master',
    submenu: masterSubMenu,
  },
  { text: 'CRM', icon: <GroupsIcon />, path: '/crm' },
  { text: 'Customer Vendor', icon: <PeopleIcon />, path: '/customer-vendor' },
  { text: 'Inventory', icon: <InventoryIcon />, path: '/inventory' },
  { text: 'Sales', icon: <ShoppingCartIcon />, path: '/sales' },
  { text: 'Purchase', icon: <LockIcon />, path: '/purchase' },
  { text: 'Accounting', icon: <DescriptionIcon />, path: '/accounting' },
];

const Sidebar = ({ open, onClose }) => {
  const location = useLocation();
  const [adminOpen, setAdminOpen] = useState(false);
  const [masterOpen, setMasterOpen] = useState(false);

  const handleAdminClick = () => setAdminOpen((prev) => !prev);
  const handleMasterClick = () => setMasterOpen((prev) => !prev);

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant="temporary"
      sx={{
        '& .MuiDrawer-paper': {
          width: SIDEBAR_WIDTH,
          bgcolor: '#2d3748',
          color: '#fff',
          borderRight: '1px solid #232d3b',
          top: 0,
          height: '100vh',
          maxHeight: '100vh',
          overflowY: 'hidden',
        },
      }}
    >
      <Box sx={{ textAlign: 'center', py: 2, borderBottom: '1px solid #38475a' }}>
        <img
          src="https://www.tom.sg/wp-content/uploads/2021/11/tom_logo-300x135.png"
          alt="logo"
          style={{ maxWidth: '120px' }}
        />
      </Box>
      <List sx={{ pt: 1 }}>
        {/* Administration with dropdown */}
        <ListItem
          button
          onClick={handleAdminClick}
          selected={location.pathname.startsWith('/administration')}
          sx={{
            py: 1.2,
            px: 3,
            bgcolor: location.pathname.startsWith('/administration') ? '#38475a' : 'inherit',
            fontWeight: 700,
            color: '#fff',
            fontSize: 17,
            borderRadius: 1,
            mb: 0.5,
            '& .MuiListItemIcon-root': {
              color: '#fff',
              minWidth: 36,
            },
            '&:hover': {
              bgcolor: '#38475a',
            },
            transition: 'background 0.2s',
          }}
        >
          <ListItemIcon>{menuItems[0].icon}</ListItemIcon>
          <ListItemText
            primary={
              <Typography
                sx={{
                  fontWeight: 700,
                  color: '#fff',
                  fontSize: 17,
                }}
              >
                {menuItems[0].text}
              </Typography>
            }
          />
          {adminOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={adminOpen} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{
              bgcolor: '#273447',
              borderRadius: 1,
              mx: 1,
              mb: 1,
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
          >
            {adminSubMenu.map((item) => (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                selected={location.pathname === item.path}
                onClick={onClose}
                sx={{
                  pl: 6,
                  py: 1,
                  bgcolor: location.pathname === item.path ? '#38475a' : 'inherit',
                  fontWeight: location.pathname === item.path ? 700 : 400,
                  color: '#fff',
                  fontSize: 15,
                  borderRadius: 1,
                  '& .MuiListItemIcon-root': {
                    color: '#fff',
                    minWidth: 36,
                  },
                  '&:hover': {
                    bgcolor: '#38475a',
                  },
                  transition: 'background 0.2s',
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontWeight: location.pathname === item.path ? 700 : 400,
                        color: '#fff',
                        fontSize: 15,
                      }}
                    >
                      {item.text}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
        {/* Master with dropdown */}
        <ListItem
          button
          onClick={handleMasterClick}
          selected={location.pathname.startsWith('/master')}
          sx={{
            py: 1.2,
            px: 3,
            bgcolor: location.pathname.startsWith('/master') ? '#38475a' : 'inherit',
            fontWeight: 700,
            color: '#fff',
            fontSize: 17,
            borderRadius: 1,
            mb: 0.5,
            '& .MuiListItemIcon-root': {
              color: '#fff',
              minWidth: 36,
            },
            '&:hover': {
              bgcolor: '#38475a',
            },
            transition: 'background 0.2s',
          }}
        >
          <ListItemIcon>{menuItems[1].icon}</ListItemIcon>
          <ListItemText
            primary={
              <Typography
                sx={{
                  fontWeight: 700,
                  color: '#fff',
                  fontSize: 17,
                }}
              >
                {menuItems[1].text}
              </Typography>
            }
          />
          {masterOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={masterOpen} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{
              bgcolor: '#273447',
              borderRadius: 1,
              mx: 1,
              mb: 1,
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
          >
            {masterSubMenu.map((item) => (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                selected={location.pathname === item.path}
                onClick={onClose}
                sx={{
                  pl: 6,
                  py: 1,
                  bgcolor: location.pathname === item.path ? '#38475a' : 'inherit',
                  fontWeight: location.pathname === item.path ? 700 : 400,
                  color: '#fff',
                  fontSize: 15,
                  borderRadius: 1,
                  '& .MuiListItemIcon-root': {
                    color: '#fff',
                    minWidth: 36,
                  },
                  '&:hover': {
                    bgcolor: '#38475a',
                  },
                  transition: 'background 0.2s',
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontWeight: location.pathname === item.path ? 700 : 400,
                        color: '#fff',
                        fontSize: 15,
                      }}
                    >
                      {item.text}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
        <Divider sx={{ bgcolor: '#38475a', my: 1 }} />
        {/* Other menu items */}
        {menuItems.slice(2).map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            onClick={onClose}
            sx={{
              py: 1.2,
              px: 3,
              bgcolor: location.pathname === item.path ? '#38475a' : 'inherit',
              fontWeight: location.pathname === item.path ? 700 : 500,
              color: '#fff',
              fontSize: 16,
              borderRadius: 1,
              '& .MuiListItemIcon-root': {
                color: '#fff',
                minWidth: 36,
              },
              '&:hover': {
                bgcolor: '#38475a',
              },
              transition: 'background 0.2s',
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontWeight: location.pathname === item.path ? 700 : 500,
                    color: '#fff',
                    fontSize: 16,
                  }}
                >
                  {item.text}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;