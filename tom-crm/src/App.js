import React, { useState } from 'react'
import './App.css'
import Sidebar from './layouts/Sidebar/Sidebar'
import Navbar from './layouts/Navbar/Navbar'
import Login from './components/Login/Login'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import UserMaster from './components/UserMaster/UserMaster'
import RoleMaster from './components/RoleMaster/RoleMaster'
import ChangePassword from './components/ChangePassword/ChangePassword'
import CompanyDetails from './components/CompanyDetails/CompanyDetails'
import PaymentTermMaster from './components/PaymentTermMaster/PaymentTermMaster'
import CurrencyMaster from './components/CurrencyMaster/CurrencyMaster'
import UomMaster from './components/UomMaster/UomMaster'
import FinacialYearMaster from './components/FinacialMaster/FinacialYearMaster'
import SubsidairyCompany from './components/SubsidairyCompany/SubsidairyCompany'
import ProjectMaster from './components/ProjectMaster/ProjectMaster'
import CostCenter from './components/CostCenter/CostCenter'
import CustomerCreation from './components/CustomerCreation/CustomerCreation'
import VendorCreation from './components/VendorCreation/VendorCreation'
import ItemMasterData from './components/ItemMasterData/ItemMasterData'
import SalesQuotation from './components/SalesQuotation/SalesQuotation'
import SalesOrder from './components/SalesOrder/SalesOrder'
import Delivery from './components/Delivery/Delivery'
import ArInvoice from './components/ArInvoice/ArInvoice'
import PurchaseOrder from './components/PurchaseOrder/PurchaseOrder'
import ApInvoice from './components/ApInvoice/ApInvoice'
import JournalEntries from './components/JournalEntries/JournalEntries'

const SIDEBAR_WIDTH = 230;

const AppLayout = ({ sidebarOpen, handleMenuClick, handleSidebarClose }) => (
  <>
    <Sidebar open={sidebarOpen} onClose={handleSidebarClose} />
    <Navbar onMenuClick={handleMenuClick} sidebarOpen={sidebarOpen} />
    <div
      style={{
        marginTop: 64,
        marginLeft: sidebarOpen ? SIDEBAR_WIDTH : 0,
        transition: 'margin-left 0.3s',
      }}
      onClick={sidebarOpen ? handleSidebarClose : undefined}
    >
      <Routes>
        {/* <Route path="/administration" element={<div>Administration Page</div>} /> */}
        <Route path="/administration/user-master" element={<UserMaster/>} />
        <Route path="/administration/role-master" element={<RoleMaster/>} />
        <Route path="/administration/document-numbering" element={<div>Document Numbering Page</div>} />
        <Route path="/administration/alerts" element={<div>Alerts Page</div>} />
        <Route path="/administration/change-password" element={<ChangePassword/>} />
        <Route path="/administration/company-details" element={<CompanyDetails/>} />
        <Route path="/master" element={<div>Master Page</div>} />
        <Route path="/master/payment-term" element={<PaymentTermMaster/>} />
        <Route path="/master/currency" element={<CurrencyMaster/>} />
        <Route path="/master/uom" element={<UomMaster/>} />
        <Route path="/master/financial-year" element={<FinacialYearMaster/>} />
        <Route path="/master/subsidiary-company" element={<SubsidairyCompany/>} />
        <Route path="/master/project-master" element={<ProjectMaster/>} />
        <Route path="/master/cost-center" element={<CostCenter/>} />
        <Route path="/crm" element={<div>CRM Page</div>} />
        <Route path="/customer-vendor/customer-creation" element={<CustomerCreation/>} />
        <Route path="/customer-vendor/vendor-creation" element={<VendorCreation/>} />
        <Route path="/inventory/item-master-data" element={<ItemMasterData/>}/>
        <Route path="/sales/quotation" element={<SalesQuotation/>} />
        <Route path="/sales/order" element={<SalesOrder/>} />
        <Route path="/sales/delivery" element={<Delivery/>} />
        <Route path="/sales/ar-invoice" element={<ArInvoice/>} />
        <Route path="/purchase/order" element={<PurchaseOrder/>} />
        <Route path="/purchase/ap-invoice" element={<ApInvoice/>} />
        <Route path="/accounting/journal-entries" element={<JournalEntries/>} />
        <Route path="/" element={<div>Home Page</div>} />
      </Routes>
    </div>
  </>
);

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => setSidebarOpen(prev => !prev);
  const handleSidebarClose = () => setSidebarOpen(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <AppLayout
              sidebarOpen={sidebarOpen}
              handleMenuClick={handleMenuClick}
              handleSidebarClose={handleSidebarClose}
            />
          }
        />
      </Routes>
    </Router>
  )
}

export default App