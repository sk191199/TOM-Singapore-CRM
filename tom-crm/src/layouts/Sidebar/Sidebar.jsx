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
import EditNoteIcon from "@mui/icons-material/EditNote";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import StraightenIcon from '@mui/icons-material/Straighten';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import HubIcon from '@mui/icons-material/Hub';
import ContactsIcon from "@mui/icons-material/Contacts";
import BadgeIcon from "@mui/icons-material/Badge";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ScaleIcon from "@mui/icons-material/Scale";
import ShowChartIcon from "@mui/icons-material/ShowChart";

const SIDEBAR_WIDTH = 230;

const adminSubMenu = [
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

const customerVendorSubMenu = [
  { text: "Customer Creation", icon: <BadgeIcon />, path: "/customer-vendor/customer-creation" },
  { text: "Vendor Creation", icon: <BadgeIcon />, path: "/customer-vendor/vendor-creation" },
];

const inventorySubMenu = [
  { text: "Item Master Data", icon: <Inventory2Icon />, path: "/inventory/item-master-data" },
];

const salesSubMenu = [
  { text: "Sales Quotation", icon: <EditNoteIcon />, path: "/sales/quotation" },
  { text: "Sales Order", icon: <ShoppingBagIcon />, path: "/sales/order" },
  { text: "Delivery", icon: <LocalShippingIcon />, path: "/sales/delivery" },
  { text: "A/R Invoice", icon: <DescriptionIcon />, path: "/sales/ar-invoice" },
];

const purchaseSubMenu = [
  { text: "Purchase Request", icon: <AssignmentIcon />, path: "/purchase/request" },
  { text: "Purchase Order", icon: <ReceiptLongIcon />, path: "/purchase/order" },
  { text: "Goods Receipt PO", icon: <InventoryIcon />, path: "/purchase/goods-receipt" },
  { text: "A/P Invoice", icon: <DescriptionIcon />, path: "/purchase/ap-invoice" },
];

const accountingSubMenu = [
  { text: "Chart of Accounts", icon: <MenuBookIcon />, path: "/accounting/chart-of-accounts" },
  { text: "Balance Sheet", icon: <ScaleIcon />, path: "/accounting/balance-sheet" },
  { text: "Profit & Loss", icon: <ShowChartIcon />, path: "/accounting/profit-loss" },
  { text: "Trial Balance", icon: <ScaleIcon />, path: "/accounting/trial-balance" },
  { text: "Journal Entries", icon: <EditNoteIcon />, path: "/accounting/journal-entries" },
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
  {
    text: 'Customer Vendor',
    icon: <GroupsIcon />,
    path: '/customer-vendor',
    submenu: customerVendorSubMenu,
  },
  {
    text: 'Inventory',
    icon: <InventoryIcon />,
    path: '/inventory',
    submenu: inventorySubMenu,
  },
  {
    text: 'Sales',
    icon: <ShoppingCartIcon />,
    path: '/sales',
    submenu: salesSubMenu,
  },
  {
    text: 'Purchase',
    icon: <LockIcon />,
    path: '/purchase',
    submenu: purchaseSubMenu,
  },
  {
    text: 'Accounting',
    icon: <DescriptionIcon />,
    path: '/accounting',
    submenu: accountingSubMenu,
  },
];

const Sidebar = ({ open, onClose }) => {
  const location = useLocation();
  const [adminOpen, setAdminOpen] = useState(false);
  const [masterOpen, setMasterOpen] = useState(false);
  const [customerVendorOpen, setCustomerVendorOpen] = useState(false);
  const [inventoryOpen, setInventoryOpen] = useState(false);
  const [salesOpen, setSalesOpen] = useState(false);
  const [purchaseOpen, setPurchaseOpen] = useState(false);
  const [accountingOpen, setAccountingOpen] = useState(false);

  const handleAdminClick = () => setAdminOpen((prev) => !prev);
  const handleMasterClick = () => setMasterOpen((prev) => !prev);
  const handleCustomerVendorClick = () => setCustomerVendorOpen((prev) => !prev);
  const handleInventoryClick = () => setInventoryOpen((prev) => !prev);
  const handleSalesClick = () => setSalesOpen((prev) => !prev);
  const handlePurchaseClick = () => setPurchaseOpen((prev) => !prev);
  const handleAccountingClick = () => setAccountingOpen((prev) => !prev);

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant="persistent"
      sx={{
        '& .MuiDrawer-paper': {
          width: SIDEBAR_WIDTH,
          bgcolor: '#2d3748',
          color: '#fff',
          borderRight: '1px solid #232d3b',
          top: 0,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Box sx={{ textAlign: 'center', py: 2, borderBottom: '1px solid #38475a', flexShrink: 0 }}>
        <img
          src="https://www.tom.sg/wp-content/uploads/2021/11/tom_logo-300x135.png"
          alt="logo"
          style={{ maxWidth: '120px' }}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '8px',
            background: '#232d3b',
            borderRadius: '8px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#38475a',
            borderRadius: '8px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#1976d2',
          },
          scrollbarWidth: 'thin',
          scrollbarColor: '#38475a #232d3b',
        }}
      >
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
          {/* Customer Vendor with dropdown */}
          <ListItem
            button
            onClick={handleCustomerVendorClick}
            selected={location.pathname.startsWith('/customer-vendor')}
            sx={{
              py: 1.2,
              px: 3,
              bgcolor: location.pathname.startsWith('/customer-vendor') ? '#38475a' : 'inherit',
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
            <ListItemIcon>{menuItems[2].icon}</ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: '#fff',
                    fontSize: 17,
                  }}
                >
                  {menuItems[2].text}
                </Typography>
              }
            />
            {customerVendorOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={customerVendorOpen} timeout="auto" unmountOnExit>
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
              {customerVendorSubMenu.map((item) => (
                <ListItem
                  button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  selected={location.pathname === item.path}
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
          {/* Inventory with dropdown */}
          <ListItem
            button
            onClick={handleInventoryClick}
            selected={location.pathname.startsWith('/inventory')}
            sx={{
              py: 1.2,
              px: 3,
              bgcolor: location.pathname.startsWith('/inventory') ? '#38475a' : 'inherit',
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
            <ListItemIcon>{menuItems[3].icon}</ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: '#fff',
                    fontSize: 17,
                  }}
                >
                  {menuItems[3].text}
                </Typography>
              }
            />
            {inventoryOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={inventoryOpen} timeout="auto" unmountOnExit>
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
              {inventorySubMenu.map((item) => (
                <ListItem
                  button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  selected={location.pathname === item.path}
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
          {/* Sales with dropdown */}
          <ListItem
            button
            onClick={handleSalesClick}
            selected={location.pathname.startsWith('/sales')}
            sx={{
              py: 1.2,
              px: 3,
              bgcolor: location.pathname.startsWith('/sales') ? '#38475a' : 'inherit',
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
            <ListItemIcon>{menuItems[4].icon}</ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: '#fff',
                    fontSize: 17,
                  }}
                >
                  {menuItems[4].text}
                </Typography>
              }
            />
            {salesOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={salesOpen} timeout="auto" unmountOnExit>
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
              {salesSubMenu.map((item) => (
                <ListItem
                  button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  selected={location.pathname === item.path}
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
          {/* Purchase with dropdown */}
          <ListItem
            button
            onClick={handlePurchaseClick}
            selected={location.pathname.startsWith('/purchase')}
            sx={{
              py: 1.2,
              px: 3,
              bgcolor: location.pathname.startsWith('/purchase') ? '#38475a' : 'inherit',
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
            <ListItemIcon>{menuItems[5].icon}</ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: '#fff',
                    fontSize: 17,
                  }}
                >
                  {menuItems[5].text}
                </Typography>
              }
            />
            {purchaseOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={purchaseOpen} timeout="auto" unmountOnExit>
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
              {purchaseSubMenu.map((item) => (
                <ListItem
                  button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  selected={location.pathname === item.path}
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
          {/* Accounting with dropdown */}
          <ListItem
            button
            onClick={handleAccountingClick}
            selected={location.pathname.startsWith('/accounting')}
            sx={{
              py: 1.2,
              px: 3,
              bgcolor: location.pathname.startsWith('/accounting') ? '#38475a' : 'inherit',
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
            <ListItemIcon>{menuItems[6].icon}</ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: '#fff',
                    fontSize: 17,
                  }}
                >
                  {menuItems[6].text}
                </Typography>
              }
            />
            {accountingOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={accountingOpen} timeout="auto" unmountOnExit>
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
              {accountingSubMenu.map((item) => (
                <ListItem
                  button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  selected={location.pathname === item.path}
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
          {menuItems.slice(7).map((item) => (
            <ListItem
              button
              key={item.text}
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
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
      </Box>
    </Drawer>
  );
};

export default Sidebar;