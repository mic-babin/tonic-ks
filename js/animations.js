export const throttle = (callback, limit) => {
  let wait = false;
  return function (...args) {
    if (!wait) {
      callback(...args);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
};

export const bgColorChange = (entries) => {
  const [entry] = entries;
  const titles = document.querySelectorAll(".title");
  const names = document.querySelectorAll(".name");
  const h2 = document.querySelector(".contact-title");

  if (entry.isIntersecting) {
    entry.target.classList.add("bg-black");

    h2.classList.remove("text-outline-black");
    h2.classList.add("text-outline-white");

    const els = [...titles, ...names];
    els.forEach((el) => {
      el.style.color = "white";
    });
  } else {
    entry.target.classList.remove("bg-black");

    h2.classList.remove("text-outline-white");
    h2.classList.add("text-outline-black");

    const els = [...titles, ...names];
    els.forEach((el) => {
      el.style.color = "black";
    });
  }
};

export const bgHeroColorChange = (entries) => {
  const [entry] = entries;
  const spans = document.querySelectorAll(".animate");
  const vignetteWhite = document.querySelector(".vignette-white");
  const svg1 = document.querySelectorAll(".svg-1");
  const svg2 = document.querySelector(".svg-2");
  const body = document.querySelector("body");

  if (entry.isIntersecting) {
    spans.forEach((span) => {
      span.classList.remove("text-black");
    });
    vignetteWhite.style.opacity = 0;
    svg1.forEach((svg) => (svg.style.fill = "#fff"));
    svg2.style.stroke = "#fff";
  } else {
    spans.forEach((span) => {
      span.classList.add("text-black");
    });
    vignetteWhite.style.opacity = 1;
    svg1.forEach((svg) => (svg.style.fill = "#000"));
    svg2.style.stroke = "#000";
  }
};

// SHOW WORK SECTION: MOVING IMAGES
const images = document.querySelectorAll(".thumb");
export function move(e) {
  // to the left and down
  if ((e.movementX < 0) & (e.movementY < 0)) {
    images.forEach((img) => {
      img.style.transform = `translate(${400}px, ${400}px) `;
      img.style.transition = `transform 15000ms ease-out`;
    });
    // to the right and up
  } else if ((e.movementX > 0) & (e.movementY > 0)) {
    images.forEach((img) => {
      img.style.transform = `translate(-${400}px, -${400}px)`;
      img.style.transition = `transform 15000ms ease-out`;
    });
    // to the left and up
  } else if ((e.movementX < 0) & (e.movementY > 0)) {
    images.forEach((img) => {
      img.style.transform = `translate(${400}px, -${400}px)`;
      img.style.transition = `transform 15000ms ease-out`;
    });
    // to the right and down
  } else if ((e.movementX > 0) & (e.movementY < 0)) {
    images.forEach((img) => {
      img.style.transform = `translate(-${400}px, ${400}px)`;
      img.style.transition = `transform 15000ms ease-out`;
    });
  }
}

export function stop(e) {
  images.forEach((img) => {
    img.style.transform = `translate(${0}px, ${0}px)`;
    img.style.transition = `transform 20000ms ease-out`;
  });
}
