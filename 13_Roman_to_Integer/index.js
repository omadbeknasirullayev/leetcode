var romanToInt = function (s) {
  const obj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let needLists = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM']

  let intNumber = 0
  for (let i = 0; i < s.length; i++) {
    if (needLists.includes(s[i] + s[i + 1])) {
      intNumber += obj[s[i + 1]] - obj[s[i]]
      i++
    } else {
      intNumber += obj[s[i]]
    }
  }

  return intNumber
};

console.log(romanToInt('MCMXCIV'));