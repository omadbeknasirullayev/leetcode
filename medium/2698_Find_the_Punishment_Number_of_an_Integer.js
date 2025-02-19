/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
    let totalSum = 0;

    for (let i = 1; i <= n; i++) {
      let squareStr = (i * i).toString();
      if (canBePartitioned(squareStr, i)) {
        totalSum += i * i;
      }
    }

    return totalSum;
};

function canBePartitioned(numStr, target, index = 0, currentSum = 0) {
  if (index === numStr.length) {
    return currentSum === target;
  }

  let sum = 0;
  for (let i = index; i < numStr.length; i++) {
    sum = sum * 10 + Number(numStr[i]);
    if (canBePartitioned(numStr, target, i + 1, currentSum + sum)) {
      return true;
    }
  }
  return false;
}

console.log(punishmentNumber(10));
