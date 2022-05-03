"use strict";
// Task 1
alert("Привет, это работа Бочило Александра");

// Task 2
const OUR_PLANET_NAME = "Earth";
let adminAge = 33;
let brokenVehicle = "VAZ";
let headerColor = "#F00";
let isAdmin = false;
console.log(
  "Task 2 result: ",
  OUR_PLANET_NAME,
  adminAge,
  brokenVehicle,
  headerColor,
  isAdmin
);

// Task 3
let adminName = "Александр Бочило";
console.log(
  "Task 3 result: ",
  `Привет, меня зовут ${adminName}, мне ${adminAge} года`
);

// Task 4
let isInspector = confirm("Вы проверяете мою работу?");
let inspectorName;
if (isInspector === true) {
  inspectorName = prompt("Как Вас зовут?");
  console.log("Task 4 result: ", `Мою работу проверяет ${inspectorName}`);
} else {
  console.log("Task 4 result: ", "Not inspector");
}

// Task 5
let str = "String",
  num = 2000,
  testSkiped = false,
  month = undefined,
  data = null;
console.log(
  "Task 5 result: ",
  typeof str,
  typeof num,
  typeof testSkiped,
  typeof month,
  typeof data
);

// Task 6
str = "37";
str = Number(str);
console.log("Task 6, result 1.1: ", typeof str, str);
str = Boolean(str);
console.log("Task 6, result 1.2: ", typeof str, str);

let value = true;
value = String(value);
console.log("Task 6, result 2.1: ", typeof value, value);
value = Number(value);
console.log("Task 6, result 2.2: ", typeof value, value);

num = 2007;
num = String(num);
console.log("Task 6, result 1.1: ", typeof num, num);
num = Boolean(num);
console.log("Task 6, result 1.2: ", typeof num, num);

// Task 7
let name = "Ivan",
  surname;
surname = name;
console.log("Task 7 result:", surname);
