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

console.log(
  JSON.stringify(zombie('bob').run()),
  JSON.stringify(zombie('bob').stumble()),
  JSON.stringify(zombie('bob').brains()),
  JSON.stringify(zombie('bob'))
)
