function isStrictlyPalindromic(n: number): boolean {
    for (let base = 2; base < n; base++) {
        const numberInBase = n.toString(base);
        if (!isPalindrome(numberInBase)) {
            return false;
        }
    }

    return true;
};

function isPalindrome(str: string): boolean {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}