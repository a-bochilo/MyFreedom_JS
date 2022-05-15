"use strict";

// function calcSum(numOne, numTwo, more, less) {
//   let numSum = numOne + numTwo;
//   if (numSum > 3) {
//     more();
//   } else {
//     less();
//   }
// }

// function showMore() {
//   console.log("more");
// }
// function showLess() {
//   console.log("less");
// }

// calcSum(2, 0, showMore, showLess);

// let user = {
//   name: "Ivan",
//   surname: "Ivanov",
//   age: 30,
//   adress: {
//     city: "Minsk",
//     street: "Kolasa",
//     numOfHouse: 40,
//   },
// };

// console.log(user.name);
// console.log(user.adress.city);

// let userClone = Object.assign({}, user);
// // console.log(user);
// // console.log(userClone);

// user.name = "Oleg";
// // console.log(user);
// // console.log(userClone);

// user.adress.city = "Brest";
// console.log(user);
// console.log(userClone);

// let user = {
//   name: "Ivan",
//   surname: "Ivanov",
//   age: 30,
//   sayHi() {
//     console.log("Hello from user obj");
//   },
//   adress: {
//     city: "Minsk",
//     street: "Kolasa",
//     numOfHouse: 40,
//   },
// };

// user.sayHi();

// let option = function () {
//   console.log(this.name);
// };
// option();

// let user = {
//   name: "Ivan",
//   surname: "Ivanov",
//   age: 30,
//   sayHi() {
//     console.log(`Hello from ${this.name} ${this.surname}`);
//   },
//   option,
//   adress: {
//     city: "Minsk",
//     street: "Kolasa",
//     numOfHouse: 40,
//   },
// };

// user.sayHi();
// user.option();

// let user = {
//   firstName: "Илья",
//   sayHi() {
//     let arrow = () => alert(this.firstName);
//     arrow();
//   },
// };

// user.sayHi(); // Илья

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Вася");

alert(user.name);
alert(user.isAdmin);
