/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
  let res = []
  let zerosCol = []
  let onesCol = []
  let zeroCol = 0, oneCol = 0;

  for (let j = 0; j < grid[0].length; j++) {
      zeroCol = 0
      oneCol = 0
    for (let i = 0; i < grid.length; i++) {
      if (grid[i][j]) oneCol++;
        else zeroCol++;
    }
    zerosCol.push(zeroCol)
    onesCol.push(oneCol)
  }
  
  for (let i = 0; i < grid.length; i++) {
    res.push([])
    let zeroRow = 0
    let oneRow = 0

    for (let item of grid[i]) {
      if (item) oneRow++;
      else zeroRow++;
    }

    for (let j = 0; j < grid[i].length; j++) {
      res[i].push(oneRow + onesCol[j] - zeroRow - zerosCol[j]);
    }
  }

  return res
};