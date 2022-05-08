let about = document.querySelector("#about");
let play = document.querySelector(".play");
let video = document.querySelector(".video");

// Move images
let imgOptions = {
  root: about,
  rootMargin: "0px",
  threshold: 0,
};

let imgObserver = new IntersectionObserver(addImgListeners, imgOptions);

imgObserver.observe(about);

function addImgListeners() {
  document
    .querySelectorAll(".tooltip-wrapper")
    .forEach((tooltipWrapper) =>
      tooltipWrapper.addEventListener("mouseenter", mouseEnter, false)
    );
  window.addEventListener("mouseout", mouseOut, false);
}

function mouseEnter() {
  window.addEventListener("mousemove", imgMove, true);
}

function mouseOut() {
  window.removeEventListener("mousemove", imgMove, true);
}

function imgMove(e) {
  document.querySelectorAll(".tooltip").forEach((tooltip) => {
    tooltip.style.top = e.clientY + 10 + "px";
    tooltip.style.left = e.clientX + 10 + "px";
  });
}

// Start video
play.addEventListener("click", playVideo);

function playVideo() {
  play.style.display = "none";
  video.play();
}
