// just an object with a method property
const parent = {
  hello () {
    return `Hello, my name is ${this.name}`
  }
}

// a function which returns a new object with assigned properties from parent
const child = (fish) => { // arg is string
  let c = Object.create(parent)
  let assigned = Object.assign(c, {fish}) // ES6 syntax magic for creating object key/val(?) {name: 'bob'}
  console.log(assigned) // { name: 'bob' }
  return assigned
}

console.log(child) // child function
const bob = child('bob') // calling child with name argument
console.log(`${JSON.stringify(bob)}`)
const bobSays = bob.hello() // calling hello method which was assigned from parent onto child
console.log(bobSays) // logging the result of calling hello
