const data = require('../data/zoo_data');

const { employees, species } = data;

function getEmployeeInfo(identify) {
  if (!identify) return undefined;
  const infoEmployee = Object.values(identify)[0];
  const employee = employees.find((element) =>
    element.firstName.includes(infoEmployee)
    || element.lastName.includes(infoEmployee)
    || element.id.includes(infoEmployee));
  if (!employee) { throw new Error('Informações inválidas'); }
  const idAnimal = employee.responsibleFor;
  const infoAnimals = species.filter((animal) => idAnimal.includes(animal.id));
  const animalsName = infoAnimals.map((element) => element.name);
  const animalsLocation = infoAnimals.map((element) => element.location);
  const result = {
    id: employee.id,
    fullName: (`${employee.firstName} ${employee.lastName}`),
    species: animalsName,
    locations: animalsLocation,
  };
  return result;
}

function noParam() {
  const arr = [];
  const peopleId = employees.map((person) => person.id);
  peopleId.forEach((element) => arr.push(getEmployeeInfo({ opa: element })));
  return arr;
}

function getEmployeesCoverage(identify) {
  if (getEmployeeInfo(identify) === undefined) return noParam();
  return getEmployeeInfo(identify);
}

module.exports = getEmployeesCoverage;
