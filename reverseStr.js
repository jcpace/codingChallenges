const assert = require('assert');

const reverseStr1 = (str) => {
    let reversedStr = []
    let nums = str.match(/[0-9]+/gi).reverse()
    let symbols = str.match(/\W/gi).reverse()
    while (nums.length || symbols.length) {
        reversedStr.push(nums[0])
        nums.splice(0, 1)
        reversedStr.push(symbols[0])
        symbols.splice(0, 1)
    }
    return reversedStr.join('')
}

function reverseStr2(str) {
    const reversedStr = [];
    const values = str.replace(/[^\d]/g, ' ').split(' ').reverse();
    const ops = str.replace(/\d/g, '').split('').reverse();
    while (values.length > 0) {
        reversedStr.push(values.shift(), ops.shift() || '');
    }
    return reversedStr.join('');
}

// consider more tests
assert(reverseStr1('1+23*3-220') != '')
assert(reverseStr1('') === '')
assert(reverseStr1('1') != '')
assert(reverseStr1('a') != '')
assert(reverseStr1('ab') != '')
assert(reverseStr1('abc') != '')
assert(reverseStr1('123') != '')
assert(reverseStr1('123=/*@#%!#$^465413') != '')

assert(reverseStr2('1+23*3-220') != '')
assert(reverseStr2('') === '')
assert(reverseStr2('1') != '')
assert(reverseStr2('a') != '')
assert(reverseStr2('ab') != '')
assert(reverseStr2('abc') != '') // consider why this was reversed
assert(reverseStr2('123') != '') // consider why this wasnt reversed, and decide how you want to handle
assert(reverseStr2('123=/*@#%!#$^465413') != '')
