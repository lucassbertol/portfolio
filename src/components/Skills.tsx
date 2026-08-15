import { techGroups } from '../config/site';

export function Skills() {
  return (
    <section id="habilidades" className="section">
      <div className="container">
        <p className="section-kicker">/habilidades</p>
        <h2 className="section-title">O que eu sei fazer.</h2>

        <div className="stack-grid">
          {techGroups.map((group) => (
            <div key={group.label} className="stack-group">
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
