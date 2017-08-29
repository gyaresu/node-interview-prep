
let c = require('./stream-scope')
let cStream = c()
let fs = require('fs')

let stream = fs.createReadStream(__dirname + '/stream-file.json')
stream.pipe(cStream).pipe(process.stdout)
