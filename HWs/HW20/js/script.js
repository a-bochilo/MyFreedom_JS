"use strict";

window.addEventListener("scroll", function () {
  const header = document.querySelector(".page_about header");
  if (scrollY > 0) header.classList.add("header_dark");
  if (scrollY === 0) header.classList.remove("header_dark");
});

const mainBtn = document.getElementById("extraInfoBtn");
mainBtn.addEventListener("click", async function (e) {
  e.preventDefault();
  try {
    let response = await fetch("https://api.github.com/users/iliakan");
    let result = await response.json();
    let resultDiv = document.createElement("div");
    resultDiv.innerHTML = result;
    resultDiv.classList.add("extraInfo");
    mainBtn.after(resultDiv);
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
  let field = e.target.closest("input");
  if (field.getAttribute("type") === "checkbox") return;
  if (field.value.trim().length < 3) {
    field.classList.add("invalid-input");
  } else {
    if (field.classList.contains("invalid-input"))
      field.classList.remove("invalid-input");
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
  for (let i = 0; i < loginForm.elements.length; i++) {
    if (loginForm.elements[i].classList.contains("invalid-input")) {
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
