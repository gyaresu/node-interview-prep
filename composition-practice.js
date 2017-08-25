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

console.log(
  JSON.stringify(z), // {}
  JSON.stringify(zombie('bob').run()), // "bob"
  JSON.stringify(zombie('bob').stumble()), // 90
  JSON.stringify(zombie('bob').brains()), // 100
  JSON.stringify(zombie('bob')) // {}
)
