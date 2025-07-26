function countPaths(grid, row = 0, col = 0, memo = {}) {
  const pos = row + "," + col;

  if (
    row >= grid.length ||
    col >= grid[0].length ||
    grid[row][col] === "X" // X or Wall or Snake
  ) {
    return 0;
  }

  //check if you have arrived at given location
  if (row === grid.length - 1 && col === grid[0].length - 1) {
    return 1;
  }

  // return the cache result
  if (pos in memo) {
    return memo[pos];
  }

  // memo[pos] = countPaths(grid, row + 1, col, memo) + countPaths(grid, row, col + 1, memo)

  const rightPaths = countPaths(grid, row + 1, col, memo);
  const downPaths = countPaths(grid, row, col + 1, memo);

  memo[pos] = rightPaths + downPaths;

  return memo[pos];
}
