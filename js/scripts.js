var factorial = function(number1) {
 var number = parseInt(number1);
 var result;
 var index = [];
 var input = number;

  if (number1 % 1 !== 0){
    return false;
  } else if (number < 0) {
    return false;
  } else if ((number === 0) || (number === 1)) {
     result = 1;
     return result;
  } else {
    for (var i = (number-1); i > 0; i--) {
    index.push(i);
    } 
    for (var n = 0; n<= (index.length - 1); n++) {
    input = input * index[n];
    result = input;
    console.log(result);
    }
  return result;
  };

};

$(function(){
  $("form#factorial").submit(function(event){
    var number = $("input#number").val();
    var result = factorial(number);
    console.log(result);
    $(".number").text(result);

    $("#result").show();
    event.preventDefault();

  }); 
});
  
