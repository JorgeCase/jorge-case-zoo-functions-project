const data = require('../data/zoo_data');

const getSpecies = () => (
  data.species.reduce((acc, { name, location }) => ({
    ...acc, [location]: [...(acc[location] || []), name],
  }), {})
);

const getResidents = (residents, sorted, sex) => {
  if (sex && sorted) {
    return residents.filter(({ sex: residentSex }) =>
      sex === residentSex).map(({ name }) => name).sort();
  }

  if (sorted) return residents.map(({ name }) => name).sort();

  if (sex) {
    return residents.filter(({ sex: residentSex }) =>
      sex === residentSex).map(({ name }) => name);
  }

  return residents.map(({ name }) => name);
};

const filterBySpecies = (sorted, sex) => (
  data.species.reduce((acc, { name, location, residents }) => ({
    ...acc,
    [location]: [...(acc[location] || []), {
      [name]: getResidents(residents, sorted, sex),
    }],
  }), {})
);

function getAnimalMap(options) {
  if (!options) return getSpecies();
  const { includeNames, sorted, sex } = options;
  if (!includeNames) return getSpecies();
  return filterBySpecies(sorted, sex);
}

module.exports = getAnimalMap;
