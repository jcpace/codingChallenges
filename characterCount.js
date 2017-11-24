// PROMPT:
// Write a function that takes an array of numbers and letters, filters the array for numbers only,
// and returns the total number of characters in the array.

// Test Cases:

// characterCount([1, 'a', 'b', 11, 12]) //=> 5
// characterCount(['c', 3, 72, 25, 99, 'i']) => 7
// characterCount([]) => null

const characterCount = (arr) => {
  if (arr.length) {
    return arr.join().match(/\d/gi).length
  }
  return null
}

console.log(characterCount([1, 'a', 'b', 11, 12]))
console.log(characterCount(['c', 3, 72, 25, 99, 'i']))
console.log(characterCount([]))

