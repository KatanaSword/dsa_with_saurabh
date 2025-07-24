/*
Given two nodes (start and dest) in a directed acyclic graph (DAG), return true if there is a directed path from start to dest, otherwise return false.

Example 1:

Input: start = 1, dest = 3
Output: true
Explanation: There is a directed path 1 -> 2 -> 3.
Example 2:

Input: start = 1, dest = 4
Output: false
Explanation: There is no path from 1 to 4.
*/

// Method 1
function hasPathDFS(graph, start, dest) {
  const stack = [start];
  const visited = new Set();

  while (stack.length > 0) {
    const node = stack.pop();
    if (node === dest) {
      return true;
    }

    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbour of graph[node]) {
        stack.push(neighbour);
      }
    }
  }
  return false;
}

// Method 2
function hasPathBFS(graph, start, dest) {
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    const node = queue.shift();
    if (node === dest) {
      return true;
    }

    for (const neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push(queue);
      }
    }
  }
  return false;
}

// Method 3
function hasPathRec(graph, start, dest) {
  if (start === dest) {
    return true;
  }

  if (visited.has(start)) {
    return false;
  }
  visited.add(start);

  for (const neighbour of graph[start]) {
    if (hasPathRec(graph, neighbour, dest) === true) {
      return true;
    }
  }
  return false;
}
