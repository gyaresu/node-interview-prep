process.stdin.on('readable', () => {
  let buf = process.stdin.read(9) // .read(n-bytes)
  // https://nodejs.org/api/console.html#console_console_dir_obj_options
  console.dir(buf)
})

process.stdin.on('end', () => {
  console.log('That\'s all folks!')
})

// λ (echo abc) | node stream-consume.js
// null
// Buffer [ 97, 98, 99, 10 ]
// That's all folks!
