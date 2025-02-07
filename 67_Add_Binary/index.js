/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let forLen = 0
  if (a.length > b.length) {
    forLen = a.length
  } else {
    forLen = b.length
  }

  let dil = 0
  let res = ''
  let aLen = a.length - 1
  let bLen = b.length - 1

  for (let i = aLen, j = bLen, forI = 0; forI < forLen; forI++) {
    let temp = 0
    if (a[i] && b[j]) {
      temp = +a[i--] + +b[j--] + dil
    } else if (a[i]) {
      temp = dil + +a[i--]
    } else {
      temp = dil + +b[j--]
    }

    if (temp == 2) {
      res = '0' + res
      dil = 1
    } else if (temp == 3) {
      res = '1' + res
      dil = 1
    } else {
      res = `${temp}` + res
      dil = 0
    }
    // console.log(temp, dil);
  }

  if (dil) res = `${dil}` + res

  return res
};

console.log(addBinary("1111", "1111"));