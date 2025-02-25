/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
  let oddCount = 0,
    evenCount = 1;
  let sum = 0,
    res = 0,
    MOD = 1e9 + 7;

  for (let num of arr) {
    sum += num;
    if (sum % 2 === 0) {
      res = (res + oddCount) % MOD;
      evenCount++;
    } else {
      res = (res + evenCount) % MOD;
      oddCount++;
    }
  }

  return res;
};

arr = [3, 6, 2]
console.log(numOfSubarrays(arr));
