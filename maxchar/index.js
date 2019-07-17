// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

  const chars = {}

  for (let s of str) {
    if(!chars[s]){
      chars[s] = 1;
    } else {
      chars[s]++;
    }
  }
  console.log(chars)
  let max = 0
  let target = ''
  for (let key in chars) {
    if(chars[key] > max) {
      max = chars[key]
      target = key
    }
  }
  return target

}

module.exports = maxChar;
