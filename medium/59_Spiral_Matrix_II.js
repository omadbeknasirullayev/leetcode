/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let start = 0, end = n
  let arr = []
  let count = 1
  for (let i = 0; i < n; i++) arr.push([])

  while (count <= n * n) {
    for (let i = start, j = start; j < end; j++) {
      arr[i][j] = count++
    }

    for (let i = start + 1, j = end - 1; i < end; i++) {
      arr[i][j] = count++
    }

    for (let i = end - 1, j = end - 2; j > start; j--) {
      arr[i][j] = count++
    }

    for (let i = end - 1, j = start; i > start; i--) {
      arr[i][j] = count++
    }
    start++, end--
  }

  return arr
};

console.log(generateMatrix(5));