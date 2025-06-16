import React, { useState } from "react";

//images:
import DjezzyImg from "../assets/modile-nets/djezzy.png";
import MobilisImg from "../assets/modile-nets/mobilis.png";
import OoredooImg from "../assets/modile-nets/ooredoo.png";
import AtandtImg from "../assets/modile-nets/atandt.jpg";
import OrangeImg from "../assets/modile-nets/orange.png";

function Topup() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const quickAmounts = [
    { value: 50, label: "DZD50", popular: false },
    { value: 100, label: "DZD100", popular: false },
    { value: 200, label: "DZD200", popular: true },
    { value: 500, label: "DZD500", popular: false },
    { value: 1000, label: "DZD1000", popular: false },
    { value: 2000, label: "DZD2000", popular: false },
  ];

  const faqData = [
    {
      question: "What is a top-up?",
      answer:
        "Most top-ups are processed instantly. In rare cases, it may take up to 5 minutes during peak hours or network maintenance.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept all major credit cards, debit cards, CIB, and digital wallets. All payments are processed securely through our encrypted payment gateway.",
    },
    {
      question: "Can I top-up a number other than my own?",
      answer:
        "Yes, you can top-up any valid phone number. Just enter the recipient's number in the phone number field and proceed with the payment.",
    },
    {
      question: "What are the minimum and maximum top-up amounts?",
      answer:
        "The minimum top-up amount is DZD1 and the maximum is DZD10,000 per transaction. You can make multiple transactions if you need to top-up more.",
    },
    {
      question: "Will I receive a confirmation after the top-up?",
      answer:
        "Yes, you'll receive an SMS confirmation on the number you topped up, plus an email receipt to your registered email address.",
    },
    {
      question: "What should I do if my top-up fails?",
      answer:
        "If your top-up fails, the amount will be automatically refunded to your original payment method within 3-5 business days. Contact our support team if you need immediate assistance.",
    },
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

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="page">
      <div className="container">
        {/* Header */}
        <section className="topup-hero">
          <div className="container">
            <h1>Instant Mobile Top-Up</h1>
            <p>
              Recharge your phone or send credit to loved ones, across all major
              networks — Djezzy, Ooredoo, Mobilis and more. Fast, secure, and
              available 24/7.
            </p>
          </div>
        </section>

        <div class="topup-container">
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
                <div style={{}}>
                  <img src={DjezzyImg} alt="Djezzy" className="network-logos" />
                  <img
                    src={MobilisImg}
                    alt="Mobilis"
                    className="network-logos"
                  />
                  <img
                    src={OoredooImg}
                    alt="Ooredoo"
                    className="network-logos"
                  />
                  <img src={AtandtImg} alt="AT&T" className="network-logos" />
                  <img src={OrangeImg} alt="Orange" className="network-logos" />
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

        {/* FAQ Section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className={`faq-question ${
                    openFaqIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`faq-icon ${
                      openFaqIndex === index ? "rotated" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topup;
