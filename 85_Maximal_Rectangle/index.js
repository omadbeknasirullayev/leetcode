
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (!matrix.length || !matrix[0].length) return 0;

  let max = 0;
  let heights = new Array(matrix[0].length).fill(0);

  for (let row of matrix) {
    for (let j = 0; j < row.length; j++) {
      heights[j] = row[j] === '1' ? heights[j] + 1 : 0;
    }

    max = Math.max(max, largeRectangle(heights));
  }

  return max;
}


function largeRectangle(heights) {
  let stack = [], max = 0;
  heights.push(0); 

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      let height = heights[stack.pop()];
      let width = stack.length ? i - stack[stack.length - 1] - 1 : i;
      max = Math.max(max, height * width);
    }
    stack.push(i);
  }

  return max;
}
