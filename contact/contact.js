const form = document.getElementById("contact-form");
const email = document.getElementById("email");
const comment = document.getElementById("text-area");

email.addEventListener("blur", validateEmail);

// Used to validate the email is in correct email form
function validateEmail() {
  const regexEmail = /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/;
  if (!regexEmail.test(email.value)) {
    notValid(email);
  } else {
    valid(email);
  }
}

// Used to ensure that the email css class is changed to the correct design for valid input
function valid(input) {
  input.classList.remove("not-valid");
  input.classList.add("valid");
}

// Used to ensure that the email css class is changed to the correct design for not valid input
function notValid(input) {
  input.classList.remove("valid");
  input.classList.add("not-valid");
}

// Window listens for the submit button to be clicked and will initiate the validate form function.
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateForm();
});

// Send a message to notify user that the form is correct
function validateForm() {
  if (email.classList.contains("valid")) {
    alert("Thank you for your form!");
  }
}

validateForm();

// newComment(comment.value);
