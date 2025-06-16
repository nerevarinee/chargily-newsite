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
    <style>
      <style>
      {`
        
.careers-page {
  font-family: var(--main-font);
  color: #333;
  line-height: 1.6;
}

/* Hero Section */
.careers-hero {
  background: linear-gradient(135deg, var(--main-color) 0%, #8f6bce 100%);
  color: white;
  text-align: center;
  padding: 4rem 2rem;
  margin-bottom: 4rem;
  border-radius: var(--border-radius);
}

.careers-hero h1 {
  font-family: var(--big-font);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.careers-hero p {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
}

.careers-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
}

.stat h3 {
  font-size: 2rem;
  color: white;
  margin: 0;
}

.stat p {
  margin: 0;
  opacity: 0.85;
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-family: var(--big-font);
  font-size: 2.5rem;
  color: var(--main-color);
}

.section-header p {
  font-size: 1.1rem;
  color: var(--medium-gray);
}

/* Benefits */
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  padding: 0 2rem 4rem;
}

.benefit-card {
  background: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  text-align: center;
  box-shadow: var(--shadow-light);
  border: 1px solid var(--border-gray);
  transition: transform 0.2s ease;
}

.benefit-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-medium);
}

.benefit-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.benefit-card h3 {
  font-size: 1.3rem;
  color: var(--main-color);
  margin-bottom: 0.5rem;
}

/* Department Filter */
.department-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.filter-btn {
  padding: 0.6rem 1.2rem;
  border: 2px solid var(--main-color);
  border-radius: var(--button-radius);
  background: white;
  color: var(--main-color);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn.active,
.filter-btn:hover {
  background: var(--main-color);
  color: white;
}

/* Jobs Grid */
.jobs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
  margin-bottom: 3rem;
}

.job-card {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-light);
  padding: 1.5rem;
  border: 1px solid var(--border-gray);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.75rem;
}

.job-header h3 {
  font-size: 1.2rem;
  color: var(--main-color);
}

.job-department {
  background: #f3e8ff;
  color: var(--main-color);
  font-size: 0.8rem;
  padding: 0.25rem 0.6rem;
  border-radius: 12px;
  font-weight: 600;
}

.job-meta {
  font-size: 0.9rem;
  color: #555;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 1rem;
}

.job-description {
  flex: 1;
  font-size: 0.95rem;
  color: #444;
  margin-bottom: 1rem;
}

.apply-btn {
  align-self: flex-start;
  padding: 0.7rem 1.4rem;
  border-radius: 12px;
  background: var(--main-color);
  color: white;
  border: none;
  font-weight: 600;
  transition: all 0.2s ease;
  cursor: pointer;
}

.apply-btn:hover {
  background: #7c1ac4;
}

/* No Jobs Notice */
.no-jobs {
  text-align: center;
  padding: 2rem;
  font-size: 1.1rem;
  color: var(--medium-gray);
}

/* Culture Section */
.company-culture {
  background: var(--light-gray);
  padding: 4rem 2rem;
  border-radius: var(--border-radius);
  margin: 4rem 0;
}

.culture-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: center;
}

.culture-text h2 {
  font-family: var(--big-font);
  font-size: 2rem;
  color: var(--main-color);
  margin-bottom: 1rem;
}

.culture-text ul {
  padding-left: 1.2rem;
  list-style: none;
}

.culture-text li {
  margin-bottom: 1rem;
}

.team-photo-placeholder {
  background: #d8b4fe;
  height: 300px;
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  box-shadow: var(--shadow-medium);
}

/* CTA Section */
.careers-cta {
  text-align: center;
  background: linear-gradient(to right, var(--main-color), #8f6bce);
  padding: 4rem 2rem;
  color: white;
  border-radius: var(--border-radius);
  margin-bottom: 3rem;
}

.careers-cta h2 {
  font-family: var(--big-font);
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta-btn {
  padding: 1rem 2rem;
  background: white;
  color: var(--main-color);
  border-radius: var(--button-radius);
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.cta-btn:hover {
  background: #f8f4ff;
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 1024px) {
  .culture-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .team-photo-placeholder {
    height: 220px;
  }

  .careers-stats {
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .careers-hero h1 {
    font-size: 2rem;
  }

  .section-header h2 {
    font-size: 1.75rem;
  }

  .careers-cta h2 {
    font-size: 1.6rem;
  }

  .cta-btn {
    width: 100%;
  }
}

      `}
    </style>
    </style>
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
