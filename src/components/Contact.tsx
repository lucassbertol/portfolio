import type { CSSProperties } from 'react';
import { site } from '../config/site';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './icons';

export function Contact() {
  return (
    <section id="contato" className="section contact">
      <div className="container">
        <div data-reveal>
          <p className="section-kicker">/contato</p>
          <h2 className="contact-title">
            Vamos construir
            <br />
            algo juntos<span className="accent-dot">.</span>
          </h2>
        </div>

        <p className="contact-text" data-reveal style={{ '--reveal-delay': '0.1s' } as CSSProperties}>
          Tem um projeto em mente, uma vaga ou só quer trocar ideia?
          Meu inbox está sempre aberto.
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
