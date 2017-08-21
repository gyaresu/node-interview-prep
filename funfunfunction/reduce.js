// map, filter, reject, find -> specific list transformation
// reduce can express any list transformation

var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]

// return wants an object

var total = orders.reduce((sum, val) => {
  // console.log(sum, val.amount)
  return sum + val.amount
}, 0)

console.log(`\nTotal is ${total}`)

// λ node reduce.js
// 0 250
// 250 400
// 650 100
// 750 325
//
// Total is 1075
