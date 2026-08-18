import { studying } from '../config/site';

export function StudySection() {
  return (
    <section id="estudando" className="section">
      <div className="container">
        <p className="section-kicker">/estudando</p>
        <h2 className="section-title">O que estou estudando.</h2>

        <div className="study-grid">
          {studying.map((group) => (
            <div key={group.title} className="study-card">
              <h3 className="study-card-title">{group.title}</h3>
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
