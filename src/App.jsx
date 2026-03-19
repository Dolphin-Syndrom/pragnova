import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Cloud, Database, Shield } from 'lucide-react';

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
            <h1 style={{ color: 'var(--primary)', textShadow: '4px 4px 0px var(--border-color)', WebkitTextStroke: '2px var(--border-color)' }}>THE AGENTIC<br />LEARNING PLATFORM</h1>
            <p style={{ margin: '0 auto 3rem auto', fontSize: '1.5rem', fontWeight: 'bold' }}>Unlock certs and internships via AI Agents across AI, Cloud, Data Science, and Cybersecurity.</p>
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
                <p style={{ color: 'white', marginBottom: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>Keep an eye on your inbox. Agents are preparing your onboarding.</p>
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
            <p style={{ color: 'white', fontWeight: 'bold' }}>Our agentic site curates real-world internships and industry-grade certifications tailored to your skills.</p>
          </FadeIn>

          <div className="grid" style={{ marginTop: '4rem' }}>
            <FadeIn delay={0.1}>
              <div className="card brutal-border brutal-shadow" style={{ backgroundColor: 'white', color: 'var(--bg-color)', height: '100%' }}>
                <Cpu size={48} color="var(--primary)" />
                <h3 style={{ marginTop: '1rem' }}>Artificial Intelligence</h3>
                <p style={{ fontSize: '1rem', marginBottom: 0, fontWeight: 'bold' }}>Train models, prompt engineer, and build automated agent networks.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="card brutal-border brutal-shadow" style={{ backgroundColor: 'white', color: 'var(--bg-color)', height: '100%' }}>
                <Cloud size={48} color="var(--primary)" />
                <h3 style={{ marginTop: '1rem' }}>Cloud Computing</h3>
                <p style={{ fontSize: '1rem', marginBottom: 0, fontWeight: 'bold' }}>Deploy scalable architectures across AWS, GCP, and Azure with hands-on labs.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="card brutal-border brutal-shadow" style={{ backgroundColor: 'white', color: 'var(--bg-color)', height: '100%' }}>
                <Database size={48} color="var(--primary)" />
                <h3 style={{ marginTop: '1rem' }}>Data Science</h3>
                <p style={{ fontSize: '1rem', marginBottom: 0, fontWeight: 'bold' }}>Analyze big data, build pipelines, and derive actionable insights.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="card brutal-border brutal-shadow" style={{ backgroundColor: 'white', color: 'var(--bg-color)', height: '100%' }}>
                <Shield size={48} color="var(--primary)" />
                <h3 style={{ marginTop: '1rem' }}>Cybersecurity</h3>
                <p style={{ fontSize: '1rem', marginBottom: 0, fontWeight: 'bold' }}>Learn ethical hacking, secure networks, and defend against zero-day threats.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="section" style={{ borderTop: '3px solid var(--border-color)' }}>
        <div className="container">
          <FadeIn>
            <h2 style={{ WebkitTextStroke: '2px var(--border-color)' }}>POWERED BY <span style={{ color: 'var(--primary)', textShadow: '4px 4px 0px var(--border-color)' }}>AI AGENTS</span></h2>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '3rem' }}>
            <FadeIn delay={0.1}>
              <div className="brutal-border brutal-shadow" style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center', backgroundColor: 'var(--bg-color)' }}>
                <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--primary)', textShadow: '3px 3px 0px var(--border-color)' }}>01</div>
                <div>
                  <h4 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--accent)' }}>Skill Assessment</h4>
                  <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>AI agents analyze your current proficiency and career goals.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="brutal-border brutal-shadow" style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center', backgroundColor: 'var(--bg-color)' }}>
                <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--primary)', textShadow: '3px 3px 0px var(--border-color)' }}>02</div>
                <div>
                  <h4 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--accent)' }}>Custom Curriculum</h4>
                  <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>Dynamic generation of learning paths and project milestones.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="brutal-border brutal-shadow" style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center', backgroundColor: 'var(--bg-color)' }}>
                <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--primary)', textShadow: '3px 3px 0px var(--border-color)' }}>03</div>
                <div>
                  <h4 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--accent)' }}>Verified Internships</h4>
                  <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>Get matched with real startup integrations and get certified.</p>
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
