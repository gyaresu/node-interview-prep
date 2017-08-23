class ClassPerson {
  constructor (name) {
    this.name = name
  }

  static iAmAClass () {
    return true
  }

  greet () {
    return `Hi, ${this.name}`
  }
}

const person_b = new ClassPerson('World')

ClassPerson.prototype.greet = function () {
  return `Hello, ${this.name}`
}

function PrototypePerson (name) {
  this.name = name
}

PrototypePerson.iAmAClass = function () {
  return false
}

// PrototypePerson.prototype = {
//   foo: 'bar'
// }

// PrototypePerson.prototype = Object.create(ClassPerson.prototype)

PrototypePerson.prototype.greet = function () {
  return `Hello, ${this.name}`
}

// function FactoryPerson(name) {
//   return {
//     greet: function() {
//       return `Hello, ${name}`
//     }
//   }
// }

const person_a = new PrototypePerson('World')
// const person_c = FactoryPerson('World')

console.log({
  person_a: person_a.greet(),
  person_b: person_b.greet()
})

