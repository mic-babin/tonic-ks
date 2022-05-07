import Observer from './Observer.class.js';
import { bgColorChange, bgHeroColorChange, workAnim } from './animations.js';

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
  new Observer(document.querySelector('.show-work-section'), workAnim, {
    rootMargin: '0px',
    threshold: [0.1]
  });
})();
