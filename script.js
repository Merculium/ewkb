// ===================================
// Erna Wojaczek — script.js
// ===================================

// --- NAV: sticky shadow + mobile toggle ---
const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close nav when a link is clicked
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
  });
});

// --- PORTFOLIO FILTER ---
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    portfolioItems.forEach(item => {
      const match = filter === 'all' || item.dataset.filter === filter;
      item.classList.toggle('hidden', !match);
      if (match) {
        item.style.animation = 'fadeIn 0.4s ease both';
        setTimeout(() => { item.style.animation = ''; }, 400);
      }
    });
  });
});

// --- SCROLL REVEAL ---
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll(
  '.service-card, .portfolio-item, .contact-item, .about-text p, .about-badges'
).forEach((el, i) => {
  el.style.animationDelay = `${i * 0.07}s`;
  revealObserver.observe(el);
});

// --- CONTACT FORM (client-side only, replace with your backend/Formspree) ---
const form = document.getElementById('contactForm');
form?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = '✓ Wysłano!';
  btn.disabled = true;
  btn.style.background = '#5a7a5a';

  // Reset after 4s (replace with actual form submission)
  setTimeout(() => {
    btn.textContent = 'Wyślij wiadomość →';
    btn.disabled = false;
    btn.style.background = '';
    form.reset();
  }, 4000);
});

// --- ACTIVE NAV LINK on scroll ---
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active-nav'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      active?.classList.add('active-nav');
    }
  });
}, { threshold: 0.3 });

sections.forEach(s => sectionObserver.observe(s));
