/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  let decodeArr = [first]

  for (let i of encoded) {
    first = i ^ first
    decodeArr.push(first)
  }

  return decodeArr
};


console.log(decode([1, 2, 3], 1));
console.log(decode([6, 2, 7, 3], 4));
console.log(decode([6], 1));