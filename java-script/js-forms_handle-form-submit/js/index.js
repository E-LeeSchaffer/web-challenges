console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("event:", event);

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("data:", data);

  //   reset the form and refocus to first name
  event.target.reset();
  const formElements = event.target.elements;
  formElements.firstName.focus();

  console.log("badness:", badness);
  console.log("age:", age);

  const result = Number(data.age) + Number(data.badness);
  console.log(result);
  console.log(`The age-badness-sum of ${data.firstName} is ${result}`);
});
