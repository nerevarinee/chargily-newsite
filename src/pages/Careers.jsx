import React, { useState } from "react";

function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Algiers, Algeria",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "Join our engineering team to build cutting-edge fintech solutions using React, TypeScript, and modern web technologies.",
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      experience: "4-6 years",
      description:
        "Lead product strategy and development for our payment solutions, working closely with engineering and design teams.",
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      location: "Algiers, Algeria",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Create intuitive and beautiful user experiences for our mobile and web applications in the fintech space.",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Hybrid",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "Build and maintain our cloud infrastructure, ensuring scalability and security for our payment platform.",
    },
    {
      id: 5,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Algiers, Algeria",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Help our business clients succeed by providing exceptional support and driving product adoption.",
    },
  ];

  const departments = [
    "all",
    "Engineering",
    "Product",
    "Design",
    "Customer Success",
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Salary",
      description:
        "Industry-leading compensation packages with performance bonuses",
    },
    {
      icon: "🏥",
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family",
    },
    {
      icon: "🏖️",
      title: "Flexible PTO",
      description: "Unlimited paid time off to maintain work-life balance",
    },
    {
      icon: "🎓",
      title: "Learning Budget",
      description:
        "Annual budget for courses, conferences, and skill development",
    },
    {
      icon: "🏠",
      title: "Remote Work",
      description: "Flexible work arrangements with modern home office setup",
    },
    {
      icon: "📈",
      title: "Career Growth",
      description: "Clear advancement paths and mentorship programs",
    },
  ];

  const filteredJobs =
    selectedDepartment === "all"
      ? jobOpenings
      : jobOpenings.filter((job) => job.department === selectedDepartment);

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="careers-hero-content">
          <h1>Join Our Mission</h1>
          <p>
            Help us revolutionize digital payments in Algeria. We're building
            the future of fintech, and we want passionate, talented individuals
            to join our journey.
          </p>
          <div className="careers-stats">
            <div className="stat">
              <h3>50+</h3>
              <p>Team Members</p>
            </div>
            <div className="stat">
              <h3>15+</h3>
              <p>Countries</p>
            </div>
            <div className="stat">
              <h3>100K+</h3>
              <p>Happy Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="why-join-us">
        <div className="section-header">
          <h2>Why Join Chargily?</h2>
          <p>
            We offer more than just a job - we offer a career and a community
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="open-positions">
        <div className="section-header">
          <h2>Open Positions</h2>
          <p>Find your perfect role and start making an impact</p>
        </div>

        {/* Department Filter */}
        <div className="department-filter">
          {departments.map((dept) => (
            <button
              key={dept}
              className={`filter-btn ${
                selectedDepartment === dept ? "active" : ""
              }`}
              onClick={() => setSelectedDepartment(dept)}
            >
              {dept === "all" ? "All Departments" : dept}
            </button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="jobs-grid">
          {filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-header">
                <h3>{job.title}</h3>
                <span className="job-department">{job.department}</span>
              </div>

              <div className="job-meta">
                <span className="job-location">📍 {job.location}</span>
                <span className="job-type">⏰ {job.type}</span>
                <span className="job-experience">👨‍💼 {job.experience}</span>
              </div>

              <p className="job-description">{job.description}</p>

              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="no-jobs">
            <p>No positions available in this department at the moment.</p>
            <p>Check back soon or subscribe to our newsletter for updates!</p>
          </div>
        )}
      </section>

      {/* Culture Section */}
      <section className="company-culture">
        <div className="culture-content">
          <div className="culture-text">
            <h2>Our Culture</h2>
            <p>
              At Chargily, we believe in creating an environment where
              innovation thrives, diversity is celebrated, and every team member
              can reach their full potential.
            </p>
            <ul className="culture-values">
              <li>
                🚀 <strong>Innovation First:</strong> We encourage bold ideas
                and creative solutions
              </li>
              <li>
                🤝 <strong>Collaboration:</strong> Great things happen when we
                work together
              </li>
              <li>
                📱 <strong>User-Centric:</strong> Our users' success drives
                everything we do
              </li>
              <li>
                🌱 <strong>Growth Mindset:</strong> We learn, adapt, and improve
                continuously
              </li>
            </ul>
          </div>
          <div className="culture-image">
            <div className="team-photo-placeholder">
              <span>Team Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="careers-cta">
        <h2>Don't See Your Perfect Role?</h2>
        <p>
          We're always looking for talented individuals. Send us your resume and
          let's talk!
        </p>
        <button className="cta-btn">Send Your Resume</button>
      </section>
    </div>
  );
}

export default Careers;
