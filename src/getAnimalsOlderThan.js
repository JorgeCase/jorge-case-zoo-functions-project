const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species
    .find((getAnimal) => getAnimal.name === animal)
    .residents.every((element) => element.age >= age);
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
