

function sayHi(name) {
  console.log(`Hi, ${name}!`);
}

function sayHiBackwards(name) {
  console.log(`Hi, ${name}!`);
}

// for (let i = 0; i < STUDENTS.length; i++){
//   // console.log(STUDENTS[i]);
//   sayHi(STUDENTS[i]);
// }

for (let i = (STUDENTS.length - 1); i > 0; i--) {
  sayHiBackwards(STUDENTS[i]);
}