
// alphabet
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Scoreboard variables
var wins = 0;
var losses = 0;
var guessesLeft = 8;
var guessesSoFar = ""


//computer selects random letter from array
function letterChoice(alphabet) {
	var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
	return computerGuess;
}

//calling letterChoice function
var computerGuess = letterChoice(alphabet);
console.log(computerGuess);

//User guess
document.onkeyup = function(event) {
	
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();	
	console.log(userGuess);

	//Log and Display user guesses on html
	
		if(userGuess !== computerGuess) {
				guessesLeft--;
					if(guessesLeft == 0 ) {
						losses++;
				
					}
				} 
			else if(userGuess = computerGuess) {
				wins++;
				alert("You got it!");




	
	}

	//else if (guessesLeft == 0){
		//game resets
	//}


	//Scoreboard
	var score = 
	"<p>Guess what letter I'm thinking of" +
	"<p>wins: " + wins + 
	"</p>" +
	"<p>losses: " + losses + 
	"</p>" +
	"<p>Guesses left: " + guessesLeft; 
	//"<p>Your Guesses so far: " + guessesSoFar + 
	//"</p>";

	document.getElementById("game").innerHTML = score;
	
}