// Variables Setup - The following are Global variables  
let result = "The result should be displayed here";
let resultSpan = document.getElementById("result");

let guessNumber = "The number of guesses should be displayed here";
let guessNumberSpan = document.getElementById("guessNumber");

let randomNumber = 0;
let randomNumberSpan = document.getElementById("random");
let arrForNumber = [];

var dropdown = "";

// Disabling the input box and make guess button until before the game has started  */
document.getElementById("inputBox").disabled = true;
document.getElementById("button2").disabled = true;

// Linking the resultSpan and guessNumberSpan back to original result and guessNumber variables  */
resultSpan.innerHTML = result;
guessNumberSpan.innerHTML = guessNumber;

// Updates dropdown to the value of the dropdownMenu from the HTML to change display text "Enter a number between 1 and (value)"  */
function dropdownMenu(){
	dropdown = document.getElementById("dropdownMenu").value;

// Gets the maximumNumber id from HTML code to update the value to variabl dropdown  */
	document.getElementById("maximumNumber").innerHTML = dropdown;
}

// This function starts when the start game button is clicked, disables necessary buttons and resets array and input 
function startGame(){
// Generates random number between 1 and either 10, 50 or 100 depending on dropdown value  */
 	randomNumber = Math.floor(Math.random() * dropdown) + 1;
	randomNumberSpan = document.getElementById("random");

// These are all the buttons and input fields getting disables or enabled  */
	document.getElementById("inputBox").disabled = false;
	document.getElementById("dropdownMenu").disabled = true;
	document.getElementById("button2").disabled = false;
	document.getElementById("button1").disabled = true;

// querySelector from w3schools */
// makes the input box field blank
	document.querySelector("input").value = "";

// updates guessNumber variable to 0 */
 	guessNumber = 0;
	guessNumberSpan.innerHTML = guessNumber;
// updates result variable to show this new game message */
 	result = "You have started a new game!";
	resultSpan.innerHTML = result;

// again updates the array to empty for new game */
	arrForNumber = [];
}

/* This function runs when the make guess button is clicked. This checks for the validity of your guess, as well as assinging 
the appropriate message to result variable and making the guess count go up */
function makeGuess(){
	var input = document.getElementById("inputBox").value;
// Checks for all the values in the array to update result if a valid number has been guessed before 
	if (arrForNumber.includes(input)) {
	result = "You have guessed this number before. Please try a different number.";
	resultSpan.innerHTML = result;
// Checks if the input field is empty than displays the result message 
	}else if(input.length == 0){
		result = "Please enter a number";
		resultSpan.innerHTML = result;
// Checks if the number guessed fits within 1 and the dropdown maximum amount and then displays result message
	}else if (input < 1 || input > Number(dropdown)){
		result = "Please enter a valid number";
		resultSpan.innerHTML = result;
// Checks if valid number guessed is too high and than adds to guessNumber 
	}else if(input > randomNumber) {
		result = "Your guess is too high";
		resultSpan.innerHTML = result;
		guessNumber = guessNumber + 1;
		guessNumberSpan.innerHTML = guessNumber;
		arrForNumber.push(input);
// Checks if valid number guessed is too low and than adds to guessNumber 
	}else if (input < randomNumber) {
		result = "Your guess is too low";
		resultSpan.innerHTML = result;
		guessNumber = guessNumber + 1;
		guessNumberSpan.innerHTML = guessNumber;
		arrForNumber.push(input);
/* This section sees that if the number guessed is correct, displays congratulations message and the game goes 
back to the starting state (before start game button was clicked). 
Disables make guess and input but enables start game and dropdown menu */
	}else if (input == randomNumber){
		result = "Congratulations, you guessed the correct number!";
		resultSpan.innerHTML = result;
		guessNumber = guessNumber + 1;
		guessNumberSpan.innerHTML = guessNumber;
		document.getElementById("button1").disabled = false;
		document.getElementById("dropdownMenu").disabled = false;
		document.getElementById("button2").disabled = true;
		document.getElementById("inputBox").disabled = true;
	} 	
}

makeGuess();
