"use strict";

const notificationBtn = document.getElementById("notification-btn");
const email = document.getElementById("email-holder");
const error = document.querySelector(".error-message");

notificationBtn.addEventListener("click", () => {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(validRegex)) {
    error.classList.remove("valid");
  } else {
    error.classList.add("valid");
  }
});
