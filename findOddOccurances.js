// PROMPT: In an array of integers of duplicates, all elements are occuring even times but one.
// Return the element that occurs odd times.
const findOdd2 = (arr) => {
  let oddList = {}

  arr.forEach((element) => {
// check to see if exists in hashmap
// if yes, delete
    if (oddList[element]) {
      delete oddList[element]
    }	
// if no, add with value of true	
    else {
      oddList[element] = true
    }
  })
  //console.log(oddList)
  return Object.keys(oddList).join()
}

console.log(findOdd2([1, 5, 2, 3, 5, 1, 2]))
