import "webslides/static/css/webslides.css";
import "../css/iconmoon.css";
import "../css/style.css";
import lazyLoadImage from "./LazyLoadImage";

const images = Array.from(document.querySelectorAll("img[data-src]"));

const observer = new IntersectionObserver(handleIntersection);
images.forEach((img) => observer.observe(img));

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      lazyLoadImage(entry.target.dataset.src, entry.target);
      observer.unobserve(entry.target);
    }
  });
}

import("webslides").then(() => {
  const slide = new WebSlides();

  const fl = document.querySelector(".btn-fullscreen");
  fl.addEventListener("click", function () {
    if (slide.initialised) slide.fullscreen();
    this.blur();
  });

  const noredir = document.querySelectorAll("a.noredir");
  noredir.forEach((node) =>
    node.addEventListener("click", (e) => e.preventDefault())
  );
});
