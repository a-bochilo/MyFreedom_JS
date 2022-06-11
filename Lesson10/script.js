"use strict";

// const user = {
//   name: "Ivan",
//   age: 30,
//   isAdmin: false,
// };

// const entries = [
//   ["name", "Ivan"],
//   ["age", 30],
//   ["isAdmin", false],
// ];

// console.log(Object.entries(user));
// console.log(Object.fromEntries(entries));

const entries = [
  ["name", "Ivan"],
  ["age", { isAlive: true, year: 30 }],
  ["isAdmin", false],
];
const ourMap = new Map(entries);

// console.log(ourMap.get("age").year);
// ourMap
//   .set(["isDriver"], true)
//   .set({ street: "Kolasa", number: 23 }, "Minsk")
//   .set(NaN, "NaN");
// console.log(ourMap.delete(NaN));
// console.log(ourMap);
// console.log(ourMap.has("age"));
// console.log(ourMap.size);
// ourMap.clear();
// console.log(ourMap);

// for (let entry of ourMap.entries()) {
//   console.log(entry[0]);
//   console.log(entry[1]);
//   console.log(entry);
// }

// for (let value of ourMap.values()) {
//   console.log(value);
// }

// for (let key of ourMap.keys()) {
//   console.log(key);
// }

// ourMap.forEach((value, key, map) => {
//   console.log(value);
//   console.log(key);
//   console.log(map);
// });

// const arr = [...ourMap];
// console.log(arr);
// const mapObj = Object.fromEntries(ourMap.entries());
// console.log(mapObj);

// const students = [{ name: "Ivan" }, { name: "Alex" }];

// const visited = new Map();
// visited.set(students[0], new Date()).set(students[1], new Date());

// function showLastVisit(students) {
//   return visited.get(students);
// }
// console.log(showLastVisit(students[1]));

// let nums = [1, 2, 2, 2, 3, 4, 4, 5];
// const mySet = new Set(nums);
// console.log(mySet);
// mySet.add(12);
// console.log(mySet);
// mySet.delete(12);
// mySet.has(4);

// console.log(mySet.keys(), "keys");
// console.log(mySet.values(), "value");
// console.log(mySet.entries(), "entries");

// function unique(arr) {
//   return [...new Set(arr)];
//   //return Array.from(new Set(arr));
// }

// console.log(unique(nums));

// let phones = {
//   samsung: 300,
//   iPhone: 400,
//   nokia: 200,
// };

// let ourPrice = Object.fromEntries(
//   Object.entries(phones).map(([key, value]) => [key, value * 2])
// );
// console.log(ourPrice);

// let salary = {
//   Ivan: 300,
//   Oleg: 400,
//   Ira: 200,
// };
// function sumSalary(obj) {
//   let sum = 0;
//   for (let salary of Object.values(obj)) {
//     sum += salary;
//   }
//   return sum;
// }
// console.log(sumSalary(salary));

let date = new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// let date2 = new Date(Date.now());
// console.log(date2);

function showDate(date) {
  let year = date.getFullYear();
  let month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${day}.${month}.${year}`;
}
console.log(showDate(date));

function showDate2(date) {
  return date.toLocaleDateString();
}
console.log(showDate2(date));
