let dog = () => {
  const thing = 42
  
  return {
    age: function age (dogAge) {
      return `This dogs age is ${dogAge || thing}`
    },
    bark: function bark (sound) {
      return `This dog says ${sound}`
    }
  }
}

let bruiser = dog()
let say = bruiser.bark("meow!")
let age = bruiser.age()
let age2 = bruiser.age(10)

console.log(say,
  age,
  age2,
  bruiser.thing
)