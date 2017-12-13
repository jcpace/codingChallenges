// PROMPT: Have the function arithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic"
// if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern.
// If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference
// between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied
// by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54].
// Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements.

const arithGeo = (arr) => {
  let arithFlag = true
  let geoFlag = true
  let arith = arr[1] - arr[0]
  let geo = arr[1] / arr[0]

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== arith) {
      arithFlag = false
    }
    if (arr[i + 1] / arr[i] !== geo) {
      geoFlag = false
    }
  }

  if (geoFlag) {
    return 'Geometric'
  }
  if (arithFlag) {
    return 'Arithmetic'
  }

  return -1
}

console.log(arithGeo([2, 4, 6, 8]))
console.log(arithGeo([2, 6, 18, 54]))
console.log(arithGeo([2, 7, 9, 3]))