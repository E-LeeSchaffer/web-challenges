console.clear();

const form = document.querySelector('[data-js="form"]');
console.log("form:", form);
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const success = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideSuccess() {
  success.setAttribute("hidden", "");
}

function showSuccess() {
  success.removeAttribute("hidden");
}

// Fehlermeldung intial verstecken
hideTosError();
hideSuccess();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  // Umwandlung in Object
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("data:", data);
  // Fehlermeldung erst bei Submit anzeigen
  showTosError();

  // Prüfen, ob TOS Checkbox angeklickt ist, wenn ja dann return, wenn nicht, dann alert
  if (!tosCheckbox.checked) {
    return;
  }

  alert("Form submitted");
  showSuccess();

  // Form leeren nach Submit
  event.target.reset();
  const formElements = event.target.elements;
  formElements.firstName.focus();
});

tosCheckbox.addEventListener("input", (event) => {
  console.log(event.target.checked); //check, ob true or false

  if (event.target.checked) {
    hideTosError();
  } else {
    showTosError();
  }
  // --^-- write your code here --^--
});

// eslint-disable-next-line no-alert
alert("Form submitted");
