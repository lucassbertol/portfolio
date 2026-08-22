import type { CSSProperties } from 'react';
import { techGroups } from '../config/site';
import { useLang } from '../i18n/LangContext';
import { TechIcon, techIcons } from './icons';

export function Skills() {
  const { t } = useLang();

  return (
    <section id="habilidades" className="section">
      <div className="container">
        <div data-reveal>
          <p className="section-kicker">{t.skills.kicker}</p>
          <h2 className="section-title">{t.skills.title}</h2>
        </div>

        <div className="stack-grid">
          {techGroups.map((group, i) => (
            <div
              key={group.id}
              className={`stack-group${group.featured ? ' stack-group--featured' : ''}`}
              data-reveal
              style={{ '--reveal-delay': `${i * 0.08}s` } as CSSProperties}
            >
              <h3 className="stack-label">
                {group.featured ? `// ${t.skills.groups[group.id]}` : t.skills.groups[group.id]}
              </h3>
              <ul className="stack-tags">
                {group.items.map((item) => (
                  <li key={item} className="tech-tag">
                    {techIcons[item] && (
                      <TechIcon icon={techIcons[item]} size={group.featured ? 16 : 13} />
                    )}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
