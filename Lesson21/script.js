"use strict";

// function onChange(event) {
//   console.log(event.target.value);
// }

// document.getElementById("search").addEventListener("keyup", onChange);

// const dobounce = (fn, ms) => {
//   let timeoutId;
//   return function () {
//     fnCall = () => {
//       fn.apply(this, arguments);
//     };

//     clearTimeout(timeoutId);

//     timeoutId = setTimeout(fnCall, ms);
//   };
// };

// onChange = dobounce(onChange, 1000);

//
//
// const number = 200;
// const material = "Block";

// localStorage.setItem("number", number);

// localStorage.clear();

// console.log(localStorage.getItem("number"));

//
//
const car = {
  color: "green",
  model: "Kia",
  price: 44000,
};

localStorage.setItem("car", car);

const auto = localStorage.getItem("car");

window.addEventListener("storage", (event) => console.log(event));
