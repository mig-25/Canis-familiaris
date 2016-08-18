var uniqueRandomArray = require('unique-random-array');
var dogBreedNames = require('./dogs.json');

module.exports = {
    all: dogBreedNames,
    random: uniqueRandomArray(dogBreedNames)
};