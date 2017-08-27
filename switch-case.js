var a = 100
var b = 50
switch (true) {
  default: // default doesn't need to be at the end
    console.log(1)
    break
  case isNaN(a) || isNaN(b):
    console.log('NaNNaN')
    break
  case a === b:
    console.log(0)
    break
  case a < b:
    console.log(-1)
    break
}
