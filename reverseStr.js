// PROMPT: Reverse a string of integers and symbols.
// Note: Numbers must be retained as is. 
// For example, the string 1+23*3-220 => 220-3*23+1

const reverseStr = (str) => {
  let reversedStr = []
  // create two seperate arrays for numbers and symbols
  let nums = str.match(/[0-9]+/gi).reverse()
  let symbols = str.match(/\W/gi).reverse()

  while (nums.length || symbols.length) {
    // add numbers and symbols in reverse order to new array
    reversedStr.push(nums[0])
    nums.splice(0, 1)
    // console.log(nums, 'nums')
    reversedStr.push(symbols[0])
    symbols.splice(0, 1)
    // console.log(symbols, 'symbols')
  }

  return reversedStr.join('')
}
let s = '1+23*3-220'
console.log('end', reverseStr(s))
