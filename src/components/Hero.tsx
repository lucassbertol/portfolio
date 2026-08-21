import { useRef } from 'react';
import { site } from '../config/site';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons';

export function Hero() {
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
    <section id="sobre" className="hero" aria-label="Sobre" onMouseMove={onMouseMove}>
      <div className="hero-fx" ref={fxRef} aria-hidden="true" />
      <div className="container">
        <p className="section-kicker">desenvolvedor fullstack</p>
        <p className="hero-eyebrow">Sistemas de Informação · UFSM</p>
        <div className="hero-name-row">
          <h1 className="hero-title">
            Lucas
            <br />
            <span className="hero-title-fade">Bertol</span>
            <span className="accent-dot">.</span>
          </h1>
          <div className="hero-avatar-wrap">
            <img
              src={`${import.meta.env.BASE_URL}minhafoto.jpeg`}
              alt="Lucas Bertol"
              className="hero-avatar"
            />
          </div>
        </div>
        <p className="hero-tagline">{site.tagline}</p>
        <p className="hero-text">
          Desenvolvo soluções para gerar retorno: automações de processos e build sob medida
          para empresas que querem progredir.
        </p>
        <div className="hero-actions">
          <a href={site.github} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
            <GithubIcon /> GitHub
          </a>
          <a
            href={site.linkedin}
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon /> LinkedIn
          </a>
          <a className="btn btn-primary" href={`mailto:${site.email}`}>
            <MailIcon /> Email
          </a>
        </div>
      </div>
    </section>
  );
}
