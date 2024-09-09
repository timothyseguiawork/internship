function addParticipantToTable(participant) {
  let table = document.getElementById("participant-table");
  let row = table.insertRow(-1);
 
  let cell = {};
  
  cell = row.insertCell(0);
  cell.textContent = participant.fullName;
  cell = row.insertCell(1);
  cell.textContent = participant.category;
  cell = row.insertCell(2);
  cell.textContent = participant.size;
}

function validateParticipant(participant) {
  let isValidInput = true;
  if (participant.firstName == "") {
    console.log("First name is empty")
    isValidInput = false;
  }
  if (participant.lastName == ""){
    console.log("Last name is empty");
    isValidInput = false;
  }
  if (isNaN(participant.age) || participant.age == "") {
    console.log("please enter a number")
    isValidInput = false;
  }
  if (participant.shirtSize == ""){
    console.log("Shirt size is empty");
    isValidInput = false;
  }
  return isValidInput;
}

function addAgeCategory(participant) {
  if (participant.age <= 18){
    participant.category = "youth";
  }
  else if (participant.age > 30 && participant.age < 55){
    participant.category = "adult";
  }
  else if (participant.age > 55){
    participant.category = "old";
  }
}

function addParticipant() {
  // Get user input from page.
  let person = {
    size: document.getElementById("shirt-size").value,
    firstName: document.getElementById("first-name").value,
    lastName: document.getElementById("last-name").value,
    age: document.getElementById("age").value,
    fullName: `${document.getElementById("first-name").value} ${document.getElementById("last-name").value}`,
  };
  
  // Validate input.
  if (!validateParticipant(person)){
    console.log("not adding this person");
  }
  
  // Assign an age category.
  addAgeCategory(person);
  
  // Add participant to the table.
  addParticipantToTable(person);
}