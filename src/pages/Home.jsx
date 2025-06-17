// src/pages/Home.jsx

import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Empowering Payment<br />Enriching E-Commerce</h1>
            <p>Your Gateway to Digital Payments in Algeria</p>
            <div className="hero-buttons">
              <Link to="/chargily-pay" className="btn-get-started">Get Started</Link>
              <Link to="/about-us" className="btn-learn-more">Learn More</Link>
            </div>
          </div>
          <div className="hero-phone">
            <div className="phone-mockup">
              📱 Phone App Interface
            </div>
          </div>
        </div>
        
        {/* Bottom navigation icons */}
        <div className="hero-nav-icons">
          <div className="nav-icon">💳</div>
          <div className="nav-icon">📱</div>
          <div className="nav-icon">🏪</div>
          <div className="nav-icon">💰</div>
        </div>
      </section>

      {/* Three Column Features */}
      <section className="three-features">
        <div className="features-container">
          <div className="feature-col">
            <div className="feature-image">
              👤 Customer Service Image
            </div>
            <h3>Your Gateway to Digital Payments in Algeria</h3>
            <p>Connect with customers through seamless digital payment solutions designed for the Algerian market.</p>
          </div>
          
          <div className="feature-col">
            <div className="feature-image">
              💳 Payment Cards Image
            </div>
            <h3>Multiple Payment Methods</h3>
            <p>Accept all major payment types including credit cards, mobile payments, and local banking solutions.</p>
          </div>
          
          <div className="feature-col">
            <div className="feature-image">
              🌐 Global Network Image
            </div>
            <h3>Secure & Reliable</h3>
            <p>Built with international security standards while supporting local payment preferences.</p>
          </div>
        </div>
      </section>

      {/* Local Payments Global Standards */}
      <section className="local-global-section">
        <div className="section-container">
          <div className="content-left">
            <div className="people-image">
              👥 Business People Image
            </div>
          </div>
          <div className="content-right">
            <h2>Local Payments, Global Standards.</h2>
            <h3>Fast, safe, easy payments</h3>
            <p>Experience the perfect blend of local convenience and international security standards. Our platform ensures fast, reliable transactions that meet global compliance requirements.</p>
            <div className="payment-logos">
              <div className="logo-item">VISA</div>
              <div className="logo-item">💳</div>
              <div className="logo-item">🏦</div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Terminals Section */}
      <section className="terminals-section">
        <div className="section-container">
          <div className="content-left">
            <h2>Smart Terminals,<br />Smarter Business.</h2>
            <p>Revolutionize your business operations with our intelligent payment terminals. Designed for modern commerce with seamless integration and real-time analytics.</p>
            <Link to="/chargily-pay" className="btn-learn-more">Learn More</Link>
          </div>
          <div className="content-right">
            <div className="terminal-image">
              🖥️ Smart Terminal Device
            </div>
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="api-section">
        <div className="section-container">
          <div className="content-left">
            <div className="api-image">
              💻 API Dashboard Interface
            </div>
          </div>
          <div className="content-right">
            <h2>Powering Algerian Businesses with Seamless Payments</h2>
            <h3>Supercharge with Our Powerful Payment API</h3>
            <p>Transform your business with our comprehensive payment solutions. Our developer-friendly API makes integration simple and scalable.</p>
            <Link to="/chargily-pay" className="btn-get-started">Get Started</Link>
          </div>
        </div>
      </section>

      {/* Payment Methods Footer */}
      <section className="payment-methods-footer">
        <div className="methods-container">
          <h2>Payment Made Easy - For You and Your Customers</h2>
          <div className="payment-icons">
            <div className="payment-method">
              <div className="method-icon">💳</div>
              <span>Cards</span>
            </div>
            <div className="payment-method">
              <div className="method-icon">📱</div>
              <span>Mobile</span>
            </div>
            <div className="payment-method">
              <div className="method-icon">💰</div>
              <span>Wallet</span>
            </div>
            <div className="payment-method">
              <div className="method-icon">🏦</div>
              <span>Banking</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;