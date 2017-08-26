// composition practice

const runner = (someState) => ({
  run: () => someState.name
})

const stumbler = (someState) => ({
  stumble: () => someState.speed = someState.speed - 10
})

const brainer = (someState) => ({
  brains: () => someState.position = someState.position + someState.speed
})

const zombie = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0
  }
  return Object.assign(
    {},
    runner(state),
    stumbler(state),
    brainer(state)
  )
}

let z = zombie('gareth')

console.log(z.stumble()) // 90
console.log(z.stumble()) // 80
console.log(z.stumble()) // 70
console.log(z.stumble()) // 60

console.log(
  JSON.stringify(z), // {} empty object with only private and internal state
  JSON.stringify(zombie('bob').run()), // "bob"
  JSON.stringify(zombie('bob').stumble()), // 90
  JSON.stringify(zombie('bob').brains()), // 100
  JSON.stringify(zombie('bob')) // {}
)
