let dog = (name) => {
  const woof = 'woof!'
  const thing = 42
  let count = {
    age: 0,
    bark: 0
  }

  return {
    age: function age (dogAge) {
      count.age++,
       // closure keeps thing as a private property to dog
      console.log(`This dog, ${name}'s age is ${dogAge || thing}\n\`count.age\` called ${count.age === 1 ? 'first time.' : count.age + ' times.'}\n\n`)
    },
    bark: function bark (sound) {
      count.bark++,
      console.log(`This dog ${name || 'without a name' } says ${sound || woof}\nbark called: ${count.bark} times.`)
    }
  }
}

let bob = dog('Bob')
bob.age(2)
bob.age()
bob.age(20)
bob.bark('fnar!')
bob.bark()
bob.bark('wooble')
bob.bark()
