alert("Это HW2 Александра Бочило. Ответы на задания 1 и 2 в консоли");

//Test 1
console.log("Test 1: ", "a=5; ", "b=1; ", "c=5; ", "d=0");
let a = 4;
let b = 0;
let c = ++a;
let d = b++;
console.log("Test 1 control: ", a, b, c, d);

//Test 2
console.log("Test 2: ", "e=5; ", "f=4; ", "x=6; ", "y=5");
let e = 3;
let f = 2;
let x = 1 + (e += 2);
let y = 1 + (f *= 2);
console.log("Test 2 control: ", e, f, x, y);

//Test 3
let yearFootballChemp = prompt(
  "Введите год, в котором хотите узнать чемпиона по футболу",
  ""
);
if (!yearFootballChemp) {
  alert("Вы не ввели значение");
} else if (+yearFootballChemp < 2011) {
  alert("Статисктика еще не велась");
} else if (+yearFootballChemp === 2011 || +yearFootballChemp === 2013) {
  alert("Манчестер Юнайтед");
} else if (
  +yearFootballChemp === 2012 ||
  +yearFootballChemp === 2014 ||
  +yearFootballChemp === 2018 ||
  +yearFootballChemp === 2019 ||
  +yearFootballChemp === 2021
) {
  alert("Манчестер Сити");
} else if (+yearFootballChemp === 2015 || +yearFootballChemp === 2017) {
  alert("Челси");
} else if (+yearFootballChemp === 2016) {
  alert("Лестер Сити");
} else if (+yearFootballChemp === 2020) {
  alert("Ливерпуль");
} else if (+yearFootballChemp === 2022) {
  alert("Сезон еще идет");
} else if (+yearFootballChemp > 2022) {
  alert("Все лучшее впереди");
} else {
  alert("Введено некорректное значение");
}

// Test 3 option 2
let yearFootballChemp2 = prompt(
  "Введите год, в котором хотите узнать чемпиона по футболу",
  ""
);
let messageFootballChemp2 = !yearFootballChemp2
  ? "Вы не ввели значение"
  : +yearFootballChemp2 < 2011
  ? "Статисктика еще не велась"
  : +yearFootballChemp2 === 2011 || +yearFootballChemp2 === 2013
  ? "Манчестер Юнайтед"
  : +yearFootballChemp2 === 2012 ||
    +yearFootballChemp2 === 2014 ||
    +yearFootballChemp2 === 2018 ||
    +yearFootballChemp2 === 2019 ||
    +yearFootballChemp2 === 2021
  ? "Манчестер Сити"
  : +yearFootballChemp2 === 2015 || yearFootballChemp2 === 2017
  ? "Челси"
  : +yearFootballChemp2 === 2016
  ? "Лестер Сити"
  : +yearFootballChemp2 === 2020
  ? "Ливерпуль"
  : +yearFootballChemp2 === 2022
  ? "Сезон еще идет"
  : +yearFootballChemp2 > 2022
  ? "Все лучшее впереди"
  : "Введено некорректное значение";
alert(messageFootballChemp2);

// Test 4
let userLogin = prompt("Введите логин", "");
let userPassword;
if (!userLogin) {
  alert("Отменено");
} else if (userLogin === "Админ") {
  userPassword = prompt("Введите пароль");
  if (!userPassword) {
    alert("Отменено");
  } else if (userPassword === "Я главный") {
    alert("Здравствуйте");
  } else {
    alert("Неверный пароль");
  }
} else {
  alert("Я вас не знаю");
}
