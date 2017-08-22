var o = { p: 'foo' };
(function (n) {
  n = { x: 'bar' }
  console.log(n)
})(o)
console.log(o)
