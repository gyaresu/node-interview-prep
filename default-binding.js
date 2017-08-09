function foo() {
  console.log(this.a)
}

var a = 2

var x = foo() // 2
