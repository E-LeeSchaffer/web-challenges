const submitButton = document.querySelector('[data-js="submitButton"]');
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailDisplay = document.querySelector('[data-js="generated-email"]');

function generateEmail(firstName, lastName) {
  return `${firstName.toLowerCase}.${lastName.toLowerCase}@example.com`;
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  if (firstName && lastName) {
    const email = generateEmail(firstName, lastName);
    emailDisplay.textContent = email;
  } else {
    emailDisplay.textContent = "Enter first and last name";
  }
});
