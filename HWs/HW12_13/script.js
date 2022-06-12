"use strict";

// Таймеры не запущены, чтобы не раздражали

// Test 1
function calcSum(a, b, ...other) {
  console.log("Test 1 arr: ", other);
  return `Test 1 sum: ${a + b}`;
}
console.log(calcSum(3, 5, 23, 54, 66, 99, 24));

// Test 2
let drivers = ["Dominic", "Brian", "Letty", "Roman"];
let antagonists = ["Deckard", "Luke"];

let family1 = drivers.concat(antagonists);
console.log(`Test 2 by concat: ${family1}`);

// Не уверен, что верно понял задание с push.apply
// как-то костыльно получается
let family2 = [];
[].push.apply(family2, [...drivers, ...antagonists]);
console.log(`Test 2 by push.apply: ${family2}`);

let family3 = [...drivers, ...antagonists];
console.log(`Test 2 by spread: ${family3}`);

let family4 = [];
family4.splice(0, 0, ...drivers, ...antagonists);
console.log(`Test 2 by splice: ${family4}`);

let family5 = [];
drivers.forEach((item) => family5.push(item));
antagonists.forEach((item) => family5.push(item));
console.log(`Test 2 by forEach: ${family5}`);

// Test 3
let cars = ["Jeep", "Jeep", "Kia", "BMW", "BMW", "BMW", "Renault"];

let uniqueCars = [...new Set(cars)];
console.log(`Test 3: ${uniqueCars}`);

// Test 4
function createCountryCityArr(country) {
  return function (city) {
    return [city, country];
  };
}
console.log(`Test 4: ${createCountryCityArr("Belarus")("Minsk")}`);

// Test 5
function printNumbers1(from, to) {
  console.log("Test 5 by setTimeout:");
  console.log(from);
  setTimeout(function printNext() {
    console.log(++from); // Не вводил счетчик, потому что from нам больше нигде не нужен
    if (from < to) setTimeout(printNext, 1000);
  }, 1000);
}
// printNumbers1(1, 7);

function printNumbers2(from, to) {
  console.log("Test 5 by setInterval:");
  console.log(from);
  let timerId = setInterval(() => {
    console.log(++from);
    if (from === to) clearInterval(timerId);
  }, 1000);
}
// printNumbers2(3, 9);

// Test 6
function showMessageTest6(message) {
  console.log(message); // Не знаю нужно ли на 0с показывать сообщение
  let timerId = setInterval(() => console.log(message), 3000);
  setTimeout(() => clearInterval(timerId), 10000);
}
// showMessageTest6("Test 6 is working");

// Test 7
// 1 6 4 5 3

// Test 8
let jordan = {
  name: "Michael",
  age: 59,
  showName() {
    console.log(`Test 8: ${this.name}`);
  },
  showBindedName(obj) {
    this.showName.bind(obj)();
  },
};

let messi = {
  name: "Lionel",
  age: 34,
};

jordan.showName();
jordan.showBindedName(messi);
jordan.showBindedName(jordan);
