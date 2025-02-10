/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (!height.length) return 0; 

  let left = 0, right = height.length - 1;
  let leftMax = height[left], rightMax = height[right];
  let result = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      result += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      result += rightMax - height[right];
      right--;
    }
  }

  return result;
};

height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

console.log(trap(height));