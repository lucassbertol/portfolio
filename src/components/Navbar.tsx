import { useEffect, useMemo, useState } from 'react';
import { nav } from '../config/site';
import { useScrollSpy } from '../hooks/useScrollSpy';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ids = useMemo(() => nav.map((item) => item.href.slice(1)), []);
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
        <a href="#sobre" className="navbar-logo" aria-label="Lucas Bertol — início">
          LB<span className="accent-dot">.</span>
        </a>

        <nav className="navbar-links" aria-label="Navegação principal">
          {nav.map((item) => (
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
          className="navbar-toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? 'bar open' : 'bar'} />
          <span className={open ? 'bar open' : 'bar'} />
        </button>
      </div>

      <nav id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-label="Menu">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={active === item.href.slice(1) ? 'active' : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
