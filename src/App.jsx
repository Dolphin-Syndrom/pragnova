import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Cloud, Database, Shield, Code2, Blocks } from 'lucide-react';
import { Link, useLocation, useParams } from 'react-router-dom';
import {
  SiPython,
  SiCplusplus,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiLinux,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGooglecloud,
  SiJavascript,
} from 'react-icons/si';

const MotionDiv = motion.div;

const FadeIn = ({ children, delay = 0 }) => (
  <MotionDiv
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
  >
    {children}
  </MotionDiv>
);

const NotFoundPage = () => (
  <section className="section" style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '2rem' }}>
    <div className="brutal-border brutal-shadow" style={{ maxWidth: '680px', width: '100%', backgroundColor: '#121212', padding: '2rem' }}>
      <p style={{ marginBottom: '0.8rem', fontSize: '0.95rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--accent)' }}>Error 404</p>
      <h1 style={{ marginBottom: '1rem', color: 'var(--primary)', WebkitTextStroke: '2px var(--border-color)', textShadow: '4px 4px 0px var(--border-color)' }}>Page Not Found</h1>
      <p style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>The page you requested does not exist or the route has moved.</p>
      <Link to="/" className="brutal-button brutal-border" style={{ textDecoration: 'none' }}>
        Back To Home
      </Link>
    </div>
  </section>
);

