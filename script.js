"use script";

const sendBtn = document.querySelector(".button");
const firstName = document.querySelector(".input1");
const lastName = document.querySelector(".input2");
const email = document.querySelector(".input3");
const password = document.querySelector(".input4");
const error = document.querySelectorAll(".minText");
const allInputs = document.querySelectorAll(".gen");

// function
const showErrors = function (e) {
  const nameVal = firstName.value;
  const lastVal = lastName.value;
  const mailVal = email.value;
  const passVal = password.value;

  if (!nameVal) {
    error[0].classList.remove("hidden");
    e.preventDefault();
    firstName.style.border = "2px solid red";
  } else {
    error[0].classList.add("hidden");
    firstName.style.border = "1px solid gray";
  }
  if (!lastVal) {
    error[1].classList.remove("hidden");
    e.preventDefault();
    lastName.style.border = "2px solid red";
  } else {
    error[1].classList.add("hidden");
    lastName.style.border = "1px solid gray";
  }
  if (!mailVal || !mailVal.includes("@")) {
    error[2].classList.remove("hidden");
    e.preventDefault();
    email.style.border = "2px solid red";
  } else {
    error[2].classList.add("hidden");
    email.style.border = "1px solid gray";
  }
  if (!passVal) {
    error[3].classList.remove("hidden");
    e.preventDefault();
    password.style.border = "2px solid red";
  } else {
    error[3].classList.add("hidden");
    password.style.border = "1px solid gray";
  }
};

sendBtn.addEventListener("click", showErrors);

allInputs.forEach((inp) =>
  inp.addEventListener("keydown", function (e) {
    if (inp.value.length >= 1) inp.style.border = "1px solid gray";
  })
);
