// PROMPT: Have the function simpleAdd(num) add up all the numbers from 1 to num.
// For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10.
// For the test cases, the parameter num will be any number from 1 to 1000.

const simpleAdd = (num) => {
  let n = 0
  for (let i = 0; i <= num; i++) {
    n += i
  }
  return n
}

console.log(simpleAdd(4))
console.log(simpleAdd(1))
console.log(simpleAdd(1000))
