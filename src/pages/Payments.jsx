import React, { useState } from "react";

import APimage from "../assets/AlgeriePoste.png";
import BPimage from "../assets/baridipay.png";
import sonelgaz from "../assets/Sonelgaz.png";
import ade from "../assets/ade.png";
import at from "../assets/algerie-telecom.png";
import seaal from "../assets/seaal.jfif";
import visual from "../assets/PayViaQrCode.webp";


function Payments() {
  const styles = `
    /* ==========================================================================
       PAYMENTS PAGE STYLES
       ========================================================================== */

    .payments-page {
      max-width: 1500px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    /* ==========================================================================
       HERO SECTION
       ========================================================================== */

    .payments-hero {
      margin-bottom: 4rem;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0rem;
      align-items: center;
      min-height: 650px;
    }

    .hero-text h1 {
      font-family: var(--big-font);
      font-size: 3.5rem;
      font-weight: 600;
      color: var(--main-color);
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }

    .hero-subtitle {
      font-size: 1.2rem;
      color: var(--medium-gray);
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .payment-methods-preview {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
      justify-content: center;

    }

    .payment-method-badge {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      border: 2px solid;
      border-radius: var(--button-radius);
      background: white;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .payment-method-badge:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-medium);
    }

    .method-logo {
      font-size: 1.5rem;
    }

    .method-name {
      font-size: 1rem;
    }

    /* ==========================================================================
       QR CODE DEMONSTRATION
       ========================================================================== */

    .hero-visual {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .qr-demo-container {
      display: flex;
      align-items: center;
      gap: 3rem;
      position: relative;
    }

    .qr-code-display {
      text-align: center;
    }

    .qr-code {
      width: 180px;
      height: 180px;
      background: white;
      border: 2px solid var(--border-gray);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--shadow-light);
      margin-bottom: 1rem;
    }

    .qr-pattern {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 2px;
      width: 120px;
      height: 120px;
    }

    .qr-dot {
      background: var(--light-gray);
      border-radius: 1px;
      transition: all 0.3s ease;
    }

    .qr-dot.filled {
      background: var(--main-color);
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.6; }
    }

    .qr-label {
      font-weight: 600;
      color: var(--main-color);
      font-size: 1.1rem;
    }

    .phone-mockup {
      width: 160px;
      height: 320px;
      background: linear-gradient(145deg, #f0f0f0, #ffffff);
      border-radius: 30px;
      border: 8px solid #333;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--shadow-heavy);
    }

    .phone-screen {
      width: 130px;
      height: 280px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .camera-viewfinder {
      width: 100px;
      height: 100px;
      border: 2px dashed rgba(255, 255, 255, 0.8);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: scanning 2s ease-in-out infinite;
    }

    @keyframes scanning {
      0%, 100% { transform: scale(1); opacity: 0.8; }
      50% { transform: scale(1.1); opacity: 1; }
    }

    .scan-overlay {
      position: relative;
      width: 80px;
      height: 80px;
    }

    .scan-corners {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .corner {
      position: absolute;
      width: 20px;
      height: 20px;
      border: 3px solid #00ff88;
    }

    .corner.top-left {
      top: 0;
      left: 0;
      border-right: none;
      border-bottom: none;
    }

    .corner.top-right {
      top: 0;
      right: 0;
      border-left: none;
      border-bottom: none;
    }

    .corner.bottom-left {
      bottom: 0;
      left: 0;
      border-right: none;
      border-top: none;
    }

    .corner.bottom-right {
      bottom: 0;
      right: 0;
      border-left: none;
      border-top: none;
    }

    /* ==========================================================================
       FEATURES GRID
       ========================================================================== */

    .features-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-top: 2rem;
    }

    .feature-item {
      text-align: center;
      padding: 1.5rem;
      border-radius: 12px;
      background: var(--light-gray);
      transition: all 0.3s ease;
    }

    .feature-item:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-medium);
    }

    .feature-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .feature-item h3 {
      color: var(--main-color);
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }

    .feature-item p {
      color: var(--medium-gray);
      font-size: 0.9rem;
    }

    /* ==========================================================================
       STEPS VISUALIZATION
       ========================================================================== */

    .steps-container {
      margin-top: 2rem;
    }

    .steps-visualization {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .step-item {
      position: relative;
      padding: 2rem;
      border-radius: 16px;
      background: var(--light-gray);
      cursor: pointer;
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }

    .step-item:hover,
    .step-item.active {
      background: #f8f4ff;
      border-color: var(--main-color);
      transform: translateY(-2px);
      box-shadow: var(--shadow-medium);
    }

    .step-number {
      position: absolute;
      top: -10px;
      left: 2rem;
      width: 30px;
      height: 30px;
      background: var(--main-color);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 0.9rem;
    }

    .step-icon {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .step-item h3 {
      color: var(--main-color);
      margin-bottom: 0.75rem;
      font-size: 1.1rem;
    }

    .step-item p {
      color: var(--medium-gray);
      line-height: 1.5;
      font-size: 0.95rem;
    }

    .step-navigation {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
    }

    .nav-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: none;
      background: var(--border-gray);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .nav-dot.active,
    .nav-dot:hover {
      background: var(--main-color);
      transform: scale(1.2);
    }

    /* ==========================================================================
       USAGE CATEGORIES
       ========================================================================== */

    .section-subtitle {
      font-size: 1.1rem;
      color: var(--medium-gray);
      margin-bottom: 2rem;
      text-align: center;
    }

    .usage-categories {
      gap: 2rem;
      margin-top: 2rem;
    }

    .category-card {
      padding: 2rem;
      background: var(--light-gray);
      border-radius: 16px;
      transition: all 0.3s ease;
    }

    .category-card:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-medium);
    }

    .category-card h3 {
      color: var(--main-color);
      margin-bottom: 0.75rem;
      font-size: 1.3rem;
    }

    .category-card p {
      color: var(--medium-gray);
      margin-bottom: 1.5rem;
    }

    .providers-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .provider-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      background: white;
      border-radius: 8px;
      transition: all 0.2s ease;
    }

    .provider-item:hover {
      box-shadow: var(--shadow-light);
      transform: translateX(5px);
    }

    .provider-logo {
      font-size: 1.5rem;
    }

    .provider-name {
      font-weight: 500;
      color: var(--main-color);
    }

    .merchant-examples {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.75rem;
    }

    .merchant-item {
      padding: 2rem 1rem;
      background: white;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: 500;
      color: var(--main-color);
      transition: all 0.2s ease;
    }

    .merchant-item:hover {
      box-shadow: var(--shadow-light);
      transform: translateX(5px);
    }

    /* ==========================================================================
       FAQ SECTION
       ========================================================================== */

    .faq-list {
      margin-top: 2rem;
    }

    .faq-item {
      border-bottom: 1px solid var(--border-gray);
      margin-bottom: 0.5rem;
    }

    .faq-question {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem;
      background: none;
      border: none;
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--main-color);
      cursor: pointer;
      text-align: left;
      transition: all 0.2s ease;
    }

    .faq-question:hover {
      color: #4c1d95;
    }

    .faq-toggle {
      font-size: 1.5rem;
      font-weight: 300;
      transition: transform 0.3s ease;
    }

    .faq-toggle.open {
      transform: rotate(180deg);
    }

    .faq-answer {
      padding-bottom: 1.5rem;
      animation: slideDown 0.3s ease;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        max-height: 0;
      }
      to {
        opacity: 1;
        max-height: 200px;
      }
    }

    .faq-answer p {
      color: var(--medium-gray);
      line-height: 1.6;
      margin: 0;
    }

    /* ==========================================================================
       CTA SECTION
       ========================================================================== */

    .cta-section {
      margin-top: 4rem;
    }

    .cta-card {
      text-align: center;
      background: linear-gradient(135deg, var(--main-color), #4c1d95);
      color: white;
      padding: 3rem 2rem;
    }

    .cta-card h2 {
      color: white;
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .cta-card p {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .learn-more-btn {
      background: transparent;
      color: white;
      border: 2px solid white;
    }

    .learn-more-btn:hover {
      background: white;
      color: var(--main-color);
    }

    /* ==========================================================================
       RESPONSIVE DESIGN
       ========================================================================== */

    @media (max-width: 1024px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 3rem;
        text-align: center;
      }
      
      .usage-categories {
        grid-template-columns: 1fr;
      }
      
      .steps-visualization {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 768px) {
      .payments-page {
        padding: 1rem 0.5rem;
      }
      
      .hero-text h1 {
        font-size: 2.5rem;
      }
      
      .features-grid {
        grid-template-columns: 1fr;
      }
      
      .payment-methods-preview {
        justify-content: center;
      }
      
      .providers-grid,
      .merchant-examples {
        grid-template-columns: 1fr;
      }
      
      .qr-demo-container {
        flex-direction: column;
        gap: 2rem;
      }
      
      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }
      
      .cta-buttons button {
        width: 200px;
      }
    }

    @media (max-width: 480px) {
      .hero-text h1 {
        font-size: 2rem;
      }
      
      .hero-subtitle {
        font-size: 1rem;
      }
      
      .payment-method-badge {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
      }
      
      .qr-code {
        width: 140px;
        height: 140px;
      }
      
      .qr-pattern {
        width: 100px;
        height: 100px;
      }
      
      .phone-mockup {
        width: 120px;
        height: 240px;
      }
      
      .phone-screen {
        width: 100px;
        height: 200px;
      }
    }
  `;

  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    
    return () => document.head.removeChild(styleSheet);
  }, []);

  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Customer Scans QR Code",
      description: "Customer uses their smartphone's camera app or a digital wallet to scan the QR code displayed by the merchant.",
      icon: "📱"
    },
    {
      title: "Payment Processing",
      description: "Customer's phone decodes the QR code and transmits the encrypted payment information to Chargily Pay™ secure payment gateway.",
      icon: "🔒"
    },
    {
      title: "Verification & Transfer",
      description: "We verify the customer's credentials and initiate a fund transfer from the customer's account to the merchant's account.",
      icon: "✅"
    },
    {
      title: "Confirmation",
      description: "Once the transaction is complete, both the customer and the merchant receive confirmation notifications.",
      icon: "🎉"
    }
  ];

  const providers = [
    { name: "Algérie Télécom" },
    { name: "Sonelgaz" },
    { name: "SEAAL" },
    { name: "ADE" }
  ];

  const faqItems = [
    {
      question: "Is Chargily Scan to Pay secure?",
      answer: "Yes, Chargily Scan to Pay uses advanced encryption and secure payment gateways to protect your financial information during every transaction."
    },
    {
      question: "Which cards are accepted?",
      answer: "We accept EDAHABIA and CIB cards for all scan to pay transactions."
    },
    {
      question: "What bills can I pay?",
      answer: "You can pay bills from major providers including Algérie Télécom, Sonelgaz, SEAAL, and ADE using our scan to pay feature."
    },
    {
      question: "Do I need to download an app?",
      answer: "No, you can use your smartphone's built-in camera app or any compatible digital wallet to scan QR codes."
    },
    {
      question: "Are there any fees for using scan to pay?",
      answer: "Transaction fees may apply depending on your payment method and the merchant. Check with your bank or payment provider for specific fee information."
    }
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="payments-page">
      {/* Hero Section */}
      <section className="payments-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Scan to Pay</h1>
            <p className="hero-subtitle">
              Enjoy the convenience and security of contactless QR code payment. 
              Easily pay your bills with Algérie Télécom, Sonelgaz, SEAAL and ADE, 
              or make purchases, all using EDAHABIA or CIB.
            </p>
            <div className="payment-methods-preview">
              <div className="payment-method-badge">
                  <span className="method-logo"><img src={APimage} alt="" style={{width: "50px",}}/></span>
                  <span className="method-name">EDAHABIA</span>
                </div>
              <div className="payment-method-badge">
                  <span className="method-logo"><img src={BPimage} alt="" style={{width: "50px",}}/></span>
                  <span className="method-name">CIB</span>
                </div>
            </div>
          </div>
          <div className="hero-visual">
            <img src={visual} alt="" />
          </div>
        </div>
      </section>

      {/* What is Scan to Pay Section */}
      <section className="what-is-section">
        <div className="card">
          <h2>What is Chargily Scan to Pay?</h2>
          <p>
            Chargily Scan to Pay is the easiest way to pay your bills in Algeria. 
            Scan your bills from Algérie Télécom, Sonelgaz, ADE, and more. 
            Accept payments with CIB and Edahabia cards. Fast, secure, and convenient.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>Fast</h3>
              <p>Quick payments in seconds</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <h3>Secure</h3>
              <p>Bank-level security</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📱</div>
              <h3>Convenient</h3>
              <p>No app download required</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="how-it-works-section">
        <div className="card">
          <h2>How does Scan to Pay work?</h2>
          <div className="steps-container">
            <div className="steps-visualization">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`step-item ${activeStep === index ? 'active' : ''}`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="step-number">{index + 1}</div>
                  <div className="step-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  {index < steps.length - 1 && <div className="step-connector"></div>}
                </div>
              ))}
            </div>
            <div className="step-navigation">
              {steps.map((_, index) => (
                <button
                  key={index}
                  className={`nav-dot ${activeStep === index ? 'active' : ''}`}
                  onClick={() => setActiveStep(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Where to Use Section */}
      <section className="where-to-use-section">
        <div className="card" style={{display: "grid",}}>
          <h2>Where can I use Scan to Pay?</h2>
          <p className="section-subtitle">
            Pay your way, scan, and done. Scan to pay is accepted at a wide range of locations.
          </p>
          
          <div className="usage-categories">
            <div className="category-card">
              <h3>Bill Payments</h3>
              <p>Conveniently settle your bills with major providers</p>
              <div className="providers-grid">
                <div className="provider-item">
                    <div className="provider-logo"><img src={at} alt="" style={{width: "50px",}}/></div>
                    <span className="provider-name">Algerie Telecom</span>
                  </div>
                  <div className="provider-item">
                    <div className="provider-logo"><img src={sonelgaz} alt="" style={{width: "50px",}}/></div>
                    <span className="provider-name">Sonelgaz</span>
                  </div>
                  <div className="provider-item">
                    <div className="provider-logo"><img src={seaal} alt="" style={{width: "50px",}}/></div>
                    <span className="provider-name">SEAAL</span>
                  </div>
                  <div className="provider-item">
                    <div className="provider-logo"><img src={ade} alt="" style={{width: "50px",}}/></div>
                    <span className="provider-name">ADE</span>
                  </div>
              </div>
            </div>
            
            <div className="category-card">
              <h3>Merchant Purchases</h3>
              <p>Effortlessly make purchases at various merchants</p>
              <div className="merchant-examples">
                <div className="merchant-item">🛒 Retail Stores</div>
                <div className="merchant-item">🍽️ Restaurants</div>
                <div className="merchant-item">⛽ Gas Stations</div>
                <div className="merchant-item">🏪 Convenience Stores</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="card">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{item.question}</span>
                  <span className={`faq-toggle ${openFaqIndex === index ? 'open' : ''}`}>
                    {openFaqIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="card cta-card">
          <h2>Ready to start using Scan to Pay?</h2>
          <p>Join thousands of satisfied customers who trust Chargily for their payment needs.</p>
          <div className="cta-buttons">
             <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Payments;