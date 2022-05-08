import Observer from './Observer.class.js';
import { bgColorChange, bgHeroColorChange, throttle } from './animations.js';

(() => {
  // OBSERVER HERO SECTION
  new Observer(document.querySelector('.hero-section'), bgHeroColorChange, {
    rootMargin: '0px 0px 300px 0px',
    threshold: 0.9
  });

  // OBSERVER CONTACT SECTION
  new Observer(document.querySelector('.contact-section'), bgColorChange, {
    rootMargin: '0px',
    threshold: [0.35, 0.9]
  });

  // OBSERVER WORK SECTION
  const workSection = document.querySelector('.show-work-section');
  const images = document.querySelectorAll('.thumb');

  function move(e) {
    // to the left and down
    if ((e.movementX < 0) & (e.movementY < 0)) {
      images.forEach(img => {
        img.style.transform = `translate(${400}px, ${400}px)`;
      });
      // to the right and up
    } else if ((e.movementX > 0) & (e.movementY > 0)) {
      images.forEach(img => {
        img.style.transform = `translate(-${400}px, -${400}px)`;
      });
      // to the left and up
    } else if ((e.movementX < 0) & (e.movementY > 0)) {
      images.forEach(img => {
        img.style.transform = `translate(${400}px, -${400}px)`;
      });
      // to the right and down
    } else if ((e.movementX > 0) & (e.movementY < 0)) {
      images.forEach(img => {
        img.style.transform = `translate(-${400}px, ${400}px)`;
      });
    }
  }

  function stop (e) {
    images.forEach(img => {
      img.style.transform = `translate(${0}px, ${0}px)`;
    });
  }

  workSection.addEventListener('mousemove', throttle(move, 250), false);
  workSection.addEventListener('click', stop)
  workSection.addEventListener('mouseleave', stop)
})();
