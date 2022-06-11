"use strict";

// rest parameters

// function showPlayer(name, surname, ...info) {
//   console.log(`${name} ${surname}`);
//   console.log(info);
// }

// showPlayer("Lev", "Tolstoy", "Amsterdam", 1969);

// spread operator

// let date = [1970, 0, 2];
// let d = new Date(...date);
// console.log(d);

// let arr = [1, 2, 3, 4, 5, 5, 6, 6, 6];
// let unique = [...new Set(arr)];
// console.log(unique);

// let oldPlayers = ["Ronaldo", "Henry", "Pires"];
// let currentPlayers = ["Saka", "Mount", "Walker"];
// let player = [...oldPlayers, ...currentPlayers];
// console.log(player);

// const mySkills = ["HTML", "CSS"];
// // mySkills.push.apply(mySkills, ["JS", "React"]); // one of possible methods
// mySkills.push(...["JavaScript", "React"]);
// console.log(mySkills);

// Destraction
// const mySkills = [
//   { course: "HTML", mark: 9 },
//   { course: "JS", mark: 8 },
// ];

// // let newArr = mySkills.map((item) => item.course.toLowerCase());
// let newArr = mySkills.map(({ course }) => course.toLocaleLowerCase());
// console.log(newArr);

// const [numFirst, ...otherNames] = [1, 2, 3, 5, 9];
// console.log(numFirst);
// console.log(otherNames);

// const user = {
//   name: "Alex",
//   age: 30,
//   id: 7,
// };
// const { name, ...other } = user;
// console.log(name);
// console.log(other);

// Замыкания!
// function createFunction(x) {
//   return function () {
//     console.log(x);
//   };
// }
// console.log(createFunction(100));
// const newFunction = createFunction(100);
// // console.log(newFunction);
// newFunction();

// function calcSum(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// console.log(calcSum(3)(5));

// function createProfileInfo(groupNumber) {
//   return function (fullName) {
//     return `Work is done by ${fullName}, group ${groupNumber}`;
//   };
// }
// const groupSevenStudent = createProfileInfo(7);
// console.log(groupSevenStudent("Fedor Seyanko"));

// var
function sayHi() {
  name = "Alex";
  console.log(name);
  var name;
}
sayHi();
