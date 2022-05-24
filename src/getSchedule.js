const data = require('../data/zoo_data');

const { species, hours } = data; // Object Destructuring para acessar as informações de espécie e horas
const speciesName = species.map(({ name }) => name); // Retorna o nome da espécie
const getDays = Object.keys(hours); // Retorna os dias da key hours

// A constante speciesAvailability retorna a disponibilidade do animal
const speciesAvailability = (specie) => (
  species.find(({ name }) =>
    name === specie).availability
);

const animalAvailability = (day) => (
  species.filter(({ availability }) => availability.includes(day))
    .map(({ name }) => name)
);

const getInfoDay = (day) => {
  const { open, close } = hours[day];
  return day === 'Monday' ? { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' }
    : { officeHour: `Open from ${open}am until ${close}pm`, exhibition: animalAvailability(day) };
};

function getSchedule(scheduleTarget) {
  if (speciesName.includes(scheduleTarget)) return speciesAvailability(scheduleTarget); // se for passado um animal, deverá retornar um array com os dias em que ele está em exibição
  if (getDays.includes(scheduleTarget)) { return { [scheduleTarget]: getInfoDay(scheduleTarget) }; } // se um dia for passado retorna o horário do expediente e os animais em exibição

  return getDays.reduce((acc, day) => ({
    ...acc,
    [day]: getInfoDay(day),
  }), {});
}

module.exports = getSchedule;
