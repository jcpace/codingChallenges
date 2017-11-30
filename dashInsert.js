// PROMPT: Have the function dashInsert(str) insert dashes ('-') between each two odd numbers in str.
// For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

const dashInsert = (str) => {
  let numStr = str.split('')

  for (let i = 0; i < numStr.length - 1; i++) {
    if (numStr[i] % 2 !== 0 && numStr[i + 1] % 2 !== 0) {
      numStr[i] += '-'
    }
  }
  return numStr.join('')
}

console.log(dashInsert('454793'))
console.log(dashInsert('4574793'))
console.log(dashInsert('3345479330'))
