module.exports = (word) => {
  console.log(typeof word)
  if (typeof word !== 'string') return new Error('not a string')
  let result = []

  for (let value of word) {
    result.push(String.fromCharCode(value.charCodeAt(0) + 16))
  }
  return result.join('')
}
