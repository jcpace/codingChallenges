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

const findMissingInt = (arr) => {
  // assuming the array is sorted
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] - arr[i + 1] !== 1) {
      return arr[i] - 1
    }
  }
}

console.log(findMissingInt([1,2,3,4,6,7]))

const findMissing2 = (arr) => {
  let sortedArr = arr.sort((a, b) => {
    return b - a
  })
  let first = sortedArr[0], last = sortedArr[sortedArr.length - 1]


}

console.log(findMissing(arr))
