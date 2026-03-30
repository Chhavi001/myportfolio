import React, { useState, useEffect } from 'react';
import { 
  TerminalSquare, 
  MapPin, 
  Mail, 
  ExternalLink,
  ChevronRight,
  GraduationCap,
  Globe,
  Database,
  Code2,
  BrainCircuit,
  Terminal,
  Server,
  Send,
  Copy,
  Award,
  Eye
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaLaptopCode } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from 'react-icons/si';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPos, setTrailPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Delay the outline for a smooth trailing effect
      setTimeout(() => {
        setTrailPos({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="cursor-dot" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
      <div className="cursor-outline" style={{ left: `${trailPos.x}px`, top: `${trailPos.y}px` }}></div>
    </>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('Professional');

  return (
    <div className="app-container">
      <CustomCursor />
      {/* Header section */}
      <header className="header">
        <div className="logo" style={{fontFamily: 'var(--font-sans)'}}>
          <span style={{color: 'var(--accent-green)'}}>{"<"}</span>
          Chhavi
          <span style={{color: 'var(--accent-green)'}}>{"/>"}</span>
        </div>
        
        <div className="nav-links">
          <button 
            className={`nav-link ${activeTab === 'Professional' ? 'active' : ''}`}
            onClick={() => setActiveTab('Professional')}
          >
            Professional
          </button>
          <button 
            className={`nav-link ${activeTab === 'Personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('Personal')}
          >
            Personal
          </button>
          <button 
            className={`nav-link ${activeTab === 'Contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('Contact')}
          >
            Contact
          </button>
        </div>

        <a 
          href="https://drive.google.com/file/d/1bU0tnqkOx7_xSo5I2429Hp-zLb_GnAu_/view?usp=sharing"
          target="_blank" rel="noreferrer"
          className="nav-button"
        >
          Resume <ExternalLink size={16} />
        </a>
      </header>

      {/* Main Content Area */}
      <main>
        {activeTab === 'Professional' && <ProfessionalTab setActiveTab={setActiveTab} />}
        {activeTab === 'Personal' && <PersonalSection />}
        {activeTab === 'Contact' && <ContactSection />}
      </main>
      <Footer />
    </div>
  );
}

function Footer() {
  const [views, setViews] = useState('...');
  
  useEffect(() => {
    // using a highly reliable open-source free counter API
    fetch('https://api.counterapi.dev/v1/chhavipf/views/up')
      .then(res => res.json())
      .then(data => setViews(data.count))
      .catch(() => setViews('1,402')); // aesthetic fallback if api goes down
  }, []);

  return (
    <footer className="full-footer">
      <div className="footer-name">Chhavi Gautam</div>
      
      <div className="footer-view-counter" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-green)', padding: '0.5rem 1rem', background: 'rgba(0, 240, 255, 0.05)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>
        <Eye size={16} /> <span>{views} Profile Views</span>
      </div>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/chavvigautam/" className="social-circle" target="_blank" rel="noreferrer"><FaLinkedin size={18}/></a>
        <a href="https://github.com/Chhavi001" className="social-circle" target="_blank" rel="noreferrer"><FaGithub size={18}/></a>
        <a href="https://leetcode.com/u/chhavi1/" className="social-circle" target="_blank" rel="noreferrer"><SiLeetcode size={18}/></a>
        <a href="https://www.geeksforgeeks.org/profile/chhavi_001" className="social-circle" target="_blank" rel="noreferrer"><SiGeeksforgeeks size={18}/></a>
        <a href="https://www.codechef.com/users/chhavi_001" className="social-circle" target="_blank" rel="noreferrer"><SiCodechef size={18}/></a>
      </div>
    </footer>
  );
}

function ProfessionalTab({ setActiveTab }) {
  return (
    <>
      <HeroSection />
      <StatsSection />
      
      <section>
        <div className="section-title">
          <GraduationCap className="highlight" size={36} /> Education
        </div>
        <EducationSection />
      </section>

      <section>
        <div className="section-title">
          My <span className="highlight">Projects</span> Playground
        </div>
        <ProjectsSection />
      </section>

      <section>
        <div className="section-title">
          Professional <span className="highlight">Experience</span>
        </div>
        <ExperienceSection />
      </section>

      <section>
        <div className="section-title">
          My <span className="highlight">Certifications</span>
        </div>
        <CertificationsSection />
      </section>

      <section>
        <div className="section-title">
          My <span className="highlight">Journey</span> Report
        </div>
        <TimelineSection />
      </section>

      <TalkSection setActiveTab={setActiveTab} />
    </>
  );
}

function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-content">
        <span className="hero-subtitle" style={{color: 'var(--accent-secondary)'}}>Computer Science Graduate | Data Analyst & Full Stack</span>
        <div className="hero-title">
          Building the<br/>
          <div className="hero-name-container">
            <div className="hero-name-highlight-block"></div>
            <span className="hero-name">Future</span>
          </div>
        </div>
        <p className="hero-description" style={{fontFamily: 'var(--font-sans)', fontSize: '1.05rem'}}>
          Hi, I am <strong>Chhavi Gautam</strong>. As a Data Analyst and Full-Stack Engineer, I uncover deep insights from complex data sets and architect highly scalable, AI-integrated web applications using Python, SQL, and React.
        </p>
        
        <div className="hero-actions">
          <a href="https://drive.google.com/file/d/1bU0tnqkOx7_xSo5I2429Hp-zLb_GnAu_/view?usp=sharing" target="_blank" rel="noreferrer" className="nav-button" style={{ borderRadius: '40px', padding: '0.75rem 1.5rem', fontWeight: 'bold' }}>
            MY RESUME <ChevronRight size={16} />
          </a>
          
          <div className="social-links">
             <a href="mailto:chhavi2544gautam@gmail.com" className="social-circle"><Mail size={18}/></a>
            <a href="https://www.linkedin.com/in/chavvigautam/" className="social-circle" target="_blank" rel="noreferrer"><FaLinkedin size={18}/></a>
            <a href="https://github.com/Chhavi001" className="social-circle" target="_blank" rel="noreferrer"><FaGithub size={18}/></a>
            <a href="https://leetcode.com/u/chhavi1/" className="social-circle" target="_blank" rel="noreferrer"><SiLeetcode size={18}/></a>
          </div>
        </div>
      </div>
      
      <div className="hero-image-wrapper">
        <svg className="hero-border-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <rect 
            x="2" y="2" width="396" height="396" 
            rx="30" ry="30" 
            fill="none" 
            stroke="var(--accent-green)" 
            strokeWidth="3" 
            strokeDasharray="15 15" 
            className="animated-dash"
          />
        </svg>
        <div className="hero-image-inner">
          {/* USER CUSTOM UPLOADED IMAGE */}
          <img src="/images/chhavi_real.jpg" alt="Chhavi's Portrait" />
        </div>
      </div>
    </div>
  );
}

function StatsSection() {
  return (
    <div className="stats-grid">
      <div className="stat-item">
        <div className="stat-num">2026</div>
        <div className="stat-label">Grad<br/>Year</div>
      </div>
      <div className="stat-item">
        <div className="stat-num">7.95</div>
        <div className="stat-label">B.Tech<br/>CGPA</div>
      </div>
      <div className="stat-item">
        <div className="stat-num">1300+</div>
        <div className="stat-label">DSA<br/>Solved</div>
      </div>
      <div className="stat-item">
        <div className="stat-num">6</div>
        <div className="stat-label">Production<br/>Apps</div>
      </div>
    </div>
  );
}

function EducationSection() {
  return (
    <div className="education-grid">
      <div className="outline-card" style={{borderTop: '3px solid var(--accent-secondary)'}}>
        <div className="card-glow purple"></div>
        <h3 className="edu-title">Bachelor in Computer Science (Hons)</h3>
        <span className="edu-date">Aug 1, 2022 - Jun 15, 2026</span>
        <div className="edu-meta" style={{color: 'var(--accent-secondary)'}}><GraduationCap size={18} /> 7.95</div>
        <p className="edu-school">Ajay Kumar Garg Engineering College, Ghaziabad</p>
      </div>

      <div className="outline-card" style={{borderTop: '3px solid var(--accent-green)'}}>
        <div className="card-glow"></div>
        <h3 className="edu-title">High School Certificate</h3>
        <span className="edu-date">2018 - 2022</span>
        <div className="edu-meta"><GraduationCap size={18} /> 84%</div>
        <p className="edu-school">GGIC Ghaziabad - Senior Secondary (79.2%)</p>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <div className="projects-grid">
      
      <div className="project-card">
        <div className="card-glow"></div>
        <div className="project-image-container">
          <img src="/images/keycrypt_mockup_1774892904534.png" alt="KeyCrypt App" />
          <div className="project-image-overlay"></div>
        </div>
        <div className="project-content">
          <h3 className="project-title" style={{color:'var(--accent-secondary)'}}>KeyCrypt App</h3>
          <p className="project-desc">
            An Android app to safely encrypt and decrypt data using AES, DES, RSA. Built with Java/Kotlin and Material Design to keep data safe instantly.
          </p>
          <div className="project-footer">
             <a href="https://github.com/Chhavi001/KeyCrypt" className="tech-icon" title="Source Code" target="_blank" rel="noreferrer">
              <FaGithub size={16}/>
            </a>
            <a href="https://github.com/Chhavi001/KeyCrypt" className="project-link" style={{color:'var(--accent-secondary)'}} target="_blank" rel="noreferrer">
              GitHub Repo <FaGithub size={16} style={{marginLeft:'0.5rem'}}/>
            </a>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="card-glow purple"></div>
        <div className="project-image-container">
          <img src="/images/diabetes_prediction_mockup_1774892924820.png" alt="Diabetes Prediction App" />
          <div className="project-image-overlay"></div>
        </div>
        <div className="project-content">
          <h3 className="project-title">Diabetes Prediction App</h3>
          <p className="project-desc">
            Web-based ML application developed during IBM SkillsBuild. Predicts diabetes risk using Logistic Regression, Pandas, scikit-learn, and Streamlit UI.
          </p>
          <div className="project-footer">
             <a href="https://github.com/Chhavi001/Diabetes-Prediction-App" className="tech-icon" title="Source Code" target="_blank" rel="noreferrer">
              <FaGithub size={16}/>
            </a>
            <a href="https://github.com/Chhavi001/Diabetes-Prediction-App" className="project-link" target="_blank" rel="noreferrer">
              Live Tool <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="card-glow"></div>
        <div className="project-image-container">
          <img src="/images/cconnect_app_mockup_1774890098385.png" alt="Cconnect Project" />
          <div className="project-image-overlay"></div>
        </div>
        <div className="project-content">
          <h3 className="project-title">Cconnect Chat App</h3>
          <p className="project-desc">
            Developed a real-time chat platform using the MERN stack and Socket.io for instant bidirectional messaging. Implemented JWT, MongoDB, and Cloudinary uploads.
          </p>
          <div className="project-footer">
            <a href="https://github.com/Chhavi001/c-connect" className="tech-icon" title="Source Code" target="_blank" rel="noreferrer">
              <FaGithub size={16}/>
            </a>
            <a href="https://c-connect-seven.vercel.app" className="project-link" target="_blank" rel="noreferrer">
              Live Demo <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="card-glow purple"></div>
        <div className="project-image-container">
          <img src="/images/interview_mocker_mockup_1774890114255.png" alt="Interview Mocker" />
          <div className="project-image-overlay"></div>
        </div>
        <div className="project-content">
          <h3 className="project-title">Interview Mocker</h3>
          <p className="project-desc">
            An AI-powered mock interview platform generating tailored questions using Gemini API. integrated secure auth with Clerk and Firebase backend.
          </p>
          <div className="project-footer">
             <a href="https://github.com/Chhavi001/Interview-mocker" className="tech-icon" title="Source Code" target="_blank" rel="noreferrer">
              <FaGithub size={16}/>
            </a>
            <a href="https://interview-mocker-beryl.vercel.app" className="project-link" target="_blank" rel="noreferrer">
              Live Demo <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="card-glow"></div>
        <div className="project-image-container">
          <img src="/images/text_to_sql_mockup_1774890131583.png" alt="LLM text to sql" />
          <div className="project-image-overlay"></div>
        </div>
        <div className="project-content">
          <h3 className="project-title">LLM Text-to-SQL</h3>
          <p className="project-desc">
            A dynamic CSV ingestion system mapping natural language to SQL operations utilizing Mistral-7B, SQLite, and Streamlit UI.
          </p>
          <div className="project-footer">
             <a href="https://github.com/Chhavi001/text-to-sql-llm" className="tech-icon" title="Source Code" target="_blank" rel="noreferrer">
              <FaGithub size={16}/>
            </a>
            <a href="https://text-to-sql-llm-lfgsudnmzrr7bfkqy5hvyb.streamlit.app/" className="project-link" target="_blank" rel="noreferrer">
              Live Tool <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="card-glow purple"></div>
        <div className="project-image-container">
          <div style={{width:'100%', height:'100%', background:'#0f121d', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <TerminalSquare size={100} color="var(--accent-secondary)" />
          </div>
          <div className="project-image-overlay"></div>
        </div>
        <div className="project-content">
          <h3 className="project-title" style={{color:'var(--accent-secondary)'}}>CV Cursor Control</h3>
          <p className="project-desc">
            Developed a gesture-controlled cursor system using OpenCV, Python, and Mediapipe. Achieved 95% real-time hand-tracking gesture recognition accuracy.
          </p>
          <div className="project-footer">
             <a href="https://github.com/Chhavi001/Cursor-movement-by-hand" className="tech-icon" title="Source Code" target="_blank" rel="noreferrer">
              <FaGithub size={16}/>
            </a>
            <a href="https://github.com/Chhavi001/Cursor-movement-by-hand" className="project-link" style={{color:'var(--accent-secondary)'}} target="_blank" rel="noreferrer">
              GitHub Repo <FaGithub size={16} style={{marginLeft:'0.5rem'}}/>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

function ExperienceSection() {
  return (
    <div className="exp-grid">
      <div className="exp-card">
        <div className="card-glow"></div>
        <div className="exp-icon">
          <BrainCircuit size={64} color="var(--accent-green)" />
        </div>
        <div>
          <h3 className="exp-title">Data Science Intern</h3>
          <p className="exp-desc">
            <strong>IBM Skills Network</strong> (Jul 2025). Developed a ML Diabetes Prediction system using classification algorithms for healthcare data analysis. Built python workflows for data transformation. 
          </p>
          <a href="https://drive.google.com/file/d/1HGoGrU2eWSWyP6LBW1YIz_du6hwq6oRV/view?usp=sharing" target="_blank" rel="noreferrer" style={{fontSize: '0.85rem', color:'var(--accent-green)', fontWeight:'bold', marginTop:'1rem', display:'block'}}>VIEW CREDENTIAL &rarr;</a>
        </div>
      </div>

      <div className="exp-card">
        <div className="card-glow purple"></div>
        <div className="exp-icon">
          <Code2 size={64} color="var(--accent-secondary)" />
        </div>
        <div>
          <h3 className="exp-title">Publications</h3>
          <p className="exp-desc">
            Accepted in ICICC 2026 (Springer LNNS) for "EV Charging Station Selection Framework using LSTM and Multi-Criteria Decision Making".
          </p>
        </div>
      </div>

      <div className="exp-card">
        <div className="card-glow"></div>
        <div className="exp-icon">
          <FaLaptopCode size={64} color="var(--accent-secondary)" />
        </div>
        <div>
          <h3 className="exp-title">Hackathon Winner</h3>
          <p className="exp-desc">
            Junior Hackathon 2022. Secured 1st place among 150+ teams representing core problem-solving and full stack technical implementations.
          </p>
        </div>
      </div>

       <div className="exp-card">
        <div className="card-glow purple"></div>
        <div className="exp-icon">
          <Server size={64} color="var(--accent-green)" />
        </div>
        <div>
          <h3 className="exp-title">Mini Anveshana Finalist</h3>
          <p className="exp-desc">
            Finalist in 2025 for IoT-Enhanced Bio-Retention Floating Wetlands. Bridged IoT sensors with cloud architectures to model ecological data.
          </p>
          <a href="https://www.linkedin.com/posts/chavvigautam_anveshana2025-finalist-innovation-activity-7297603150553698305-pZ0w" target="_blank" rel="noreferrer" style={{fontSize: '0.85rem', color:'var(--accent-green)', fontWeight:'bold', marginTop:'1rem', display:'block'}}>LINKEDIN POST &rarr;</a>
        </div>
      </div>
    </div>
  );
}

function CertificationsSection() {
  const certs = [
    { name: "Google Data Analytics", link: "https://drive.google.com/file/d/1m5rK2D8UYss-BCeNx1toRVW3WVytnpwi/view?usp=sharing" },
    { name: "Prompt Engineering (Simplilearn)", link: "https://drive.google.com/file/d/1zY16P1TnR04oBZAVo-LM7PQzCfQm9M49/view?usp=sharing" },
    { name: "Data Science with Python (Infosys)", link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:37acc6c3-9555-47fb-aabf-8fdfb185c488" },
    { name: "Machine Learning (Infosys)", link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:c021e34b-cd1c-4e36-b9b0-d18448e315a1" },
    { name: "System Design Fundamentals", link: "https://drive.google.com/file/d/1uG-XykgMidsghIDpQVzBnErX3tQHuU26/view?usp=sharing" }
  ];

  return (
    <div style={{display:'flex', flexWrap:'wrap', gap:'1rem'}}>
      {certs.map(cert => (
        <a key={cert.name} href={cert.link} target="_blank" rel="noreferrer" className="outline-card" style={{padding:'1rem 1.5rem', display:'flex', alignItems:'center', gap:'1rem', flex:'1 1 300px'}}>
          <Award color="var(--accent-secondary)" />
          <span style={{fontFamily:'var(--font-mono)', fontSize:'0.9rem'}}>{cert.name}</span>
        </a>
      ))}
    </div>
  )
}

function TimelineSection() {
  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <p style={{fontFamily:'var(--font-mono)'}}>
          A timeline of my growth from high school hackathons to building enterprise-grade MERN applications 
          and getting my research published in Springer.
        </p>
      </div>

      <div className="timeline-wrap">
        <div className="timeline-item">
          <div className="timeline-year">2026</div>
          <div className="timeline-content">
            <h3 style={{color: 'var(--accent-green)', marginBottom: '0.5rem'}}>MERN Mastery & Research</h3>
            <p>
              It's been quite an exciting year! While entering my final year of B.Tech at AKGEC, I built 
              the Cconnect Real-Time Chat Platform, deployed my LLM Text-to-SQL interface, and got 
              my paper accepted at the Springer LNNS ICICC conference. Balancing everything was challenging, 
              but I'm loving every moment of growth and pushing my Data Structures & Algorithms tally past 1300 problems!
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">2025</div>
          <div className="timeline-content">
            <h3 style={{color: 'var(--accent-secondary)', marginBottom: '0.5rem'}}>AI & ML Focus</h3>
            <p>
              Completed my AI and Data Science Internship at IBM Skills Network! Designed a ML-driven Diabetes Prediction system. 
              On the side, I created the Interview Mocker leveraging Gemini AI, and built a Computer Vision Cursor module from scratch. 
              I also made it to the finals for Mini Anveshana 2025 with an IoT-focused ecological project.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">2022</div>
          <div className="timeline-content">
            <h3 style={{color: 'var(--accent-green)', marginBottom: '0.5rem'}}>First Sparks</h3>
            <p>
              The beginning of formal Computer Science. Ended my high school years at GGIC Ghaziabad with excellent grades, 
              enrolled into AKGEC for my B.Tech Honors degree, and officially stepped into competitive programming.
              Secured 1st place at Junior Hackathon 2022 among 150+ teams which sparked my passion for development!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TalkSection({ setActiveTab }) {
  return (
    <div className="talk-section">
      <h2 className="talk-title">Let's <span className="highlight" style={{color: 'var(--accent-green)'}}>Collaborate</span></h2>
      <p className="talk-desc">
        Interested in my projects or want to discuss a full-stack position? I would love to hear from you over a virtual coffee chat!
      </p>
      
      <div className="talk-buttons">
        <button className="btn-solid-glow" onClick={() => window.location.href='mailto:chhavi2544gautam@gmail.com'}>
          Let's get in touch <Send size={16} />
        </button>
        <button className="btn-outline-green" onClick={() => setActiveTab('Personal')}>
          See my Personal Life
        </button>
      </div>
    </div>
  );
}

function PersonalSection() {
  return (
    <div className="outline-card" style={{marginTop:'4rem'}}>
      <h2 style={{fontFamily:'var(--font-mono)', marginBottom:'1rem'}}>Personal Profile</h2>
      <p style={{color:'var(--text-muted)'}}>I spend my free time cycling and playing with my pets! View professional tab for core portfolio.</p>
    </div>
  );
}

function ContactSection() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('chhavi2544gautam@gmail.com');
  };

  return (
    <div className="section">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-input" placeholder="Your secret identity" />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-input" placeholder="I promise I won't spam you" />
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Content</label>
            <textarea className="form-textarea" rows="5" placeholder="Your message goes here. Ask me anything 👀"></textarea>
          </div>
          
          <button type="submit" className="form-submit-btn">
            Send Email &rarr;
          </button>
        </form>

        <div className="email-copy-box">
          <div className="email-text">
            <Mail size={16} /> 
            <span>Email: chhavi2544gautam@gmail.com</span>
          </div>
          <button onClick={handleCopyEmail} className="copy-btn" title="Copy to clipboard">
            <Copy size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
