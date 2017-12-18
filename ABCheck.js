// PROMPT: Have the function ABCheck(str) take the str parameter being passed and return the string true 
// if the characters a and b are separated by exactly 3 places anywhere in the string at least once 
// (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). 
// Otherwise return the string false. 

const ABCheck = (str) => {
 return /a...b/.test(str) || /b...a/.test(str)
}

// RegExp.test(str) returns true if the regex is found within a given string

console.log(ABCheck('lane borrowed'))
console.log(ABCheck('bgdia'))
console.log(ABCheck('bgdcia'))