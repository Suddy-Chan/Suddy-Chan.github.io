// Smooth scrolling for in-page anchor links
function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// "Back to Top" button (styled via .back-to-top in styles.css)
function addBackToTopButton() {
  const button = document.createElement('button');
  button.textContent = 'Back to Top';
  button.className = 'back-to-top';
  document.body.appendChild(button);

  window.addEventListener('scroll', () => {
    button.style.display = window.pageYOffset > 300 ? 'block' : 'none';
  });

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Highlight the nav link of the section currently in view
function highlightActiveNav() {
  const links = document.querySelectorAll('.nav li a');
  const sections = Array.from(links)
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  function update() {
    const offset = window.pageYOffset + 140;
    let currentId = null;
    sections.forEach(section => {
      if (section.offsetTop <= offset) currentId = section.id;
    });
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}

// Fade sections in as they scroll into view
function revealOnScroll() {
  const items = document.querySelectorAll(
    '.info, .exp, .skills, .interests, .projects, .certifications'
  );

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  items.forEach(item => {
    item.classList.add('reveal');
    observer.observe(item);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  smoothScroll();
  addBackToTopButton();
  highlightActiveNav();
  revealOnScroll();
});
