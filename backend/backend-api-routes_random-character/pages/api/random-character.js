import Chance from "chance";

const chance = new Chance();
console.log(chance);

export default function handler(request, response) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    gender: chance.gender(),
    twitterName: chance.twitter(),
    geohash: chance.geohash(),
  };
  response.status(200).json(character);
}
