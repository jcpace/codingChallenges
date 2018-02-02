// PROMPT: Have the function SecondGreatLow(arr) take the array of numbers stored in arr 
// and return the second lowest and second greatest numbers, respectively, separated by a space. 
// example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty 
// and will contain at least 2 numbers. It can get tricky if there's just two numbers! 


function SecondGreatLow(arr) { 
  let num = [];
  arr.forEach(function(el) {
    if(num.indexOf(el) === -1){
      return num.push(el);
    }
  });
  
  num.sort((a, b) => {
    return a-b;
  });
  
  if (num.length < 2) { 
    return num[0] + " " + num[0]; 
  } else {
    return num[1] + " " + num[num.length - 2];
  }    
}
                            
SecondGreatLow([2,5,77,9,11,6,8]);