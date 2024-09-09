function fizzBuzz (count){
  let tempNum = count + 1;
  let arrayInput = "";
  if ( ((tempNum % 3) == 0) && ((tempNum % 5) == 0) ) {
    //console.log("FizzBuzz");
    arrayInput = "FizzBuzz";
  }
  else if ((tempNum % 3) == 0) {
    //console.log("Fizz");
    arrayInput = "Fizz";
  }
  else if ((tempNum % 5) == 0) {
    //console.log("Buzz");
    arrayInput = "Buzz";
  }
  else {
    //console.log(tempNum);
    arrayInput = tempNum;
  }
  return arrayInput;
}

let numArray = [];
let count = 0;
for (count; count < 100; count++){
  numArray.push(fizzBuzz(count));
}
console.log(numArray);
