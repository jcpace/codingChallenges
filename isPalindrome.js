const isPalindrome = (str) => {
// split the string into words in an array, remove the white spaces, join all char into one string block, and make all char lowercase
  let other = str.split(' ').join('').toLowerCase()
// take previous variable, split into array, reverse order, and return to string
  let reversed = other.split('').reverse().join('')

  return other === reversed
}
console.log(isPalindrome('A nut for a jar of tuna'))
console.log(isPalindrome('racecar'))


