import { projects } from '../config/site';
import { useLang } from '../i18n/LangContext';

export function Projects() {
  const { t } = useLang();

  return (
    <section id="projetos" className="section">
      <div className="container">
        <div data-reveal>
          <p className="section-kicker">{t.projects.kicker}</p>
          <h2 className="section-title">{t.projects.title}</h2>
        </div>

        <div className="projects">
          {projects.map((project) => {
            const copy = t.projects.items[project.id];
            return (
              <article key={project.id} className="project" data-reveal>
                <div className="project-head">
                  <span className="project-index">{project.index}</span>
                  <h3 className="project-title">{project.title}</h3>
                  {copy.badge && <span className="project-badge">{copy.badge}</span>}
                </div>

                <p className="project-tagline">{copy.tagline}</p>
                <p className="project-description">{copy.description}</p>

                <ul className="project-tech">
                  {project.tech.map((tag) => (
                    <li key={tag} className="tech-tag">
                      {tag}
                    </li>
                  ))}
                </ul>

                {project.link && (
                  <div className="project-links">
                    <a
                      href={project.link}
                      className="btn btn-primary btn-small"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {copy.cta} <span aria-hidden="true">→</span>
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
