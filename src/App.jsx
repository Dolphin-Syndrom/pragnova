import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Cloud, Database, Shield, Briefcase, Code2, Blocks } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

function App() {
  const [formState, setFormState] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.email) {
      setSubmitted(true);
      // In a real application, integration with an API goes here.
    }
  };

  return (
    <>
      <nav style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid var(--border-color)' }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', letterSpacing: '-1px' }}>PRAGNOVA.</div>
        <div>
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
      <section className="section" style={{ borderTop: '3px solid var(--border-color)', backgroundColor: 'var(--primary)' }}>
        <div className="container">
          <FadeIn>
            <h2 style={{ color: 'white', textShadow: '4px 4px 0px var(--bg-color)', WebkitTextStroke: '2px var(--bg-color)' }}>MASTER THE FUTURE</h2>
            <p style={{ color: 'white', fontWeight: 'bold' }}>Pragnova combines structured courses with internship pathways so students can build real products and graduate with proven experience.</p>
          </FadeIn>

          <div className="grid" style={{ marginTop: '4rem' }}>
            <FadeIn delay={0.1}>
              <div className="card brutal-border brutal-shadow" style={{ backgroundColor: 'white', color: 'var(--bg-color)', height: '100%' }}>
                <Cpu size={48} color="var(--primary)" />
                <h3 style={{ marginTop: '1rem' }}>Artificial Intelligence</h3>
                <p style={{ fontSize: '1rem', marginBottom: 0, fontWeight: 'bold' }}>Develop practical AI solutions, deploy ML pipelines, and ship features used in production workflows.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="card brutal-border brutal-shadow" style={{ backgroundColor: 'white', color: 'var(--bg-color)', height: '100%' }}>
                <Cloud size={48} color="var(--primary)" />
                <h3 style={{ marginTop: '1rem' }}>Cloud Computing</h3>
                <p style={{ fontSize: '1rem', marginBottom: 0, fontWeight: 'bold' }}>Design and deploy scalable infrastructure on AWS, GCP, and Azure with enterprise-style practices.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="card brutal-border brutal-shadow" style={{ backgroundColor: 'white', color: 'var(--bg-color)', height: '100%' }}>
                <Database size={48} color="var(--primary)" />
                <h3 style={{ marginTop: '1rem' }}>Data Science</h3>
                <p style={{ fontSize: '1rem', marginBottom: 0, fontWeight: 'bold' }}>Work with real datasets, build analytics pipelines, and turn insights into measurable business outcomes.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="card brutal-border brutal-shadow" style={{ backgroundColor: 'white', color: 'var(--bg-color)', height: '100%' }}>
                <Shield size={48} color="var(--primary)" />
                <h3 style={{ marginTop: '1rem' }}>Cybersecurity</h3>
                <p style={{ fontSize: '1rem', marginBottom: 0, fontWeight: 'bold' }}>Master secure architecture, threat analysis, and incident response aligned with modern compliance standards.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="card brutal-border brutal-shadow" style={{ backgroundColor: 'white', color: 'var(--bg-color)', height: '100%' }}>
                <Blocks size={48} color="var(--primary)" />
                <h3 style={{ marginTop: '1rem' }}>Blockchain Development</h3>
                <p style={{ fontSize: '1rem', marginBottom: 0, fontWeight: 'bold' }}>Build smart contracts, decentralized apps, and secure ledger integrations for real-world use cases.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.6}>
              <div className="card brutal-border brutal-shadow" style={{ backgroundColor: 'white', color: 'var(--bg-color)', height: '100%' }}>
                <Code2 size={48} color="var(--primary)" />
                <h3 style={{ marginTop: '1rem' }}>Full-Stack Engineering</h3>
                <p style={{ fontSize: '1rem', marginBottom: 0, fontWeight: 'bold' }}>Create production-grade web apps end-to-end with modern frontend, backend, and API architecture.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="section" style={{ borderTop: '3px solid var(--border-color)' }}>
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
