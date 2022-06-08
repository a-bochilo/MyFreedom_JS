"use strict";

let student = {
  name: "Alexander",
  age: "33",
  id: 1,
};

// Test 1
let studentMap = new Map(Object.entries(student));
studentMap.set("group", 1603).set("marks", 9);

console.log(`Test 1: ${studentMap.has("name")}`);

// Test 2
console.log("Test 2: ");
for (let [key, value] of studentMap) {
  console.log([key, value]);
  console.log(key);
  console.log(value);
}

// Test 3
let amount = {
  apple: 440,
  burger: 316,
  juice: 1120,
};
amount = Object.fromEntries(
  Object.entries(amount).map(([key, value]) => [key, value / 2])
);
console.log("Test 3:");
console.log(amount);

// Test 4
console.log(
  `Test 4: ${Object.entries(amount).reduce(
    (acc, [, value]) => (acc += value),
    0
  )}`
);

// Test 5
// Я как-то не понял, куда здесь можно rest оператор использовать
let filterUniqValArr = (arr) => Array.from(new Set(arr));
let arr5 = [1, 2, 3, 3, 2, 5, 7, 1, 4];
console.log("Test 5:");
console.log(filterUniqValArr(arr5));

// Test 6
const weather = {
  coord: {
    lon: -122.08,
    lat: 37.39,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01d",
    },
  ],
  base: "stations",
  main: {
    temp: 282.55,
    feels_like: 281.86,
    temp_min: 280.37,
    temp_max: 284.26,
    pressure: 1023,
    humidity: 100,
  },
  visibility: 10000,
  wind: {
    speed: 1.5,
    deg: 350,
  },
  clouds: {
    all: 1,
  },
  dt: 1560350645,
  sys: {
    type: 1,
    id: 5122,
    message: 0.0139,
    country: "US",
    sunrise: 1560343627,
    sunset: 1560396563,
  },
  timezone: -25200,
  id: 420006353,
  name: "Mountain View",
  cod: 200,
};

const copyWeather = JSON.parse(JSON.stringify(weather));

// Test 7
const time = 1654420481877;
const date = new Date(time);
console.log(`Test 7.1: ${date}`);
const formatDate = (date) => {
  let year = date.getFullYear();
  let month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

  return `${year}/${month}/${day} (${date.getMinutes()}: ${date.getSeconds()})`;
};
console.log(`Test 7.2: ${formatDate(date)}`);
