function Graph () {
  this.vertices = []
  this.edges = []
}

Graph.prototype = {
  addVertex: function (v) {
    this.vertices.push(v)
  },
  addEdge: function (e) {
    this.edges.push(e)
  }
}

let g = new Graph()
// g is an object with own properties 'vertices' and 'edges'.
// g.[[Prototype]] is the value of Graph.prototype when new Graph() is executed.

g.addVertex(10)
g.addVertex(20)
g.addVertex(5)
g.addEdge(2)
g.addEdge(4)
g.addEdge(6)
console.log(JSON.stringify(g))

let newG = new Graph()

newG.addVertex(3)
newG.addVertex(9)
newG.addVertex(6)
newG.addEdge(2)
newG.addEdge(4)
newG.addEdge(6)

console.log(JSON.stringify(newG))
