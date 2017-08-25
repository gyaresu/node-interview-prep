const barker = (state) => ({
  bark: () => console.log('Woof, I am ' + state.name)
})

const driver = (state) => ({
  drive: () => state.position = state.position + state.speed
})

let karo = {name: 'karo'}
let pos = {position: 10, speed: 2}

barker(karo).bark()

let location = driver(pos).drive()

console.log(location)
