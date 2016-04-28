// .scoreBoard
// .wins
// .currentWord
// .guessesRemaining
// .guessed

var fruitWords = ['banana', 'tomato', 'apple', 'orange', 'kiwi', 'strawberry', 'dragonfruit', 'blueberry', 'pineapple'];

document.onkeyup = function(event) 
{
	var userGuess = String.fromCharCode(event.keyCode).lowerCase();
}
