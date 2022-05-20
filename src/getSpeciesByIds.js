const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((speciesId) => ids.includes(speciesId.id));
}

module.exports = getSpeciesByIds;
