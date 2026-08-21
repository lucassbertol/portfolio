import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (els.length === 0) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    let ticking = false;

    const sweep = () => {
      ticking = false;
      const line = window.innerHeight * 0.92;
      for (const el of els) {
        if (!el.classList.contains('is-visible') && el.getBoundingClientRect().top < line) {
          el.classList.add('is-visible');
        }
      }
      if (els.every((el) => el.classList.contains('is-visible'))) {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(sweep);
      }
    };

    sweep();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
}
