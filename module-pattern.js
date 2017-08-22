var Direction = (function () {
  var _direction = 'forward'
  var changeDirection = function (d) {
    _direction = d
  }
  console.log(`Original: ${_direction}`)

  // The return is an object which has access to _direction
  // But only from within the setDirection method
  return {
    setDirection: function (d) {
      console.log(`before change: ${_direction}`)
      changeDirection(d)
      console.log(`Changed: ${_direction}`)
    }
  }
})()

Direction.setDirection('backward')
console.log(`From outside the direction is : ${JSON.stringify(Direction._direction, null, 2)}`)
Direction.setDirection('downwards')
console.log(`From outside the direction is : ${JSON.stringify(Direction._direction, null, 2)}`)
Direction.setDirection('upwards')
