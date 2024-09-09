let count = 1;

function doubleCount(count){
  let newCount = count*2;
  console.log(`newCount: ${newCount}`);
  return newCount;
}

function tripleCount(count){
  let newCount = count*3;
  console.log(`newCount: ${newCount}`);
  return newCount;
}

doubleCount(count);
tripleCount(count);
count = doubleCount(count);
console.log(`count: ${count}`);

// newCount is not defined outside of the doubleCount block
// console.log(`newCount: ${newCount}`);
