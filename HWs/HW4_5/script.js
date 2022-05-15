"use strict";

// Test 1
function howManyDays(month) {
  let days;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 2:
      days = 28;
      break;
    default:
      return "Value is incorrect";
  }
  return days;
}

console.log(`Test 1: ${howManyDays(9)}`);

// Test 2
let checkIsEvenMultiply = (num1, num2) =>
  (num1 * num2) % 2 === 0 ? true : false;

console.log(`Test 2: ${checkIsEvenMultiply(27, 0)}`);

// Test 3
let student = {
  name: "Alexander",
  surname: "Bochilo",
  age: 33,
  studySpec: "Frontend",
  englishLangLevel: "B1+",
};

console.log(`Test 3 before: ${student}`);
delete student.englishLangLevel;
console.log(`Test 3 after: ${student}`);

// Test 4
let book = {
  numberOfPages: 545,
  cover: true,
  isTheAuthorAlive: false,
  isBestseller: true,
  booksEditions: 20000000,
};

function showKeyOfBollean(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "boolean") console.log(key);
  }
}

console.log("Test 4:");
showKeyOfBollean(book);

// == Output to a string ==
// function showKeyOfBollean(obj) {
//   let result = "";
//   let i = 0;
//   for (let key in obj) {
//     if (typeof obj[key] === "boolean") {
//       i++;
//       if (i === 1) result += key;
//       else result += ", " + key;
//     }
//   }
//   return result;
// }
// console.log(`Test 4: ${showKeyOfBollean(book)}`);

// Test 5
let train = {
  locomotiveLength: 25,
  totalCoachCars: 4,
  coachLength: 15,
};

let getLengthOfTrain = (obj) =>
  obj.locomotiveLength + obj.totalCoachCars * obj.coachLength;

console.log(`Test5. Length of the train: ${getLengthOfTrain(train)}`);

// Test 6
let favoritCar = {
  brand: "Vaz",
  color: "white",
  doors: 4,
  hp: 59,
  engineCapacity: 1.3,
  gearbox: "manual",
};
console.log("Test 6 original obj: ");
console.log(favoritCar);

let favoritCarClone1 = {};
for (let key in favoritCar) {
  favoritCarClone1[key] = favoritCar[key];
}
console.log("Test 6 obj cloned by 'for': ");
console.log(favoritCarClone1);

let favoritCarClone2 = Object.assign({}, favoritCar);
console.log("Test 6 obj cloned by Object.assign: ");
console.log(favoritCarClone2);

// Test 7
let animalObj = {
  name: "cat",
  legs: 4,
  color: "black",
};

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs`;
}

console.log(animal(animalObj));

// Test 8
// Не понял прикола с 0. Ноль - четное число. Т.е. если произведение
// равно 0, то оно четное.
let checkIsEvenMultiply2 = (num1, num2, funcTrue, funcFalse) =>
  (num1 * num2) % 2 === 0 ? funcTrue() : funcFalse();
let funcTrue = () => console.log(`Test 8: multiplication result is even`);
let funcFalse = () => console.log(`Test 8: multiplication result is odd`);

checkIsEvenMultiply2(0, 9, funcTrue, funcFalse);

// Test 9
let student9 = {
  name: "Alexander",
  surname: "Bochilo",
  studyGroupNum: 1603,
  showMessage() {
    console.log(
      `Test 9: Это студент -${this.name.toUpperCase()}-${this.surname.toUpperCase()} из группы -${
        this.studyGroupNum
      }-`
    );
  },
};
student9.showMessage();
console.log(student9.name);

// Test 10
function Animal(type, legs, isPredator, name) {
  this.type = type;
  this.legs = legs;
  this.isPredator = isPredator;
  this.name = name;
}

console.log("Test 10:");
let gepard = new Animal("gepard", 4, true, "Borya");
console.log(gepard);

let cow = new Animal("cow", 4, false, "Burka");
console.log(cow);
console.log(
  "Test 10 P.S.: Интересно, почему в консоль выводит название конструктора?"
);
