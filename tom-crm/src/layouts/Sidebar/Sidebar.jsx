// import React, { useState } from "react";
// import { Drawer, Box, List, ListItem, ListItemIcon, ListItemText, Typography, Divider } from "@mui/material";
// import Popover from "@mui/material/Popover";
// import { Link, useLocation } from "react-router-dom";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import SettingsIcon from "@mui/icons-material/Settings";
// import StorageIcon from "@mui/icons-material/Storage";
// import GroupsIcon from "@mui/icons-material/Groups";
// import PeopleIcon from "@mui/icons-material/People";
// import InventoryIcon from "@mui/icons-material/Inventory";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import LockIcon from "@mui/icons-material/Lock";
// import DescriptionIcon from "@mui/icons-material/Description";
// import EditNoteIcon from "@mui/icons-material/EditNote";
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
// import StraightenIcon from '@mui/icons-material/Straighten';
// import AccountTreeIcon from '@mui/icons-material/AccountTree';
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import CorporateFareIcon from '@mui/icons-material/CorporateFare';
// import HubIcon from '@mui/icons-material/Hub';
// import ContactsIcon from "@mui/icons-material/Contacts";
// import BadgeIcon from "@mui/icons-material/Badge";
// import Inventory2Icon from "@mui/icons-material/Inventory2";
// import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
// import AssignmentIcon from "@mui/icons-material/Assignment";
// import MenuBookIcon from "@mui/icons-material/MenuBook";
// import ScaleIcon from "@mui/icons-material/Scale";
// import ShowChartIcon from "@mui/icons-material/ShowChart";
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

// const SIDEBAR_WIDTH = 200;

// const adminSubMenu = [
//   { text: 'User Master', icon: <PeopleIcon />, path: '/administration/user-master' },
//   { text: 'Role Master', icon: <GroupsIcon />, path: '/administration/role-master' },
//   { text: 'Document Numbering', icon: <DescriptionIcon />, path: '/administration/document-numbering' },
//   { text: 'Alerts', icon: <DescriptionIcon />, path: '/administration/alerts' },
//   { text: 'Change Password', icon: <LockIcon />, path: '/administration/change-password' },
//   { text: 'Company Details', icon: <BusinessCenterIcon />, path: '/administration/company-details' },

// ];

// const masterSubMenu = [
//   { text: 'Payment Term Master', icon: <CalendarMonthIcon />, path: '/master/payment-term' },
//   { text: 'Currency Master', icon: <MonetizationOnIcon />, path: '/master/currency' },
//   { text: 'UOM Master', icon: <StraightenIcon />, path: '/master/uom' },
//   { text: 'Financial Year Creation', icon: <CalendarMonthIcon />, path: '/master/financial-year' },
//   { text: 'Subsidiary Company Creation', icon: <CorporateFareIcon />, path: '/master/subsidiary-company' },
//   { text: 'Project Master', icon: <AccountTreeIcon />, path: '/master/project-master' },
//   { text: 'Cost Center', icon: <HubIcon />, path: '/master/cost-center' },
// ];

// const customerVendorSubMenu = [
//   { text: "Customer Creation", icon: <BadgeIcon />, path: "/customer-vendor/customer-creation" },
//   { text: "Vendor Creation", icon: <BadgeIcon />, path: "/customer-vendor/vendor-creation" },
// ];

// const inventorySubMenu = [
//   { text: "Item Master Data", icon: <Inventory2Icon />, path: "/inventory/item-master-data" },
// ];

// const salesSubMenu = [
//   { text: "Sales Quotation", icon: <EditNoteIcon />, path: "/sales/quotation" },
//   { text: "Sales Order", icon: <ShoppingBagIcon />, path: "/sales/order" },
//   { text: "Sales Invoice", icon: <DescriptionIcon />, path: "/sales/ar-invoice" },
//   { text: "Delivery Order", icon: <LocalShippingIcon />, path: "/sales/delivery" },

// ];

// const purchaseSubMenu = [

//   { text: "Purchase Request", icon: <AssignmentIcon />, path: "/purchase/request" },
//   { text: "Purchase Order", icon: <ReceiptLongIcon />, path: "/purchase/order" },
//   { text: "Goods Receipt Note", icon: <InventoryIcon />, path: "/purchase/goods-receipt" },
//   { text: "A/P Invoice", icon: <DescriptionIcon />, path: "/purchase/ap-invoice" },
// ];

