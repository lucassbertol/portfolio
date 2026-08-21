import { useEffect, useMemo, useState } from 'react';
import { nav } from '../config/site';
import { useScrollSpy } from '../hooks/useScrollSpy';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
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
      </div>
    </header>
  );
}