function App() {
  const { slug } = useParams();
  const location = useLocation();

  const courses = useMemo(() => ([
    {
      slug: 'ai',
      name: 'Artificial Intelligence',
      shortName: 'AI',
      Icon: Cpu,
      summary: 'Develop practical AI solutions, deploy ML pipelines, and ship features used in production workflows.',
      theme: {
        text: '#ff4d6d',
        bg: '#2a0a14',
        shadow: '#ff4d6d',
      },
      syllabus: ['Foundations of ML', 'Deep Learning Systems', 'MLOps and Deployment', 'Capstone Studio'],
      modules: [
        'Python for AI Engineering',
        'Neural Networks with TensorFlow',
        'Prompt Engineering and LLM Apps',
        'Model Evaluation and Monitoring',
      ],
      projects: ['AI Resume Screener', 'Recommendation Engine', 'Vision-based Quality Inspector'],
      cta: {
        title: 'Build Intelligent Products',
        text: 'Join this track to design, train, and deploy AI features that solve real business problems.',
      },
    },
    {
      slug: 'cloud-computing',
      name: 'Cloud Computing',
      shortName: 'Cloud',
      Icon: Cloud,
      summary: 'Design and deploy scalable infrastructure on AWS, GCP, and Azure with enterprise-style practices.',
      theme: {
        text: '#56cfe1',
        bg: '#091f2a',
        shadow: '#56cfe1',
      },
      syllabus: ['Cloud Core Concepts', 'Containers and Orchestration', 'Infra as Code', 'Observability and SRE'],
      modules: [
        'AWS and GCP Architecture',
        'Docker and Kubernetes Workflows',
        'CI/CD Pipelines for Cloud',
        'Security and Cost Optimization',
      ],
      projects: ['Multi-region API Deployment', 'Cloud Monitoring Dashboard', 'Serverless Event Processor'],
      cta: {
        title: 'Launch at Cloud Scale',
        text: 'Master production deployments and modern DevOps workflows used by high-growth engineering teams.',
      },
    },
    {
      slug: 'data-science',
      name: 'Data Science',
      shortName: 'Data',
      Icon: Database,
      summary: 'Work with real datasets, build analytics pipelines, and turn insights into measurable business outcomes.',
      theme: {
        text: '#ef7000',
        bg: '#2b2408',
        shadow: '#ef7000',
      },
      syllabus: ['Data Wrangling', 'Exploratory Analytics', 'Statistical Inference', 'Decision Intelligence'],
      modules: [
        'Pandas and NumPy in Practice',
        'Data Visualization with Python',
        'Feature Engineering and Experimentation',
        'Communicating Insights to Stakeholders',
      ],
      projects: ['Customer Churn Predictor', 'Demand Forecast Model', 'Growth Metrics Intelligence Suite'],
      cta: {
        title: 'Turn Data Into Decisions',
        text: 'Learn to deliver clear recommendations with strong analysis, storytelling, and measurable impact.',
      },
    },
    {
      slug: 'cybersecurity',
      name: 'Cybersecurity',
      shortName: 'Security',
      Icon: Shield,
      summary: 'Master secure architecture, threat analysis, and incident response aligned with modern compliance standards.',
      theme: {
        text: '#00BE2C',
        bg: '#0f2b17',
        shadow: '#00BE2C',
      },
      syllabus: ['Security Foundations', 'Application Security', 'Cloud Security', 'Blue Team Operations'],
      modules: [
        'Threat Modeling and Risk Assessments',
        'Secure API and Web Practices',
        'Identity and Access Management',
        'Incident Response Playbooks',
      ],
      projects: ['SOC Alert Triage Lab', 'Secure API Gateway', 'Pen-test Report and Remediation Plan'],
      cta: {
        title: 'Defend Modern Systems',
        text: 'Train in offensive and defensive workflows to protect production applications and cloud infrastructure.',
      },
    },
    {
      slug: 'blockchain-development',
      name: 'Blockchain Development',
      shortName: 'Blockchain',
      Icon: Blocks,
      summary: 'Build smart contracts, decentralized apps, and secure ledger integrations for real-world use cases.',
      theme: {
        text: '#c77dff',
        bg: '#201030',
        shadow: '#c77dff',
      },
      syllabus: ['Distributed Ledgers', 'Smart Contract Engineering', 'DApp Architecture', 'Web3 Security'],
      modules: [
        'Solidity Fundamentals',
        'On-chain Data and Tokenomics',
        'Frontend Integration with Wallets',
        'Smart Contract Auditing Basics',
      ],
      projects: ['Token Launch Framework', 'DAO Governance Prototype', 'Supply Chain DApp'],
      cta: {
        title: 'Ship Real Web3 Products',
        text: 'Create secure decentralized applications with practical architecture and audit-ready contract patterns.',
      },
    },
    {
      slug: 'full-stack-engineering',
      name: 'Full-Stack Engineering',
      shortName: 'Full-Stack',
      Icon: Code2,
      summary: 'Create production-grade web apps end-to-end with modern frontend, backend, and API architecture.',
      theme: {
        text: '#ff9f1c',
        bg: '#2f1c08',
        shadow: '#ff9f1c',
      },
      syllabus: ['Frontend Systems', 'Backend Services', 'Databases and Caching', 'Production Readiness'],
      modules: [
        'React UI Architecture',
        'API Design and Microservices',
        'Auth, Testing, and Observability',
        'Deployment and Runtime Performance',
      ],
      projects: ['E-commerce Platform', 'Realtime Collaboration App', 'SaaS Admin Dashboard'],
      cta: {
        title: 'Become Product-Ready',
        text: 'Build polished end-to-end products and deploy them with scalable architecture and clean engineering standards.',
      },
    },
  ]), []);

  const technologies = useMemo(() => ([
    { name: 'Python', Icon: SiPython, color: '#ffd43b' },
    { name: 'C++', Icon: SiCplusplus, color: '#5c8ef5' },
    { name: 'Pandas', Icon: SiPandas, color: '#f7f7f7' },
    { name: 'NumPy', Icon: SiNumpy, color: '#7aa6ff' },
    { name: 'TensorFlow', Icon: SiTensorflow, color: '#ff6f00' },
    { name: 'Linux', Icon: SiLinux, color: '#f2cc0c' },
    { name: 'Docker', Icon: SiDocker, color: '#2496ed' },
    { name: 'Kubernetes', Icon: SiKubernetes, color: '#326ce5' },
    { name: 'Git', Icon: SiGit, color: '#f1502f' },
    { name: 'Google Cloud', Icon: SiGooglecloud, color: '#7db4ff' },
    { name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e' },
  ]), []);

  const [formState, setFormState] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.email) {
      setSubmitted(true);
      // In a real application, integration with an API goes here.
    }
  };

  if (slug) {
    const selectedCourse = courses.find((course) => course.slug === slug);

    if (!selectedCourse) {
      return <NotFoundPage />;
    }

    const { Icon } = selectedCourse;

    return (
      <>
        <nav style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid var(--border-color)' }}>
          <Link to="/" style={{ fontSize: '2rem', fontWeight: 'bold', letterSpacing: '-1px', color: 'white', textDecoration: 'none' }}>PRAGNOVA.</Link>
          <Link to="/" className="brutal-button brutal-border" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', backgroundColor: selectedCourse.theme.text, boxShadow: `6px 6px 0px ${selectedCourse.theme.shadow}` }}>
            Back To Home
          </Link>
        </nav>

        <section className="section" style={{ backgroundColor: selectedCourse.theme.bg, minHeight: 'calc(100vh - 96px)' }}>
          <div className="container">
            <FadeIn>
              <div className="brutal-border" style={{ display: 'inline-block', padding: '0.5rem 1rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '2rem', backgroundColor: selectedCourse.theme.text, color: '#0d0d0d', borderColor: selectedCourse.theme.text, boxShadow: `6px 6px 0px ${selectedCourse.theme.shadow}` }}>
                Master The Future: {selectedCourse.shortName}
              </div>
              <h1 style={{ color: selectedCourse.theme.text, textShadow: `4px 4px 0px ${selectedCourse.theme.shadow}`, WebkitTextStroke: '2px var(--border-color)' }}>{selectedCourse.name}</h1>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', maxWidth: '900px' }}>{selectedCourse.summary}</p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="brutal-border" style={{ background: '#0d0d0d', padding: '2rem', boxShadow: `8px 8px 0px ${selectedCourse.theme.shadow}`, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Icon size={48} color={selectedCourse.theme.text} />
                  <h3 style={{ color: selectedCourse.theme.text, marginBottom: 0 }}>Course Roadmap</h3>
                </div>
                <p style={{ marginBottom: 0, fontWeight: 'bold' }}>
                  This track uses hands-on projects, mentorship checkpoints, and internship-style delivery from fundamentals to production execution.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.22}>
              <div className="course-detail-grid" style={{ marginTop: '2rem' }}>
                <div className="brutal-border" style={{ backgroundColor: '#0d0d0d', padding: '2rem', boxShadow: `6px 6px 0px ${selectedCourse.theme.shadow}` }}>
                  <h3 style={{ color: selectedCourse.theme.text, marginBottom: '1rem' }}>Syllabus</h3>
                  <ul className="course-list">
                    {selectedCourse.syllabus.map((item) => (
                      <li key={item}>
                        <span className="course-bullet" style={{ backgroundColor: selectedCourse.theme.text }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="brutal-border" style={{ backgroundColor: '#0d0d0d', padding: '2rem', boxShadow: `6px 6px 0px ${selectedCourse.theme.shadow}` }}>
                  <h3 style={{ color: selectedCourse.theme.text, marginBottom: '1rem' }}>Modules</h3>
                  <ul className="course-list">
                    {selectedCourse.modules.map((item) => (
                      <li key={item}>
                        <span className="course-bullet" style={{ backgroundColor: selectedCourse.theme.text }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="brutal-border" style={{ marginTop: '2rem', backgroundColor: '#0d0d0d', padding: '2rem', boxShadow: `8px 8px 0px ${selectedCourse.theme.shadow}` }}>
                <h3 style={{ color: selectedCourse.theme.text, marginBottom: '1rem' }}>Industry Projects</h3>
                <div className="grid" style={{ gap: '1rem' }}>
                  {selectedCourse.projects.map((project) => (
                    <div key={project} className="brutal-border" style={{ padding: '1rem', backgroundColor: selectedCourse.theme.bg }}>
                      <p style={{ marginBottom: 0, fontWeight: 'bold', fontSize: '1rem' }}>{project}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.38}>
              <div className="brutal-border" style={{ marginTop: '2rem', padding: '2rem', backgroundColor: selectedCourse.theme.text, boxShadow: `8px 8px 0px ${selectedCourse.theme.shadow}` }}>
                <h3 style={{ color: '#0d0d0d', marginBottom: '0.6rem' }}>{selectedCourse.cta.title}</h3>
                <p style={{ color: '#0d0d0d', marginBottom: '1rem', maxWidth: '100%', fontWeight: 'bold' }}>{selectedCourse.cta.text}</p>
                <a href="/#join" className="brutal-button brutal-border" style={{ backgroundColor: '#0d0d0d', color: 'white', borderColor: '#0d0d0d' }}>
                  Apply For Early Access
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </>
    );
  }

  if (location.pathname !== '/') {
    return <NotFoundPage />;
  }

  return (
    <>
      <nav style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid var(--border-color)' }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', letterSpacing: '-1px' }}>PRAGNOVA.</div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#courses" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none', scrollBehavior: 'smooth' }}>Courses</a>
          <a href="#about" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none', scrollBehavior: 'smooth' }}>About</a>
          <a href="#join" className="brutal-button brutal-border brutal-shadow" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Join Early</a>
        </div>
      </nav>

      {/* Hero Section with Form in the Middle */}
      <section className="section" id="join" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', zIndex: 10 }}>
          <FadeIn>
            <div style={{ display: 'inline-block', backgroundColor: 'var(--primary)', color: 'white', padding: '0.5rem 1rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '2rem', border: '3px solid var(--border-color)', boxShadow: '4px 4px 0px var(--border-color)' }}>
              Launching Soon
            </div>
            <h1 style={{ color: 'var(--primary)', textShadow: '4px 4px 0px var(--border-color)', WebkitTextStroke: '2px var(--border-color)' }}>INDUSTRY LEADING<br />SKILLS PLATFORM</h1>
            <p style={{ margin: '0 auto 3rem auto', fontSize: '1.5rem', fontWeight: 'bold' }}>Build job-ready expertise through top-tier courses and real-world internship programs on industry-level software projects.</p>
          </FadeIn>

          <FadeIn delay={0.2}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="brutal-border brutal-shadow" style={{ background: 'var(--bg-color)', padding: '3rem', maxWidth: '500px', width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--primary)', WebkitTextStroke: '1px var(--border-color)', textShadow: '2px 2px 0px var(--border-color)' }}>GET EARLY ACCESS</h3>
                <div>
                  <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>FULL NAME</label>
                  <input
                    type="text"
                    required
                    className="brutal-input brutal-border"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    className="brutal-input brutal-border"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
                <button type="submit" className="brutal-button brutal-border brutal-shadow-accent" style={{ marginTop: '1rem', width: '100%' }}>
                  JOIN WAITLIST
                </button>
              </form>
            ) : (
              <div className="brutal-border brutal-shadow" style={{ background: 'var(--primary)', padding: '4rem 3rem', maxWidth: '500px', width: '100%', margin: '0 auto' }}>
                <h3 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>YOU'RE ON THE LIST!</h3>
                <p style={{ color: 'white', marginBottom: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>Keep an eye on your inbox. Our team will share your onboarding and early access details soon.</p>
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" id="courses" style={{ borderTop: '3px solid var(--border-color)', backgroundColor: 'var(--primary)' }}>
        <div className="container">
          <FadeIn>
            <h2 style={{ color: 'white', textShadow: '4px 4px 0px var(--bg-color)', WebkitTextStroke: '2px var(--bg-color)' }}>MASTER THE FUTURE</h2>
            <p style={{ color: 'white', fontWeight: 'bold' }}>Pragnova combines structured courses with internship pathways so students can build real products and graduate with proven experience.</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="tech-marquee brutal-border">
              <div className="tech-marquee-track">
                {[...technologies, ...technologies].map((tech, index) => {
                  const { Icon } = tech;
                  return (
                    <div className="tech-chip" key={`${tech.name}-${index}`}>
                      <Icon size={20} color={tech.color} />
                      <span>{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          <div className="grid" style={{ marginTop: '4rem' }}>
            {courses.map((course, index) => {
              const { Icon } = course;
              return (
                <FadeIn delay={0.1 + index * 0.1} key={course.slug}>
                  <Link to={`/courses/${course.slug}`} className="course-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="card brutal-border" style={{ backgroundColor: 'white', color: 'var(--bg-color)', height: '100%', boxShadow: `6px 6px 0px ${course.theme.shadow}` }}>
                      <Icon size={48} color={course.theme.text} />
                      <h3 style={{ marginTop: '1rem', color: course.theme.text }}>{course.name}</h3>
                      <p style={{ fontSize: '1rem', marginBottom: 0, fontWeight: 'bold' }}>{course.summary}</p>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="section" id="about" style={{ borderTop: '3px solid var(--border-color)' }}>
        <div className="container">
          <FadeIn>
            <h2 style={{ WebkitTextStroke: '2px var(--border-color)' }}>HOW <span style={{ color: 'var(--primary)', textShadow: '4px 4px 0px var(--border-color)' }}>PRAGNOVA WORKS</span></h2>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '3rem' }}>
            <FadeIn delay={0.1}>
              <div className="brutal-border brutal-shadow" style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center', backgroundColor: 'var(--bg-color)' }}>
                <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--primary)', textShadow: '3px 3px 0px var(--border-color)' }}>01</div>
                <div>
                  <h4 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--accent)' }}>Assess & Enroll</h4>
                  <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>Start with a guided assessment and enroll in curated tracks aligned to your target role.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="brutal-border brutal-shadow" style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center', backgroundColor: 'var(--bg-color)' }}>
                <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--primary)', textShadow: '3px 3px 0px var(--border-color)' }}>02</div>
                <div>
                  <h4 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--accent)' }}>Build Real Products</h4>
                  <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>Learn by shipping assignments and capstones that mirror real SaaS product development cycles.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="brutal-border brutal-shadow" style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center', backgroundColor: 'var(--bg-color)' }}>
                <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--primary)', textShadow: '3px 3px 0px var(--border-color)' }}>03</div>
                <div>
                  <h4 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--accent)' }}>Industry Internship Programs</h4>
                  <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>Join structured internships, contribute to industry projects, and graduate with portfolio-ready outcomes.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <footer style={{ padding: '3rem 2rem', borderTop: '3px solid var(--border-color)', textAlign: 'center', backgroundColor: 'var(--primary)' }}>
        <p style={{ fontSize: '1.2rem', margin: 0, fontWeight: 'bold', color: 'white', textTransform: 'uppercase' }}>© 2026 PRAGNOVA. ALL RIGHTS RESERVED.</p>
      </footer>
    </>
  );
}

export default App;
