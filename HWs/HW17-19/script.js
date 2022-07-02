"use strict";

// Test 1

const test1 = document.getElementById("test1");

test1.onclick = function () {
  console.log("Test 1: clicked from prop");
};

test1.addEventListener("click", () =>
  console.log("Test 1: clicked from EventListener")
);

// Test 2

const test2 = document.getElementById("test2");

test2.ondblclick = function () {
  console.log("Test 2: clicked from prop");
};

test2.addEventListener("dblclick", () =>
  console.log("Test 2: clicked from EventListener")
);

// Test 3
const test3 = document.getElementById("test3");

test3.addEventListener("mouseover", (event) =>
  console.log(
    `Test 3 mouseover: coords X: ${event.clientX}, coords Y: ${event.clientY}`
  )
);

test3.addEventListener("mousemove", (event) =>
  console.log(
    `Test 3 mousemove: coords X: ${event.clientX}, coords Y: ${event.clientY}`
  )
);

// Test 4
document.addEventListener("scroll", () => {
  console.log(`Test 4: already scrolled ${Math.round(scrollY)}px`);
});
