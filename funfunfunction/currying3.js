var _ = require('lodash')

let dragons = [
  { name: 'fluffykins', element: 'lightning' },
  { name: 'noomi', element: 'lightning' },
  { name: 'karo', element: 'fire' },
  { name: 'doomer', element: 'timewarp' }
]

let hasElement = _.curry((element, obj) => {
  return obj.element === element
})

let lightningDragons = dragons.filter(hasElement('lightning'))

console.log('result: ', lightningDragons)
