// Prompt: Have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's,
// otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers.
// For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.

const equalXO = (str) => {
  return str.match(/x/gi).length === str.match(/o/gi).length
}

console.log(equalXO('xoxoxoxoxo'))

// Prompt: Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. 
// Words will be separated by only one space.

const letterCapitalize = (str) => {
  return str.replace(/\b[a-z]/g, (letter) => {
    return letter.toUpperCase()
  })
}
console.log(letterCapitalize('this is a sentence that needs to be capitalized'))
