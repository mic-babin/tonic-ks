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
    console.log('e', e.clientX)
    // to the left and down
    if (e.movementX < 0 & e.movementY < 0) {
      images.forEach(img => {
        img.style.transform = `translate(${e.offsetX}px, ${e.offsetY}px)`;
      });
      // to the right and up
    } else if (e.movementX > 0 & e.movementY > 0) {
      images.forEach(img => {
        img.style.transform = `translate(-${e.offsetX}px, -${e.offsetY}px)`;
      });
      // to the left and up
    } else if (e.movementX < 0 & e.movementY > 0) {
      images.forEach(img => {
        img.style.transform = `translate(${e.offsetX}px, -${e.offsetY}px)`;
      });
      // to the right and down
    } else if (e.movementX > 0 & e.movementY < 0) {
      images.forEach(img => {
        img.style.transform = `translate(-${e.offsetX}px, ${e.offsetY}px)`;
      });
    }
  }

  workSection.addEventListener('mousemove', throttle(move, 300), false);
  workSection.addEventListener('click', () => {
    workSection.removeEventListener('mousemouve', move);
  });
})();