// const accountingSubMenu = [
//   { text: "Trial Balance", icon: <AccountBalanceWalletIcon/>, path: "/accounting/trial-balance" },
//   { text: "Chart of Accounts", icon: <MenuBookIcon />, path: "/accounting/chart-of-accounts" },
//   { text: "Balance Sheet", icon: <ScaleIcon />, path: "/accounting/balance-sheet" },
//   { text: "Profit & Loss", icon: <ShowChartIcon />, path: "/accounting/profit-loss" },

// ];

// const CashAndBankSubMenu = [
//   { text: "Receipts", icon: <AccountBalanceWalletIcon/>, path: "/accounting/bank-reconciliation" },
//   { text: "Payments", icon: <AccountBalanceWalletIcon/>, path: "/accounting/cash-flow" },
//   { text: "Petty Cash", icon: <AccountBalanceWalletIcon/>, path: "/accounting/cash-flow" },
// ];

// const JournalEntriesSubMenu = [
//   { text: "Journal Entries", icon: <EditNoteIcon />, path: "/Journals/journal-entries" },
//   { text: "Forex JV", icon: <EditNoteIcon />, path: "/Journals/forexjv" },
//   { text: "Inter-Department JV", icon: <EditNoteIcon />, path: "/Journals/interdepartmentjv" },
//   { text: "Non-Standard Journal Entries", icon: <EditNoteIcon />, path: "/Journals/nonstandardjournalentries" },
//   { text: "Debit Note", icon: <EditNoteIcon />, path: "/Journals/debitnote" },
//   { text: "Credit Note", icon: <EditNoteIcon />, path: "/Journals/creditnote" },
//   { text: "Opening Balances", icon: <EditNoteIcon />, path: "/Journals/openingbalances" },
//   { text: "Fixed Asset Depreciation Voucher", icon: <EditNoteIcon />, path: "/Journals/fixedassetdepreciationvoucher" },

// ];

// const productionSubMenu = [
//   { text: "Scan QR Code", icon: <StorageIcon />, path: "/production/scanqrcode" },
//   { text: "Work Order", icon: <StorageIcon />, path: "/production/work-order" },
//   { text: "Production Entry", icon: <StorageIcon />, path: "/production/production-entry" },
// ];

// const crmSubMenu = [
//   { text: "Leads", icon: <ContactsIcon />, path: "/crm/leads" },
//   { text: "Opportunities", icon: <ContactsIcon />, path: "/crm/opportunities" },
//   { text: "Activities", icon: <ContactsIcon />, path: "/crm/activities" },
//   { text: "Campaigns", icon: <ContactsIcon />, path: "/crm/campaigns" },
// ];

// const payrollSubMenu = [
//   { text: "Employee List", icon: <BadgeIcon />, path: "/payroll/employeelist" },
//   { text: "Contractors List", icon: <CalendarMonthIcon />, path: "/payroll/contractorslist" },
//   { text: "Earnings and Deductions", icon: <DescriptionIcon />, path: "/payroll/earningsanddeductions" },
//   { text: "Shift Manegament", icon: <DescriptionIcon />, path: "/payroll/shiftmanagement" },
//   { text: "Time Sheet", icon: <MonetizationOnIcon />, path: "/payroll/timesheet" },
//   { text: "Reports", icon: <MonetizationOnIcon />, path: "/payroll/reports" },
//   { text: "Biometric Attendence Settings", icon: <MonetizationOnIcon />, path: "/payroll/biometricattendencesettings" },
//   { text: "Expense", icon: <MonetizationOnIcon />, path: "/payroll/expense" },
//   { text: "Performance", icon: <MonetizationOnIcon />, path: "/payroll/performance" },

// ];
// const menuItems = [
//   {
//     text: 'Administration',
//     icon: <SettingsIcon />,
//     path: '/administration',
//     submenu: adminSubMenu,
//   },
//   {
//     text: 'Master',
//     icon: <StorageIcon />,
//     path: '/master',
//     submenu: masterSubMenu,
//   },
//   {
//     text: 'Customer Vendor',
//     icon: <GroupsIcon />,
//     path: '/customer-vendor',
//     submenu: customerVendorSubMenu,
//   },

