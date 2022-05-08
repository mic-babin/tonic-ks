const showWorkSection = document.querySelector('.show-work-section');
const elementsToScroll = document.querySelectorAll('.scroll');

let refAnimationWidth = 1300;
let refAnimationDuration = 10;
let animationWidth = showWorkSection.clientWidth;
let clones = [];

let animationDuration = Math.round(((10 * refAnimationDuration) / refAnimationWidth) * animationWidth) / 10;

// clones
elementsToScroll.forEach((el, index) => {
  let elClone = el.cloneNode(true);
  elClone.id = `scroll${index + 1}Clone`;
  clones.push(elClone);
  showWorkSection.insertBefore(elClone, el);
});

// geres les classes
function handleClasslist(action) {
  elementsToScroll.forEach((el, i) => {
    el.style.animationDuration = animationDuration + 's';
    el.classList[action]('animationScrollWords');
  });
  clones.forEach(clone => {
    clone.style.animationDuration = animationDuration + 's';
    clone.classList[action]('animationScrollWordsClone');
  });
}

// modifier l'etat de l'animation
function changeState(etat) {
  elementsToScroll.forEach(el => {
    el.style.animationPlayState = etat;
  });
  clones.forEach(clone => {
    clone.style.animationPlayState = etat;
  });
}

// START ANIMATION
const startAnimationObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        handleClasslist('remove');
        setTimeout(() => {
          handleClasslist('add');
          changeState('running');
        }, 10);
        elementsToScroll.forEach(el => {
          el.style.opacity = 1;
        });
        clones.forEach(clone => {
          clone.style.opacity = 1;
        });
      } else {
        changeState('paused');
        elementsToScroll.forEach(el => {
          el.style.opacity = 0;
        });
        clones.forEach(clone => {
          clone.style.opacity = 0;
        });
      }
    });
  },
  { threshold: 0.5 }
);
startAnimationObserver.observe(showWorkSection);

/* Redimensionnement de la fenêtre du navigateur
       ============================================= */

export const wordScrollResize = () => {
  if (showWorkSection.clientWidth !== animationWidth) {
    animationDuration = Math.round(((10 * animationDuration) / animationWidth) * showWorkSection.clientWidth) / 10;
    animationWidth = showWorkSection.clientWidth;
    elementsToScroll.forEach(el => {
      el.style.animationDuration = animationDuration + 's';
    });
    clones.forEach(clone => {
      clone.style.animationDuration = animationDuration + 's';
    });
  }
}

