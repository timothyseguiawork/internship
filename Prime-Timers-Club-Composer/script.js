// Start by reading the instructions in the README.

function lintAndPlaySequence() {
  // retrieve strings from each input box and store in variables
  // Hey JavaScript, go into the file, and get me the element with the id sequence-input-1
  const sequence1 = document.querySelector('#sequence-input-1').value;
  const sequence2 = document.querySelector('#sequence-input-2').value;
  const sequence3 = document.querySelector('#sequence-input-3').value;
  const sequence4 = document.querySelector('#sequence-input-4').value;
  // assign variable to sequence1

  let lintedSequence = sequence1;
  let lintedSequence2 = sequence2;
  let lintedSequence3 = sequence3;
  let lintedSequence4 = sequence4;
  let fullSequence = "";
  // ============== Code below this line =============================

  // Example of updating/reassigning a variable value
  // lintedSequence = 'Hello, World'

  // TASKS
  // 1. Update lintedSequence by removing the whitespace off of the ends of sequence1, 2, 3, and 4, and concatenating them together
    lintedSequence = sequence1.trim();
    lintedSequence2 = sequence2.trim();
    lintedSequence3 = sequence3.trim();
    lintedSequence4 = sequence4.trim();
    fullSequence = lintedSequence + lintedSequence2 + lintedSequence3 + lintedSequence4

  // 2. Update lintedSequence by converting all characters to lowercase
    fullSequence = fullSequence.toLowerCase();

  // 3. LevelUp: Update lintedSequence by using the 'replace' method to remove all characters that aren't letters or spaces
    // [0-9]+
    console.log(fullSequence);
    const wordReg = /[^a-zA-Z\s]/g;
    console.log(fullSequence.replace(wordReg,""));
    fullSequence = fullSequence.replace(wordReg,"");
  // ============= Don't code below this line ========================

  // play the lintedSequence string
  playSequence(fullSequence);
}
