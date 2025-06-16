import React from "react";

function FeesPricing() {
  const pricingPlans = [
    {
      name: "Starter",
      price: "0% Fee",
      description: "Perfect for small businesses getting started",
      features: [
        "O% of commissions",
        "300 000,00 DZD Maximum Amount of payments per Month",
        "300 Maximum number transactions per Month",
        "Basic analytics",
        "1 Free Payout per Month",
      ],
      highlighted: false,
      buttonText: "Get Started",
    },
    {
      name: "Professional",
      price: "1.25% Fee",
      description: "Ideal for growing businesses",
      features: [
        "1.25% de commission",
        "Unlimited Amount per Month",
        "Nombre de transactions illimités/mois",
        "2 Free Payouts per Month",
        "Advanced payment processing",
        "Advanced analytics & reporting",
      ],
      highlighted: true,
      buttonText: "Start Free Trial",
    },
    {
      name: "Enterprise",
      price: "2.5% Fee",
      description: "For large-scale operations",
      features: [
        "2.5% de commission",
        "Unlimited Number of Free Payouts per Month",
        "Unlimited transactions",
        "Unlimited Amount per Month",
        "Custom integrations",
        "Advanced security features",
      ],
      highlighted: false,
      buttonText: "Contact Sales",
    },
  ];

  const transactionFees = [
    {
      service: "Online Payments",
      domestic: "2.9% + 30 DZD",
      international: "3.4% + 30 DZD",
    },
    {
      service: "Payment Links",
      domestic: "2.9% + 30 DZD",
      international: "3.4% + 30 DZD",
    },
    {
      service: "Vouchers",
      domestic: "1.5% + 15 DZD",
      international: "N/A",
    },
    {
      service: "Top-up Services",
      domestic: "1.0% (min 10 DZD)",
      international: "N/A",
    },
  ];

  return (
    <div className="fees-pricing-page">
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="container">
          <h1>Simple, Transparent Pricing</h1>
          <p>
            Choose the perfect plan for your business. No hidden fees, no
            surprises.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pricing-plans">
        <div className="container">
          <div className="plans-grid">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card ${
                  plan.highlighted ? "highlighted" : ""
                }`}
              >
                {plan.highlighted && (
                  <div className="popular-badge">Most Popular</div>
                )}

                <div className="plan-header">
                  <h3>{plan.name}</h3>
                  <div className="price">
                    <span className="amount">{plan.price}</span>
                    {plan.period && (
                      <span className="period">{plan.period}</span>
                    )}
                  </div>
                  <p className="description">{plan.description}</p>
                </div>

                <div className="plan-features">
                  <ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <span className="checkmark">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`plan-button ${
                    plan.highlighted ? "primary" : "secondary"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transaction Fees */}
      <section className="transaction-fees">
        <div className="container">
          <h2>Transaction Fees</h2>
          <p>Transparent pricing for all payment methods</p>

          <div className="fees-table-container">
            <table className="fees-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Domestic Transactions</th>
                  <th>International Transactions</th>
                </tr>
              </thead>
              <tbody>
                {transactionFees.map((fee, index) => (
                  <tr key={index}>
                    <td className="service-name">{fee.service}</td>
                    <td>{fee.domestic}</td>
                    <td>{fee.international}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="pricing-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h3>No Setup Fees</h3>
              <p>
                Get started immediately with no upfront costs or setup fees.
              </p>
            </div>
            <div className="info-card">
              <h3>No Monthly Minimums</h3>
              <p>
                Pay only for what you use. No minimum transaction requirements.
              </p>
            </div>
            <div className="info-card">
              <h3>Instant Payouts</h3>
              <p>
                Get your money fast with next-day payouts to your bank account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Offer Download */}
      <section className="commercial-offer">
        <div className="container">
          <div className="offer-card">
            <h2>Need a Detailed Commercial Offer?</h2>
            <p>
              Download our comprehensive commercial offer document with detailed
              pricing, terms, and conditions.
            </p>
            <button
              className="download-btn-pdf"
              onClick={() =>
                window.open("/assets/chargily-commercial-offer.pdf", "_blank")
              }
            >
              <span className="download-icon">📄</span>
              Download Commercial Offer PDF
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section 
      <section className="pricing-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>What are the transaction fees for domestic payments?</h4>
              <p>
                For online payments and payment links, we charge 2.9% + 30 DZD.
                Vouchers are 1.5% + 15 DZD, and top-up services are 1.0% with a
                minimum of 10 DZD.
              </p>
            </div>
            <div className="faq-item">
              <h4>How do payouts work?</h4>
              <p>
                You get a certain number of free payouts each month. After
                exceeding the limit, a 1.5% commission applies (minimum 150 DA)
                on withdrawal amounts.
              </p>
            </div>
            <div className="faq-item">
              <h4>Are there any setup or monthly fees?</h4>
              <p>
                No setup fees or monthly minimums. You only pay for successful
                transactions and payouts beyond your free allocation.
              </p>
            </div>
            <div className="faq-item">
              <h4>Can I upgrade my plan if I exceed transaction limits?</h4>
              <p>
                Yes, contact us when you exceed your current plan's limits to
                upgrade to our Comfort or Supreme offers for better rates.
              </p>
            </div>
            <div className="faq-item">
              <h4>What payment methods do you support?</h4>
              <p>
                We support all major Algerian payment methods including CIB,
                EDAHABIA, credit cards, and bank transfers.
              </p>
            </div>
            <div className="faq-item">
              <h4>How quickly are funds transferred to my account?</h4>
              <p>
                Payouts are processed within 24-48 hours to your registered bank
                account, depending on your bank's processing time.
              </p>
            </div>
            <div className="faq-item">
              <h4>Is there a minimum or maximum payout amount?</h4>
              <p>
                Commission minimums vary: 12.5 DA to 1250 DA maximum, or 25 DA
                to 2500 DA maximum, depending on your plan tier.
              </p>
            </div>
            <div className="faq-item">
              <h4>Do you offer customer support?</h4>
              <p>
                Yes, we provide email support for all plans, priority support
                for Professional plans, and dedicated account managers for
                Enterprise clients.
              </p>
            </div>
          </div>
        </div>
      </section>*/}

      {/* CTA Section */}
      <section className="pricing-cta">
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>Join thousands of businesses already using Chargily</p>
          <div className="cta-buttons">
            <button className="cta-primary">Start Free Trial</button>
            <button className="cta-secondary">Contact Sales</button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .fees-pricing-page {
          font-family: var(--main-font);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Hero Section */
        .pricing-hero {
          background: linear-gradient(
            135deg,
            var(--main-color) 0%,
            #8f6bce 100%
          );
          border-radius: 25px;
          color: white;
          padding: 4rem 0;
          text-align: center;
        }

        .pricing-hero h1 {
          font-size: 3rem;
          font-weight: 600;
          margin-bottom: 1rem;
          font-family: var(--big-font);
        }

        .pricing-hero p {
          font-size: 1.25rem;
          opacity: 0.9;
        }

        /* Pricing Plans */
        .pricing-plans {
          padding: 4rem 0;
          background: var(--light-gray);
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .pricing-card {
          background: white;
          border-radius: var(--border-radius);
          padding: 2rem;
          box-shadow: var(--shadow-medium);
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-heavy);
        }

        .pricing-card.highlighted {
          border: 3px solid var(--main-color);
          transform: scale(1.05);
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--main-color);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: var(--button-radius);
          font-size: 0.875rem;
          font-weight: 600;
        }

        .plan-header h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--main-color);
        }

        .price {
          margin-bottom: 1rem;
        }

        .price .amount {
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--main-color);
        }

        .price .period {
          font-size: 1rem;
          color: var(--medium-gray);
        }

        .description {
          color: var(--medium-gray);
          margin-bottom: 2rem;
        }

        .plan-features ul {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
        }

        .plan-features li {
          padding: 0.5rem 0;
          display: flex;
          align-items: center;
        }

        .checkmark {
          color: #10b981;
          font-weight: bold;
          margin-right: 0.75rem;
          width: 20px;
        }

        .plan-button {
          width: 100%;
          padding: 1rem;
          border: none;
          border-radius: var(--button-radius);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .plan-button.primary {
          background: var(--main-color);
          color: white;
        }

        .plan-button.primary:hover {
          background: #5a0f87;
        }

        .plan-button.secondary {
          background: transparent;
          color: var(--main-color);
          border: 2px solid var(--main-color);
        }

        .plan-button.secondary:hover {
          background: var(--main-color);
          color: white;
        }

        /* Transaction Fees */
        .transaction-fees {
          padding: 4rem 0;
        }

        .transaction-fees h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--main-color);
          font-family: var(--big-font);
        }

        .transaction-fees > .container > p {
          text-align: center;
          color: var(--medium-gray);
          margin-bottom: 3rem;
        }

        .fees-table-container {
          overflow-x: auto;
          box-shadow: var(--shadow-medium);
          border-radius: var(--border-radius);
        }

        .fees-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
        }

        .fees-table th,
        .fees-table td {
          padding: 1rem 1.5rem;
          text-align: left;
          border-bottom: 1px solid var(--border-gray);
        }

        .fees-table th {
          background: var(--light-gray);
          font-weight: 600;
          color: var(--main-color);
        }

        .service-name {
          font-weight: 600;
        }

        /* Payouts Section */
        .payouts-section {
          padding: 4rem 0;
          background: white;
        }

        .payouts-section h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: var(--main-color);
          font-family: var(--big-font);
        }

        .payouts-info {
          max-width: 800px;
        }

        .payout-main {
          font-size: 1.125rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: var(--light-gray);
          border-radius: var(--border-radius);
          border-left: 4px solid var(--main-color);
        }

        .remarks {
          background: white;
          border: 1px solid var(--border-gray);
          border-radius: var(--border-radius);
          padding: 2rem;
        }

        .remarks h3 {
          color: var(--main-color);
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }

        .remarks ol {
          margin: 0;
          padding-left: 1.5rem;
        }

        .remarks li {
          margin-bottom: 0.75rem;
          line-height: 1.5;
          color: #333;
        }

        .remarks li:last-child {
          margin-bottom: 0;
        }

        /* Additional Info */
        .pricing-info {
          padding: 4rem 0;
          background: var(--light-gray);
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .info-card {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius);
          text-align: center;
          box-shadow: var(--shadow-light);
        }

        .info-card h3 {
          color: var(--main-color);
          margin-bottom: 1rem;
        }

        /* Commercial Offer Section */
        .commercial-offer {
          padding: 4rem 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .offer-card {
          background: white;
          padding: 3rem;
          border-radius: var(--border-radius);
          text-align: center;
          box-shadow: var(--shadow-medium);
          max-width: 600px;
          margin: 0 auto;
        }

        .offer-card h2 {
          color: var(--main-color);
          margin-bottom: 1rem;
          font-family: var(--big-font);
        }

        .offer-card p {
          color: var(--medium-gray);
          margin-bottom: 2rem;
          font-size: 1.125rem;
        }

        .download-btn-pdf {
          background: var(--main-color);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: var(--button-radius);
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          min-width: 300px;
        }

        .download-btn-pdf:hover {
          background: #5a0f87;
          transform: translateY(-2px);
          box-shadow: var(--shadow-medium);
        }

        .download-icon {
          font-size: 1.25rem;
        }

        /* FAQ */
        .pricing-faq {
          padding: 4rem 0;
        }

        .pricing-faq h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: var(--main-color);
          font-family: var(--big-font);
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .faq-item h4 {
          color: var(--main-color);
          margin-bottom: 0.5rem;
        }

        .faq-item p {
          color: var(--medium-gray);
        }

        /* CTA Section */
        .pricing-cta {
          background: linear-gradient(
            135deg,
            var(--main-color) 0%,
            #8f6bce 100%
          );
          border-radius: 20px;
          color: white;
          padding: 4rem 0;
          text-align: center;
        }

        .pricing-cta h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-family: var(--big-font);
        }

        .pricing-cta p {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-primary,
        .cta-secondary {
          padding: 1rem 2rem;
          border: none;
          border-radius: var(--button-radius);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-primary {
          background: white;
          color: var(--main-color);
        }

        .cta-primary:hover {
          background: var(--light-gray);
        }

        .cta-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .cta-secondary:hover {
          background: white;
          color: var(--main-color);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .pricing-hero h1 {
            font-size: 2rem;
          }

          .plans-grid {
            grid-template-columns: 1fr;
          }

          .pricing-card.highlighted {
            transform: none;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-primary,
          .cta-secondary {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  );
}

export default FeesPricing;
