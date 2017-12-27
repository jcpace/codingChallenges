// PROMPT: Have the function camelCase(str) take the str parameter being passed and return it in proper camel case
// format where the first letter of each word is capitalized (excluding the first letter). The string will only
// contain letters and some combination of delimiter punctuation characters separating each word.

// Test Cases:
// Input: 'BOB loves-coding' => 'bobLovesCoding'
// Input: 'cats AND*Dogs-are Awesome" => 'catsAndDogsAreAwesome'
// Input: 'a b c d-e-f%g' => 'aBCDEFG'

const camelCase = (str) => {
  return str
  .split(/[^A-z]/)
  .map((char, index) => {
    char = char.toLowerCase()
    if (index >= 1) {
      let valArr = char.split('')
      valArr[0] = valArr[0].toUpperCase()
      return valArr.join('')
    }
    return char
  })
  .join('')
}

console.log(camelCase('cats AND*Dogs-are Awesome'))
console.log(camelCase('a b c d-e-f%g'))
console.log(camelCase('BOB loves-coding'))