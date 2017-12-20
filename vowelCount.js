// PROMPT: Have the function vowelCount(str) take the str string parameter being passed
// and return the number of vowels the string contains (ie. "All cows eat grass and moo" would return 8).
// Do not count y as a vowel for this challenge.

const vowelCount = (str) => {
  let vowels = str.match(/[a|e|i|o|u]/gi)
  if (vowels === null) {
    return 0
  } else {
    return vowels.length
  }
}

console.log(vowelCount('All cows eat grass and moo'))
console.log(vowelCount('nnnnnnnnn'))
console.log(vowelCount('w000'))
console.log(vowelCount('AEUOee'))
