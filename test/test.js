var assert = require('assert')
var obj = {a:"b"}

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4))
    })
  })
})

describe('Object', function () {
  describe('#toString()', function() {
    it('should be a string', function() {
      assert.equal('b', obj.a.toString()) 
    })
  })
})
