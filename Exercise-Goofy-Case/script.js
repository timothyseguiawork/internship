// goofy-case = first and last character capitalized
// ex: TimothY SeguiA
// firstName, ex: TimothY
// TimoTHY -> TimothY

function goofyCase(text){
  // take the text
  let originalName = text;
  let lowerCaseName = text;

  // convert everything to lowercase
  lowerCaseName = lowerCaseName.toLowerCase();
  nameLength = lowerCaseName.length;
  let firstInitial = lowerCaseName[0].toUpperCase();
  let lastInitial = lowerCaseName[nameLength-1].toUpperCase();
  // slice(inclusive (n), exclusive (x(n)+1) ) [n],... ,[x(n)]
  // timothy -> name.slice(1,7) -> imoth
  let inBetweenName = lowerCaseName.slice(1,nameLength-1);

  //ouput goofy text
  console.log(`originalName: ${originalName}`);
  console.log(`lowerCaseName: ${lowerCaseName}`);
  console.log(`nameLength: ${nameLength}`);
  console.log(`firstInitial: ${firstInitial} lastInitial: ${lastInitial}`);
  console.log(`inBetweenName: ${inBetweenName}`)
  console.log(`Goofy-Case: ${firstInitial}${inBetweenName}${lastInitial}`)
  
  let goofyName = firstInitial+inBetweenName+lastInitial;
  return goofyName
}

// goofyCase("Timothy");

let input = prompt("Enter some text!")
let result = goofyCase(input);