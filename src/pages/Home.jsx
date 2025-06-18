import React, { useState } from "react";
import { Link } from "react-router-dom";

import adeBlack from "../assets/ade-black.png";
import baridiBlack from "../assets/baridi-black.png";
import cbBlack from "../assets/cb-black.png";
import djezzyBlack from "../assets/djezzy-black.png";
import mobilisBlack from "../assets/mobilis-black.png";
import ooredooBlack from "../assets/ooredoo-black.png";
import giftcards from "../assets/Giftcards-100.jpg";
import handwithphone from "../assets/hand-holding-phone2.png";
import manwithphone from "../assets/manholdingphone.png";
import onlinepayment from "../assets/online-payment-stock.jpg";
import seaalBlack from "../assets/seaal-black.png";
import sonelgazBlack from "../assets/sonalgaz-black.png";
//import telecomBlack from "../assets/telecom-black.png";
import visaBlack from "../assets/visa-black.png";
import mcBlack from "../assets/master-black.png";
import groupofpeople from "../assets/group-people.jpg";
import paybyscan from "../assets/paybyscan.jpg";
import paybyscan2 from "../assets/paybyscan2.jpg";
import api from "../assets/open-source.webp";


function Home() {
  const contentSets = {
  option1: [
    {
      title: 'Topup',
      text: 'Easily recharge your mobile phone credit and send top-ups to friends and family.',
      image: manwithphone
    },
    {
      title: 'Vouchers',
      text: 'Get the best deals on Prepaid Cards to recharge your Internet subscription like Idoom ADSL or 4G. Enjoy gaming perks with Free Fire and PUBG Mobile vouchers, and explore entertainment with Netflix offers.',
      image: giftcards
    },
    {
      title: 'Payments',
      text: 'Easily recharge your mobile phone credit and send top-ups to friends and family.',
      image: onlinepayment
    },
  ],
  option2: [
    {
      title: 'Chargily Pay',
      text: 'E-payment Gateway',
    },
    {
      title: 'Payment Links',
      text: 'With payment links, you can simplify the process of collecting payments from clients without any need for an online store',
    },
    {
      title: 'Fast Transactions',
      text: 'Lightning-fast payment confirmations and smooth checkout.',
    },
  ],
  option3: [
    {
      title: 'API',
      text: 'Optimize Your Payments with Our API—Effortless Integration, Exceptional Performance',
    },
    {
      title: 'Documentation',
      text: 'To ensure a seamless integration and effective use of our payment automation system, we provide comprehensive documentation.',
    },
    {
      title: 'Custom Integrations',
      text: 'Easily integrate with your existing tools and systems.',
    },
  ],
};
  
 const [selected, setSelected] = useState("option1");
  return (
    <>
      <style>
        {`
          /* ==========================================================================
             HOME PAGE STYLES - MATCHING DESIGN
             ========================================================================== */

          .homepage {
            padding: 0;
            margin: 0;
            background-color: #fff;
          }

         /* HeroSection.css */
.hero-section {
  background-color: #f2ebf8;
  text-align: center;
  padding: 4rem 1rem 0rem;
  border-radius: 10px;
}

.hero-text h1 {
  font-size: 3.5rem;
  font-weight: bold;
  color: #3c0068;
  line-height: 1.4;
  margin-bottom: 0.2rem;
}

.hero-image img {
  max-width: 290px;
  height: auto;
  margin: 0 auto;
  display: block;
  border-radius: 10px;
}

.logo-strip {
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
  padding: 2rem;
  border-top: 1px solid #ccc;
  background-color: #ccc;

}

.logo-strip img {
  height: 40px;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.8;
  transition: all 0.3s ease;
}

.logo-strip img:hover {
  filter: grayscale(0%);
  opacity: 1;
}


          .btn-get-started, .btn-learn-more {
            padding: 1rem 2.5rem;
            border-radius: 50px;
            font-weight: 600;
            text-decoration: none;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            display: inline-block;
            border: 2px solid transparent;
          }

          .btn-get-started {
            background-color: white;
            color: #8B5CF6;
          }

          .btn-get-started:hover {
            background-color: transparent;
            color: white;
            border-color: white;
          }

          .btn-learn-more {
            background-color: transparent;
            color: white;
            border-color: white;
          }

          .btn-learn-more:hover {
            background-color: white;
            color: #8B5CF6;
          }

          .hero-phone {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .phone-mockup {
            width: 280px;
            height: 500px;
            background: rgba(255, 255, 255, 0.15);
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-radius: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            font-weight: 600;
            text-align: center;
            backdrop-filter: blur(10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          }

          .hero-nav-icons {
            display: flex;
            justify-content: center;
            gap: 3rem;
            padding: 2rem 0;
            margin-top: 2rem;
          }

          .nav-icon {
            width: 60px;
            height: 60px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }

          /* Three Features Section */
          .three-features {
  padding: 3rem 1rem;
  text-align: center;
  background-color: #f5f0fc;
  border-radius: 8px;
}

.feature-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.feature-buttons button {
  padding: 0.6rem 1.2rem;
  border: 1px solid #641299;
  background: white;
  color: #641299;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s;
}

.feature-buttons button:hover {
  background-color: #eee;
}

.feature-buttons button.active {
  background-color: #641299;
  color: white;
}

.features-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.feature-col {
  flex: 1 1 250px;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s;
}

.feature-col:hover {
  transform: translateY(-5px);
}

.feature-image img {
  max-width: 80%;
  height: 180px;
  object-fit: contain;
  margin-bottom: 1rem;
  border-radius: 15px;
}



          /* Section Container */
          .section-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
          }

          /* Local Global Section */
          .local-global-section {
            padding: 5rem 0;
            background-color: white;
          }

          .people-image {
            width: 100%;
            height: 400px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            font-weight: 600;
          }

          .content-right h2 {
            font-family: var(--big-font);
            font-size: 2.8rem;
            color: #1F2937;
            margin-bottom: 1rem;
            font-weight: 700;
            line-height: 1.2;
          }

          .content-right h3 {
            font-size: 1.8rem;
            color: #8B5CF6;
            margin-bottom: 1.5rem;
            font-weight: 600;
          }

          .content-right p {
            color: #6B7280;
            font-size: 1.1rem;
            line-height: 1.7;
            margin-bottom: 2rem;
          }

          .payment-logos {
            display: flex;
            gap: 2rem;
            align-items: center;
          }

          .logo-item {
            padding: 0.8rem 1.5rem;
            background: #F3F4F6;
            border-radius: 8px;
            font-weight: 600;
            color: #374151;
            font-size: 1.1rem;
          }

          /* Smart Terminals Section */
          .terminals-section {
            padding: 5rem 0;
            background-color: #F8FAFC;
          }

          .content-left h2 {
            font-family: var(--big-font);
            font-size: 2.8rem;
            color: #1F2937;
            margin-bottom: 1.5rem;
            font-weight: 700;
            line-height: 1.2;
          }

          .content-left p {
            color: #6B7280;
            font-size: 1.1rem;
            line-height: 1.7;
            margin-bottom: 2.5rem;
          }

          .terminal-image {
            width: 100%;
            height: 350px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            font-weight: 600;
          }

          /* API Section */
          .api-section {
            padding: 5rem 0;
            background-color: white;
          }

          .api-image {
            width: 100%;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            font-weight: 600;
          }

          /* Payment Methods Footer */
          .payment-methods-footer {
            padding: 4rem 0;
            background: linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #9333EA 100%);
            color: white;
            text-align: center;
            border-radius: 20px;
          }

          .methods-container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 2rem;
          }

          .methods-container h2 {
            font-family: var(--big-font);
            font-size: 2.5rem;
            margin-bottom: 3rem;
            font-weight: 600;
            line-height: 1.3;
          }

          .payment-icons {
            display: flex;
            justify-content: center;
            gap: 3rem;
            flex-wrap: wrap;
          }

          .payment-method {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .method-icon {
            width: 80px;
            height: 80px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }

          .payment-method span {
            font-size: 1.1rem;
            font-weight: 500;
          }

          /* Responsive Design */
          @media (max-width: 1024px) {
            .hero-container,
            .section-container {
              grid-template-columns: 1fr;
              gap: 3rem;
              text-align: center;
            }
            
            .features-container {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
            
            .hero-content h1 {
              font-size: 3rem;
            }
            
            .content-right h2,
            .content-left h2 {
              font-size: 2.3rem;
            }
          }

          @media (max-width: 768px) {
            .hero-section {
              padding: 3rem 0 1.5rem;
            }
            
            .hero-container {
              padding: 0 1rem;
              min-height: auto;
            }
            
            .hero-content h1 {
              font-size: 2.5rem;
            }
            
            .hero-content p {
              font-size: 1.2rem;
            }
            
            .hero-buttons {
              flex-direction: column;
              align-items: center;
            }
            
            .hero-nav-icons {
              gap: 2rem;
            }
            
            .nav-icon {
              width: 50px;
              height: 50px;
              font-size: 1.5rem;
            }
            
            .phone-mockup {
              width: 250px;
              height: 400px;
            }
            
            .section-container {
              padding: 0 1rem;
            }
            
            .content-right h2,
            .content-left h2 {
              font-size: 2rem;
            }
            
            .content-right h3 {
              font-size: 1.5rem;
            }
            
            .payment-icons {
              gap: 2rem;
            }
            
            .method-icon {
              width: 60px;
              height: 60px;
              font-size: 1.5rem;
            }
            
            .methods-container h2 {
              font-size: 2rem;
            }
          }

          @media (max-width: 480px) {
            .hero-content h1 {
              font-size: 2rem;
            }
            
            .content-right h2,
            .content-left h2 {
              font-size: 1.8rem;
            }
            
            .methods-container h2 {
              font-size: 1.8rem;
            }
            
            .payment-icons {
              gap: 1.5rem;
            }
            
            .payment-logos {
              flex-wrap: wrap;
              gap: 1rem;
            }
          }
        `}
      </style>

      <div className="homepage">
        {/* Hero Section */}
        <section className="hero-section">
      <div className="hero-text">
        <h1>Empowering Payment<br />Enriching e-Commerce</h1>
      </div>
      <div className="hero-image">
        <img src={handwithphone} alt="Phone with app" />
      </div>
      
    </section>
    <div className="logo-strip">
        <img src={adeBlack} alt="ade" />
        <img src={sonelgazBlack} alt="sonelgaz" />
        <img src={seaalBlack} alt="seaal" />
        <img src={ooredooBlack} alt="ooredoo" />
        <img src={mobilisBlack} alt="Mobili" />
        <img src={djezzyBlack} alt="djezzy" />
        {/* Add more logos as needed */}
      </div>

        {/* Three Column Features */}
        <section className="three-features">
      <div className="feature-buttons">
        <button onClick={() => setSelected('option1')} className={selected === 'option1' ? 'active' : ''}>Personal</button>
        <button onClick={() => setSelected('option2')} className={selected === 'option2' ? 'active' : ''}>Business</button>
        <button onClick={() => setSelected('option3')} className={selected === 'option3' ? 'active' : ''}>Developer</button>
      </div>

      <div className="features-container">
        {contentSets[selected].map((item, index) => (
          <div className="feature-col" key={index}>
            <div className="feature-image">
               <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>

        {/* Local Payments Global Standards */}
        <section className="local-global-section">
          <div className="section-container">
            <div className="content-left">
                <img className="people-image" src={groupofpeople} alt="group" />
            </div>
            <div className="content-right">
              <h2>Local Payments, Global Standards.</h2>
              <h3>Fast, safe, easy payments</h3>
              <p>Experience the perfect blend of local convenience and international security standards. Our platform ensures fast, reliable transactions that meet global compliance requirements.</p>
            </div>
          </div>
        </section>
        <div className="logo-strip">
        <img src={baridiBlack} alt="baridi" />
        <img src={cbBlack} alt="BIP" />
        <img src={visaBlack} alt="visa" />
        <img src={mcBlack} alt="mastercard" />
        {/* Add more logos as needed */}
      </div>

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
                <img className="terminal-image" src={paybyscan} alt="paybyscan" />
              </div>
            </div>
          </div>
        </section>

        {/* API Section */}
        <section className="api-section">
          <div className="section-container">
            <div className="content-left">
              <div className="api-image">
                <img className="api-image" src={api} alt="api" />
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
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;