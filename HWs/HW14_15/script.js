"use strict";

// Test 1
async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new Error(response.status);
  }
}
loadJson("no-such-user.json").catch(alert);

// Test 2
async function loadData(url) {
  const data = await fetch(url);
  data.modified = true;
  console.log(data);
}
loadData("http://jsonplaceholder.typicode.com/todos/1");

// Test 3
function Person(name, id, age) {
  this.name = name;
  this.id = id;
  this.age = age;
}
Person.prototype.sayHello = function () {
  console.log("Hello from prototype");
};
const student = new Person("Alexander", 1, 33);
console.log(student);
student.sayHello();

// Test 4
const car = {
  engine: true,
  wheels: 4,
  seats: 4,
  doors: 4,
  runs: true,
  bibi() {
    console.log("Bi-bi");
  },
};

const porsche = {
  make: "Porsche",
  model: "Cayenne",
  __proto__: car,
  wrom() {
    console.log("Wrom-wrom");
  },
};
porsche.bibi();

const bmw = {
  make: "BMW",
  model: "5",
  turnSignal: "useless",
};
Object.setPrototypeOf(bmw, porsche);
bmw.wrom();

const vaz = Object.create(bmw, {
  make: { value: "Vaz" },
  model: { value: "Oka" },
  runs: { value: false },
});
console.log(vaz.turnSignal);
