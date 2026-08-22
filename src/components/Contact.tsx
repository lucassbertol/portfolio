import type { CSSProperties } from 'react';
import { site } from '../config/site';
import { useLang } from '../i18n/LangContext';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './icons';

export function Contact() {
  const { t } = useLang();

  return (
    <section id="contato" className="section contact">
      <div className="container">
        <div data-reveal>
          <p className="section-kicker">{t.contact.kicker}</p>
          <h2 className="contact-title">
            {t.contact.titleA}
            <br />
            {t.contact.titleB}
            <span className="accent-dot">.</span>
          </h2>
        </div>

        <p className="contact-text" data-reveal style={{ '--reveal-delay': '0.1s' } as CSSProperties}>
          {t.contact.text}
        </p>

        <div
          className="hero-actions"
          data-reveal
          style={{ '--reveal-delay': '0.18s' } as CSSProperties}
        >
          <a
            className="btn btn-primary"
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon /> WhatsApp <span aria-hidden="true">→</span>
          </a>
          <a href={site.linkedin} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon /> LinkedIn
          </a>
          <a href={site.github} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
            <GithubIcon /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
