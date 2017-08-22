function Rectangle (x, y) {
  this._length = x
  this._breadth = y
}

Rectangle.prototype.getDimensions = function () {
  return { length: this._length, breadth: this._breadth}
}

Rectangle.prototype.setDimensions = function (len, bred) {
  this._length = len
  this._breadth = bred
}

var r = new Rectangle(10, 20)

// console.log(r.getDimensions())
// r.setDimensions(100, 200)
// console.log(r.getDimensions())
// console.log(typeof r, typeof Rectangle)
// console.log(r)
