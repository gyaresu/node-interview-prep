// let dragon = (name, size, element) =>
//   name + ' is a ' +
//   size + 'dragon that breathes ' +
//   element + '!'

// console.log(dragon('fluffykins', 'tiny', 'lightning'))

let dragon =
name =>
  size =>
    element =>
      `${name} is a ${size} dragon that breathes ${element}!`

// console.log(dragon('fluffykins')('tiny')('fire'))
let fluff = dragon('Fluffy')
let tinyDragon = fluff('tiny')
// let ele = tinyDragon('mud')

console.log(tinyDragon('mud'))
