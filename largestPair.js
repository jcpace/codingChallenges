// PROMPT: Have the function largestPair(num) take the num parameter being passed and determine
// the largest double digit number within the whole number. For example: if num is 4759472
// then your program should return 94 because that is the largest double digit number.
// The input will always contain at least two positive digits.

const largestPair = (num) => {
  let numStr = String(num)
  let maxNum = Number(numStr[0] + numStr[1])

  for (let i = 1; i < numStr.length - 1; i++) {
    let currPair = Number(numStr[i] + numStr[i + 1])

    if (currPair > maxNum) {
      maxNum = currPair
    }
  }
  return `The largest number combination is ${maxNum}`
}

console.log(largestPair(4759472))
console.log(largestPair(22322))
console.log(largestPair(46))
console.log(largestPair(464))
