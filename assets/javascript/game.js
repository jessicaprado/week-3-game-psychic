
// alphabet
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Scoreboard variables
var wins = 0;
var losses = 0;
var guessesLeft = 8;
var guessesSoFar = [];


//computer selects random letter from array
function letterChoice(alphabet) {
	var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
	return computerGuess;
}

//calling letterChoice function
var computerGuess = letterChoice(alphabet);
console.log(computerGuess);

//User guess
function displayLetters(userGuess , guessesSoFar, alphabet) {		
	guessesSoFar.push(userGuess);	
	
}
			


function splice(userGuess, alphabet){
	var guess = userGuess;
	var numberValue = alphabet.indexOf(guess);	
	alphabet.splice(numberValue, 1);
	console.log(alphabet);
}
		

document.onkeyup = function(event) {	

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		if(alphabet.indexOf(userGuess) >= 0) {
			
	
	//Log and Display user guesses on html	
		if(userGuess !== computerGuess) {
				guessesLeft--;				
						
		}				
				
		if(guessesLeft == 0 ) {
			losses++;
			guessesLeft = 8;
			computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];	
			guessesSoFar = []; 	

		
		} else if(userGuess == computerGuess) {
			wins++;
			guessesLeft = 8;
			alert("You got it!");			
			computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
			guessesSoFar = []; 
			console.log(computerGuess);
		}
		
		displayLetters(userGuess, guessesSoFar);
	
	}

	splice(userGuess,alphabet);
	

	//Scoreboard
	var score = 
	"<p>Guess what letter I'm thinking of" +
	"<p>wins: " + wins + 
	"</p>" +
	"<p>losses: " + losses + 
	"</p>" +
	"<p>Guesses left: " + guessesLeft +
	"<p>Your Guesses so far: " + guessesSoFar;

	document.getElementById("game").innerHTML = score;

}





	
