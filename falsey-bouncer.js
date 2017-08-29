function bouncer (arr) {
  return arr.filter(function (value) {
    if (value) {
      return value
    }
  })
}

console.log(bouncer([7, 'ate', '', false, 9]))
