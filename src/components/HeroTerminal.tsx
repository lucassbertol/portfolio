import { useLang } from '../i18n/LangContext';

export function HeroTerminal() {
  const { t } = useLang();
  const { title, lines } = t.hero.terminal;

  return (
    <div className="hero-terminal">
      <div className="hero-terminal-bar" aria-hidden="true">
        <span className="hero-terminal-dots" aria-hidden="true">
          <i />
          <i />
          <i className="is-accent" />
        </span>
        <span className="hero-terminal-title">{title}</span>
      </div>
      <div className="hero-terminal-body">
        {lines.map((line) => (
          <div key={line.cmd} className="hero-terminal-entry">
            <p className="hero-terminal-cmd">
              <span className="hero-terminal-prompt">$</span> {line.cmd}
            </p>
            <p className="hero-terminal-out">
              {line.out.split('\n').map((part, i, arr) => (
                <span key={part}>
                  {part}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        ))}
        <p className="hero-terminal-cmd hero-terminal-live">
          <span className="hero-terminal-prompt">$</span>{' '}
          <span className="hero-terminal-cursor" aria-hidden="true" />
        </p>
      </div>
    </div>
  );
}
