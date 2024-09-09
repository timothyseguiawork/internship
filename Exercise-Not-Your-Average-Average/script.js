let sum = 0;
let count = 0;
let tempNum = 0;
let avg = 0;

tempNum = Number(prompt("Please enter your first number"));
sum += tempNum;
// sum = sum + tempNum;
count++;

tempNum = Number(prompt("Please enter your second number"));
sum += tempNum;
// sum = sum + tempNum;
count++;

tempNum = Number(prompt("Please enter your third number"));
sum += tempNum;
// sum = sum + tempNum;
count++;

avg = (sum /= count);
console.log("Your avg is: " + String(avg));