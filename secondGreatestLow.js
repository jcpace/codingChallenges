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