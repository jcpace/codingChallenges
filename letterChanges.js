// PROMPT: Have the function letterChanges(str) take the str parameter being passed and modify it
// using the following algorithm. Replace every letter in the string with the letter following it
// in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string
// (a, e, i, o, u) and finally return this modified string.

const letterChanges = (str) => {
  return str.replace(/[a-z]/gi, (char) => {
    return char === 'z' || char === 'Z' ? 'a' : String.fromCharCode(char.charCodeAt() + 1)
  }).replace(/a|e|i|o|u/gi, (vowel) => {
    return vowel.toUpperCase()
  })
}
