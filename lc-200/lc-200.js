var checkAdjCells = function (grid, x, y) {
  if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length) {
    if (grid[x][y] === '1') {
      grid[x][y] = 0;
      checkAdjCells(grid, x + 1, y);
      checkAdjCells(grid, x - 1, y);
      checkAdjCells(grid, x, y + 1);
      checkAdjCells(grid, x, y - 1);
    }
  }
  return;
};

var numIslands = function (grid) {
  let islands = 0;
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      if (grid[x][y] === '1') {
        islands++;
        checkAdjCells(grid, x, y);
      }
    }
  }
  return islands;
};

var input = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

console.log(numIslands(input));