//   {
//     text: 'Sales',
//     icon: <ShoppingCartIcon />,
//     path: '/sales',
//     submenu: salesSubMenu,
//   },
//   {
//     text: 'Purchase',
//     icon: <LockIcon />,
//     path: '/purchase',
//     submenu: purchaseSubMenu,
//   },
//    {
//     text: 'Cash And Bank',
//     icon: <DescriptionIcon />,
//     path: '/cashandbank',
//     submenu: CashAndBankSubMenu,
//   },
//   {
//     text: 'Journals',
//     icon: <DescriptionIcon />,
//     path: '/Journals',
//     submenu: JournalEntriesSubMenu,
//   },
//   {
//     text: 'Accounting',
//     icon: <DescriptionIcon />,
//     path: '/accounting',
//     submenu: accountingSubMenu,
//   },
//   {
//     text: 'Inventory',
//     icon: <InventoryIcon />,
//     path: '/inventory',
//     submenu: inventorySubMenu,
//   },
//   {
//     text: 'Production',
//     icon: <InventoryIcon />,
//     path: '/production',
//     submenu: productionSubMenu,
//   },
//   {
//     text: 'CRM',
//     icon: <InventoryIcon />,
//     path: '/crm',
//     submenu: crmSubMenu,
//   },
//   {
//     text: 'Payroll',
//     icon: <InventoryIcon />,
//     path: '/payroll',
//     submenu: payrollSubMenu,
//   },

// ];

