import { Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="page-transition">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <Send size={32} color="var(--text-color)" />
        <h1 style={{ margin: 0 }}>Get in Touch</h1>
      </div>
      <p style={{ fontSize: '1.125rem' }}>
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
        Feel free to reach out through any of the platforms below!
      </p>

      <div className="contact-links">
        <a href="mailto:bhargavamakwana@gmail.com" className="contact-icon-link" aria-label="Email" target="_blank" rel="noopener noreferrer">
          <Mail size={32} />
        </a>

        <a href="https://linkedin.com/in/bhargav-makwana" className="contact-icon-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>

        <a href="https://github.com/bhargavamakwana" className="contact-icon-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        </a>
      </div>
    </div>
  );
};

export default Contact;
