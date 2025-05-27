import React, { useState } from "react";

function Topup() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const quickAmounts = [
    { value: 50, label: "DZD50", popular: false },
    { value: 100, label: "DZD100", popular: false },
    { value: 200, label: "DZD200", popular: true },
    { value: 500, label: "DZD500", popular: false },
    { value: 1000, label: "DZD1000", popular: false },
    { value: 2000, label: "DZD2000", popular: false },
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(parseFloat(value));
    }
  };

  const handleContinue = () => {
    if (selectedAmount && phoneNumber.trim()) {
      // Redirect to payment page - replace with your actual URL
      window.location.href = "https://app.chargily.com/";
    }
  };

  return (
    <div className="page">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1>Top-up Service</h1>
        </div>
        {/* Current Balance */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "16px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  color: "#666",
                  fontSize: "0.9rem",
                  margin: "0 0 0.5rem",
                }}
              >
                Supported Service Providers
              </p>
              <div
                style={{
                  margin: 10,
                }}
              >
                <img src="..\assets\modile-nets\djezzy.png" alt="dj" />
                <img src="..\assets\modile-nets\mobilis.png" alt="mob" />
                <img src="..\assets\modile-nets\ooredoo.png" alt="ore" />
                <img src="..\assets\modile-nets\atandt.jpg" alt="att" />
                <img src="..\assets\modile-nets\orange.png" alt="org" />
              </div>
            </div>
          </div>
        </div>

        {/* Amount Selection */}
        <div className="card">
          <h2>Select Amount</h2>

          {/* Quick Amount Grid */}
          <div className="amount-grid">
            {quickAmounts.map((amount) => (
              <button
                key={amount.value}
                onClick={() => handleAmountSelect(amount.value)}
                className={`amount-button ${
                  selectedAmount === amount.value ? "selected" : ""
                }`}
              >
                {amount.popular && (
                  <span className="popular-badge">Popular</span>
                )}
                {amount.label}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="input-wrapper">
            <label className="label">Or enter custom amount</label>
            <div>
              <span className="dzd-prefix">DZD</span>
              <input
                type="number"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder="0.00"
                className="input-field"
                min="1"
                max="10000"
              />
            </div>
            <p className="helper-text">Minimum: DZD1 • Maximum: DZD10,000</p>
          </div>

          {/* Phone Number */}
          <div>
            <label className="label">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+213 XXXXXXXXX"
              className="phone-input"
            />
            <p className="helper-text">We'll send confirmation via SMS</p>
          </div>
        </div>

        <button
          onClick={handleContinue}
          disabled={!selectedAmount || !phoneNumber.trim()}
          className="continue-btn"
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
}

export default Topup;
