function inputGrade(examNumber){
  let grade = prompt(`Please Enter Grade For Exam ${examNumber}: "`);
  return Number(grade);
}

let grades = [];
//input grades
grades.push(inputGrade(1));
grades.push(inputGrade(2));
grades.push(inputGrade(3));
grades.push(inputGrade(4));

//drop the lowest grade
//sort the array
console.log(grades);
grades.sort(function(a,b) {
  return a-b;
});

console.log(grades);
//grades.splice(0,1);
let finalGrades = grades.slice(1);
console.log(finalGrades);
let average = (finalGrades[0] + finalGrades[1] + finalGrades[2]) / 3;
console.log(average);

alert(`The final grade is: ${average}`);