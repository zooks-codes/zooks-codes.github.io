/* 1️⃣  Burger toggle */
document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('show');
});

// Make flip-card accessible via keyboard (Space/Enter)
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('keydown', e => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      card.classList.toggle('open');
    }
  });
  card.addEventListener('click', () => card.classList.toggle('open'));
});

/* 2️⃣  Intersection Observer – fade‑in on scroll */
const faders = document.querySelectorAll('.animate');
const options = { root: null, rootMargin: '0px', threshold: 0.1 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target); // run once
    }
  });
}, options);

faders.forEach(fader => appearOnScroll.observe(fader));

/* 3️⃣  Staggered animation for card grid */
const cards = document.querySelectorAll('.grid .card');
cards.forEach((card, i) => {
  card.style.setProperty('--delay', `${i * 0.15}s`);
});

// IntersectionObserver – adds .animate when section enters viewport
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('#photography, .featured, .about, .contact').forEach(sec => {
  observer.observe(sec);
});
