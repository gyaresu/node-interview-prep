let _ = require('highland')
let fs = require('fs')

// converting to highland streams
_([1, 2, 3, 4]).toArray(function (xs) {
  console.log(xs) // [1, 2, 3, 4]
})

// mapping over a stream
_([1, 2, 3, 4]).map(x => {
  return x * 2
}).toArray(xs => {
  console.log(xs) // [ 2, 4, 6, 8 ]
})

let test = _([1, 2, 3, 4])
console.log(typeof test) // object
console.log(JSON.stringify(test)) // {"domain":null,"_events":{},"_eventsCount":2,"__HighlandStream__":true,"id":"971094","paused":true,"_incoming":[1,2,3,4,{}],"_outgoing":[],"_consumers":[],"_observers":[],"_destructors":[],"_send_events":false,"_nil_pushed":false,"_delegate":null,"_is_observer":false,"_in_consume_cb":false,"_repeat_resume":false,"_consume_waiting_for_next":false,"source":null,"writable":true}

// reading files in parallel
let readFile = _.wrapCallback(fs.readFile)
let filenames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt']
let data = _(filenames) // creates a stream from an array of filenames
  .map(readFile) // maps each filename into a Highland stream that reads from that file
  .parallel(4) // reads from 4 files at once and merges the results in order
  .each(fileContent => { // consumes the data
    console.log(fileContent.toString()) // file content is a buffer
  })

