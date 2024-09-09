let firstName = "Timothy";
let middleName = "Andrew";
let lastName = "Seguia";

// Concatenation
let fullName = firstName + " " + lastName;

console.log(fullName)
console.log("Concatenation: Hello, " + fullName + "!");

// String interpolation
console.log(`Interpolation: Hello, ${fullName}!`);

// Length
console.log(`Your full name is ${fullName.length} characters long.`);

// index
let initials = firstName[0] + middleName[0] + lastName[0];
console.log(`Your initials are ${initials}.`);

// slice
console.log(`Sup, ${firstName.slice(2,6)}!`);

// reverse
console.log(firstName[6].toUpperCase() + firstName[5] + firstName[4] + firstName[3] + firstName[2] + firstName[1] + firstName[0].toLowerCase());