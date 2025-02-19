/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  let result = [];
  let chars = ["a", "b", "c"];

  function backtrack(current) {
    if (current.length === n) {
      result.push(current);
      return;
    }
    for (let char of chars) {
      if (current.length === 0 || current[current.length - 1] !== char) {
        backtrack(current + char);
      }
    }
  }

  backtrack("");

  return result.length >= k ? result[k - 1] : "";
};

console.log(getHappyString(1, 3));
console.log(getHappyString(1, 4));
