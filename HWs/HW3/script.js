"use strict";

// alert("Это HW2 Александра Бочило. Ранее выполненные части задания закомментированны");

// //Test 1
// console.log("Test 1: ", "a=5; ", "b=1; ", "c=5; ", "d=0");
// let a = 4;
// let b = 0;
// let c = ++a;
// let d = b++;
// console.log("Test 1 control: ", a, b, c, d);

// //Test 2
// console.log("Test 2: ", "e=5; ", "f=4; ", "x=6; ", "y=5");
// let e = 3;
// let f = 2;
// let x = 1 + (e += 2);
// let y = 1 + (f *= 2);
// console.log("Test 2 control: ", e, f, x, y);

// //Test 3
// let yearFootballChemp = prompt(
//   "Test 3.1. Введите год, в котором хотите узнать чемпиона по футболу",
//   ""
// );
// if (!yearFootballChemp) {
//   alert("Вы не ввели значение");
// } else if (+yearFootballChemp < 2011) {
//   alert("Статисктика еще не велась");
// } else if (+yearFootballChemp === 2011 || +yearFootballChemp === 2013) {
//   alert("Манчестер Юнайтед");
// } else if (
//   +yearFootballChemp === 2012 ||
//   +yearFootballChemp === 2014 ||
//   +yearFootballChemp === 2018 ||
//   +yearFootballChemp === 2019 ||
//   +yearFootballChemp === 2021
// ) {
//   alert("Манчестер Сити");
// } else if (+yearFootballChemp === 2015 || +yearFootballChemp === 2017) {
//   alert("Челси");
// } else if (+yearFootballChemp === 2016) {
//   alert("Лестер Сити");
// } else if (+yearFootballChemp === 2020) {
//   alert("Ливерпуль");
// } else if (+yearFootballChemp === 2022) {
//   alert("Сезон еще идет");
// } else if (+yearFootballChemp > 2022) {
//   alert("Все лучшее впереди");
// } else {
//   alert("Введено некорректное значение");
// }

// // Test 3 option 2
// let yearFootballChemp2 = prompt(
//   "Test 3.2. Введите год, в котором хотите узнать чемпиона по футболу",
//   ""
// );
// let messageFootballChemp2 = !yearFootballChemp2
//   ? "Вы не ввели значение"
//   : +yearFootballChemp2 < 2011
//   ? "Статисктика еще не велась"
//   : +yearFootballChemp2 === 2011 || +yearFootballChemp2 === 2013
//   ? "Манчестер Юнайтед"
//   : +yearFootballChemp2 === 2012 ||
//     +yearFootballChemp2 === 2014 ||
//     +yearFootballChemp2 === 2018 ||
//     +yearFootballChemp2 === 2019 ||
//     +yearFootballChemp2 === 2021
//   ? "Манчестер Сити"
//   : +yearFootballChemp2 === 2015 || yearFootballChemp2 === 2017
//   ? "Челси"
//   : +yearFootballChemp2 === 2016
//   ? "Лестер Сити"
//   : +yearFootballChemp2 === 2020
//   ? "Ливерпуль"
//   : +yearFootballChemp2 === 2022
//   ? "Сезон еще идет"
//   : +yearFootballChemp2 > 2022
//   ? "Все лучшее впереди"
//   : "Введено некорректное значение";
// alert(messageFootballChemp2);

// Test 3 option 3
let yearFootballChemp3 = +prompt(
  "Test 3.3. Введите год, в котором хотите узнать чемпиона по футболу",
  ""
);
let messageFootballChemp3;
// Логи ниже выводил для проверки соответствия первой группе кейсов.
// По логике, если ввести в промпт буквы, то +промпт дает НаН, но
// первая группа кейсов не выполняется. При этом выражение
// yearFootballChemp3 !== yearFootballChemp3 при значении НаН
// дает тру. Не понимаю почему не работает и как в итоге
// выполнить проверку на НаН. При этом аналогичная проверка
// в 8 задании успешно работает.
// console.log(
//   typeof yearFootballChemp3,
//   yearFootballChemp3,
//   yearFootballChemp3 !== yearFootballChemp3
// );
switch (yearFootballChemp3) {
  case 0:
  case !yearFootballChemp3:
  case NaN:
  case isNaN(yearFootballChemp3):
    messageFootballChemp3 = "Введено некорректное значение";
    break;
  case 2011:
  case 2013:
    messageFootballChemp3 = "Манчестер Юнайтед";
    break;
  case 2012:
  case 2014:
  case 2018:
  case 2019:
  case 2021:
    messageFootballChemp3 = "Манчестер Сити";
    break;
  case 2015:
  case 2017:
    messageFootballChemp3 = "Челси";
    break;
  case 2016:
    messageFootballChemp3 = "Лестер Сити";
    break;
  case 2020:
    messageFootballChemp3 = "Ливерпуль";
    break;
  case 2022:
    messageFootballChemp3 = "Сезон еще идет";
    break;
}
// console.log(messageFootballChemp3);
alert(messageFootballChemp3 + "\nПросьба почитать комментарии в теле кода");

// // Test 4
// let userLogin = prompt("Test 4.1. Введите логин", "");
// let userPassword;
// if (!userLogin) {
//   alert("Отменено");
// } else if (userLogin === "Админ") {
//   userPassword = prompt("Введите пароль");
//   if (!userPassword) {
//     alert("Отменено");
//   } else if (userPassword === "Я главный") {
//     alert("Здравствуйте");
//   } else {
//     alert("Неверный пароль");
//   }
// } else {
//   alert("Я вас не знаю");
// }

// let userLogin2 = prompt("Test 4.2. Введите логин", "");
// let userPassword2;
// !userLogin2
//   ? alert("Отменено")
//   : userLogin2 === "Админ"
//   ? ((userPassword2 = prompt("Введите пароль", "")),
//     !userPassword2
//       ? alert("Отменено")
//       : userPassword2 === "Я главный"
//       ? alert("Здравствуйте")
//       : alert("Неверный пароль"))
//   : alert("Я вас не знаю");

// Test 5
for (let i = 7; i < 16; i++) {
  if (i === 12) {
    console.log(`Test 5 result: cycle breaked at value i: ${i}`);
    break;
  }
  if (i % 2 !== 0) {
    console.log(`Test 5 result: ${i}`);
  }
}

// Test 6
let j = 0;
while (j < 5) {
  console.log(`Test 6 result: number ${j}`);
  j++;
}

// Test 7
function getMaxValue(a, b) {
  return a > b ? a : b;
}
console.log(`Test 7 result: max value is ${getMaxValue(2, 4)}`);

// Test 8
let z = +prompt("Test 8: Введите число, которое хотите возвести в степень", "");
let y = +prompt("Test 8: Введите значение степени", "");
// Запросил переменные для функции в начале просто чтобы потом их передать, но
// здесь мне кажется логичнее было бы запрашивать значения прямо в теле функции
// в самом ее начале, а потом уже проводить проверки и возвращать результат
let pow = function (x, n) {
  console.log(typeof x, x);
  // Вот здесь же проверка на NaN успешно работает, почему же она не хочет работать
  // в конструкции switch..case?
  if (x !== x) {
    x = +prompt("Вы должны ввести именно число для возведения в степень", "");
  }
  if (n < 0 || n === 0 || n !== n) {
    n = +prompt("Test 8: Вы должны ввести численное значение степени > 0", "");
  }
  return (x = x ** n);
};
console.log(`Test 8 result: ${pow(z, y)}`);
