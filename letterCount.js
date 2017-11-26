// PROMPT: Have the function letterCount(str) take the str parameter being passed
// and return the first word with the greatest number of repeated letters.
// All letters will be uncapitalized.
// For example: "Today, is the greatest day ever!" should return greatest
// because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's.
// If there are no words with repeating letters return -1. Words will be separated by spaces.

const letterCount = (str) => {
  let table = {}

  let arr = str.split(' ')

  for (let i = 0; i < arr.length; i++) {
    let currWord = arr[i]
    table[currWord] = {}
    table[currWord]['highest'] = 0
    for (let i = 0; i < currWord.length; i++) {
      let char = currWord[i]
      if (table[currWord][char]) {
        table[currWord][char]++
      } else {
        table[currWord][char] = 1
      }
      if (table[currWord][char] > table[currWord]['highest']) {
        table[currWord]['highest'] = table[currWord][char]
      }
    }
  }
  let result = {word: null, count: 1}

  for (let prop in table) {
    if (table[prop]['highest'] > result['count']) {
      result['count'] = table[prop]['highest']
      result['word'] = prop
    }
  }
  return result['count'] === 1 ? -1 : result['word']
}

console.log(letterCount('this is my sentence'))

// split str into words array
// loop array, declare variable for current word
// input currWord into table with value of {}
// within each currWord, give key of highest and value of 0
// 2nd loop goes thru each currWord and checks to see if element exists, if yes, increment, if no, give value of 1
// check if current element is greater than highest, if so declare highest as element's count
// delcare results obj with count and word
// loop table and check if table highest is greater than results count. if so declare count as highest and word as prop
// return results obj after checking if greater than 1, if not return -1
