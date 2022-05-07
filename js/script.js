import createIntersectionObserver from './createIntersectionObserver.js';

(() => {
  function bgColorChange(entries) {
    const [entry] = entries;
    const titles = document.querySelectorAll('.title');
    const names = document.querySelectorAll('.name');
    const h2 = document.querySelector('.contact-title')

    if (entry.isIntersecting) {
      entry.target.classList.remove('bg-black');

      h2.classList.remove('text-outline-white')
      h2.classList.add('text-outline-black')

      const els = [...titles, ...names];
      els.forEach(el => {
          el.style.color = "black"
      });
    } else {
      entry.target.classList.add('bg-black');

      h2.classList.remove('text-outline-black')
      h2.classList.add('text-outline-white')

      const els = [...titles, ...names];
      els.forEach(el => {
          el.style.color = "white"
      });
    }
  }

  // createObserver for SHOW WORK SECTION
  const contactSection = document.querySelector('.contact-section');
  createIntersectionObserver(contactSection, bgColorChange, {
    rootMargin: '0px',
    threshold: [0.35, 0.75]
  });
})();
