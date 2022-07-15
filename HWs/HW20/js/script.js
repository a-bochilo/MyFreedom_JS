"use strict";

window.addEventListener("scroll", function (event) {
  console.log(scrollY);
  const header = document.querySelector(".page_about header");
  if (scrollY > 0) header.classList.add("header_light");
  if (scrollY === 0) header.classList.remove("header_light_s");
});
