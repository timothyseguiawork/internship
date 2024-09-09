// write your code here

// this is an object
const gandalf = {
  name: "gandalf",
  age: 55000,
  isAWizard: true,
  aliases: ["Mithrandir", "Stormcrow", "Grehame"],
  sayFamousLine: function() {
    console.log("YOU SHALL NOT PASS!");
  }
};

console.log(gandalf.name);
console.log(gandalf.age);
console.log(gandalf.aliases);
gandalf.sayFamousLine();

gandalf.ring = "Narya";
console.log(gandalf);

let body = document.body;
let headerOne = document.h1;
let image = document.img;