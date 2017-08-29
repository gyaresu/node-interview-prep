new Promise((resolve, reject) => {
  console.log('Initial')

  resolve()
})
.then(() => {
  // goes straight to .catch
  throw new Error('Something failed')

  console.log('Do this')
})
.catch(() => {
  console.log('Do that')
})
.then(() => {
  console.log('Do this whatever happened before')
})
