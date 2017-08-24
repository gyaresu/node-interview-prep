// let countDown = (arg) => {

// }
function countDown (args) {
  if (args >= 0) {
    console.log(args)
    return countDown(args - 1)
  }
}

// 17885 is the largest number before hitting
// "RangeError: Maximum call stack size exceeded"
countDown(17886)
