// Build a mapper function from scratch
/********* PSEUDOCODE ********/
//Map function takes an array(arr) and a function(func) as a parameter
function map(arr, func) {
  //Creates new empty array (newArr)
  const newArr = [];
  //Loop through arr
  for (let i = 0; i < arr.length; i++){
    //Add new index to newArr[i] based on running func against arr[i]
      newArr[i] = func(arr[i]);
    }
  //return newArr
  return newArr;
//Function to transform array
}

function makeUppercase(str){
  return str.toUpperCase();
}

//arr
const arr = ["a", "b", "c"];
//(ARR) map(arr, func);
const capArr = map(arr,makeUppercase);
console.log(capArr);

function triple(item) {
  return item * 3;
}

const arr2 = [1,2,3,4]
const trpArr = map(arr2,triple);
console.log(trpArr);

function tri(item) {
  return item * 3;
}
const arr3 = arr2.map(tri)
console.log(arr3);