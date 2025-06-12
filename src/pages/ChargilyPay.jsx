import React from "react";

import dbMock from "../assets/checkout.png";
import APimage from "../assets/AlgeriePoste.png";
import Visaimage from "../assets/Visa.png";
import MCimage from "../assets/mastercard.jpg";
import BPimage from "../assets/baridipay.png";

function ChargilyPay() {
  return (
    <div className="chargily-pay-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Do business with Chargily Pay</h1>
            <p>
              Accept more payment methods through the app, online, and in
              person, tapping into an active community with millions of
              potential customers.
            </p>
            <button className="get-started-btn">Get Started</button>
          </div>
          {/*<div className="hero-image">
              
            <div className="dashboard-mockup">
              <div className="dashboard-header">
                <div className="dashboard-nav">
                  <span>Dashboard</span>
                  <span>Analytics</span>
                  <span>Payments</span>
                  <span>Settings</span>
                </div>
              </div>
              <div className="dashboard-content">
                <div className="stats-cards">
                  <div className="stat-card">
                    <h3>Total Revenue</h3>
                    <p className="stat-number">$24,567</p>
                  </div>
                  <div className="stat-card">
                    <h3>Transactions</h3>
                    <p className="stat-number">1,234</p>
                  </div>
                </div>
                <div className="transaction-list">
                  <div className="transaction-item">
                    <div className="transaction-icon"></div>
                    <div className="transaction-details">
                      <span>Payment received</span>
                      <span className="amount">+$89.00</span>
                    </div>
                  </div>
                  <div className="transaction-item">
                    <div className="transaction-icon"></div>
                    <div className="transaction-details">
                      <span>Payment received</span>
                      <span className="amount">+$156.00</span>
                    </div>
                  </div>
                </div>
                <button className="continue-btn">Continue</button>
              </div>
            </div>
          </div>*/}
        </div>
      </section>
      <div>
        <img
          style={{
            margin: "0px 130px 50px",
          }}
          src={dbMock}
          alt="DashBoard"
        />
      </div>
      {/* Accept Chargily Section */}
      <section className="accept-section">
        <div className="section-content">
          <div className="section-image">
            <div className="laptop-mockup">
              <div className="laptop-screen">
                <div className="online-store">
                  <div className="store-header">
                    <span>tarlet</span>
                    <div className="store-nav">
                      <span>Shop</span>
                      <span>Journal</span>
                      <span>About us</span>
                      <span>Contact</span>
                    </div>
                  </div>
                  <div className="shopping-cart">
                    <h2>Shopping Cart.</h2>
                    <div className="cart-items">
                      <div className="cart-item">
                        <div className="item-image orange"></div>
                        <span>Sandqvist</span>
                        <span>$110.99</span>
                      </div>
                      <div className="cart-item">
                        <div className="item-image green"></div>
                        <span>Sandqvist</span>
                        <span>$159.99</span>
                      </div>
                    </div>
                    <div className="cart-total">
                      <span>Total: $470.98</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="credit-card">
                <div className="card-stripe"></div>
                <div className="card-chip"></div>
                <div className="card-number">•••• •••• ••••</div>
                <div className="mastercard-logo">
                  <div className="circle red"></div>
                  <div className="circle yellow"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-text">
            <h2>Accept Chargily in your apps and Online.</h2>
            <p>
              Use our prebuilt checkout page, or integrate our JavaScript SDK
              for a seamless, scalable experience. Develop an online
              marketplace, on-demand service, or ecommerce store. We make it
              easy for you to get started.
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* Payment Links Section */}
      <section className="payment-links-section">
        <div className="section-content">
          <div className="section-text">
            <h2>No online store needed. Simplify payments with links</h2>
            <p>
              Share a direct payment link with your customers. No coding or
              technical setup required. Perfect for social media selling, email
              campaigns, or any situation where you need a quick way to request
              payment from customers.
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="section-image">
            <div className="mobile-mockup">
              <div className="mobile-screen">
                <div className="mobile-card">
                  <div className="card-visual">
                    <div className="card-bg"></div>
                    <div className="card-stripe-mobile"></div>
                    <div className="card-details">
                      <div className="card-lines">
                        <div className="line long"></div>
                        <div className="line medium"></div>
                        <div className="line short"></div>
                      </div>
                    </div>
                  </div>
                  <div className="link-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="payment-methods-section">
        <div className="section-content-center">
          <h2>We Accept Multiple Payment Methods</h2>
          <div className="payment-icons-cp">
            <div className="payment-icon-cp">
              <img src={APimage} alt="Algerie Poste" />
            </div>
            <div className="payment-icon-cp">
              <img src={Visaimage} alt="Visa" />
            </div>
            <div className="payment-icon-cp">
              <img src={BPimage} alt="Baridi Pay" />
            </div>
            <div className="payment-icon-cp">
              <img src={MCimage} alt="Mastercard" />
            </div>
          </div>
          <button className="get-started-btn">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-content-center">
          <h2>Transparent Pricing: No Subscription, No Hidden Fees</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z"
                  />
                </svg>
              </div>
              <h3>Unlimited Number of Payouts</h3>
              <p>Streamlined checkout process for better user experience</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                  />
                </svg>
              </div>
              <h3>Free API Access</h3>
              <p>Lightning-fast payment processing and real-time updates</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  className="w-[30px] h-[30px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
                  />
                </svg>
              </div>
              <h3>Transaction Fees reduced down to 0%</h3>
              <p>Simple dashboard for managing customers and transactions</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Free & Open source Plugins</h3>
              <p>Access to comprehensive plugin library at no extra cost</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ChargilyPay;
