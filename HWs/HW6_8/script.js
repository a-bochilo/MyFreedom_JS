"use strict";

// Test 1
let isMozartHere = (str) => str.toLowerCase().includes("mozart");
// .thim() не добавлял, поскольку includes в этом не нуждается
console.log(`Test 1: ${isMozartHere("  adf JKJ FD    moZaRT afd;lkj ")}`);

// Test 2
let showUppercaseFirstLetter = (str) =>
  (str = str.trim()[0].toUpperCase() + str.trim().slice(1));
console.log(`Test 2: ${showUppercaseFirstLetter(" some random string  ")}`);

// Test 3
let harryPotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"];
let teamA = harryPotterTeam.filter((item) => item.includes("a"));
let teamH = harryPotterTeam.filter((item) => item.includes("H"));
console.log("Test 3:");
console.log(teamA);
console.log(teamH);

// Test 4
let arr = [6, 3, "ten", 1, true, "4"];
function showSumAndMultiplNum(arr) {
  let sum = 0;
  let multipl = 1;
  arr.forEach((item) => {
    if (typeof item === "number" && !isNaN(item)) {
      sum += item;
      multipl *= item;
    }
  });
  console.log(`Test 4 by forEach: sum = ${sum}; multiplication = ${multipl};`);
}
// Не очень понял как это логичнее делать с помощью map,
// на мой взгляд здесь лучше будет forEach, а еще лучше reduce
function showSumAndMultiplNum2(arr) {
  let sum = 0;
  let multipl = 1;
  arr.map((item) => {
    if (typeof item === "number" && !isNaN(item)) {
      sum += item;
      multipl *= item;
    }
  });
  console.log(`Test 4 by map: sum = ${sum}; multiplication = ${multipl};`);
}
showSumAndMultiplNum(arr);
showSumAndMultiplNum2(arr);

// Test 5
let numArr = [1, 3, 5, 7, 9, 11];
let getNewArrSquareNum = (arr) => arr.map((item) => item ** 2);
let squareArr = getNewArrSquareNum(numArr);
console.log(`Test 5 original array (no changes):`);
console.log(numArr);
console.log(`Test 5 new array:`);
console.log(squareArr);

// Test 6
let str6 =
  "Роман «1984» наряду с такими произведениями, как «Мы» Евгения Замятина (1920), «О дивный новый мир» Олдоса Хаксли (1932) и «451 градус по Фаренгейту» Рэя Брэдбери (1953) считается одним из образцов антиутопии.";
let subStr = "451 градус по Фаренгейту";
let subStrResult = str6.substr(str6.indexOf(subStr), subStr.length);
console.log(`Test 6: ${subStrResult}`);

// Test 7
let students7 = [
  { name: "Alexey", id: 123, marks: 9 },
  { name: "Vitalik", id: 101, marks: 5 },
  { name: "Tanya", id: 200, marks: 7 },
  { name: "Sasha", id: 115, marks: 10 },
];

console.log("Test 7:");
console.log(students7.find((item) => item.id === 101));

// Test 8
let students8 = [
  { name: "Alexey", id: 123, marks: 9 },
  { name: " Vitalik", id: 101, marks: 5 },
  { name: "Tanya ", id: 200, marks: 7 },
  { name: "Sasha", id: 115, marks: 10 },
];

let studentsRatedAbove7 = students8.filter((item) => item.marks > 7);
let studentsNamesInLowerCase = students8.map((item) =>
  item.name.trim().toLowerCase()
);
console.log("Test 8:");
console.log(studentsRatedAbove7);
console.log(studentsNamesInLowerCase);

// Test 9
let javaScriptTypes = ["number", "null", "undefined", "string"];
let javaScriptTypesToAdd = ["bigint", "boolean", "object", "symbol"];
let fullJavaScriptTypes1 = javaScriptTypes.concat(javaScriptTypesToAdd);
console.log("Test 9 by concat:");
console.log(fullJavaScriptTypes1);

let fullJavaScriptTypes2 = javaScriptTypes.slice();
// Код ниже с деструктуризацией для себя,
// пробовал, чтобы не набирать каждый элемент в splice
// fullJavaScriptTypes2.splice(javaScriptTypes.length, 0, ...javaScriptTypesToAdd);
fullJavaScriptTypes2.splice(
  javaScriptTypes.length,
  0,
  "bigint",
  "boolean",
  "object",
  "symbol"
);
console.log("Test 9 by splice:");
console.log(fullJavaScriptTypes2);

let fullJavaScriptTypes3 = javaScriptTypes.slice();
javaScriptTypesToAdd.forEach((item) => fullJavaScriptTypes3.push(item));
console.log("Test 9 by push:");
console.log(fullJavaScriptTypes3);

// Test 10
let salary = [1000, 500, 1200, 230];
function getCopyArrAndSortArr(arr) {
  let copyArr = arr
    .slice()
    .sort((a, b) => a - b)
    .reverse();
  console.log(`Check is array: ${Array.isArray(copyArr)};`);
  return copyArr;
}
console.log("Test 10:");
console.log(getCopyArrAndSortArr(salary));

// Test 11
let serials = ["How i met your mom", "Friends", "Big bang theory"];
console.log(`Test 11: ${serials.join(", ")}`);
