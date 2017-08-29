// writes error: Cannot read property 'push' of undefined
// https://github.com/rvagg/through2/issues/85

// TODO -> change this to function arrows and figure out why this.push ends up being `undefined`
const combiner = require('stream-combiner')
const split = require('split')
const zlib = require('zlib')
const through = require('through2')
const gzip = zlib.createGzip()

module.exports = function () {
  let current

  function write (chunk, _, next) {
    if (chunk.length === 0) return next()
    let row = JSON.parse(chunk)
    if (row.length === 0) return next()

    if (row.type === 'genre') {
      if (current) {
        this.push(JSON.stringify(current) + '\n')
      }
      current = {name: row.name, books: []}
    } else if (row.type === 'book') {
      current.books.push(row.name)
    }
    next()
  }

  function end (cb) {
    if (current) {
      this.push(JSON.stringify(current) + '\n')
    }
    cb()
  }

  let th = through(write, end)

  return combiner(
    split(),
    th
  )
}
