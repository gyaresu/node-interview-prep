let Readable = require('stream').Readable
let rs = Readable()

let c = 97
rs._read = () => {
  rs.push(String.fromCharCode(c++)) // c++ gives 'a' first before being incremented to 98 ('b')
  if (c > 'z'.charCodeAt(0)) { // so when c === 123 ('{' is after 'z') then, 
    // Questoin: why does this work with or without the return ?
    return rs.push(null) // push null to the stream
  }
}

rs.pipe(process.stdout)
