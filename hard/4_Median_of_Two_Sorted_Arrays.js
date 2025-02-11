/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMediall_arrayortedArrays = function(nums1, nums2) {
    let a = nums2.length + nums1.length
    let i1 = 0 
    let i2 = 0
    let all_array = []
    for (let i = 0; i < a; i++){
        if(nums1[i1] <= nums2[i2] || nums2.length <= i2){
            all_array.push(nums1[i1])
            i1 = i1 + 1
        }
        else{
            all_array.push(nums2[i2])
            i2 = i2 + 1
        }
    }
    let len = all_array.length
    if((len % 2) == 0){
        return (all_array[(len / 2) - 1] + all_array[len / 2]) / 2
    }
    else{
        return (all_array[(len - 1) / 2])
    }

};

nums1 = [3], nums2 = [-2,-1]
console.log(findMediall_arrayortedArrays(nums1, nums2));

