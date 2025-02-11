/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let str = ""

    for (let i of address) {
        if (i == '.') str += `[${i}]`
        else str += i
    }
    return str
};

let address = "255.100.50.0"

console.log(defangIPaddr(address));