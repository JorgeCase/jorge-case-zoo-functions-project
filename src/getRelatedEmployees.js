const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((element) => element.managers
    .some((elem) => elem === id));
}

const errorMessage = 'O id inserido não é de uma pessoa colaboradora gerente!';

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) throw Error(errorMessage);
  return data.employees.filter(({ managers }) => managers.includes(managerId))
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