// const Sidebar = ({ open, onClose }) => {
//   const location = useLocation();
//   // Track which menu is open and its anchor element
//   const [openMenuIndex, setOpenMenuIndex] = useState(null);
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleMenuClick = (event, idx) => {
//     if (openMenuIndex === idx) {
//       setOpenMenuIndex(null);
//       setAnchorEl(null);
//     } else {
//       setOpenMenuIndex(idx);
//       setAnchorEl(event.currentTarget);
//     }
//   };

//   const handlePopoverClose = () => {
//     setOpenMenuIndex(null);
//     setAnchorEl(null);
//   };

//   return (
//     <Drawer
//       anchor="left"
//       open={open}
//       onClose={onClose}
//       variant="persistent"
//       sx={{
//         '& .MuiDrawer-paper': {
//           width: SIDEBAR_WIDTH,
//           bgcolor: '#2d3748',
//           color: '#fff',
//           borderRight: '1px solid #232d3b',
//           top: 0,
//           height: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//         },
//       }}
//     >
//       <Box sx={{ textAlign: 'center', py: 2, borderBottom: '1px solid #38475a', flexShrink: 0 }}>
//         <img
//           src="https://www.tom.sg/wp-content/uploads/2021/11/tom_logo-300x135.png"
//           alt="logo"
//           style={{ maxWidth: '120px' }}
//         />
//       </Box>
//       <Box
//         sx={{
//           flex: 1,
//           overflowY: 'auto',
//           '&::-webkit-scrollbar': {
//             width: '3px',
//             background: '#232d3b',
//             borderRadius: '3px',
//           },
//           '&::-webkit-scrollbar-thumb': {
//             background: '#38475a',
//             borderRadius: '8px',
//           },
//           '&::-webkit-scrollbar-thumb:hover': {
//             background: '#1976d2',
//           },
//           scrollbarWidth: 'thin',
//           scrollbarColor: '#38475a #232d3b',
//         }}
//       >
//         <List sx={{ pt: 1 }}>
//           {menuItems.map((item, idx) => (
//             <React.Fragment key={item.text}>
//               <ListItem
//                 button
//                 onClick={(e) => handleMenuClick(e, idx)}
//                 selected={location.pathname.startsWith(item.path)}
//                 sx={{
//                   py: 0.2,
//                   px: 1,
//                   bgcolor: location.pathname.startsWith(item.path) ? '#38475a' : 'inherit',
//                   // fontWeight: 400,
//                   color: '#fff',
//                   fontSize: 14,
//                   borderRadius: 1,
//                   mb: 0.2,
//                   '& .MuiListItemIcon-root': {
//                     color: '#fff',
//                     minWidth: 36,
//                   },
//                   '&:hover': {
//                     bgcolor: '#38475a',
//                   },
//                   transition: 'background 0.2s',
//                 }}
//               >
//                 <ListItemIcon>{item.icon}</ListItemIcon>
//                 <ListItemText
//                   primary={
//                     <Typography
//                       sx={{
//                         fontWeight: 400,
//                         color: '#fff',
//                         fontSize: 14,
//                         fontFamily: 'rubik, sans-serif',
//                       }}
//                     >
//                       {item.text}
//                     </Typography>
//                   }
//                 />
//                 {openMenuIndex === idx ? <ExpandLess /> : <ExpandMore />}
//               </ListItem>
//               <Popover
//                 open={openMenuIndex === idx}
//                 anchorEl={anchorEl}
//                 onClose={handlePopoverClose}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'left',
//                 }}
//                 PaperProps={{
//                   sx: {
//                     bgcolor: '#273447',
//                     color: '#fff',
//                     borderRadius: 1,
//                     boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
//                     minWidth: 220,
//                     mt: 1,
//                   },
//                 }}
//               >
//                 <List>
//                   {item.submenu.map((sub) => (
//                     <ListItem
//                       button
//                       key={sub.text}
//                       component={Link}
//                       to={sub.path}
//                       selected={location.pathname === sub.path}
//                       onClick={handlePopoverClose}
//                       sx={{
//                         py: 0.5,
//                         bgcolor: location.pathname === sub.path ? '#38475a' : 'inherit',
//                         fontWeight: location.pathname === sub.path ? 600 : 400,
//                         color: '#fff',
//                         fontSize: 14,
//                         borderRadius: 1,
//                         '& .MuiListItemIcon-root': {
//                           color: '#fff',
//                           minWidth: 36,
//                         },
//                         '&:hover': {
//                           bgcolor: '#38475a',
//                         },
//                         transition: 'background 0.2s',

//                       }}
//                     >
//                       <ListItemIcon>{sub.icon}</ListItemIcon>
//                       <ListItemText
//                         primary={
//                           <Typography
//                             sx={{
//                               fontWeight: location.pathname === sub.path ? 700 : 400,
//                               color: '#fff',
//                               fontSize: 14,
//                             }}
//                           >
//                             {sub.text}
//                           </Typography>
//                         }
//                       />
//                     </ListItem>
//                   ))}
//                 </List>
//               </Popover>
//             </React.Fragment>
//           ))}
//           <Divider sx={{ bgcolor: '#38475a', my: 1 }} />
//         </List>
//       </Box>
//     </Drawer>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Tooltip,
} from "@mui/material";
import Popover from "@mui/material/Popover";
import { Link, useLocation } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

// import all icons
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
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import StraightenIcon from "@mui/icons-material/Straighten";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import HubIcon from "@mui/icons-material/Hub";
import ContactsIcon from "@mui/icons-material/Contacts";
import BadgeIcon from "@mui/icons-material/Badge";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ScaleIcon from "@mui/icons-material/Scale";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

// Widths
const SIDEBAR_WIDTH = 200;
const COLLAPSED_WIDTH = 80;

/* ---------------- SUBMENUS ---------------- */
const adminSubMenu = [
  { text: "User Master", path: "/administration/user-master" },
  { text: "Role Master", path: "/administration/role-master" },
  { text: "Document Numbering", path: "/administration/document-numbering" },
  { text: "Alerts", path: "/administration/alerts" },
  { text: "Change Password", path: "/administration/change-password" },
  { text: "Company Details", path: "/administration/company-details" },
];

const masterSubMenu = [
  { text: "Payment Term Master", path: "/master/payment-term" },
  { text: "Currency Master", path: "/master/currency" },
  { text: "UOM Master", path: "/master/uom" },
  { text: "Financial Year Creation", path: "/master/financial-year" },
  { text: "Subsidiary Company Creation", path: "/master/subsidiary-company" },
  { text: "Project Master", path: "/master/project-master" },
  { text: "Cost Center", path: "/master/cost-center" },
];

