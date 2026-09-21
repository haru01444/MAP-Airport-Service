/* =============================================
   MAWADDAH ANGKASA PRIMA COMPANY PROFILE
   script.js
   ============================================= */

'use strict';

// ---- Navbar scroll effect ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ---- Active nav link on scroll ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const observerOptions = { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' };

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach(section => sectionObserver.observe(section));

// ---- Hamburger menu ----
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksContainer.classList.toggle('open');
  document.body.style.overflow = navLinksContainer.classList.contains('open') ? 'hidden' : '';
});

// Close mobile menu on link click
navLinksContainer.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksContainer.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ---- Smooth scroll for ALL anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  });
});

// ---- Scroll animation (IntersectionObserver) ----
const animateEls = document.querySelectorAll(
  '.about-header-new, .about-img-new, .about-card-new, .service-block, .anc-card, .tl-item, .tl-card, .airport-card, .contact-info, .contact-form-wrap, .section-header, .anc-head, .client-card-new, .clients-header-new, .pillar-item'
);

const animObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // stagger for grid children
        const delay = entry.target.closest('.about-grid-new, .ancillary-grid, .airports-grid, .clients-grid-new, .timeline-items, .pillars-grid')
          ? Array.from(entry.target.parentElement.children).indexOf(entry.target) * 100
          : 0;
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, delay);
        animObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

animateEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
  animObserver.observe(el);
});

// ---- Contact Form Submit ----
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const resetFormBtn = document.getElementById('resetForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const company = document.getElementById('company').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !message) {
      alert('Mohon lengkapi semua field yang wajib diisi (*).');
      return;
    }

    // Build mailto link
    const subject = encodeURIComponent(`[MAP Website] Permintaan Layanan — ${name}`);
    const body = encodeURIComponent(
      `Nama: ${name}\n` +
      `Perusahaan: ${company || '-'}\n` +
      `Email: ${email}\n` +
      `Layanan: ${service || '-'}\n\n` +
      `Pesan:\n${message}`
    );
    const mailtoUrl = `mailto:contact@map-airportservices.id?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoUrl;

    // Show success state after short delay
    setTimeout(() => {
      contactForm.hidden = true;
      formSuccess.hidden = false;
    }, 800);
  });
}

if (resetFormBtn) {
  resetFormBtn.addEventListener('click', () => {
    contactForm.reset();
    contactForm.hidden = false;
    formSuccess.hidden = true;
  });
}

// ---- Year in footer copyright (auto-update) ----
const copyrightEl = document.querySelector('.footer-bottom p:first-child');
if (copyrightEl) {
  const year = new Date().getFullYear();
  copyrightEl.innerHTML = `&copy; ${year} Mawaddah Angkasa Prima. Semua hak dilindungi.`;
}

console.log('%c✈ Mawaddah Angkasa Prima', 'color:#4A9EF5;font-family:Poppins;font-size:16px;font-weight:800;');
console.log('%cWebsite loaded successfully.', 'color:#94A3B8;font-size:12px;');

// ---- Services Tab Navigation ----
const svcNavItems = document.querySelectorAll('.svc-nav-item');
const svcPanels = document.querySelectorAll('.svc-panel');

svcNavItems.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');

    // Update buttons
    svcNavItems.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Update panels
    svcPanels.forEach(panel => {
      panel.classList.remove('active');
      if (panel.id === targetId) panel.classList.add('active');
    });
  });
});

