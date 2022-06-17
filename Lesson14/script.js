"use strict";

// console.log("Data request");

// setTimeout(() => {
//   console.log("Data prepairation");
//   const backendData = {
//     status: "Done",
//     code: 200,
//   };
//   setTimeout(() => {
//     console.log("Data recieved", backendData);
//   }, 3000);
// }, 3000);

// console.log("Data request");
// const ourPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Data preparation");

//     const backendData = {
//       status: "Done",
//       code: 200,
//     };

//     resolve(backendData);
//   }, 3000);
// });

// ourPromise.then((data) => {
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true;
//       resolve(data);
//     }, 3000);
//   });
//   promise2.then(modifiedData => {
//     console.log('Data recieved: ', modifiedData);
//   });
// });

// ourPromise.then((data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true;
//       resolve(data);
//     }, 3000);
//   })
//     .then((modifiedData) => {
//       modifiedData.fromPromiseTwo = true;
//       return modifiedData;
//     })
//     .then((secondaryModifiedData) => {
//       console.log("Data recieved: ", secondaryModifiedData);
//     })
//     .catch((error) => console.log("Error"))
//     .finally(() => console.log("Finally"));
// });

//
// const timePause = (delay) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, delay);
//   });
// };

// // timePause(5000).then(() => console.log("Done in 5 sec"));
// // timePause(1000).then(() => console.log("Done in 1 sec"));

// Promise.all([timePause(4000), timePause(2000)]).then(() =>
//   console.log("All promises worked")
// );

//
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

const url = "http://jsonplaceholder.typicode.com/todos/1 ";

// function fetchDataFromBack() {
//   return delay(3000)
//     .then(() => fetch(url))
//     .then((response) => response.json);
// }

// fetchDataFromBack()
//   .then((data) => console.log(data))
//   .catch((e) => console.error(e));
//
let arr = [];
async function fetchDataFromBack() {
  console.log("Fetch started");
  const response = await fetch(url);
  console.log(response);
  const data = await response.json;
  await arr.push(data);
  console.log("Data: ", data);
}

fetchDataFromBack();
console.log("arr: ", arr);
