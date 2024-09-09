// Write code to complete the initialHere function 👇
function initialHere(firstName, middleName, lastName) {

  // Store the each initial in a variable appending a period (e.g "S." for Susan) 
  let initial1 = firstName[0].toUpperCase();
  let initial2 = middleName[0].toUpperCase();
  let initial3 = lastName[0].toUpperCase();
  // Log the name to the console in the format "Susan B. Anthony, S.B.A."
  console.log(`${firstName} ${initial2}. ${lastName}, ${initial1}.${initial2}.${initial3}.`);
}


// ⛔️ TEST FUNCTION CALLS - DON’T EDIT BELOW HERE ️️⛔️
initialHere("Susan", "Brownell", "Anthony"); // output: "Susan B. Anthony, S.B.A."
initialHere("Martin", "Luther", "King"); // output: "Martin L. King, M.L.K."
initialHere("Ruth", "Bader", "Ginsburg"); // output: "Ruth B. Ginsburg, R.B.G."
initialHere("John", "Fitzgerald", "Kennedy"); // output: "John F. Kennedy, J.F.K."
initialHere("Franklin", "Delano", "Roosevelt"); // output: "Franklin D. Roosevelt, F.D.R."