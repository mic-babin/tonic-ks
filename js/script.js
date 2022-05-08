import Observer from './Observer.class.js';
import { bgColorChange, bgHeroColorChange, stop, move } from './animations.js';
import { throttle } from './utils.js';
import { wordScrollResize } from './wordScroll.js';

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

  // WORK SECTION
  const workSection = document.querySelector('.show-work-section');

  if (workSection.getBoundingClientRect().width > 992) {
    workSection.addEventListener('mousemove', throttle(move, 250), false);
    workSection.addEventListener('click', stop);
    workSection.addEventListener('mouseleave', stop);
  }

  window.addEventListener('resize', wordScrollResize);
})();
