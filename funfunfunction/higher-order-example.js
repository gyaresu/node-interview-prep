var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' }
]

// var dogs = []
// for (var i = 0; i < animals.length; i++) {
//   if (animals[i].species === 'dog') {
//     dogs.push(animals[i])
//   }
// }

// var filterDogs = animals.filter(function (each) {
//   return each.species === 'dog'
// })

// var getNames = function (animal) {
//   return animal.name + ' is a ' + animal.species
// }

var getNames = x => x.name + ' is a ' + x.species

var filterNames = animals.map(getNames)

// console.log('Loop:', dogs, '\nFilter: ', filterDogs)
console.log('filterNames: ', filterNames)
