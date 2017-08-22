var Direction = (function () {
  var _direction = 'forward'
  var _privateChangeDirection = function (d) {
    console.log(`Current: ${_direction}`)
    _direction = d
    console.log(`Changed: ${_direction}`)
  }

  return {
    setDirection: _privateChangeDirection
  }
})()

// console.log(Direction._direction)
// Direction._privateChangeDirection('cheeseburger') // not a function
console.log(Direction._direction) // undefined
Direction.setDirection('hamburger') // Current: forward, Changed: hamburger
console.log(Direction._direction) // undefined
