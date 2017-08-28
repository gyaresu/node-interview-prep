var o = { p: 'foo' };
(function (a) {
  a.p = 'bar'
})(o)  // IIFE
console.log(o) // { p: 'bar' }
