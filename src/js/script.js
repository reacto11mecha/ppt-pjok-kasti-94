import "webslides/static/css/webslides.css";
import "../css/iconmoon.css";
import "../css/style.css";

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
