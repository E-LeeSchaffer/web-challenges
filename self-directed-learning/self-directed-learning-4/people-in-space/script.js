console.clear();
console.log("Sanity check");

const peopleInSpace = document.querySelector('[data-js="people-in-space"]');

async function getPeopleInSpace() {
  const response = await fetch("http://api.open-notify.org/astros.json");
  const data = await response.json();
  console.log(data);
  peopleInSpace.textContent = data.number;
}

getPeopleInSpace();
