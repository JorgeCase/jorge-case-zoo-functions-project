const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return employees.filter(({ firstName, lastName }) =>
    (firstName === employeeName || lastName === employeeName))
    .shift() || {};
}

module.exports = getEmployeeByName;
