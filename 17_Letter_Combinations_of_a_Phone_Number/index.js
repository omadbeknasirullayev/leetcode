/**
 * @param {string} digits
 * @return {string[]}
 */

function resultFunction (mapping_letter, res, temp, digit) {
    if (digit.length == 0) {
        res.push(temp)
        return
    }

    for (let i of mapping_letter[digit[0]]) {
        let copy_array = [...digit]
        resultFunction(mapping_letter, res, temp + i, copy_array.splice(1))
    } 
}


var letterCombinations = function(digits) {
    let mapping_letter = {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'}
    let res = []
    if (digits.length == 0) return []
    if (digits.length == 1) return mapping_letter[digits].split("")

    resultFunction(mapping_letter, res, "", digits.split(""))

    return  res
};

console.log(letterCombinations("2345"))


