"use strict";

// const header = document.querySelector("header");
// window.addEventListener("scroll", function (e) {
//   // const scrollFromTop = document.querySelector("html").scrollY;
//   header.style.background = scrollY > 0 ? "red" : "brown";
// });

async function getUsers(logins) {
  let results = await Promise.all(
    logins.map((login) => fetch(`https://api.github.com/users/${login}`))
  );
  results = await results.map((response) => {
    if (!response.ok) {
      return null;
    } else {
      return response.json();
    }
  });
  return results;
}

console.log(getUsers(["iliakan", "remy", "no.such.users"]));
