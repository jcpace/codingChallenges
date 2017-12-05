// PROMPT:
// Given an array of unsorted integers from 1 to 5, return the one number missing.
let arr = [1,2,3,5]

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

console.log(findMissingInt(arr), 'findMissingInt')

const findMissing2 = (arr) => {
  // add all integers in given array for sum
  let sum = arr.reduce((a, b) => {
    return (a + b)
  })
  console.log(sum, 'sum')
  // consecutive number sum formula
  let totalSum = (arr.length + 1 * arr.length + 2) / 2
  console.log(totalSum, 'totalsum')
  return  sum - totalSum
}


console.log(findMissing2(arr, 'findMissinng2'))
