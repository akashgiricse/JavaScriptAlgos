// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1
// function palindrome(str) {
//     let reversed = '';
//     for (let c of str) {
//         reversed = c + reversed;
//     }
    
//     if(str === reversed){
//         return true
//     } else {
//         return false
//     }
// }

// Solution 2
// function palindrome(str){
//     const reversed = str.split('').reverse().join('')
//     return reversed === str
// }

// Soluton 3 (using every() helper function. Notice there's a double comparison)
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length -i -1];
    })
}


module.exports = palindrome;