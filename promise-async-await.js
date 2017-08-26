
function delay (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function waitNTimes (n) { // async
  for (var i = 0; i < n; i++) {
    await delay(100) // await
  }
  return 'done'
}

waitNTimes(10).then(value => {
  console.log(value)
})

// ---
// Promise.race([
//   fetch('http://google.com'),
//   timeout(10000)
// ]).then(value => {
//   return writeToDatabase()
// })
// .then(value => {
//   console.log('i wrote to the database')
// }, error => {
//   return writeToDisk()
// })
// .catch(null, error => { // null is just to show what's happening here
//   console.log('bad stuff happened')
// })
//
