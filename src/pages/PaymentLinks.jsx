import React, { useState } from "react";

function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState("chargily");

  const paymentMethods = [
    {
      id: "chargily",
      name: "Chargily Pay",
      description:
        "Caahargily Pay™ simplifies payment processing by supporting a variety of methods to suit your business needs, offering a familiar and reliable payment action through CIB and EDAHABIA cards. We've also created a convenient solution for payment processing for your international clients as well.",
      logo: "💳", // Replace with actual logo
      features: ["CIB Cards", "EDAHABIA Cards", "International Support"],
    },
  ];

  const handleGetChargily = () => {
    // Redirect to Chargily signup or documentation
    window.open("https://app.chargily.com/", "_blank");
  };

  return (
    <div className="payment-methods-page">
      <div className="payment-methods-container">
        {/* Header */}
        <div className="payment-methods-header">
          <h1>Payment Methods with Chargily</h1>
          <p>Choose the payment solution that works best for your business</p>
        </div>

        {/* Main Payment Method Card */}
        <div className="payment-method-card main-card">
          <div className="card-header">
            <h2>Payment Methods with Chargily</h2>
            <p>
              Chargily Pay™ simplifies payment processing by supporting a
              variety of methods to suit your business needs, offering a
              familiar and reliable payment action through CIB and EDAHABIA
              cards. We've also created a convenient solution for payment
              processing for your international clients as well.
            </p>
          </div>

          {/* Payment Method Icons */}
          <div className="payment-icons">
            <div className="payment-icon">💳</div>
            <div className="payment-icon">🏦</div>
            <div className="payment-icon visa">VISA</div>
            <div className="payment-icon mastercard">●●</div>
          </div>

          <button onClick={handleGetChargily} className="get-chargily-btn">
            Get Chargily →
          </button>
        </div>

        {/* QR Code Payment */}
        <div className="payment-method-card">
          <div className="card-content-horizontal">
            <div className="card-image">
              <div className="qr-mockup">
                <div className="phone-mockup">
                  <div className="phone-screen">
                    <div className="qr-code">
                      <div className="qr-pattern"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-text">
              <h3>Payment via QR Code</h3>
              <p>
                Make it easy for your customers to pay you with QR codes. Share
                it with your clients, and they can pay instantly by scanning it
                with their mobile devices. It is a fast, secure, and contactless
                way to handle transactions.
              </p>
              <button className="learn-more-btn">Learn More →</button>
            </div>
          </div>
        </div>

        {/* Payment Links */}
        <div className="payment-method-card">
          <div className="card-content-horizontal reverse">
            <div className="card-text">
              <h3>Pay via Payment Links</h3>
              <p>
                With payment links, you can simplify the process of collecting
                payments from clients without any need for an online store. This
                convenient solution allows you to set up a payment system that
                can be shared with clients, and they can make a payment to you
                within seconds making it easy to receive your funds safely
                quickly and efficiently.
              </p>
              <button className="learn-more-btn">Learn More →</button>
            </div>
            <div className="card-image">
              <div className="payment-link-mockup">
                <div className="mobile-device">
                  <div className="device-screen">
                    <div className="payment-form">
                      <div className="form-header"></div>
                      <div className="form-body">
                        <div className="form-field"></div>
                        <div className="form-field"></div>
                        <div className="form-button"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethods;
