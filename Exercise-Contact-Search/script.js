let contacts = [
  "Jeanette",  "Waters", "650-555-0132",
     "Alice",  "Curtis", "512-555-0133",
   "Carolyn", "Rodgers", "619-555-0156",
   "Alfredo", "Andrews", "650-555-0169",
     "Angie",    "Hall", "512-555-0178",
       "Jan", "Collins", "650-555-0145",
   "Rolando",   "Payne", "619-555-0173",
   "Carlton", "Daniels", "650-555-0175",
     "Patti",    "Dunn", "650-555-0139",
    "Andrea", "Flowers", "619-555-0164" ];

let input = prompt("Enter a first and last name:");

let nameInput = input.split(" ");


for (let i = 0; i < contacts.length; i += 3) {
  let firstName = contacts[i];
  let lastName = contacts[i+1];
  let phoneNumber = contacts[i+2];

  if (firstName != nameInput[0]) {
    continue;
  }

  if (lastName != nameInput[1]) {
    continue;
  }

  alert(`${firstName} ${lastName} ${phoneNumber}`);
  break;
}