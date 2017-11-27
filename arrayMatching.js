// PROMPT: Have the function ArrayMatching(strArr) read the array of strings stored in strArr
// which will contain only two elements, both of which will represent an array of positive integers.
// For example: if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], then both elements in the input represent
// two integer arrays, and your goal for this challenge is to add the elements in corresponding locations
// from both arrays. For the example input, your program should do the following additions:
// [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4, 13, 17]. Your program should
// finally return this resulting array in a string format with each element separated by a hyphen: 6-4-13-17.

// If the two arrays do not have the same amount of elements, then simply append the remaining elements onto the new array (example shown below). Both arrays will be in the format: [e1, e2, e3, ...] where at least one element will exist in each array.

const arrayMatching = (strArr) => {
  let results = []
  let arrOne = strArr[0].match(/\d+/g)
  let arrTwo = strArr[1].match(/\d+/g)
  let longestArr = Math.max(arrOne.length, arrTwo.length)

  for (let i = 0; i < longestArr; i++) {
    results.push(parseInt(arrOne[i] || 0) + parseInt(arrTwo[i] || 0))
  }

  return results.join('-')
}

console.log(arrayMatching(['[1, 2, 5, 6]', '[5, 2, 8, 11]']))
console.log(arrayMatching(['[1, 2, 5, 6, 6]', '[5, 2, 8, 11]'])) //[0] is longer
