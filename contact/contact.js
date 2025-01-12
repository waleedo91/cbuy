const form = document.getElementById("contact-form");
const email = document.getElementById("email");

email.addEventListener("blur", validateEmail);

function validateEmail() {
  const regexEmail = /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/;
  if (!regexEmail.test(email.value)) {
    notValid(email);
  } else {
    valid(email);
  }
}

function valid(input) {
  input.classList.remove("not-valid");
  input.classList.add("valid");
}

function notValid(input) {
  input.classList.remove("valid");
  input.classList.add("not-valid");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateForm();
});

function validateForm() {

  if (email.classList.contains("valid")) {
    alert("Thank you for your form!");
  }
}

validateForm();
