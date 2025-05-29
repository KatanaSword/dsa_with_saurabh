/*
Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.

*/

function maxIslandSize(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const visited = new Set();
  let largestSize = Infinity;

  function exploreSize(r, c) {
    const pos = r + "," + c;
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      grid[r][c] === "W" ||
      visited.has(pos)
    ) {
      return 0;
    }

    visited.add(pos);
    let size = 1;

    size += exploreSize(r + 1, c);
    size += exploreSize(r - 1, c);
    size += exploreSize(r, c + 1);
    size += exploreSize(r, c - 1);

    return size;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "L" && !visited.has(r + "," + c)) {
        const size = exploreSize(r, c);
        if (size > largestSize) {
          largestSize = size;
        }
      }
    }
  }
}

function minIslandSize(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const visited = new Set();
  let smallestSize = Infinity;

  function exploreSize(r, c) {
    const pos = r + "," + c;
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      grid[r][c] === "W" ||
      visited.has(pos)
    ) {
      return 0;
    }

    visited.add(pos);
    let size = 1;

    size += exploreSize(r + 1, c);
    size += exploreSize(r - 1, c);
    size += exploreSize(r, c + 1);
    size += exploreSize(r, c - 1);

    return size;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "L" && !visited.has(r + "," + c)) {
        const size = exploreSize(r, c);
        if (size < smallestSize) {
          smallestSize = size;
        }
      }
    }
  }
}
