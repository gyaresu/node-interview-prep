var o = { p: 'foo' };
(function (a) {
  a.p = 'bar'
})(o)
console.log(o)
