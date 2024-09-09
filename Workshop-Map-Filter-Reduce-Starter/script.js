//1. Map - Capitalize each first letter of an array of words.

const arr = ['Hello', 'there!', 'How', 'are', 'you', 'doing?'];

function capitalize(words) {
    // Your code here
  // const newArr = [];
  // for (let i = 0; i < words.length; i++) {
  //   newArr[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
  // }
  // return newArr;

  return words.map(function(word) {
    return word[0].toUpperCase() + word.slice(1);
  });
}

const newArr = capitalize(arr);
console.log(newArr);

// 2. Filter - Filter out all numbers that are odd.
const arr2 = [1, 2, 3, 4, 5];
function isEven(integers) {
    // Your code here
  // for (let i = 0; i < integers.length; i++){
  //   if (integers[i]%2 != 0){
  //     console.log(integers[i]);
  //     integers.splice(i,1);
  //   }
  // }
  // console.log(integers);
  // return integers;

  return integers.filter(function(num){
    if(num%2) {
      return false;
    }
    return true;
  })
}
isEven(arr2);
console.log(isEven(arr2));

// 3. Reduce - Write a function that takes in an array of numbers and returns the sum of the numbers.
const arr3 = [7, 9, 12, 2];

function add(numbers) {
  // let sum = 0;
  // for (let i = 0; i < numbers.length; i++){
  //   sum += numbers[i];
  // }
  // console.log(sum);
  // return sum;
  return numbers.reduce(function(sum,num){
    return sum + num;
  }, 0);
}
add(arr3);
console.log(add(arr3));
