import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">Avinash Mani Tripathi</h1>
          <ul className="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="about">
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-text">
              <h1 className="hero-title">Avinash Mani Tripathi</h1>
              <h2 className="hero-subtitle">Senior Software Engineer</h2>
              <p className="hero-description">
                Senior Software Engineer with 5+ years of experience in full-stack web development using React.js, Node.js, JavaScript/TypeScript, and SQL/NoSQL databases. Skilled in building scalable architectures, RESTful APIs, and microservices.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">APIs Built</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3</div>
                  <div className="stat-label">Awards Won</div>
                </div>
              </div>
              <div className="hero-social">
                <a href="https://www.linkedin.com/in/avinash-mani-tripathi-a27b7a26b" target="_blank" rel="noopener noreferrer" className="social-btn">LinkedIn</a>
                <a href="https://github.com/avinashmanitripathi" target="_blank" rel="noopener noreferrer" className="social-btn">GitHub</a>
                <a href="/Aviansh__Tripathi_-_Senior_Software_Engineer_5_Exp.pdf" download className="social-btn resume-btn">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-image-wrapper">
              <img src="/avinash.jpeg" alt="Avinash Mani Tripathi" className="profile-image" />
              <div className="hero-contact-card">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <a href="mailto:avinashmanitripathi97@gmail.com">avinashmanitripathi97@gmail.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <a href="tel:+916393177038">+91 6393177038</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Noida, Uttar Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience" id="experience">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>Senior Software Engineer</h3>
                    <h4>Satschel LLC, San Francisco</h4>
                  </div>
                  <span className="timeline-date">July 2022 - Present</span>
                </div>
                <ul className="timeline-list">
                  <li>Led the architecture and development of API Builders, achieving a 30% reduction in integration time for external partners and saving $30K per year gravitee subscription.</li>
                  <li>Mentored a team of 5 junior developers, increasing team productivity and code quality, resulting in a 15% reduction in bug reports during release cycles.</li>
                  <li>Expanded the functionality of 20+ RESTful APIs using Node.js, optimizing backend data handling efficiency and reducing response times by 30%.</li>
                  <li>Boosted system stability and security by addressing critical bugs and implementing security features, decreasing user-reported issues by 20%.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>Software Engineer</h3>
                    <h4>SpeckyFox Technologies India Pvt Ltd, Noida</h4>
                  </div>
                  <span className="timeline-date">Apr 2021 - June 2022</span>
                </div>
                <ul className="timeline-list">
                  <li>Built and consumed 15+ RESTful APIs with Node.js, optimizing data flow and communication efficiency between front-end and back-end systems, leading to a 35% reduction in data processing errors.</li>
                  <li>Optimized frontend performance using React JS, incorporating techniques like memoization and lazy loading, which resulted in a 40% improvement in page load times.</li>
                  <li>Coordinated with project managers to ensure timely feature development, achieving 100% on-time project delivery and improving team efficiency by 20%.</li>
                  <li>Engineered a suite of performance enhancements by refactoring legacy code blocks and optimizing database queries, cutting average application response time by 30% and reducing server load by 15%.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <div className="container">
          <div className="skills-layout">
            <div className="skills-left">
              <h2 className="section-title-left">Areas of Expertise</h2>
              <p className="skills-intro">
                Proficient in modern web technologies with a focus on building scalable, secure, and high-performance applications. Experienced in both frontend and backend development with expertise in cloud deployment and CI/CD practices.
              </p>
            </div>
            <div className="skills-right">
              <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">React JS</span>
                  <span className="skill-tag">Web Components</span>
                  <span className="skill-tag">WebAuthn</span>
                  <span className="skill-tag">HTML</span>
                  <span className="skill-tag">CSS</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">Micro Frontends</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">RESTful APIs</span>
                  <span className="skill-tag">Microservices</span>
                  <span className="skill-tag">GraphQL</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Other</h3>
                <div className="skill-tags">
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">Security Best Practices</span>
                  <span className="skill-tag">CI/CD</span>
                  <span className="skill-tag">AWS/GCP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Liquidity – API Designer Web App</h3>
              <p className="project-tech">React JS, Node.js, Express, REST APIs</p>
              <p className="project-description">
                Built a modular API Designer web application enabling users to design, visualize, and implement custom APIs effortlessly. Reduced development time by 50% and enhanced developer productivity through automated integration workflows.
              </p>
            </div>

            <div className="project-card">
              <h3>Simplici – KYC/AML Verification Platform</h3>
              <p className="project-tech">React JS, WebAuthn, Apple JS, Node.js</p>
              <p className="project-description">
                Developed a secure and user-friendly KYC/AML onboarding platform for consumers, improving verification accuracy and reducing onboarding time by 40% through biometric authentication and device validation.
              </p>
            </div>

            <div className="project-card">
              <h3>Simplici – Compliance Platform</h3>
              <p className="project-tech">React JS, Node.js, REST APIs, WebAuthn</p>
              <p className="project-description">
                Engineered an enterprise-grade compliance platform integrating KYC, KYB, AML, Fraud Detection, and eSign modules. Leveraged an API-first architecture to support seamless third-party integrations, enhancing compliance automation and reducing manual checks by 60%.
              </p>
            </div>

            <div className="project-card">
              <h3>Foundit Job Portal</h3>
              <p className="project-tech">React JS, Node.js, SEO Optimization, ElasticSearch</p>
              <p className="project-description">
                Optimized personalized job recommendations, resume parsing, and SEO ranking features. Increased user engagement by 25% and elevated site performance through targeted front-end optimizations.
              </p>
            </div>

            <div className="project-card">
              <h3>Nivoda – Real-Time Diamond Marketplace</h3>
              <p className="project-tech">React JS, Node.js, WebSockets, Authentication APIs</p>
              <p className="project-description">
                Created a live marketplace platform for B2B diamond trading with real-time inventory, pricing updates, and secure user authentication. Boosted transaction efficiency and provided seamless buying experience across global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards">
        <div className="container">
          <h2 className="section-title">Awards & Recognition</h2>
          <div className="awards-grid">
            <div className="award-card">
              <div className="award-icon">🌟</div>
              <h3>Performance Excellence Award</h3>
              <p className="award-org">Compliance Innovation | Aug 2025</p>
              <p className="award-description">
                Awarded for exceptional performance, consistently exceeding project goals, and demonstrating excellence in software engineering practices and team collaboration.
              </p>
            </div>
            <div className="award-card">
              <div className="award-icon">🏆</div>
              <h3>Employee of the Year</h3>
              <p className="award-org">Compliance Innovation | Oct 2023</p>
              <p className="award-description">
                Recognized for outstanding performance, technical leadership, and contribution to the API Builder project, resulting in significant cost savings and process improvements.
              </p>
            </div>
            <div className="award-card">
              <div className="award-icon">⭐</div>
              <h3>Unsung Hero Award</h3>
              <p className="award-org">SpeckyFox Technologies | Jul 2022</p>
              <p className="award-description">
                Honored for behind-the-scenes contributions and reliability that significantly boosted team efficiency and ensured consistent, on-time project delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education" id="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-card">
            <h3>Bachelor of Computer Applications (BCA)</h3>
            <h4>Babu Banarasi Das University, Lucknow</h4>
            <p className="education-details">
              <span>Aug 2016 - June 2019</span>
              <span className="education-gpa">CGPA: 8.5 / 10</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p>I'm always interested in hearing about new opportunities and collaborations.</p>
            <div className="contact-links">
              <a href="mailto:avinashmanitripathi97@gmail.com" className="contact-btn">
                📧 Email Me
              </a>
              <a href="https://www.linkedin.com/in/avinash-mani-tripathi-a27b7a26b" target="_blank" rel="noopener noreferrer" className="contact-btn">
                💼 LinkedIn
              </a>
              <a href="https://github.com/avinashmanitripathi" target="_blank" rel="noopener noreferrer" className="contact-btn">
                💻 GitHub
              </a>
              <a href="/Aviansh__Tripathi_-_Senior_Software_Engineer_5_Exp.pdf" download className="contact-btn">
                📄 Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Avinash Mani Tripathi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
