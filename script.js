// Mobile menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
  document.querySelectorAll('.nav-menu a').forEach(a => {
    a.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
}

// Active link highlight across pages
(function highlightActive() {
  const links = document.querySelectorAll('.nav-menu a');
  if (!links.length) return;
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const file = href.split('/').pop().toLowerCase();
    if (file === current || (current === '' && file === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

// Simple contact handler (demo)
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(contactForm);
    alert(`Thank you, ${fd.get('name') || 'Friend'}! We’ll get back to you shortly.`);
    contactForm.reset();
  });
}
