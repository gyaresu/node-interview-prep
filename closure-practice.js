// let name = 'Gareth'

// function sayName () {
//   console.log(name)
// }

// sayName()
// name = 'Bob'
// sayName()

let sayName = (name) => {
  let greeting = 'Hi!'
  return (greet) => {
    console.log(`${greet || greeting} ${name}`)
  }
}

let greetBob = sayName('Bob')
greetBob()
greetBob('Well hello...')

