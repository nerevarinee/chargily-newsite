// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css"; // Component-specific styles

// Import all pages
import Vouchers from "./pages/Vouchers";
import Payments from "./pages/Payments";
import Topup from "./pages/Topup";
import CreditRewards from "./pages/CreditRewards";
import ChargilyPay from "./pages/ChargilyPay";
import PaymentLinks from "./pages/PaymentLinks";
import FeesPricing from "./pages/FeesPricing";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          {/* Define routes for each page */}
          <Routes>
            <Route path="/vouchers" element={<Vouchers />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/topup" element={<Topup />} />
            <Route path="/credit-rewards" element={<CreditRewards />} />
            <Route path="/chargily-pay" element={<ChargilyPay />} />
            <Route path="/payment-links" element={<PaymentLinks />} />
            <Route path="/fees-pricing" element={<FeesPricing />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
