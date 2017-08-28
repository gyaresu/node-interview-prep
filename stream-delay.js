let Readable = require('stream').Readable
let rs = Readable()

let c = 97 - 1
rs._read = () => {
  if (c >= 'z'.charCodeAt(0)) {
    return rs.push(null) // push null to the stream
  }
  setTimeout(() => {
    rs.push(String.fromCharCode(++c))
  }, 10)

}

rs.pipe(process.stdout)

process.on('exit', function () {
  console.error(`\n_read() called ${c - 97} times`);
});

// node streams-delay.js |head -c 5
// abcde
// _read() called 5 times

process.stdout.on('error', process.exit);