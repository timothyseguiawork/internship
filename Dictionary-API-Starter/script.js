function getAndDisplayWordData() {
  let wordInput = document.getElementById("word-search-input").value;
  clear()
  
  if (!isEmpty(wordInput)) {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`).then(response => {

      let wordData = response.data[0].word;
      document.getElementById("word").innerHTML = wordData;

      let phonetics = response.data[0].phonetics;
      for (let i = 0; i < phonetics.length; i++){
        if (phonetics[i].text != undefined){
          document.getElementById("pronunciation").innerHTML += `- ${phonetics[i].text} `
        }
      }

      let definitions = response.data[0].meanings;
      for (let i = 0; i < definitions.length; i++) {
        for (let j = 0; j < definitions[i].definitions.length; j++) {
          document.getElementById("definitions").innerHTML += `<li>${definitions[i].definitions[j].definition}</li>`
        }
      }
    }
    );
  }
  else {
    document.getElementById("no-word-found").innerHTML = "Try searching for a word.";
  }

};

function clear() {
  document.getElementById("definitions").innerHTML = "";
  document.getElementById("pronunciation").innerHTML = "";
  document.getElementById("no-word-found").innerHTML = "";
};


function isEmpty(input) {
  let bool = false;
  if (input == ""){
    console.log("TRUE");
    bool = true;
  };
  return bool;
};