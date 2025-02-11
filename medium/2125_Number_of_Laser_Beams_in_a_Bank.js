/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {

  let beams = 0
  let left = 0
  let right = 1
  while (right < bank.length) {
    let firstBeams = bank[left].replace(/0/gi, '').length
    let lastbeams = bank[right].replace(/0/gi, '').length

    if (lastbeams) {
      beams += firstBeams * lastbeams
      left = right++
    } else {
      right++
    }
  }

  return beams
};

bank = ["011001", "000000", "000000", "000000"];

console.log(numberOfBeams(bank));
