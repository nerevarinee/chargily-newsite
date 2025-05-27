import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

function Navbar() {
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "FR" : "EN")); // Example switch
  };

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <Link to="/" className="navbar-logo">
        <img
          src="/src/assets/logo.jpg"
          alt="MySite Logo"
          className="navbar-logo-img"
        />
      </Link>

      {/* Center: Nav Links */}
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

      {/* Right: Extra Buttons */}
      <div className="navbar-extras">
        <h2 className="navbar-docs">Developer API</h2>
        <a
          href="https://example.com/app"
          className="navbar-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          App
        </a>
        <button className="navbar-language" onClick={toggleLanguage}>
          {language}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
