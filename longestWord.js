// Prompt: Have the function longestWord(sen) take the sen parameter being passed and return the largest word
// in the string. If there are two or more words that are the same length, return the first word from the string
// with that length. Ignore punctuation and assume sen will not be empty.

const longestWord = (sen) => {
  let longest = sen.replace(/'/i, '')
    .match(/[A-z]+/gi)
    .reduce(function (a, b) {
      if (b.length > a.length) {
        return b
      }
      else {
        return a
      }
    })
  return longest
}

console.log(longestWord("This isn't my sentence."))
