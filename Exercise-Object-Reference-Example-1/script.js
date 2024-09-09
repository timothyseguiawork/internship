function getName(name) {
  name = prompt("enter your name:");
};

function getPersonName(person) {
  person.name = prompt("enter your name: ");
};

let name = "";
let person = {};

getName(name);
getPersonName(person);

console.log(`Name ${name}`);
console.log(`Person ${person.name}`);