function identify () {
  return this.name.toUpperCase()
}

function speak () {
  var greeting = "Hello, I'm " + identify.call(this)
  console.log(greeting)
}

var me = {
  name: 'Gareth'
}

var you = {
  name: 'Reader'
}

var us = [me, you]

// console.log(identify.call(me))

us.forEach(function (each) {
  console.log(identify.call(each))
})

