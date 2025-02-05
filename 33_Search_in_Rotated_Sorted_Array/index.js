/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0, right = nums.length - 1
  let min = nums.indexOf(Math.min(nums))
  let mid = min
  
  while (left < right) {
    
    if (nums[mid] == target) {
      return mid
    }
    
    if (nums[mid] < target) {
      left = mid - 1
    } else {
      right = mid + 1
    }
    mid = parseInt(left + (right - left) / 2)
  }

  return -1

  return binar(nums, left, right, target)
};

function binar(nums, left, right, target) {
  if (left > right) {
    return -1
  }

  let mid = parseInt(left + (right - left) / 2)
  if (nums[mid] == target) {
    return mid
  }

  if (nums[mid] < target) {
    return binar(nums, left, mid + 1, target)
  } else {
    return binar(nums, mid - 1, right, target)
  }
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));