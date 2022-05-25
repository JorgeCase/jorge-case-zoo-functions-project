const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const getEmployeeIdAndReponsibility = data.employees.find((element) =>
    element.id === id).responsibleFor[0];
  return Object.values(data.species.find((element) =>
    element.id === getEmployeeIdAndReponsibility).residents
    .reduce((acc, cur) => (acc.age > cur.age ? acc : cur)));
}

module.exports = getOldestFromFirstSpecies;
