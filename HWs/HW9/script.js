"use strict";

// Test 1
let students = [
  { name: "Alexey", id: 123, marks: 9 },
  { name: "Vitalik", id: 101, marks: 5 },
  { name: "Tanya", id: 200, marks: 7 },
  { name: "Sasha", id: 115, marks: 10 },
];
let lowMarksStudents = students
  .filter((item) => item.marks < 8)
  .map((item) => item.name);
console.log(`Test 1.1: ${lowMarksStudents}`);

let lowMarksStudents2 = [];
students.forEach((item) => {
  if (item.marks < 8) lowMarksStudents2.push(item.name);
});
console.log(`Test 1.2: ${lowMarksStudents2}`);

// Test 2
let calcAverageMarkById = (arr) => {
  let counter = 0;
  return (
    arr.reduce((acc, item) => {
      if (item.id > 120) {
        counter++;
        acc += item.marks;
      }
      return acc;
    }, 0) / counter
  );
};
console.log(`Test 2.1: ${calcAverageMarkById(students)}`);

let calcAverageMarkById2 = (arr) => {
  let sum = 0;
  let counter = 0;
  arr.forEach((item) => {
    if (item.id > 120) {
      sum += item.marks;
      counter++;
    }
  });
  return sum / counter;
};
console.log(`Test 2.2: ${calcAverageMarkById2(students)}`);

// // 3rd method (optionally)
// let calcAverageMarkById3 = (arr) => {
//   let marks = arr.filter((item) => item.id > 120).map((item) => item.marks);
//   let sum = 0;
//   marks.forEach((item) => (sum += item));
//   return sum / marks.length;
// };
// console.log(`Test 2.3: ${calcAverageMarkById3(students)}`);

// Test 3
let students3 = [
  { name: "Alexey", id: 123, marks: 9 },
  { name: "Vitalik", id: 101, marks: 5 },
  { name: "Tanya", id: 200, marks: 7 },
  { name: "Sasha", id: 115, marks: 10 },
  { name: "Kolya", id: 440, marks: 5 },
  { name: "Dima", id: 170, marks: 7 },
];
let filtredStudentsNames3 = students3
  .filter((item) => item.marks > 5 && item.id < 200)
  .map((item) => item.name);
console.log(`Test 3: ${filtredStudentsNames3}`);
