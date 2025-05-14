function shortestPath(edges, start, dest) {
  const graph = createGraph(edges);

  const queue = [[start, 0]];
  const visited = new Set([start]);

  while (queue.length > 0) {
    const [node, distance] = queue.shift();

    if (node === dest) {
      return distance;
    }

    // Proccess the child
    for (const neighbour of graph[node]) {
      if (!visited.has(node)) {
        visited.add(neighbour);
        queue.push([neighbour, distance + 1]);
      }
    }
  }
}

function createGraph(edges) {
  const graph = {};

  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) {
      graph[a] = [];
    }

    if (!(b in graph)) {
      graph[b] = [];
    }

    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

const edges = [
  [a, b],
  [b, c],
  [c, d],
];
