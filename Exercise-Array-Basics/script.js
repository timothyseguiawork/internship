let nameArray = ["Pierce", "Andy", "Stephen"];
//console.log(nameArray[1]);
console.log(nameArray);
//alphabetical order (sort)
nameArray.sort();
console.log(nameArray);
nameArray.push("Mary");
console.log(nameArray);
let newName = nameArray.slice(0,3);
console.log(newName);
//slice = new array
//splice = go into array and remove/change
newName.splice(2,1)
console.log(newName);