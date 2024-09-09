/* 

Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

*/

function fizzBuzz() {
  let counter = 0;
  let tempNum = 0;
  while (counter < 100) {
    tempNum = counter + 1;
    
    // console.log(`tempNum: ${tempNum}`);
    // console.log(`counter: ${counter}`);

    if ((tempNum % 3 == 0) && (tempNum % 5 == 0)) {
      console.log("FizzBuzz");
    }
    else if (tempNum % 3 == 0) {
      console.log("Fizz");
    }
    else if (tempNum % 5 == 0) {
      console.log("Buzz");
    }
    else {
      console.log(tempNum)
    }
    counter++;
  }
}

fizzBuzz();