// .scoreBoard
// .wins
// .currentWord
// .guessesRemaining
// .guessed

var fruitWords = ['banana', 'tomato', 'apple', 'orange', 'kiwi', 'strawberry', 'dragonfruit', 'blueberry', 'pineapple'];

var currentWord = fruitWords[Math.floor(Math.random() * fruitWords.length)];
   console.log(currentWord);

var guessedLetter = [];

document.onkeyup = function(event) 
{
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);

	guessedLetter.push(" " + userGuess);

	document.getElementById('guessed').innerHTML = "Letters Already Guessed " + guessedLetter;
}

var currentLetters = currentWord.split("");
console.log(currentLetters);

if (guessedLetter == currentLetters){
	console.log("Works");
};