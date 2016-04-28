// .scoreBoard
// .wins
// .currentWord
// .guessesRemaining
// .guessed

var fruitWords = ['banana', 'tomato', 'apple', 'orange', 'kiwi', 'strawberry', 'dragonfruit', 'blueberry', 'pineapple'];

var currentWord = fruitWords[Math.floor(Math.random() * fruitWords.length)];
   console.log(currentWord);

document.onkeyup = function(event) 
{
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);

	document.getElementById('guessed').appendHTML = userGuess;

}


