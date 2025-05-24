import React from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
//import "./Navbar.css"; // Optional: separate CSS

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MySite</div>

      {/* Dropdown menus */}
      <ul className="navbar-links">
        <DropdownMenu
          title="Personal"
          items={[
            { label: "Vouchers", path: "/vouchers" },
            { label: "Payments", path: "/payments" },
            { label: "Top-Up", path: "/topup" },
            { label: "Credit & Rewards", path: "/credit-rewards" },
          ]}
        />
        <DropdownMenu
          title="Business"
          items={[
            { label: "Chargily Pay", path: "/chargily-pay" },
            { label: "Payment Links", path: "/payment-links" },
            { label: "Fees & Pricing", path: "/fees-pricing" },
          ]}
        />
        <DropdownMenu
          title="Company"
          items={[
            { label: "About Us", path: "/about-us" },
            { label: "Careers", path: "/careers" },
            { label: "Contact", path: "/contact" },
          ]}
        />
      </ul>
    </nav>
  );
}

export default Navbar;
