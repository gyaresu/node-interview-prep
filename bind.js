let dog = {
  sound: 'woof',
  talk: function () {
    console.log(this.sound)
  }
}

dog.talk() // "woof"

// the talk method is unbound from the object dog
// that's why the `this.sound` property is not available
let talkFunction = dog.talk
talkFunction() // undefined
let boundFunction = talkFunction.bind(dog)
boundFunction() // "woof"