const customerVendorSubMenu = [
  { text: "Customer Creation", path: "/customer-vendor/customer-creation" },
  { text: "Vendor Creation", path: "/customer-vendor/vendor-creation" },
];

const inventorySubMenu = [
  { text: "Item Master Data", path: "/inventory/item-master-data" },
];

const salesSubMenu = [
  { text: "Sales Quotation", path: "/sales/quotation" },
  { text: "Sales Order", path: "/sales/order" },
  { text: "Sales Invoice", path: "/sales/ar-invoice" },
  { text: "Delivery Order", path: "/sales/delivery" },
];

const purchaseSubMenu = [
  { text: "Purchase Request", path: "/purchase/request" },
  { text: "Purchase Order", path: "/purchase/order" },
  { text: "Goods Receipt Note", path: "/purchase/goods-receipt" },
  { text: "A/P Invoice", path: "/purchase/ap-invoice" },
];

const accountingSubMenu = [
  { text: "Trial Balance", path: "/accounting/trial-balance" },
  { text: "Chart of Accounts", path: "/accounting/chart-of-accounts" },
  { text: "Balance Sheet", path: "/accounting/balance-sheet" },
  { text: "Profit & Loss", path: "/accounting/profit-loss" },
];

const CashAndBankSubMenu = [
  { text: "Receipts", path: "/accounting/bank-reconciliation" },
  { text: "Payments", path: "/accounting/cash-flow" },
  { text: "Petty Cash", path: "/accounting/cash-flow" },
];

const JournalEntriesSubMenu = [
  { text: "Journal Entries", path: "/Journals/journal-entries" },
  { text: "Forex JV", path: "/Journals/forexjv" },
  { text: "Inter-Department JV", path: "/Journals/interdepartmentjv" },
  {
    text: "Non-Standard Journal Entries",
    path: "/Journals/nonstandardjournalentries",
  },
  { text: "Debit Note", path: "/Journals/debitnote" },
  { text: "Credit Note", path: "/Journals/creditnote" },
  { text: "Opening Balances", path: "/Journals/openingbalances" },
  {
    text: "Fixed Asset Depreciation Voucher",
    path: "/Journals/fixedassetdepreciationvoucher",
  },
];

const productionSubMenu = [
  { text: "Scan QR Code", path: "/production/scanqrcode" },
  { text: "Work Order", path: "/production/work-order" },
  { text: "Production Entry", path: "/production/production-entry" },
];

const crmSubMenu = [
  { text: "Leads", path: "/crm/leads" },
  { text: "Opportunities", path: "/crm/opportunities" },
  { text: "Activities", path: "/crm/activities" },
  { text: "Campaigns", path: "/crm/campaigns" },
];

const payrollSubMenu = [
  { text: "Employee List", path: "/payroll/employeelist" },
  { text: "Contractors List", path: "/payroll/contractorslist" },
  { text: "Earnings and Deductions", path: "/payroll/earningsanddeductions" },
  { text: "Shift Manegament", path: "/payroll/shiftmanagement" },
  { text: "Time Sheet", path: "/payroll/timesheet" },
  { text: "Reports", path: "/payroll/reports" },
  {
    text: "Biometric Attendence Settings",
    path: "/payroll/biometricattendencesettings",
  },
  { text: "Expense", path: "/payroll/expense" },
  { text: "Performance", path: "/payroll/performance" },
];

