import { useEffect, useMemo, useState } from 'react';
import { useLang } from '../i18n/LangContext';
import { useScrollSpy } from '../hooks/useScrollSpy';

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const ids = useMemo(() => t.nav.items.map((item) => item.href.slice(1)), [t]);
  const active = useScrollSpy(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#sobre" className="navbar-logo" aria-label={t.nav.logoAria}>
          LB<span className="accent-dot">.</span>
        </a>

        <nav className="navbar-links" aria-label={t.nav.ariaLabel}>
          {t.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href.slice(1) ? 'active' : undefined}
              aria-current={active === item.href.slice(1) ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="lang-toggle"
          aria-label={t.nav.langGroupAria}
          onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
        >
          {lang === 'pt' ? 'PT' : 'EN'}
        </button>
      </div>
    </header>
  );
}
