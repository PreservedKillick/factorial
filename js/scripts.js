var factorial = function(number) {
 var result;
 var index = [];
 var input = number;

  if (number === 0) {
    result = 1;
  } else {
    for (var i = (number-1); i > 0; i--) {
    index.push(i);
    console.log(index);
    } 
    for (var n = 0; n<= (index.length - 1); n++) {
    input = input * index[n];
    result = input;
    console.log(result);
    };
  return result;
  }

return result;

};


  
