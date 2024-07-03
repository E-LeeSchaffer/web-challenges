console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const li = document.createElement("li");
  toastContainer.append(li);
  li.classList.add("toast-container__message");
  console.log("works");
  li.textContent = "click me";
  console.log("text content shows up");
  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", () => {
  while (toastContainer.firstChild) {
    toastContainer.removeChild(toastContainer.firstChild);
  }
  // Exercise: Clear the stack of toast messages
});
