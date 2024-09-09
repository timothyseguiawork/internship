// Remove span children.
// find all span variables
let span = document.querySelectorAll(".box span");
console.log(span);

for (let i = 0; i < span.length; i++) {
  span[i].remove();
}

// Create an image element.
let image = document.createElement("img");
image.setAttribute("src", "https://placekitten.com/200/200");

// Get a random box.
// Math.random
let max = 4;
let rand = Math.random() * max;
let randNum = Math.floor(rand) + 1;
let randString = `#box-${randNum}`
let randomBox = document.querySelector(randString);
console.log(randNum);

// Make the new image element a child of the box.
randomBox.appendChild(image);