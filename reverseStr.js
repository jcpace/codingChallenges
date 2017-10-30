// Reverse the string 1+23*3-220. Note: Numbers must be retained as is. Expected output: 220-3*23+1

const reverseStr = (str) => {
  let reversedStr = []
  let nums = str.match(/[0-9]+/gi).reverse()
  let symbols = str.match(/\W/gi).reverse()

  while (nums.length || symbols.length) {
    reversedStr.push(nums[0])
    nums.splice(0, 1)
    //console.log(nums, 'nums')
    reversedStr.push(symbols[0])
    symbols.splice(0, 1)
    //console.log(symbols, 'symbols')
  }

  return reversedStr.join('')
}
let s = '1+23*3-220'
console.log('end', reverseStr(s))
