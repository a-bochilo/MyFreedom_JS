"use strict";

window.addEventListener("scroll", function () {
  const header = document.querySelector(".page_about header");
  if (scrollY > 0) header.classList.toggle("header_dark");
});

const extraInfoBtn = document.getElementById("extraInfoBtn");
extraInfoBtn.addEventListener("click", async function (e) {
  e.preventDefault();
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let result = await response.json();
    let resultDiv = document.createElement("div");
    resultDiv.classList.add("extraInfo");
    resultDiv.innerHTML = JSON.stringify(result);
    extraInfoBtn.after(resultDiv);
  } catch (error) {
    console.error(error);
  }
});

const switcher = document.querySelector(".switcher");
let btnSelected;
switcher.addEventListener("click", function (e) {
  e.preventDefault();
  let btn = e.target.closest("a");
  if (btn === btnSelected) return;
  if (btnSelected) btnSelected.classList.remove("btn-switcher");
  btn.classList.add("btn-switcher");
  btnSelected = btn;
});

const loginForm = document.forms.loginForm;
loginForm.addEventListener("focusout", function (e) {
  let input = e.target.closest("input");
  if (input.getAttribute("type") === "checkbox") return;
  if (input.value.trim().length < 3) {
    input.classList.add("invalid-input");
  } else {
    if (input.classList.contains("invalid-input"))
      input.classList.remove("invalid-input");
  }
});

loginForm.confirm.addEventListener("change", function (e) {
  if (loginForm.confirm.checked) {
    loginForm.submit.classList.remove("btn-disabled");
    loginForm.submit.classList.add("btn-primary");
  } else {
    loginForm.submit.classList.remove("btn-primary");
    loginForm.submit.classList.add("btn-disabled");
  }
});

loginForm.submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (loginForm.submit.classList.contains("btn-disabled")) return;
  if (document.getElementById("formErr"))
    document.getElementById("formErr").remove();
  for (let el of loginForm.elements) {
    if (el.classList.contains("invalid-input")) {
      const err = document.createElement("p");
      err.innerHTML = "Please, enter correct data in highlighted fields";
      err.style.color = "red";
      err.id = "formErr";
      err.style.fontSize = "15px";
      loginForm.submit.after(err);
      return;
    }
  }
  alert("Succesfully");
  loginForm.submit();
});
