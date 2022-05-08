export const bgColorChange = entries => {
  const [entry] = entries;
  const titles = document.querySelectorAll('.title');
  const names = document.querySelectorAll('.name');
  const h2 = document.querySelector('.contact-title');

  if (entry.isIntersecting) {
    entry.target.classList.remove('bg-black');

    h2.classList.remove('text-outline-white');
    h2.classList.add('text-outline-black');

    const els = [...titles, ...names];
    els.forEach(el => {
      el.style.color = 'black';
    });
  } else {
    entry.target.classList.add('bg-black');

    h2.classList.remove('text-outline-black');
    h2.classList.add('text-outline-white');

    const els = [...titles, ...names];
    els.forEach(el => {
      el.style.color = 'white';
    });
  }
};

export const bgHeroColorChange = entries => {
  const [entry] = entries;
  const spans = document.querySelectorAll('.animate');

  if (entry.isIntersecting) {
    entry.target.classList.add('bg-black');
    spans.forEach(span => {
      span.classList.remove('text-black');
    });
  } else {
    entry.target.classList.remove('bg-black');
    spans.forEach(span => {
      span.classList.add('text-black');
    });
  }
};

// SHOW WORK SECTION: MOVING IMAGES
const images = document.querySelectorAll('.thumb');
export function move(e) {
  // to the left and down
  if ((e.movementX < 0) & (e.movementY < 0)) {
    images.forEach(img => {
      img.style.transform = `translate(${400}px, ${400}px) `;
      img.style.transition = `transform 15000ms ease-out`;
    });
    // to the right and up
  } else if ((e.movementX > 0) & (e.movementY > 0)) {
    images.forEach(img => {
      img.style.transform = `translate(-${400}px, -${400}px)`;
      img.style.transition = `transform 15000ms ease-out`;
    });
    // to the left and up
  } else if ((e.movementX < 0) & (e.movementY > 0)) {
    images.forEach(img => {
      img.style.transform = `translate(${400}px, -${400}px)`;
      img.style.transition = `transform 15000ms ease-out`;
    });
    // to the right and down
  } else if ((e.movementX > 0) & (e.movementY < 0)) {
    images.forEach(img => {
      img.style.transform = `translate(-${400}px, ${400}px)`;
      img.style.transition = `transform 15000ms ease-out`;
    });
  }
}

export function stop(e) {
  images.forEach(img => {
    img.style.transform = `translate(${0}px, ${0}px)`;
    img.style.transition = `transform 20000ms ease-out`;
  });
}

