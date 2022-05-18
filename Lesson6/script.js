"use strict";

// let arr = [10, 20, 45];
// let copy = [];
// arr.forEach((item, index) => {
//   console.log(`Number ${item} with index ${index}`);
//   copy.push(item);
//   console.log(copy);
// });

// let arr = [10, 20, 45];
// if (arr.includes(10)) {
//   console.log("Include");
// }

// let arr = [-1, 10, 23, -3, 0, -2];
// let arr2 = [];
// arr.forEach((item) => {
//   if (item < 0) arr2.push(item);

// });
// console.log(arr2);

// let strArr = ["one", "two", "five"];
// strArr.forEach((item) => {
//   if (item.length === 3) console.log(item);
// });

// let arr = [-1, 10, 23, -3, 0, -2];

// let minus = 0;
// arr.forEach((item) => {
//   if (item < 0) minus++;
// });
// console.log(minus);

// let harryPotter = [
//   { name: "Harry", age: 10 },
//   { name: "Ronald", age: 11 },
//   { name: "Drago", age: 11 },
// ];
// // let result = harryPotter.find((item) => item.name === "Harry");
// // console.log(result);
// let result = harryPotter.filter((item) => item.age === 11);
// console.log(result);

// let cars = [
//   { nodel: "nissan", color: "black" },
//   { model: "jeep", color: "red" },
//   { model: "kia", color: "black" },
// ];
// let balckCars = cars.filter((item) => item.color === "black");
// console.log(balckCars);

let students = [
  { name: "Fedor", isHere: true, mark: 100 },
  { name: "Stepan", isHere: true, mark: 70 },
  { name: "Igor", isHere: false, mark: 40 },
];
let filtredStudents = students.filter((item) => {
  return item.isHere === true && item.mark >= 60;
});
console.log(filtredStudents);
