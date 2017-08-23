function talk () {
  console.log(this) // { talk: [Function: talk] } /// { wooble: true, sound: 'meow!' }
  console.log(this.sound) // undefined /// meow!
}
let animal = {
  talk
}
let cat = {
  wooble: true,
  sound: 'meow!',
  colour: 'brown',
  // talk: function () {
  //   console.log(this.colour) // brown
  //   console.log(this.wooble) // true
  // }
  talk: () => {
    console.log(this.colour) // undefined
  }
}
Object.setPrototypeOf(cat, animal)
// animal.talk()
cat.talk() // is not a function without setting prototype

