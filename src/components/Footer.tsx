import { useState } from 'react';
import { site } from '../config/site';

export function Footer() {
  const [copied, setCopied] = useState(false);
  const year = new Date().getFullYear();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      const el = document.createElement('textarea');
      el.value = site.email;
      el.style.position = 'fixed';
      el.style.opacity = '0';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-contact">
          <button type="button" className="footer-email" onClick={copyEmail} aria-live="polite">
            <span>{site.email}</span>
            <span className="contact-copy-label">{copied ? 'copiado!' : 'copiar'}</span>
          </button>
          <div className="footer-links">
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <p className="footer-meta">
          © {year} Lucas Bertol · {site.location} ·{' '}
          <span className="status-dot" aria-hidden="true" /> SYSTEM_STATUS: ONLINE
        </p>
      </div>
    </footer>
  );
}
