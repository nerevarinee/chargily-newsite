import React from "react";

function AboutUs() {
  const styles = {
    aboutContainer: {
      maxWidth: "1900px",
      margin: "0 auto",
      padding: "2rem",
      fontFamily: "var(--main-font, Alexandria, sans-serif)",
    },
    heroSection: {
      background: "linear-gradient(135deg, var(--main-color) 0%, #8f6bce 100%)",
      borderRadius: "24px",
      padding: "4rem 3rem",
      textAlign: "center",
      color: "white",
      marginBottom: "4rem",
      position: "relative",
      overflow: "hidden",
    },
    heroTitle: {
      fontSize: "3.5rem",
      fontWeight: "600",
      marginBottom: "1.5rem",
      fontFamily: "var(--big-font, DM Sans, sans-serif)",
      textShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    heroSubtitle: {
      fontSize: "1.3rem",
      opacity: "0.95",
      maxWidth: "800px",
      margin: "0 auto",
      lineHeight: "1.6",
    },
    heroDecoration: {
      position: "absolute",
      top: "-50px",
      right: "-50px",
      width: "200px",
      height: "200px",
      background: "rgba(255,255,255,0.1)",
      borderRadius: "50%",
      zIndex: "0",
    },
    heroDecoration2: {
      position: "absolute",
      bottom: "-30px",
      left: "-30px",
      width: "150px",
      height: "150px",
      background: "rgba(255,255,255,0.05)",
      borderRadius: "50%",
      zIndex: "0",
    },
    sectionTitle: {
      fontSize: "2.5rem",
      color: "#641299",
      textAlign: "center",
      marginBottom: "3rem",
      fontFamily: "var(--big-font, DM Sans, sans-serif)",
      fontWeight: "600",
    },
    missionSection: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "4rem",
      alignItems: "center",
      marginBottom: "5rem",
      padding: "3rem 0",
    },
    missionContent: {
      fontSize: "1.1rem",
      lineHeight: "1.8",
      color: "#374151",
    },
    missionImage: {
      background: "linear-gradient(45deg, #f3e8ff, #e0e7ff)",
      borderRadius: "20px",
      padding: "3rem",
      textAlign: "center",
      minHeight: "300px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    servicesGrid: {
      display: "flex",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2.5rem",
      marginBottom: "5rem",
    },
    serviceCard: {
      background: "white",
      borderRadius: "20px",
      padding: "2.5rem",
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      border: "1px solid #e5e7eb",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    serviceCardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 20px 40px rgba(100,18,153,0.15)",
    },
    serviceIcon: {
      width: "60px",
      height: "60px",
      background: "linear-gradient(135deg, #641299, #8b5cf6)",
      borderRadius: "15px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "1.5rem",
      color: "white",
      fontSize: "1.5rem",
    },
    serviceTitle: {
      fontSize: "1.4rem",
      fontWeight: "600",
      color: "#641299",
      marginBottom: "1rem",
    },
    serviceDescription: {
      color: "#6b7280",
      lineHeight: "1.6",
    },
    statsSection: {
      background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
      borderRadius: "24px",
      padding: "4rem 3rem",
      marginBottom: "5rem",
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "3rem",
      textAlign: "center",
    },
    statNumber: {
      fontSize: "3rem",
      fontWeight: "700",
      color: "#641299",
      marginBottom: "0.5rem",
      fontFamily: "var(--big-font, DM Sans, sans-serif)",
    },
    statLabel: {
      fontSize: "1.1rem",
      color: "#6b7280",
      fontWeight: "500",
    },
    timelineSection: {
      marginBottom: "6rem",
      background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
      borderRadius: "32px",
      padding: "4rem 3rem",
      position: "relative",
      overflow: "hidden",
    },
    timelineDecor: {
      position: "absolute",
      top: "20px",
      right: "20px",
      fontSize: "6rem",
      opacity: "0.1",
      color: "#641299",
    },
    timeline: {
      position: "relative",
      maxWidth: "900px",
      margin: "0 auto",
    },
    timelineVerticalLine: {
      position: "absolute",
      left: "50%",
      top: "0",
      bottom: "0",
      width: "4px",
      background: "linear-gradient(to bottom, #641299, #8b5cf6, #641299)",
      transform: "translateX(-50%)",
      borderRadius: "2px",
    },
    timelineItem: {
      display: "flex",
      alignItems: "center",
      marginBottom: "4rem",
      position: "relative",
      width: "100%",
    },
    timelineItemLeft: {
      flexDirection: "row-reverse",
    },
    timelineItemRight: {
      flexDirection: "row",
    },
    timelineContent: {
      background: "white",
      padding: "2.5rem",
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(100, 18, 153, 0.15)",
      border: "2px solid transparent",
      flex: "1",
      maxWidth: "400px",
      position: "relative",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    timelineContentLeft: {
      marginRight: "3rem",
      textAlign: "right",
    },
    timelineContentRight: {
      marginLeft: "3rem",
      textAlign: "left",
    },
    timelineContentHover: {
      borderColor: "#641299",
      transform: "translateY(-5px)",
      boxShadow: "0 20px 40px rgba(100, 18, 153, 0.25)",
    },
    timelineYear: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "1.2rem",
      fontWeight: "700",
      color: "white",
      background: "linear-gradient(135deg, #641299, #8b5cf6)",
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "4px solid white",
      boxShadow: "0 8px 20px rgba(100, 18, 153, 0.3)",
      zIndex: "10",
    },
    timelineTitle: {
      fontSize: "1.4rem",
      fontWeight: "600",
      color: "#641299",
      marginBottom: "1rem",
      fontFamily: "var(--big-font, DM Sans, sans-serif)",
    },
    timelineDescription: {
      color: "#6b7280",
      lineHeight: "1.7",
      fontSize: "1rem",
    },
    timelineEmoji: {
      fontSize: "2rem",
      marginBottom: "1rem",
      display: "block",
    },
    valuesSection: {
      marginBottom: "5rem",
    },
    valuesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "2rem",
    },
    valueCard: {
      textAlign: "center",
      padding: "2rem",
      background: "white",
      borderRadius: "20px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      border: "2px solid transparent",
      transition: "all 0.3s ease",
    },
    valueCardHover: {
      borderColor: "#641299",
      transform: "translateY(-3px)",
    },
    valueIcon: {
      fontSize: "3rem",
      marginBottom: "1rem",
    },
    valueTitle: {
      fontSize: "1.3rem",
      fontWeight: "600",
      color: "#641299",
      marginBottom: "1rem",
    },
    valueDescription: {
      color: "#6b7280",
      lineHeight: "1.6",
    },
    ctaSection: {
      background: "linear-gradient(135deg, #641299 0%, #7c3aed 100%)",
      borderRadius: "24px",
      padding: "4rem 3rem",
      textAlign: "center",
      color: "white",
    },
    ctaTitle: {
      fontSize: "2.5rem",
      fontWeight: "600",
      marginBottom: "1.5rem",
      fontFamily: "var(--big-font, DM Sans, sans-serif)",
    },
    ctaDescription: {
      fontSize: "1.2rem",
      marginBottom: "2.5rem",
      opacity: "0.95",
    },
    ctaButtons: {
      display: "flex",
      gap: "1.5rem",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    ctaButton: {
      padding: "1rem 2.5rem",
      borderRadius: "25px",
      fontSize: "1.1rem",
      fontWeight: "600",
      textDecoration: "none",
      transition: "all 0.3s ease",
      cursor: "pointer",
      border: "none",
    },
    ctaButtonPrimary: {
      background: "white",
      color: "#641299",
    },
    ctaButtonSecondary: {
      background: "transparent",
      color: "white",
      border: "2px solid white",
    },
    mapSection: {
      marginTop: "5rem",
      background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
      borderRadius: "24px",
      padding: "4rem 3rem",
      position: "relative",
      overflow: "hidden",
    },
    mapContainer: {
      width: "100%",
      height: "500px",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 20px 40px rgba(100, 18, 153, 0.15)",
      marginBottom: "3rem",
    },
    officesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
    },
    officeCard: {
      background: "white",
      borderRadius: "20px",
      padding: "2rem",
      textAlign: "center",
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      border: "2px solid transparent",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    officeCardHover: {
      borderColor: "#641299",
      transform: "translateY(-5px)",
      boxShadow: "0 20px 40px rgba(100, 18, 153, 0.15)",
    },
    officeFlag: {
      fontSize: "3rem",
      marginBottom: "1rem",
      display: "block",
    },
    officeCity: {
      fontSize: "1.4rem",
      fontWeight: "600",
      color: "#641299",
      marginBottom: "0.5rem",
    },
    officeCountry: {
      fontSize: "1.1rem",
      color: "#6b7280",
      marginBottom: "1rem",
    },
    officeAddress: {
      color: "#6b7280",
      lineHeight: "1.6",
      fontSize: "0.95rem",
    },
  };

  const [hoveredService, setHoveredService] = React.useState(null);
  const [hoveredValue, setHoveredValue] = React.useState(null);
  const [hoveredTimeline, setHoveredTimeline] = React.useState(null);
  const [hoveredOffice, setHoveredOffice] = React.useState(null);

  return (
    <div style={styles.aboutContainer}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Revolutionizing Fintech</h1>
        <p style={styles.heroSubtitle}>
          Empowering Algeria's digital payment ecosystem with cutting-edge
          technology, seamless user experiences, and innovative financial
          solutions that make your life easier! 
        </p>
      </div>

      {/* Mission Section */}
      <div style={styles.missionSection}>
        <div style={styles.missionContent}>
          <h2
            style={{
              ...styles.sectionTitle,
              textAlign: "left",
              marginBottom: "2rem",
            }}
          >
            Our Mission
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Chargily is a pioneering fintech company specializing in
            facilitating payment methods and e-commerce solutions across
            Algeria. We're not just another payment company – we're the bridge
            between traditional banking and the digital future! 🌉
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Our electronic platforms offer users a comprehensive suite of
            services including mobile payments, credit top-ups, prepaid cards,
            and bill payments. Think of us as your financial Swiss Army knife!
            🔧 For businesses and professionals, we provide robust online
            payment gateways, open-source packages, plugins, and APIs that just
            work.
          </p>
          <p>
            We also specialize in installing interbank electronic payment
            devices such as EPT, POS, and mPOS systems. From code to card
            readers, we've got you covered! 💳✨
          </p>
        </div>
        <div style={styles.missionImage}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>💳</div>
            <div
              style={{
                fontSize: "1.5rem",
                color: "#641299",
                fontWeight: "600",
              }}
            >
              "Making payments as easy as sending a text!" 📱
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <h2 style={styles.sectionTitle}>Our Services</h2>
      <div style={styles.servicesGrid}>
        {[
          {
            icon: "📱",
            title: "Personal Banking",
            description:
              "Mobile payments, credit top-ups, prepaid cards, and bill payments. Your wallet, but smarter! 🧠",
          },
          {
            icon: "🏪",
            title: "Business Solutions",
            description:
              "Online payment gateways, APIs, plugins, and e-commerce integration. We make selling online a breeze! 🌬️",
          },
          {
            icon: "💻",
            title: "Developer Tools",
            description:
              "Open-source packages, comprehensive APIs, and docs that developers actually enjoy reading! 📚",
          },
          {
            icon: "🏧",
            title: "Hardware Solutions",
            description:
              "EPT, POS, and mPOS device installation. From setup to maintenance, we handle the heavy lifting! 💪",
          },
        ].map((service, index) => (
          <div
            key={index}
            style={{
              ...styles.serviceCard,
              ...(hoveredService === index ? styles.serviceCardHover : {}),
            }}
            onMouseEnter={() => setHoveredService(index)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div style={styles.serviceIcon}>{service.icon}</div>
            <h3 style={styles.serviceTitle}>{service.title}</h3>
            <p style={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div style={styles.statsSection}>
        <h2
          style={{
            ...styles.sectionTitle,
            color: "#641299",
            marginBottom: "3rem",
          }}
        >
          Our Impact
        </h2>
        <div style={styles.statsGrid}>
          <div>
            <div style={styles.statNumber}>200K+</div>
            <div style={styles.statLabel}>Registered Users</div>
          </div>
          <div>
            <div style={styles.statNumber}>2M+</div>
            <div style={styles.statLabel}>API Requests</div>
          </div>
          <div>
            <div style={styles.statNumber}>500+</div>
            <div style={styles.statLabel}>Business Partners</div>
          </div>
          <div>
            <div style={styles.statNumber}>24/7</div>
            <div style={styles.statLabel}>Customer Support</div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div style={styles.timelineSection}>
        <div style={styles.timelineDecor}>🕰️</div>
        <h2
          style={{
            ...styles.sectionTitle,
            color: "#641299",
            marginBottom: "3rem",
          }}
        >
          Our Journey
        </h2>
        <div style={styles.timeline}>
          <div style={styles.timelineVerticalLine}></div>
          {[
            {
              year: "2015",
              title: "Founded Formerly (NESSPLUS TELECOM)",
            },
            {
              year: "2016",
              title: "Launche Mobile Topup Services",
            },
            {
              year: "2019",
              title: "Becoming Chargily",
            },
            {
              year: "2022",
              title: "Capital Rising",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                ...styles.timelineItem,
                ...(index % 2 === 0
                  ? styles.timelineItemLeft
                  : styles.timelineItemRight),
              }}
            >
              <div
                style={{
                  ...styles.timelineContent,
                  ...(index % 2 === 0
                    ? styles.timelineContentLeft
                    : styles.timelineContentRight),
                  ...(hoveredTimeline === index
                    ? styles.timelineContentHover
                    : {}),
                }}
                onMouseEnter={() => setHoveredTimeline(index)}
                onMouseLeave={() => setHoveredTimeline(null)}
              >
                <span style={styles.timelineEmoji}>{item.emoji}</span>
                <h3 style={styles.timelineTitle}>{item.title}</h3>
                <p style={styles.timelineDescription}>{item.description}</p>
              </div>
              <div style={styles.timelineYear}>{item.year}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div style={styles.valuesSection}>
        <h2
          style={{
            ...styles.sectionTitle,
            color: "#641299",
            marginBottom: "3rem",
          }}
        >
          Why We Do What We Do
        </h2>
        <div style={styles.valuesGrid}>
          {[
            {
              icon: "🚀",
              title: "Innovation",
              description:
                "We don't just follow trends - we create them! Always pushing boundaries to deliver solutions that wow.",
            },
            {
              icon: "🔒",
              title: "Security",
              description:
                "Your money, your data, our responsibility. We guard your financial info like it's our own treasure!",
            },
            {
              icon: "🤝",
              title: "Trust",
              description:
                "Built on honesty, powered by transparency. We believe relationships matter more than transactions.",
            },
            {
              icon: "⚡",
              title: "Efficiency",
              description:
                "Why make it complicated when you can make it simple? We streamline the complex, every single time!",
            },
          ].map((value, index) => (
            <div
              key={index}
              style={{
                ...styles.valueCard,
                ...(hoveredValue === index ? styles.valueCardHover : {}),
              }}
              onMouseEnter={() => setHoveredValue(index)}
              onMouseLeave={() => setHoveredValue(null)}
            >
              <div style={styles.valueIcon}>{value.icon}</div>
              <h3 style={styles.valueTitle}>{value.title}</h3>
              <p style={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Let's Build the Future Together!</h2>
        <p style={styles.ctaDescription}>
          Join thousands of users and businesses who've already discovered the
          Chargily difference. Ready to experience payments that actually make
          sense?
        </p>
        <div style={styles.ctaButtons}>
          <a
            href="/contact"
            style={{ ...styles.ctaButton, ...styles.ctaButtonPrimary }}
          >
            Contact Us
          </a>
          <a
            href="https://app.chargily.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.ctaButton, ...styles.ctaButtonSecondary }}
          >
            Try Our App
          </a>
        </div>
      </div>

      {/* Office Locations Map Section */}
      <div style={styles.mapSection}>
        <h2
          style={{
            ...styles.sectionTitle,
            color: "#641299",
            marginBottom: "3rem",
          }}
        >
          Our Global Presence 🌍
        </h2>

        {/* Interactive Map */}
        <div style={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24177018.09456408!2d-13.402003909475191!3d43.59810344337848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM1JzUzLjIiTiAwwrAwMCcwMC4wIkU!5e0!3m2!1sen!2sus!4v1625151234567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Chargily Office Locations"
          ></iframe>
        </div>

        {/* Office Cards */}
        <div style={styles.officesGrid}>
          {[
            {
              flag: "🇬🇧",
              city: "London",
              country: "United Kingdom",
              address:
                "CHARGILY, LTD. C N°: 13860928 London, WC2H 9JQ United Kingdom (UK)",
              description:
                "Our European headquarters, driving innovation across the continent!",
            },
            {
              flag: "🇩🇿",
              city: "M'sila",
              country: "Algeria",
              address:
                "CHARGILY, EURL. RC N°: 15B0564073 M’sila, 28020 Algeria (DZ)",
              description: "Our home base, where it all started",
            },
            {
              flag: "🇺🇸",
              city: "Delaware",
              country: "United States",
              address:
                "CHARGILY, LLC. File N: 6591212 Delaware, 19702 United States (US)",
              description:
                "Our American operations center, connecting us to global markets!",
            },
          ].map((office, index) => (
            <div
              key={index}
              style={{
                ...styles.officeCard,
                ...(hoveredOffice === index ? styles.officeCardHover : {}),
              }}
              onMouseEnter={() => setHoveredOffice(index)}
              onMouseLeave={() => setHoveredOffice(null)}
            >
              <span style={styles.officeFlag}>{office.flag}</span>
              <h3 style={styles.officeCity}>{office.city}</h3>
              <p style={styles.officeCountry}>{office.country}</p>
              <p style={styles.officeAddress}>
                {office.address.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < office.address.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
              <p
                style={{
                  color: "#641299",
                  marginTop: "1rem",
                  fontStyle: "italic",
                  fontSize: "0.9rem",
                }}
              >
                {office.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
