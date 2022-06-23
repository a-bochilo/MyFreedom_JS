"use strict";

// const Animal = function ({ name, color }) {
//   this.name = name;
//   this.color = color;
//   // this.voice = function () {
//   //   console.log(`Voice from: ${this.name}`);
//   // };
// };

// Animal.prototype.voice = function () {
//   console.log(`Voice from: ${this.name}`);
// };

// const dog = new Animal({ name: "Chivas", color: "white" });
// // console.log(dog);
// // dog.voice();

// const Cat = function (options) {
//   Animal.apply(this, [options]);
//   this.hasTail = options.hasTail;
//   this.type = "cat";
// };

// Cat.prototype = Object.create(Animal.prototype);
// // Cat.prototype = Animal.prototype;
// Cat.prototype.constructor = Cat;

// Animal.prototype.voice = function () {
//   console.log(`This sound from: ${this.name}`);
// };

// Cat.prototype.voice = function () {
//   console.log(`${this.name} says "meow"`);
// };

// const cat = new Cat({ name: "Felix", color: "black", hasTail: true });
// console.log(cat);
// cat.voice();

//
//
// class Animal {
//   constructor(options) {
//     this.name = options.name;
//     this.color = options.color;
//   }
//   voice() {
//     console.log(`Voice from: ${this.name}`);
//   }
// }

// const dog = new Animal({ name: "Chivas", color: "white" });
// console.log(dog);

// class Cat extends Animal {
//   constructor(options) {
//     super(options);
//     this.hasTail = options.hasTail;
//   }

//   voice() {
//     super.voice();
//     console.log(this.name, "says meow");
//   }
// }

// const cat = new Cat({ name: "Felix", color: "black", hasTail: true });
// console.log(cat);
// // cat.voice();

// Object.prototype.information = function () {
//   console.log("This is object: ", this);
// };

// cat.information();

// Array.prototype.ourMap = function () {
//   console.log(this);
//   return this.map.apply(this, arguments);
// };
// console.log([1, 3, 5, -7].ourMap((item) => item ** 2));

//
//
String.prototype.toTag = function (tagname) {
  return `<${tagname}>${this}</${tagname}>`;
};

console.log("String".toTag("div"));
let str = new String("123");
console.log(str);
