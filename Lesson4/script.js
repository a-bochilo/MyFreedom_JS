"use strict";

// let student = {
//   name: "Ivan",
//   surname: "Sidorov",
//   isDriver: true,
//   age: 35,
// };

// console.log(student);
// // delete student.surname;

// student.age = 36;
// console.log(student);

let car = {
  color: "red",
  model: "Nissan",
};

let moto = car;

console.log(car);
console.log(moto);

car.doors = 3;

console.log(car);
console.log(moto);

let user = "Ivan";
let user2 = user;

user = "Oleg";

console.log(user, user2);
