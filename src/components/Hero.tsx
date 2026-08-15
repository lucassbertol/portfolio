import { site } from '../config/site';

export function Hero() {
  return (
    <section id="sobre" className="hero" aria-label="Sobre">
      <div className="container">
        <p className="hero-eyebrow">Sistemas de Informação · UFSM</p>
        <h1 className="hero-title">
          Lucas
          <br />
          Bertol<span className="accent-dot">.</span>
        </h1>
        <p className="hero-tagline">{site.tagline}</p>
        <p className="hero-text">
          Estudante do 5º semestre de Sistemas de Informação na UFSM, com previsão de formar em
          2028/1 e bolsista do Núcleo da Ciência da Computação, desenvolvo soluções de software
          para necessidades existentes.
        </p>
        <div className="hero-actions">
          <a href={site.github} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a
            href={site.linkedin}
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a className="btn btn-primary" href={`mailto:${site.email}`}>
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
