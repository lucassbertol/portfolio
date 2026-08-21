import type { CSSProperties } from 'react';
import { techGroups } from '../config/site';

export function Skills() {
  return (
    <section id="habilidades" className="section">
      <div className="container">
        <div data-reveal>
          <p className="section-kicker">/atuacao</p>
          <h2 className="section-title">Áreas de atuação.</h2>
        </div>

        <div className="stack-grid">
          {techGroups.map((group, i) => (
            <div
              key={group.label}
              className="stack-group"
              data-reveal
              style={{ '--reveal-delay': `${i * 0.08}s` } as CSSProperties}
            >
              <h3 className="stack-label">{group.label}</h3>
              <ul className="stack-tags">
                {group.items.map((item) => (
                  <li key={item} className="tech-tag">
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
