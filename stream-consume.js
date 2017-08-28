process.stdin.on('readable', () => {
  let buf = process.stdin.read()
  // https://nodejs.org/api/console.html#console_console_dir_obj_options
  console.dir(buf)
}))