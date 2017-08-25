// const  {
//   init: function (obj) {
//     this.say = obj.phrase
//   }
// }

// var bob = new Person('wooble') // new

// bob.init({ 'phrase': 'I like chips!'})

// console.log(bob)

function personFn (name, age) {
  let personObj = {}
  personObj.name = name
  personObj.age = age

  return personObj
}
let bob = personFn('alex', 42)
console.log(bob, typeof bob)

function PersonConstructor (name, age) {
  this.name = name
  this.age = age
}

let alex = new PersonConstructor('Alex', 30)
console.log(alex, typeof alex)
