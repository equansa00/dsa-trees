// Product of numbers
function product(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * product(arr.slice(1));
}

// Longest word
function longest(words) {
    if (words.length === 1) return words[0].length;
    return Math.max(words[0].length, longest(words.slice(1)));
}

// Every other character
function everyOther(str, index = 0) {
    if (index >= str.length) return "";
    return str[index] + everyOther(str, index + 2);
}

// Check if palindrome
function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}

// Find index
function findIndex(arr, target, index = 0) {
    if (index >= arr.length) return -1;
    if (arr[index] === target) return index;
    return findIndex(arr, target, index + 1);
}

// Reverse string
function revString(str) {
    if (str === "") return "";
    return revString(str.substr(1)) + str[0];
}

// Gather strings from an object
function gatherStrings(obj) {
    let stringsArray = [];
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            stringsArray.push(obj[key]);
        } else if (typeof obj[key] === 'object') {
            stringsArray = stringsArray.concat(gatherStrings(obj[key]));
        }
    }
    return stringsArray;
}

module.exports = { product, longest, everyOther, isPalindrome, findIndex, revString, gatherStrings };
