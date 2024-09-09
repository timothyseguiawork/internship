// Adds a new image to the page with src attribute 'source' and a CSS transition delay of 'delay' (example: ".5s"). 
function addImageToPage(source, delay) {
  // Create a new image element. 
	let img = document.createElement('img');

  // Set the source attribute of the new image element.
  img.src = source;

  // Set the CSS 'transition-delay' attribute of the new image.
  img.style.transitionDelay = delay;
  
  // Add the new image as a child of the body element.
  document.body.appendChild(img);

  // Runs a function after .1 seconds to add the "show" CSS class to the image.  For more information on why, see: https://stackoverflow.com/questions/24148403/trigger-css-transition-on-appended-element 
  setTimeout(
    function() {
      img.className = "show";
    }, .1);
}

// Get input from user 1-9.
let userInput = 0;

userInput = prompt("input a number, 1-9");

while (userInput < 1 || userInput > 9) {
  userInput = prompt("input a number, 1-9");
}


// Add cute images to the page.
let count = 0; 
while(count < userInput) {
  let source = "https://placekitten.com/200/200?image=" + count;
  addImageToPage(source,(count *.2) + "s");
  count++;
}
