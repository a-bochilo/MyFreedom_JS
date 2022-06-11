"use strict";

// let sum = new Function("a", "b", "return a+b");
// console.log(sum(3, 4));

// let fullName = new Function("name", "surname", "return `${name} ${surname}`");
// console.log(fullName("Alexander", "Bochilo"));

// function showMessage() {
//   console.log("Hello");
// }

// setTimeout(showMessage, 2000);
// setTimeout(showMessage, 3000);

// setTimeout(() => console.log("Hello"), 2000);

// function showMessage(phrase) {
//   console.log(phrase);
// }

// let timerId = setTimeout(showMessage, 4000, "Hello again");
// console.log(timerId);
// clearTimeout(timerId);

// function showMessage(phrase) {
//   console.log(phrase);
// }
// let timerId = setInterval(showMessage, 3000, "Hello from interval");
// setTimeout(() => clearInterval(timerId), 7000);

// let timerId = setTimeout(function tick() {
//   console.log("tick");
//   timerId = setTimeout(tick, 2000);
// }, 2000);

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// console.log(3);

// function firstMessage() {
//   console.log(1);
//   console.log(2);
// }
// function secondMessage() {
//   console.log(3);
//   firstMessage();
// }
// secondMessage();

// console.log(1);
// console.log(2);
// function timer() {
//   console.log(3);
// }

// setTimeout(() => {
//   console.log(4);
// }, 5000);

// setTimeout(timer, 2000);
// console.log(5);

function showMessage() {
  console.log("Hello", this);
}

const student = {
  name: "Ivan",
  age: 30,
  sayHelloFromWindow: showMessage.bind(window),
  logInfo: function (surname) {
    console.log(`Name: ${this.name} ${surname}`);
  },
};

const person = {
  name: "Stepan",
  age: 44,
};

// student.logInfo();
// student.logInfo.bind(person, "Ivanov")();
// student.logInfo();
// student.logInfo.call(person, "Ivanov");
student.logInfo.apply(person, ["Ivanov"]);

// showMessage();
// student.sayHelloFromWindow();
// student.logInfo();
