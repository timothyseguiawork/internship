function showDog() {
  axios.get("https://dog.ceo/api/breeds/image/random").then(response => {
      // console.log(response);
      // console.log(response.data);
      // console.log(response.data.message);
    
      // document.querySelector("img");
      // document.getElementById("dog-pic");
      // document.getElementById("dog-pic").value; (This is different than line 8)
      //   this deals with inputs
    
      // let dogPic = document.getElementById("dog-pic");
      // dogPic.setAttribute("src",response.data.message);
      document.getElementById("dog-pic").src = response.data.message;
    }
  );
  
  
}

showDog();