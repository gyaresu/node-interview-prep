function plus1 (value) {
  if (Array.isArray(value)) {
    var newArray = []
    for (var i = 0; i < value.length; i++) {
      newArray[i] = value[i] + 1
    }
    return newArray
  }
  return value + 1
}

console.log(plus1([3, 4])) // [4, 5]
