var Word = require("./word.js");

var Play = function(){
	this.wrongGuesses = [];
	this.guessesLeft = 10;
	this.letterInWord = false;

	this.letterChecker = function(letter){
		var letterChecker = new Word();
		letterChecker.selectWord();

		for(var i = 0; i < letterChecker.blankSpaces.length; i++){
			if(letterChecker.chosenWord[i] === letter){
				this.letterInWord = true;
			}
		}
		// Replaces blanks with letter is guess is correct
		if(this.letterInWord){
			for(var x = 0; x < letterChecker.blankSpaces.length; x++){
				if(letterChecker.chosenWord[x] === letter){
					letterChecker.blankSpaces[x] = letter;
					var updateWord = letterChecker.blankSpaces.join(" "); 
					console.log(updateWord);
				}
			}
		}
		else if(!this.letterInWord){
			this.wrongGuesses.push(letter);
			this.guessesLeft--;

			console.log(this.wrongGuesses);
		}
	};
};

// Test if it works
var newGame = new Play();
newGame.letterChecker("i");

module.exports = Play;