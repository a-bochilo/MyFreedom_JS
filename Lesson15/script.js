"use strict";

// console.log(1);
// setTimeout(() => console.log(2));
// Promise.resolve().then(() => console.log(3));
// Promise.resolve().then(() => setTimeout(() => console.log(4)));
// Promise.resolve().then(() => console.log(5));
// setTimeout(() => console.log(6));
// console.log(7);

//
//
// Prototypes
// function Person(first, last, age) {
//   (this.name = {
//     first,
//     last,
//   }),
//     (this.age = age);
// }

// let personIvan = new Person("Ivan", "Pupkin", 42);
// console.log(personIvan);

// //
// let student = {
//   name: "Ivan",
//   age: 30,
//   course: "JS",
// };
// console.log(student);

// //
// let user = {
//   name: "Tanya",
//   age: 42,
// };

// user.__proto__ = student;
// console.log(user);
// console.log(user.course);

// let person = {
//   name: "Sasha",
// };

// person.__proto__ = user;
// console.log(person.course);
// student.course = "CSS";
// console.log(person.course);

//
// let student = {
//   course: "JS",
// };

// function Develop(name) {
//   this.name = name;
// }

// Develop.prototype = student;

// let newDev = new Develop("Ivan");
// console.log(newDev.course);

//
// const person = new Object({
//   name: "Ivan",
//   age: 30,
//   welcome() {
//     console.log("Welcome");
//   },
// });

// Object.prototype.sayHello = function () {
//   console.log("Hello");
// };

// const personLev = Object.create(personIvan);
// console.log(personLev);
// personLev.name = "Lev";
// console.log(personLev);

//
// let string = new String("String");

// let num = new Number(5);
console.log([1, 2].push);
