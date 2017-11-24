// PROMPT:
// Write a function that takes an array of numbers and letters, filters the array for numbers only,
// and returns the total number of characters in the array.

// Test Cases:

// characterCount([1, 'a', 'b', 11, 12]) //=> 5
// characterCount(['c', 3, 72, 25, 99, 'i']) => 7
// characterCount([]) => null

const characterCount = (arr) => {
  if (arr.length) {
    return arr.join().match(/\d/gi).length
  }
  return null
}

console.log(characterCount([1, 'a', 'b', 11, 12]))
console.log(characterCount(['c', 3, 72, 25, 99, 'i']))
console.log(characterCount([]))

// PROMPT: Given a string of letters, return an array of sub-arrays with the first index of the letter, the second postion of the occurences of each letter.
// Test Case: charCount("gsdfgsdfgsdfgsdfgsdfg") => [ [ 'g', 6 ], [ 's', 5 ], [ 'd', 5 ], [ 'f', 5 ] ]

const charCount = (str) => {
  let table = {}
  let results = []

  for (let i = 0; i < str.length; i++) {
    let currChar = str[i]
    if (table[currChar]) {
      table[currChar]++
    }    
    else {
      table[currChar] = 1
    }
  }
  for (let prop in table) {
    results.push([prop, table[prop]])
  }
  return results
}

console.log(charCount('gsdfgsdfgsdfgsdfgsdfg'), 'charCount')

const charCount2 = (str) => {
  let results = []

  let table = str.split('').reduce((prev, curr) => {
    if (prev[curr]) {
      prev[curr]++
    }    
    else {
      prev[curr] = 1
    }
    return prev
  }, {})
  for (let prop in table) {
    results.push([prop, table[prop]])
  }
  return results
}

console.log(charCount2('gsdfgsdfgsdfgsdfgsdfg'), 'charCount2')
