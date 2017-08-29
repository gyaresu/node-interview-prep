let failureCallback = (err) => {
  console.log(err)
}

let doSomething = (num) => num * 5 // return 10
let doSomethingElse = (num) => num + 2 // 10 + 2 = 12
let doThirdThing = (num) => num / 3 // 12 / 3 = 4

async function foo (num) {
  try {
    let result = await doSomething(num) // start num is 2
    let newResult = await doSomethingElse(result)
    let finalResult = await doThirdThing(newResult)
    console.log(`Got the final result: ${finalResult}`) // result = 4
  } catch (error) {
    failureCallback(error)
  }
}

foo(2)
