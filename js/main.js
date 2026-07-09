/* 1️⃣  Burger toggle */
document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('show');
});

/* 2️⃣  Intersection Observer – fade‑in on scroll */
const faders = document.querySelectorAll('.animate');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target); // run once
    }
  });
}, options);

faders.forEach(fader => appearOnScroll.observe(fader));
