// constructor function is used with the `new` keyword which
//  - creates a new object
//  - set `this` to that object
//  - return that object

// Use factory functions instead of classes.

class Dog {
  constructor () {
    this.sound = 'woof'
  }
  talk () {
    console.log(this.sound)
  }
}

const sniffles = new Dog()
sniffles.talk()

// doesn't work
// $('button.myButton')
//   .click(sniffles.talk)

// works
// $('button.myButton')
//   .click( _ => sniffles.talk)

