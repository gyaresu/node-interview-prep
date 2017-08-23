const  {
  init: function (obj) {
    this.say = obj.phrase
  }
}

var bob = new Person('wooble') // new

bob.init({ 'phrase': 'I like chips!'})

console.log(bob)
