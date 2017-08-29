// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments.Remove all elements from the initial array that are of
// the same value as these arguments.

// function destroyer (arr) {
//   var args = Array.from(arguments)
//   var tests = args.slice(1) // [2, 3]
//   return args[0].filter(function (value) {
//     tests.forEach(function (item) {
//       value !== item
//     })
//     // console.log(args.slice(1))
//   })
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))

function destroyer (arr) {
  var args = Array.from(arguments)
  var tests = args.slice(1) // [2, 3]
  console.log(tests)
  return args[0].filter(function (each) {
    return tests.some(function (element, index, array) {
      console.log('element: ', element, 'each: ', each, 't/f', element === each)
      return element === each // !==
    })
  })
}

console.log('Answer: ', destroyer([1, 2, 3, 1, 2, 3], 2, 3))
