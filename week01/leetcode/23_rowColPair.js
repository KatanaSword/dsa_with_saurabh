let grid = [[3,2,1],[1,7,6],[2,7,7]]


var equalPairs = function(grid) {
    const n = grid.length
    const rowMap = new Map()

    for(let i = 0; i < n; i++){
      const rowStr = grid[i].join(',')
      rowMap.set(rowStr, (rowMap.get(rowStr) || 0) + 1)
    }

    let count = 0

    for(let j = 0; j < n; j++){
      let colArr = []
      for(let i = 0; i < n; i++){
        colArr.push(grid[i][j])
      }
      const colStr = colArr.join(',')
      if (rowMap.has(colStr)) {
        count += rowMap.get(colStr)
      }
    }

    return count
};