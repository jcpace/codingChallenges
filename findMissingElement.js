// Prompt:
// Given an array of unsorted integers from 1 to 10, return the one number missing.
let arr = [3, 7, 4, 9, 10, 2, 5, 1, 8]
const findMissing = (arr) => {
  let sortedArr = arr.sort((a, b) => {
    return b - a
  })

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] - sortedArr[i + 1] !== 1) {
      return sortedArr[i] - 1
    }
  }
}

console.log(findMissing(arr))
