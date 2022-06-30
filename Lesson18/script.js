"use strict";

const htmlElement = document.documentElement;
const bodyElement = document.body;

// const firstChildNode = bodyElement.firstChild;
// const lastChildNode = bodyElement.lastChild;
// console.log(htmlElement);
// console.log(firstChildNode);
// console.log(lastChildNode);

// const childNodes = bodyElement.childNodes;
// console.log(childNodes);

// console.log(bodyElement.hasChildNodes());

// for (let node of childNodes) {
//   console.log(node);
// }

// const previousSiblingNode = bodyElement.previousSibling;
// const nextSiblingNode = bodyElement.nextSibling;
// const parentNode = bodyElement.parentNode;
// console.log(previousSiblingNode);
// console.log(nextSiblingNode);
// console.log(parentNode);

// const childNodes = bodyElement.childNodes;
// console.log(childNodes);

// const bodyChildren = bodyElement.children;
// console.log(bodyChildren);

// const firstChild = bodyElement.firstElementChild;
// const lastChild = bodyElement.lastElementChild;
// console.log(firstChild);
// console.log(lastChild);
// firstChild.style.backgroundColor = "red";

// const previousSiblingEl = bodyElement.previousElementSibling;
// const nextSiblingEl = bodyElement.nextElementSibling;
// const parentEl = bodyElement.parentElement;
// console.log(previousSiblingEl);
// console.log(nextSiblingEl);
// console.log(parentEl);

// const elem1 = document.querySelectorAll(".lesson__list");
// console.log(elem1);

// const elem2 = document.querySelectorAll("li");
// console.log(elem2);

// const elem3 = document.querySelectorAll("li.lesson__item-list");
// console.log(elem3);

// const elem4 = document.querySelectorAll(".lesson__item-list > ul");
// console.log(elem4);

// const elem5 = document.querySelectorAll(".lesson__list, .lesson__text");
// console.log(elem5);

// const elem6 = document.querySelector("#listItem");
// console.log(elem6);

// const elem7 = document.querySelectorAll("[name]");
// console.log(elem7);

// const lessonList = document.querySelector(".lesson__list");
// console.log(lessonList);

// const elem = document.getElementById("listItem");
// console.log(elem);

const textElement = document.querySelector(".lesson__text");
const textElementContent = textElement.innerHTML;
console.log(textElementContent);
textElement.innerHTML = "Another TEXT";
