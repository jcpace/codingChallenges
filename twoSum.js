// PROMPT: Given an array of integers, determine if any two numbers (excluding the first element) in the array can sum up to the first element in the array.
// Return all pairs, with the numbers separated by a comma, in the order the first number appears in the array.
// Pairs should be separated by a space.
// If there are no two numbers that sum to the first element in the array, return -1

const twoSum2 = (arr) => {
  let sums = []

  // check each element in array
  for (var i = 0; i < arr.length; i++) {
    // check each other element in the array
    for (var j = i + 1; j < arr.length; j++) {
      // determine if these two elements sum to target (arr[0])
      if (arr[i] + arr[j] === arr[0]) {
        sums.push([arr[i], arr[j]])
      }
    }
  }

  return sums.length === 0 ? -1 : sums.join(' ')
}

console.log(twoSum2([7, 3, 5, 2, -4, 8, 11]))
