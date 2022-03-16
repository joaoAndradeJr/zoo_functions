/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

function animalsByIds(...ids) {
  return ids.map((id) => data.animals.find((e) => e.id === id));
}

function animalsOlderThan(animal, age) {
  const result = data.animals.filter((e) => e.name === animal)
    .map((a) => a.residents.every((e) => e.age > age));
  return result[0];
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((person) => (
    person.firstName === employeeName || person.lastName === employeeName
  ));
}

function createEmployee(personalInfo, associatedWith) {
  return {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}

function isManager(id) {
  const result = data.employees.map((e) => (
    e.managers.find((person) => person === id)
  ));
  return result.some((e) => e !== undefined);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
}

const getSubTotal = (array) => {
  if (array[0] === 'Child') return data.prices.Child * array[1];
  if (array[0] === 'Adult') return data.prices.Adult * array[1];
  return data.prices.Senior * array[1];
};

function entryCalculator(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  let total = 0;
  Object.entries(entrants).forEach((e) => {
    total += getSubTotal(e);
  });
  return total;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  Object.entries(data.prices).forEach((e) => {
    const type = e[0];
    data.prices[type] = Math.round((data.prices[type] * (1 + (percentage / 100))) * 100) / 100;
  });
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
