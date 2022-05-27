"use strict";

// let students = [
//   {
//     name: "Tanya",
//     id: 20,
//     mark: 340,
//   },
//   {
//     name: "Fedya",
//     id: 33,
//     mark: 140,
//   },
//   {
//     name: "Stepa",
//     id: 50,
//     mark: 640,
//   },
//   {
//     name: "Tanya",
//     id: 2,
//     mark: 40,
//   },
// ];

// let result = students.reduce((acc, item) => {
//   if (item.id > 30) {
//     return (acc += item.mark);
//   } else return acc;
// }, 0);
// console.log(result);

// let totalMark = 0;
// students.forEach((item) => {
//   if (item.id > 30) totalMark += item.mark;
// });
// console.log(totalMark);

// let namesHighMark = [];
// students.forEach((item) => {
//   if (item.mark > 200) {
//     namesHighMark.push(item.name);
//   }
// });

// let namesHighMark = students
//   .filter((item) => item.mark > 200)
//   .map((item) => item.name);
// console.log(namesHighMark);

// let namesHighMark = students.reduce((acc, item) => {
//   if (item.mark > 200) acc.push(item.name);
//   return acc;
// }, []);
// console.log(namesHighMark);

let students = [
  {
    name: "Tanya",
    id: 20,
    mark: 340,
  },
  {
    name: "Fedya",
    id: 33,
    mark: 140,
  },
  {
    name: "Stepa",
    id: 50,
    mark: 640,
  },
  {
    name: "Tanya",
    id: 2,
    mark: 40,
  },
];

// let calcAverageMark = (arr) =>
//   arr.reduce((acc, item) => (acc += item.mark), 0) / arr.length;
// console.log(calcAverageMark(students));

// let calcAverageMark = (arr) => {
//   let sum = 0;
//   arr.forEach((item) => (sum += item.mark));
//   return sum / arr.length;
// };
// console.log(calcAverageMark(students));

// let randomArr = [0, 1, null, undefined, "d", "", false, true];
// let filterTrue = (arr) => arr.filter((item) => item);
// console.log(filterTrue(randomArr));

let randomArr = [0, 1, 1, 5, 7, 8, 5, 6];
let getFiltredUniqArr = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};
console.log(getFiltredUniqArr(randomArr));

let getFiltredUniqArr2 = (arr) => {
  let FiltredArr = [];
  arr.forEach((item) => {
    if (!FiltredArr.includes(item)) FiltredArr.push(item);
  });
  return FiltredArr;
};
console.log(getFiltredUniqArr2(randomArr));
