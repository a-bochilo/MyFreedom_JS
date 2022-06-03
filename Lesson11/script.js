"use strict";

const user = {
  name: "Ivan",
  age: 30,
  isAdmin: false,
};

const students = [
  {
    name: "Ivan",
    age: 30,
    isAdmin: false,
  },
  {
    name: "Oleg",
    age: 33,
    isAdmin: false,
  },
];
let names = [];
students.forEach(({ name, age, isAdmin }) => names.push(name));
students.forEach(({ name }) => names.push(name));
students.forEach(({ name: n }) => names.push(n));
console.log(names);
