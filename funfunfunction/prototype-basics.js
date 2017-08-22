function talk () {
  console.log(this) // { talk: [Function: talk] } /// { sound: 'meow!' }
  console.log(this.sound) // undefined // meow!
}
let animal = {
  talk
}
let cat = {
  wooble: true,
  sound: 'meow!'
}
Object.setPrototypeOf(cat, animal)
// animal.talk()
cat.talk() // is not a function without setting prototype

