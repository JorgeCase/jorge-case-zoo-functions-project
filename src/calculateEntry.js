const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    child: entrants.filter((element) => element.age < 18).length,
    adult: entrants.filter((element) => element.age >= 18 && element.age < 50).length,
    senior: entrants.filter((element) => element.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  return ((child * data.prices.child)
    + (adult * data.prices.adult)
    + (senior * data.prices.senior)
  );
}

module.exports = { calculateEntry, countEntrants };
