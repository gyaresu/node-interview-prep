function mutation (arr) {
  var result = arr[1].split('').every(function (each) {
    return arr[0].split('').some(function (element, index, array) {
      if (element.toLowerCase() === each.toLowerCase()) {
      }
      return element.toLowerCase() === each.toLowerCase()
    })
  })
  return result
}

mutation(['hello', 'hey'])
