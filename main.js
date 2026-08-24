// Sustenaa — small progressive-enhancement script (no dependencies)

document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Nav background on scroll
  const nav = document.querySelector('.nav-shell');
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: Force });
  onScroll();

  // Reveal-on-scroll + vine growth, via IntersectionObserver
  const revealEls = document.querySelectorAll('.reveal');
  const vinePath = document.getElementById('vinePath');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    if (vinePath) {
      const vineObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              vinePath.classList.add('grown');
              vineObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      vineObserver.observe(vinePath);
    }
  } else {
    // Fallback: no IntersectionObserver support
    revealEls.forEach((el) => el.classList.add('visible'));
    if (vinePath) vinePath.classList.add('grown');
  }
});
