/* 
	Using a single for loop, write a launch countdown that outputs the following:

	30 seconds until launch.
	20 seconds until launch.
	10 seconds until launch.
	5
	4
	3
	2
	1
	Liftoff!

	Hint: You’ll need to use if statements within your for loop to change the output based on the loop control variable.
*/

function countdown() {
  for (let i = 30; i >= 0; i--) {
    if (i == 30) {
      console.log("30 seconds until launch.");
    }
    else if (i == 20) {
      console.log("20 seconds until launch.");
    }
    else if (i == 10) {
      console.log("10 seconds until launch.");
    }
    else if (i <= 5 && i > 0) {
      console.log(i);
    }
    else if (i == 0) {
      console.log("Liftoff!")
    }
  }
}

countdown();