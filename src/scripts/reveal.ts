/**
 * Two small progressive enhancements, ported from the original site's
 * IntersectionObserver-based logic:
 *  1. Reveal sections as they scroll into view.
 *  2. Highlight the nav link matching the section currently in view.
 * Content is fully visible/functional without JS; this only adds motion
 * and the active-link indicator.
 */
export function initScrollEffects(): void {
  const reveals = document.querySelectorAll<HTMLElement>('[data-reveal]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('reveal-in'));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    reveals.forEach((el) => revealObserver.observe(el));
  }

  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-link[data-nav]'));
  const sections = links
    .map((link) => document.getElementById(link.dataset.nav ?? ''))
    .filter((el): el is HTMLElement => Boolean(el));

  if (!sections.length || !('IntersectionObserver' in window)) return;

  const setActive = (id: string) => {
    links.forEach((link) => {
      link.setAttribute('data-active', String(link.dataset.nav === id));
    });
  };

  const navObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
  );

  sections.forEach((section) => navObserver.observe(section));
}
