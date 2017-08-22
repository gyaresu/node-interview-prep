function Rectangle (_length, _breadth) { // these arguments end up being private
  this.getDimensions = function () {
    return { length: _length, breadth: _breadth }
  }

  this.setDimension = function (len, bred) {
    _length = len
    _breadth = bred
  }
}

// Rectangle { getDimensions: [Function], setDimension: [Function] }
