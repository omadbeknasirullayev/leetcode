/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let start = 0;
  let iEnd = matrix.length;
  let jEnd = matrix[0].length;
  let len = matrix.length * matrix[0].length;
  let arr = [];

  while (len) {
    for (let i = start, j = start; j < jEnd && len; j++, len--) {
      arr.push(matrix[i][j]);
    }

    for (let i = start + 1, j = jEnd - 1; i < iEnd && len; i++, len--) {
      arr.push(matrix[i][j]);
    }

    for (let i = iEnd - 1, j = jEnd - 2; j > start && len; j--, len--) {
      arr.push(matrix[i][j]);
    }

    for (let i = iEnd - 1, j = start; i > start && len; i--, len--) {
      arr.push(matrix[i][j]);
    }
    start++, iEnd--, jEnd--;
  }

  return arr;
};

matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log(spiralOrder(matrix));
