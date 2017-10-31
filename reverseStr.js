function reverseStr(str) {
    const values = str.replace(/[^\d]/g, ' ').split(' ').reverse();
    const ops = str.replace(/\d/g, '').split('').reverse();
    const reversedStr = [];
    while (values.length > 0) {
        reversedStr.push(values.shift());
        reversedStr.push(ops.shift() || '');
    }
    return reversedStr.join('');
}

console.log('end', reverseStr('1+23*3-220'))
console.log('end', reverseStr(''))
console.log('end', reverseStr('1'))
console.log('end', reverseStr('a'))
console.log('end', reverseStr('ab'))
console.log('end', reverseStr('abc'))
console.log('end', reverseStr('123'))
console.log('end', reverseStr('123=/*@#%!#$^465413'))
