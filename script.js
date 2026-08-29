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
  window.addEventListener('scroll', onScroll, { passive: true });
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

  // ---------- Impact photo carousel ----------
  // Built on native horizontal scrolling, so it's always genuinely
  // scrollable by hand (touch swipe, trackpad, click-drag) even if
  // this script never runs. This block only adds auto-advance on top.
  const track = document.querySelector('.impact-track');
  if (track) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // The track holds the real 6 cards followed by an identical
    // duplicate set. Looping is: once scrolled past the first set's
    // width, jump back by that width — invisible, since the content
    // repeats exactly at that point.
    const singleSetWidth = () => track.scrollWidth / 2;

    let autoScroll = !prefersReduced;
    let isDragging = false;
    const SPEED = 0.6; // px per frame (~36px/s at 60fps)

    function tick() {
      if (autoScroll && !isDragging && track.scrollWidth > track.clientWidth) {
        track.scrollLeft += SPEED;
        const half = singleSetWidth();
        if (track.scrollLeft >= half) {
          track.scrollLeft -= half;
        }
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    // Keep the loop illusion consistent during manual scrolling too,
    // so dragging past either end of the real set wraps seamlessly.
    track.addEventListener('scroll', () => {
      const half = singleSetWidth();
      if (track.scrollLeft >= half) {
        track.scrollLeft -= half;
      } else if (track.scrollLeft < 0) {
        track.scrollLeft += half;
      }
    });

    // Pause on hover/touch, resume shortly after the person lets go,
    // so manual interaction never fights the auto-scroll.
    let resumeTimer = null;
    const pause = () => { autoScroll = false; clearTimeout(resumeTimer); };
    const resumeSoon = () => {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => { autoScroll = !prefersReduced; }, 1200);
    };
    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', resumeSoon);
    track.addEventListener('touchstart', pause, { passive: true });
    track.addEventListener('touchend', resumeSoon, { passive: true });

    // Click-and-drag for desktop mouse users (touch already scrolls
    // natively via the browser; this adds the same affordance for a
    // mouse, since there's no visible scrollbar to grab).
    let dragStartX = 0;
    let dragStartScroll = 0;
    track.addEventListener('mousedown', (e) => {
      isDragging = true;
      track.classList.add('dragging');
      dragStartX = e.pageX;
      dragStartScroll = track.scrollLeft;
      pause();
    });
    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      track.scrollLeft = dragStartScroll - (e.pageX - dragStartX);
    });
    window.addEventListener('mouseup', () => {
      if (!isDragging) return;
      isDragging = false;
      track.classList.remove('dragging');
      resumeSoon();
    });
  }

  // ---------- Mobile nav menu (hamburger) ----------
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const menuPanel = document.getElementById('mobile-menu');
  if (menuToggle && menuPanel) {
    const closeMenu = () => {
      menuPanel.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    };
    const toggleMenu = () => {
      const isOpen = menuPanel.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    };
    menuToggle.addEventListener('click', toggleMenu);
    // Close the menu once someone taps a link inside it, so it doesn't
    // stay open over the section they just navigated to.
    menuPanel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }
});
