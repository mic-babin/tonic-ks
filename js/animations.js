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
      span.classList.remove('text-black')
    })
  } else {
    entry.target.classList.remove('bg-black');
    spans.forEach(span => {
      span.classList.add('text-black')
    })
  }
};

export const workAnim = entries => {
  const [entry] = entries;
  const showWork = document.querySelector('.show-work');
  if (entry.isIntersecting) {
    console.log('yesyeysye')
  }
};
