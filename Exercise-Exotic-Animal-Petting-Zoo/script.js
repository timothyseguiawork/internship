/* Add some conditional logic to the checkIfPoisonous() function below that checks if the animal passed to the function is poisonous. 

If the animal is poisonous, console.log "You probably shouldn't pet that one..."
If the animal is not poisonous, console.log "Give them a pet!"
Once you've added your logic, call the function with the different animal variables provided to test it

For some extra practice: 
- update your conditional logic to check if the animal passed as an argument is poisonous OR vicious
- update the logic to check if an animal is adorable. if so, console.log "Pet that one immediately!" */

let kitty = "adorable";
let pufferfish = "poisonous";
let cockatiel = "vicious";
let puppy = "adorable";
let dartFrog = "poisonous";
let blueRingedOctopus = "poisonous";
let mountainLion = "vicious";
let ant = "strong";
let spottedOwl = "wise";

function checkIfPoisonous(animal) {
  // Your code here 👇
  if (animal === "poisonous") {
    console.log(`DON'T PET THIS ANIMAL`);
  }
  else if (animal === "vicious"){
    console.log(`THIS ANIMAL IS VISCIOUS`);
  }
  else if (animal === "strong") {
    console.log(`DON'T ARM WRESTLE THIS ONE`);
  }
  else if (animal === "wise") {
    console.log(`ASK THIS ONE A QUESTION`);
  }
  else {
    console.log(`YOU SHOULD PET THIS ONE`);
  }
}

checkIfPoisonous(kitty);
checkIfPoisonous(pufferfish);
checkIfPoisonous(cockatiel);
checkIfPoisonous(puppy);
checkIfPoisonous(dartFrog);
checkIfPoisonous(blueRingedOctopus);
checkIfPoisonous(mountainLion);
checkIfPoisonous(ant);
checkIfPoisonous(spottedOwl);