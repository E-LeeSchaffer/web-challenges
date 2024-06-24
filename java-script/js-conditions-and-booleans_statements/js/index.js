console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "password1234";
if (receivedPassword !== SUPER_SECRET_PASSWORD) {
  console.log("Access denied!");
} else {
  console.log("Welcome! You are logged in as Brunhilde1984.");
}

// Part 2: Even / Odd
const number = 6;
if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}
// Part 3: Hotdogs
const numberOfHotdogs = 990000;

if (numberOfHotdogs < 5) {
  console.log("2 Euro");
} else if (numberOfHotdogs < 100) {
  console.log("1.50 Euro");
} else if (numberOfHotdogs < 1000000) {
  console.log("1.00 Euro");
} else {
  console.log("0.10 Euro");
}

// Part 4: Daytime
const currentHour = 19;
const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
const coach = "Felix";

const greeting = userName === coach ? "Hello Coach!" : `Hello ${coach}!`;
console.log(greeting);
