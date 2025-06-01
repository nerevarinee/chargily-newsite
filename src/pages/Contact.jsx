import React, { useState } from "react";
import MapComponent from "../components/MapComponent";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "general",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "general",
        message: "",
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: "📞",
      title: "Phone Support",
      description: "Speak directly with our support team",
      contact: "+213 555 123 456",
      availability: "Sun-Tue, 9AM-5PM",
    },
    {
      icon: "✉️",
      title: "Email Support",
      description: "Get detailed help via email",
      contact: "support@chargily.com",
      availability: "24/7 Response",
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Quick answers to your questions",
      contact: "Available on our app",
      availability: "24/7 Available",
    },
    {
      icon: "📍",
      title: "Visit Our Office",
      description: "Meet us in person",
      contact: "Cite Amdinistrative, M'Sila",
      availability: "Sun-Tue, 9AM-5PM",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to process payments?",
      answer:
        "Most payments are processed instantly. Bank transfers may take 1-2 business days depending on your bank.",
    },
    {
      question: "What are your service fees?",
      answer:
        "Our fees vary by service type. Check our Fees & Pricing page for detailed information, or contact us for custom enterprise rates.",
    },
    {
      question: "Is my financial information secure?",
      answer:
        "Yes, we use bank-level encryption and comply with international security standards to protect your data.",
    },
    {
      question: "Can I integrate Chargily with my business?",
      answer:
        "Absolutely! We offer APIs and plugins for easy integration. Contact our business team for technical support.",
    },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get in Touch</h1>
          <p>
            Have questions? Need support? Want to partner with us? We're here to
            help and would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods">
        <div className="section-header">
          <h2>How Can We Help You?</h2>
        </div>

        <div className="contact-grid">
          {contactMethods.map((method, index) => (
            <div key={index} className="contact-method-card">
              <div className="method-icon">{method.icon}</div>
              <h3>{method.title}</h3>
              <p>{method.description}</p>
              <div className="method-contact">{method.contact}</div>
              <div className="method-availability">{method.availability}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="form-container">
          <div className="form-header">
            <h2>Send Us a Message</h2>
            <p>
              Fill out the form below and we'll get back to you as soon as
              possible
            </p>
          </div>

          {isSubmitted ? (
            <div className="form-success">
              <div className="success-icon">✅</div>
              <h3>Message Sent Successfully!</h3>
              <p>
                Thank you for contacting us. We'll get back to you within 24
                hours.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="business">Business Partnership</option>
                    <option value="billing">Billing Question</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Quick answers to common questions</p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-card">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Office Location */}
      <section className="office-location">
        <div className="location-content">
          <div className="location-info">
            <h2>Visit Our Office</h2>
            <div className="address">
              <h4>Chargily Headquarters</h4>
              <p>
                Cite Administrative
                <br />
                M'Sila 28000
                <br />
                Algeria
              </p>
            </div>

            <div className="office-hours">
              <h4>Office Hours</h4>
              <p>
                Sunday - Tuesday: 9:00 AM - 5:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>

            <div className="directions">
              <button className="directions-btn">Get Directions</button>
            </div>
          </div>

          <div className="map-placeholder">
            <div className="map-content">
              <span>Interactive Map</span>
              <MapComponent />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
