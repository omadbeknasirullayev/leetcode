/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let res = 0
    let len = nums.length
    let max = Math.max(...nums)
    let max_ind = [-1]

    for (let i = 0; i < len; i++) {
        if (nums[i] == max) max_ind.push(i) 
    }

    let indsize = max_ind.length;

    for (let i = 1; i <= indsize - k; i++) {
        let l = max_ind[i] - max_ind[i - 1] - 1;
        let r = len - 1 - max_ind[i + k - 1];
        res += (l + 1) * (r + 1);
    }

    return res
};

nums = [1,3,2,3,3], k = 2

console.log(countSubarrays(nums, k));