// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1 (Using reverse function )
// function reverse(str) {
//    return str.split('').reverse().join('');
// }

// Solution 2 (Using for loop)
function reverse(str){
    let reversed = ''
    for(let character of str) {
        reversed = character + reversed
    }
    return reversed
}

// Solution 3 
// function reverse(str) {
//     return str.split('').reduce( (rev,char) => char + rev, '');
// }

reverse('alksl')

module.exports = reverse;