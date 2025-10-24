// Basic interactivity for the landing page
document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.getElementById('site-nav');
  navToggle && navToggle.addEventListener('click', function () {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // close mobile nav if open
          if (siteNav.classList.contains('open')) {
            siteNav.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
          }
        }
      }
    });
  });

  // Contact form - simple front-end handler
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(form);
      // In a real app you'd send this to a server via fetch.
      // Here we simulate success and clear the form.
      statusEl.textContent = 'Sending…';
      setTimeout(function () {
        statusEl.textContent = 'Thanks! Your message has been sent.';
        form.reset();
      }, 700);
    });
  }

  // Set current year in footer
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;
});