/* ---------------- MAIN MENU ---------------- */
const menuItems = [
  {
    text: "Administration",
    icon: <SettingsIcon />,
    path: "/administration",
    submenu: adminSubMenu,
  },
  {
    text: "Master",
    icon: <StorageIcon />,
    path: "/master",
    submenu: masterSubMenu,
  },
  {
    text: "Customer Vendor",
    icon: <GroupsIcon />,
    path: "/customer-vendor",
    submenu: customerVendorSubMenu,
  },
  {
    text: "Sales",
    icon: <ShoppingCartIcon />,
    path: "/sales",
    submenu: salesSubMenu,
  },
  {
    text: "Purchase",
    icon: <LockIcon />,
    path: "/purchase",
    submenu: purchaseSubMenu,
  },
  {
    text: "Cash And Bank",
    icon: <DescriptionIcon />,
    path: "/cashandbank",
    submenu: CashAndBankSubMenu,
  },
  {
    text: "Journals",
    icon: <DescriptionIcon />,
    path: "/Journals",
    submenu: JournalEntriesSubMenu,
  },
  {
    text: "Accounting",
    icon: <DescriptionIcon />,
    path: "/accounting",
    submenu: accountingSubMenu,
  },
  {
    text: "Inventory",
    icon: <InventoryIcon />,
    path: "/inventory",
    submenu: inventorySubMenu,
  },
  {
    text: "Production",
    icon: <InventoryIcon />,
    path: "/production",
    submenu: productionSubMenu,
  },
  { text: "CRM", icon: <InventoryIcon />, path: "/crm", submenu: crmSubMenu },
  {
    text: "Payroll",
    icon: <InventoryIcon />,
    path: "/payroll",
    submenu: payrollSubMenu,
  },
];

/* ---------------- COMPONENT ---------------- */
const Sidebar = ({ open, onClose, collapsed }) => {
  const location = useLocation();
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event, idx) => {
    if (openMenuIndex === idx) {
      setOpenMenuIndex(null);
      setAnchorEl(null);
    } else {
      setOpenMenuIndex(idx);
      setAnchorEl(event.currentTarget);
    }
  };

  const handlePopoverClose = () => {
    setOpenMenuIndex(null);
    setAnchorEl(null);
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant="persistent"
      sx={{
        "& .MuiDrawer-paper": {
          width: collapsed ? COLLAPSED_WIDTH : SIDEBAR_WIDTH,
          bgcolor: "#2d3748",
          color: "#fff",
          borderRight: "1px solid #232d3b",
          height: "100vh",
          transition: "width 0.3s",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          py: 2,
          borderBottom: "1px solid #38475a",
        }}
      >
        <img
          src="https://www.tom.sg/wp-content/uploads/2021/11/tom_logo-300x135.png"
          alt="logo"
          style={{
            maxWidth: collapsed ? "50px" : "120px", // smaller logo when collapsed
            transition: "max-width 0.3s",
          }}
        />
      </Box>
      <Box sx={{ flex: 1, overflowY: "hidden" }}>
        <List sx={{ pt: 1 }}>
          {menuItems.map((item, idx) => (
            <React.Fragment key={item.text}>
              <Tooltip title={collapsed ? item.text : ""} placement="left">
                <ListItem
                  button
                  onClick={(e) => handleMenuClick(e, idx)}
                  selected={location.pathname.startsWith(item.path)}
                  sx={{
                    py: 0.3,
                    px: 1.2,

                    justifyContent: collapsed ? "center" : "flex-start",
                    alignItems: collapsed ? "center" : "flex-start",
                    bgcolor: location.pathname.startsWith(item.path)
                      ? "#38475a"
                      : "inherit",
                    borderRadius: 1,
                    mb: 0.2,
                    "& .MuiListItemIcon-root": {
                      color: "#fff",
                      minWidth: 36,
                      justifyContent: "center",
                    },
                    "&:hover": { bgcolor: "#38475a" },
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  {!collapsed && (
                    <ListItemText
                      primary={
                        <Typography sx={{ fontSize: 14 }}>
                          {item.text}
                        </Typography>
                      }
                    />
                  )}
                  {!collapsed &&
                    (openMenuIndex === idx ? <ExpandLess /> : <ExpandMore />)}
                </ListItem>
              </Tooltip>

              {/* Submenu → text only */}
              <Popover
                open={openMenuIndex === idx}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
              >
                <List sx={{ backgroundColor: "#38475a", color: "#fff" }}>
                  {item.submenu.map((sub) => (
                    <ListItem
                      button
                      key={sub.text}
                      component={Link}
                      to={sub.path}
                      selected={location.pathname === sub.path}
                      color=""
                      onClick={handlePopoverClose}
                      
                    >
                      <ListItemText
                        primary={
                          <Typography sx={{ color: "#fff", fontSize: 14 }}>
                            {sub.text}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Popover>
            </React.Fragment>
          ))}
          <Divider sx={{ bgcolor: "#38475a", my: 1 }} />
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
