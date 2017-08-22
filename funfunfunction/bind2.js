let dog = {
  sound: 'woof',
  talk: function () {
    console.log(this.sound)
  }
}

let button = document.getElementById('myNiceButton')

button.addEventListener(
  'click',
  // dog.talk
  dog.talk.bind(dog)
)
