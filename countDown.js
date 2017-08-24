// let countDown = (arg) => {

// }
function countDown (args) {
  if (args >= 0) {
    console.log(args)
    return countDown(args - 1)
  }
}

countDown(17886)
