var o = { p: 'foo' };
(function (n) {
  n = { x: 'bar' } // { x: 'bar' } 
  console.log(n)
})(o) // IIFE
console.log(o) // { p: 'foo' }
