/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    return result(nums, k) - result(nums, k - 1);
};

function result(nums, k) {
   let count = 0;
   let left = 0;
   let freq = {};

   for (let right = 0; right < nums.length; right++) {
       if (!freq[nums[right]]) freq[nums[right]] = 0;
       if (freq[nums[right]] === 0) k--;

       freq[nums[right]]++;

       while (k < 0) {
           freq[nums[left]]--;
           if (freq[nums[left]] === 0) k++;
           left++;
       }

       count += right - left + 1;
   }

   return count;
}


// time limit

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var subarraysWithKDistinct = function(nums, k) {
//     const len = nums.length + 1
//     let count = 0
//     for (let i = k; i < len; i++) {
//         for (let j = 0; j < len - i; j++) {
//             if (new Set(nums.slice(j, i + j)).size == k) count++
//         }
//     }

//     return count
// };

nums = [1,2,1,2,3], k = 2

console.log(subarraysWithKDistinct(nums, k));
