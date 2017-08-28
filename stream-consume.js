process.stdin.on('readable', () => {
  let buf = process.stdin.read(9) // .read(n-bytes)
  // https://nodejs.org/api/console.html#console_console_dir_obj_options
  console.dir(buf)
})
