// PROMPT: Have the function letterCapitalize(str) take the str parameter being passed 
// and capitalize the first letter of each word. Words will be separated by only one space. 

const letterCapitalize = (str) => {
  return str.replace(/\b[a-z]/g, (letter) => {
    return letter.toUpperCase()
  })
}

console.log(letterCapitalize('this is my sentence'))