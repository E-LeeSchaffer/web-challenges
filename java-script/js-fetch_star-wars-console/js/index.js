console.clear();

const url = "https://swapi.py4e.com/api/people";

// async function fetchData() {
//   try {
//     const response = await fetch(url);
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

async function fetchData() {
  try {
    const response = await fetch(url);
    console.log(response);
    return await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
fetchData();

async function showData() {
  const data = await fetchData();
  console.log(`${data.results[2].name}, ${data.results[2].eye_color}`);
}
showData();
