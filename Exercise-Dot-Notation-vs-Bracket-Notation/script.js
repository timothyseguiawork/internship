9/* 
	You may have noticed that we can access an object's property values with two different syntaxes: Dot Notation and Bracket Notation.
	
	Dot Notation: someObject.someProperty
	Bracket Notation: someObject['someProperty']

	You may be wondering: what exactly is the difference and why would we use one over another? Let's illustrate the difference between the two by using a for...in loop to log all of an object's property values to the console. 
*/

let personObject = {
	name: "Reginald McGillicuddy",
	age: 103, 
	hobby: "Mixed Martial Arts",
	favFood: "Beans"
}

/* 
	In the function below we are using Dot Notation to access our object's properties with a variable we've named property. Uncomment the function call, run the code, and note the behavior. 
*/
function printObjectValuesDot() {
	for (property in personObject) {
		console.log(personObject.property);
	}
}
// printObjectValuesDot();


/* 
	If we use dot notation, the logic in printObjectValuesDot() will log undefined to the console. Huh? That's because the property variables take on string values, which doesn't match the required syntax for using dot notation.

	Next let's try implementing the same logic with Bracket Notation. In the printObjectValuesBracket function provided below, rewrite the for...in loop from the previous function but, this time, use Bracket Notation to access the object property values inside of your loop. Once you've done that, uncomment the function call, run the code, and note the behavior. 

	example: 
  let someVariable = 'someProperty'
  someObject[someVariable]
*/

function printObjectValuesBracket() {
  for (property in personObject) {
    console.log(personObject[property]);
  }
}
//printObjectValuesBracket();


/* 
	When you run the printObjectValuesBracket function, you'll see that now, instead of logging undefined, our property values are successfully printed to the console.

	Bracket Notation allows us to use variables to refer to property names but Dot Notation does not! 
	
	If you want to use something like a for...in loop to loop through an object's properties with a variable like we did above, make sure you use Bracket Notation to successfully access the object's properties!
*/