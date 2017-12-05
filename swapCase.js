// PROMPT: Have the function swapCase(str) take the str parameter and swap the case of each character.
// For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.

const swapCase = (str) => {
  let arr = str.split('')
  return arr.map(function (char) {
    if (char === char.toLowerCase()) {
      return char.toUpperCase()
    }
    if (char === char.toUpperCase()) {
      return char.toLowerCase()
    }
  }).join('')
}

console.log(swapCase('Hello World'))
