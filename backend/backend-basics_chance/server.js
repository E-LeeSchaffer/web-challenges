import { Chance } from "chance";
import { createServer } from "node:http";

const chance = new Chance();
console.log(chance.name());

// export const server = …
export const server = createServer((request, response) => {
  const name = chance.name();
  const age = chance.age();
  const profession = chance.profession();
  response.statusCode = 200;
  response.end(
    `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}`
  );
});
