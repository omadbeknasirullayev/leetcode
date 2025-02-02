/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const obj = {
    1: 'I',
    4: 'IV',
    5: 'V',
    6: 'IV',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M'
  }

  let roman = ""
  let remainder = 0
  let divider = 10
  let b = 0

  while (num) {
    remainder = num % divider
    if (remainder) {
      b = 0
      num = parseInt(num - remainder)
      if (remainder && obj.hasOwnProperty(remainder)) {
        roman = `${obj[remainder]}` + roman
      } else if (remainder) {
        let n = 0;
        let numRoman = 0
        switch (true) {
          case (remainder > 1 && remainder < 4):
            n = remainder
            numRoman = 1
            break
          case (remainder > 10 && remainder < 31):
            n = parseInt(remainder / 10)
            numRoman = 10
            break
          case (remainder > 100 && remainder < 400):
            n = parseInt(remainder / 100)
            numRoman = 100
            break
          case (remainder > 1000 && remainder < 4000):
            n = parseInt(remainder / 1000)
            numRoman = 1000
            break
        }

        while (n--) {
          roman = `${obj[numRoman]}` + roman
        }
      }
    } else {
      b = 1
    }

    if (b) {
      divider *= 10
    } else {
      divider = 10
    }


  }

  return roman

};

console.log(intToRoman(3749));