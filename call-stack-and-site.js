function baz() {
  // call-stack is baz so in the global scope
  console.log("baz")
  bar() // <-- call-site for `bar`
}

function bar() {
  // call-stack is : `baz` -> `bar`
  // call-site is in `baz`
  
  console.log("bar")
  foo() // <-- call-site for `foo`
}

function foo() {
  debugger
  // call-stack is : `baz` -> `bar` -> `foo`
  // call-site is in `bar`
  
  console.log("foo")
}

baz() // <--call-site for `baz`
