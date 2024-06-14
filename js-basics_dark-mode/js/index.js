console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkButton = document.querySelector('[data-js="dark-mode-button"]');
const lightButton = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

darkButton.addEventListener("click", () => {
  bodyElement.classList.add("button--dark");
  console.log("show dark mode");
});

lightButton.addEventListener("click", () => {
  bodyElement.classList.remove("button--dark");
  console.log("show light mode");
});

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("button--dark");
  console.log("show toggle mode");
});

//  - "switch to dark mode" button always adds the class "dark" to the body
// - "switch to light mode" button always removes the class "dark" from the body
// - "toggle mode" button toggles the class "dark" on the body
