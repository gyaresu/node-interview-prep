let math = {
  factorial: function factorial (n) { // named function expression - local scope
    if (n <= 1) {
      return 1
    }
    return n * factorial(n - 1)
  }
}

let m = math.factorial(5)

console.log(m)

let foo = function () {}
console.log(foo.name) // "foo"

let foo2 = foo
console.log(foo2.name) // "foo"

let bar = function baz () {}
console.log(bar.name) // "baz"

let x = function (y) {
  return y * y
}
console.log(x(3)) // 3 * 3
