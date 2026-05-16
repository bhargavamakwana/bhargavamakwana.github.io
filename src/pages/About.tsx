import { ArrowRight, Terminal, Cloud, Database, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="page-transition">
      <section className="about-layout">
        <div className="about-text">
          <h1>Hi, I'm Bhargav Makwana</h1>
          <p style={{ fontSize: '1.125rem' }}>
            A passionate Software Engineer with a strong focus on backend architecture and system design of simple as well as complex distributed systems.
            My niche lies in building scalable, robust systems using Rust, Python, and modern Cloud technologies.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', justifyContent: 'inherit' }}>
            <Link to="/contact" className="btn btn-primary">
              Get in touch <ArrowRight size={18} />
            </Link>
            {/* <Link to="/blog" className="btn btn-outline">
              Read my blog
            </Link> */}
          </div>
        </div>
        <div className="about-image-container">
          <img src="/profile.png" alt="Bhargav Makwana" />
        </div>
      </section>

      <h2>What I Do</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
        <div className="card">
          <Terminal size={32} color="var(--text-color)" style={{ marginBottom: '1rem' }} />
          <h3>Backend & Systems</h3>
          <p>Designing, building, and managing high-performance backend systems.</p>
        </div>
        <div className="card">
          <Cloud size={32} color="var(--text-color)" style={{ marginBottom: '1rem' }} />
          <h3>Cloud Architecture</h3>
          <p>Designing, deploying, and managing scalable infrastructure on modern cloud platforms.</p>
        </div>
        <div className="card">
          <Database size={32} color="var(--text-color)" style={{ marginBottom: '1rem' }} />
          <h3>Database Engineering</h3>
          <p>Optimizing complex queries and structuring relational and NoSQL databases for scale.</p>
        </div>
        <div className="card">
          <Bot size={32} color="var(--text-color)" style={{ marginBottom: '1rem' }} />
          <h3>Agentic AI</h3>
          <p>Designing, building, and managing Agentic AI systems and thier integration into software systems.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
