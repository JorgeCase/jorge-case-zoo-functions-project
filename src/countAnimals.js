const data = require('../data/zoo_data');

// Função para listar a quantidade de animais caso quando specie não é declarada. Retorna a quantidade de todos os animais do zoo
const sumAllSpecies = () => {
  const numberOfAnimals = {};
  data.species.forEach(({ name, residents }) => {
    numberOfAnimals[name] = residents.length;
  });
  return numberOfAnimals;
};

// Função para retornar a quantidade de animais por sexo
const animalSex = (animal) => data.species.reduce((acc, current) =>
  ((current.name === animal.specie)
    ? current.residents.filter((element) => element.sex === animal.sex).length : acc), 0);

function countAnimals(animal) {
  if (animal === undefined) return sumAllSpecies();
  if (Object.keys(animal).includes('sex')) {
    return animalSex(animal);
  }
  return data.species.reduce((acc, current) =>
    (current.name === animal.specie
      ? current.residents.length : acc));
}

module.exports = countAnimals;
