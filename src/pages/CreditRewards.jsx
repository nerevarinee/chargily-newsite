import React from "react";

import exmImage1 from "../assets/creditsrewards1.png";
import exmImage2 from "../assets/creditsrewards12.svg";

function CreditRewards() {
  return (
    <div className="page">
      <div className="container" style={{ maxWidth: "1200px" }}>
        {/* Hero Section */}
        <section style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h1
            style={{
              fontSize: "3rem",
              color: "var(--main-color)",
              fontFamily: "var(--big-font)",
              marginBottom: "1rem",
              fontWeight: "600",
            }}
          >
            Credit & Rewards Program
          </h1>
          <p
            style={{
              fontSize: "1.3rem",
              color: "var(--medium-gray)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Earn credits with every transaction and unlock exclusive rewards
            with Chargily's loyalty program
          </p>
        </section>

        {/* How It Works Section */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "2.2rem",
              color: "var(--main-color)",
              fontFamily: "var(--big-font)",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            How It Works
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            <div className="card" style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#f3e8ff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  fontSize: "2rem",
                }}
              >
                💳
              </div>
              <h3 style={{ color: "var(--main-color)", marginBottom: "1rem" }}>
                Make Transactions
              </h3>
              <p style={{ color: "var(--medium-gray)", lineHeight: "1.6" }}>
                Earn 1 credit for every 100 DA spent using Chargily Pay for your
                online purchases and bill payments
              </p>
            </div>

            <div className="card" style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#f3e8ff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  fontSize: "2rem",
                }}
              >
                ⭐
              </div>
              <h3 style={{ color: "var(--main-color)", marginBottom: "1rem" }}>
                Accumulate Credits
              </h3>
              <p style={{ color: "var(--medium-gray)", lineHeight: "1.6" }}>
                Watch your credits grow automatically with each transaction. No
                complex rules or hidden requirements
              </p>
            </div>

            <div className="card" style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#f3e8ff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  fontSize: "2rem",
                }}
              >
                🎁
              </div>
              <h3 style={{ color: "var(--main-color)", marginBottom: "1rem" }}>
                Redeem Rewards
              </h3>
              <p style={{ color: "var(--medium-gray)", lineHeight: "1.6" }}>
                Use your credits for account top-ups, transaction fee discounts,
                or exclusive partner offers
              </p>
            </div>
          </div>
        </section>

        {/* How to Earn Chargily Credit Section */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "2.2rem",
              color: "var(--main-color)",
              fontFamily: "var(--big-font)",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            How to Earn Chargily Credit (CC)
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {/* Purchases */}
            <div
              className="card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  fontSize: "3rem",
                  minWidth: "80px",
                  textAlign: "center",
                }}
              >
                💳
              </div>
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    color: "var(--main-color)",
                    marginBottom: "1rem",
                    fontSize: "1.5rem",
                  }}
                >
                  Purchases
                </h3>
                <p
                  style={{
                    color: "var(--medium-gray)",
                    lineHeight: "1.6",
                    fontSize: "1.1rem",
                    margin: 0,
                  }}
                >
                  Every time you use the Chargily app for transactions like
                  mobile top-ups, bill payments, or sending money, you will earn
                  Chargily CREDIT (CC).
                </p>
              </div>
            </div>

            {/* Rewards */}
            <div
              className="card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  fontSize: "3rem",
                  minWidth: "80px",
                  textAlign: "center",
                }}
              >
                🏆
              </div>
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    color: "var(--main-color)",
                    marginBottom: "1rem",
                    fontSize: "1.5rem",
                  }}
                >
                  Rewards
                </h3>
                <p
                  style={{
                    color: "var(--medium-gray)",
                    lineHeight: "1.6",
                    fontSize: "1.1rem",
                    margin: 0,
                  }}
                >
                  Every time you level up in the Chargily app, you earn Chargily
                  Credit (CC) as a token of appreciation for your continued
                  loyalty. The more you interact with the app and climb the
                  ranks, the more (CC) you earn, making your Chargily experience
                  even more rewarding.
                </p>
              </div>
              <div
                style={{
                  minWidth: "200px",
                  height: "150px",
                  backgroundColor: "#f3e8ff",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  color: "var(--main-color)",
                  fontWeight: "600",
                  textAlign: "center",
                  border: "2px dashed var(--main-color)",
                }}
              >
                <img src={exmImage1} alt="AT&T" className="network-logos" />
                <br />
                Level Up Rewards
                <br />
                📊 +50 CC
              </div>
            </div>
          </div>
        </section>

        {/* How to Use Chargily Credit Section */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "2.2rem",
              color: "var(--main-color)",
              fontFamily: "var(--big-font)",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            How to Use Chargily Credit (CC)
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {/* Payments */}
            <div
              className="card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  fontSize: "3rem",
                  minWidth: "80px",
                  textAlign: "center",
                }}
              >
                💰
              </div>
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    color: "var(--main-color)",
                    marginBottom: "1rem",
                    fontSize: "1.5rem",
                  }}
                >
                  Payments
                </h3>
                <p
                  style={{
                    color: "var(--medium-gray)",
                    lineHeight: "1.6",
                    fontSize: "1.1rem",
                    margin: 0,
                  }}
                >
                  You can use your Chargily CREDIT (CC) to make various
                  payments, including mobile top-ups, charge games and online
                  purchases…
                </p>
              </div>
            </div>

            {/* Sharing */}
            <div
              className="card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  fontSize: "3rem",
                  minWidth: "80px",
                  textAlign: "center",
                }}
              >
                👥
              </div>
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    color: "var(--main-color)",
                    marginBottom: "1rem",
                    fontSize: "1.5rem",
                  }}
                >
                  Sharing
                </h3>
                <p
                  style={{
                    color: "var(--medium-gray)",
                    lineHeight: "1.6",
                    fontSize: "1.1rem",
                    margin: 0,
                  }}
                >
                  You can share your Chargily CREDIT (CC) with friends and
                  family.
                </p>
              </div>
              <div
                style={{
                  minWidth: "200px",
                  height: "150px",
                  backgroundColor: "#f3e8ff",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  color: "var(--main-color)",
                  fontWeight: "600",
                  textAlign: "center",
                  border: "2px dashed var(--main-color)",
                }}
              >
                Example Image
                <br />
                Share CC
                <br />
                👥 → 💰
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            textAlign: "center",
            backgroundColor: "#f8f9fa",
            padding: "4rem 2rem",
            borderRadius: "var(--border-radius)",
            marginBottom: "2rem",
          }}
        >
          <h2
            style={{
              fontSize: "2.2rem",
              color: "var(--main-color)",
              fontFamily: "var(--big-font)",
              marginBottom: "1rem",
            }}
          >
            Ready to Start Earning?
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "var(--medium-gray)",
              maxWidth: "500px",
              margin: "0 auto 2rem",
              lineHeight: "1.6",
            }}
          >
            Join thousands of users already earning credits with every
            transaction. Sign up today and start your rewards journey.
          </p>
          <button
            className="get-chargily-btn"
            style={{
              backgroundColor: "var(--main-color)",
              color: "white",
              border: "none",
              padding: "1rem 2.5rem",
              fontSize: "1.1rem",
              fontWeight: "600",
              borderRadius: "var(--button-radius)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Get Started with Chargily
          </button>
        </section>
      </div>
    </div>
  );
}

export default CreditRewards;
