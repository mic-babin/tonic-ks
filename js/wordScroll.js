/* Initialisations
       =============== */

// Déclaration et initialisation des variables
// -------------------------------------------

const showWorkSection = document.querySelector('.show-work-section');
const elementsToScroll = document.querySelectorAll('.scroll');

let refAnimationWidth = 1300;
let refAnimationDuration = 10;
let animationWidth = showWorkSection.getBoundingClientRect().width;

let animationDuration = Math.round(((10 * refAnimationDuration) / refAnimationWidth) * animationWidth) / 10;

//let scroll1 = document.getElementById('scroll1');
//let scroll1Clone = scroll1.cloneNode(true);
//scroll1Clone.id = 'scroll1Clone';
//showWorkSection.appendChild(scroll1Clone);

/**
 * Supprimer/ajouter les classes d'animation
 * en initialisant la durée des animations des vélos
 * @param {string} action (remove/add)
 */
function gererClasslist(action) {
  elementsToScroll.forEach((el, i) => {
    el.style.animationDuration = animationDuration + 's';
    el.classList[action]('animationScrollWords');
    //scroll1Clone.style.animationDuration = animationDuration + 's';
    //scroll1Clone.classList[action]('animationScrollWordsClone');
  });
}

/**
 * Modifier l'état des animations
 * @param {string} etat (running/paused)
 */
function changerEtat(etat) {
  elementsToScroll.forEach(el => {
    el.style.animationPlayState = etat;
    //scroll1Clone.style.animationPlayState = etat;
  });
}

// START ANIMATION
const startAnimationObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gererClasslist('remove');
        setTimeout(() => {
          gererClasslist('add');
          changerEtat('running');
        }, 10);
        elementsToScroll.forEach(el => {
          el.style.opacity = 1;
        });
      } else {
        changerEtat('paused');
        elementsToScroll.forEach(el => {
          el.style.opacity = 0;
        });
      }
    });
  },
  { threshold: 0.5 }
);
startAnimationObserver.observe(showWorkSection);

/* Arrêt de l'animation
       ==================== */

// showWorkSection.addEventListener('mouseleave', () => {
//   changerEtat('paused');
// });

/* Redimensionnement de la fenêtre du navigateur
       ============================================= */

window.addEventListener('resize', () => {
  if (showWorkSection.clientWidth !== animationWidth) {
    animationDuration = Math.round(((10 * animationDuration) / animationWidth) * showWorkSection.clientWidth) / 10;
    animationWidth = showWorkSection.clientWidth;
    elementsToScroll.forEach(el => {
      el.style.animationDuration = animationDuration + 's';
      //scroll1Clone.style.animationDuration = animationDuration + 's';
    });
  }
});
