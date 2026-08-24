import { useRef } from 'react';
import { site } from '../config/site';
import { useLang } from '../i18n/LangContext';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './icons';
import { HeroTerminal } from './HeroTerminal';

export function Hero() {
  const { t } = useLang();
  const fxRef = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const el = fxRef.current;
      if (!el) return;
      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);
    });
  };

  return (
    <section id="sobre" className="hero" aria-label={t.hero.sectionAria} onMouseMove={onMouseMove}>
      <div className="hero-fx" ref={fxRef} aria-hidden="true" />
      <div className="container">
        <div className="hero-name-row">
          <h1 className="hero-title">
            Lucas
            <br />
            <span className="hero-title-fade">Bertol</span>
            <span className="accent-dot">.</span>
          </h1>
          <div className="hero-terminal-wrap">
            <HeroTerminal />
            <img
              src={`${import.meta.env.BASE_URL}minhafoto.jpeg`}
              alt="Lucas Bertol"
              className="hero-avatar"
            />
          </div>
        </div>
        <p className="hero-tagline">{t.hero.tagline}</p>
        <p className="hero-text">{t.hero.text}</p>
        <div className="hero-actions">
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
