let categories = [
  { id: 'animals', 'parent': null },
  { id: 'mammals', 'parent': 'animals' },
  { id: 'cats', 'parent': 'mammals' },
  { id: 'dogs', 'parent': 'mammals' },
  { id: 'chihuahua', 'parent': 'dogs' },
  { id: 'labrador', 'parent': 'dogs' },
  { id: 'persian', 'parent': 'cats' },
  { id: 'siamese', 'parent': 'cats' }
]

let makeTree = (categories, parent) => {
  // each node is created every time makeTree is called
  let node = {}
  // c is each object in the category array
  categories
    .filter(c => c.parent === parent)
    .forEach(c =>
      node[c.id] = makeTree(categories, c.id))
  return node
}

let result = makeTree(categories, null)
console.log(JSON.stringify(result, null, 2))

// First filter the `parent` which is `null`

// Then pass object the matching object(s) to `forEach`:
// { id: 'animals', 'parent': null }

// node['animals'] = makeTree(categories, 'animals')

// which then filters the categories object on instances
// where caches.parent === 'animals'

// each node gets attached to its parent

// {
//   "animals": {
//     "mammals": {
//       "cats": {
//         "persian": {},
//         "siamese": {}
//       },
//       "dogs": {
//         "chihuahua": {},
//         "labrador": {}
//       }
//     }
//   }
// }
