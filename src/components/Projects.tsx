import { projects } from '../config/site';

export function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container">
        <div data-reveal>
          <p className="section-kicker">/projetos</p>
          <h2 className="section-title">Alguns projetos.</h2>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article key={project.id} className="project" data-reveal>
              <div className="project-head">
                <span className="project-index">{project.index}</span>
                <h3 className="project-title">{project.title}</h3>
                {project.badge && <span className="project-badge">{project.badge}</span>}
              </div>

              <p className="project-tagline">{project.tagline}</p>
              <p className="project-description">{project.description}</p>

              <ul className="project-tech">
                {project.tech.map((tag) => (
                  <li key={tag} className="tech-tag">
                    {tag}
                  </li>
                ))}
              </ul>

              {project.links && (
                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="btn btn-primary btn-small"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label} <span aria-hidden="true">→</span>
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
