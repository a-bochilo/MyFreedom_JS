"use strict";

function onChange(event) {
  console.log(event.target.value);
}

document.getElementById("search").addEventListener("keyup", onChange);

const dobounce = (fn, ms) => {
  let timeoutId;
  return function () {
    fnCall = () => {
      fn.apply(this, arguments);
    };

    clearTimeout(timeoutId);

    timeoutId = setTimeout(fnCall, ms);
  };
};

onChange = dobounce(onChange, 1000);
