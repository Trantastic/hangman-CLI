var Word = require("./word.js");

var Play = function(){
	this.letterInWord = false;
	this.wrongGuesses = [];
	this.letterChecker = function(letter){
		var letterChecker = new Word();
		letterChecker.selectWord();

		for(var i = 0; i < letterChecker.chosenWord.length; i++){
			if(letterChecker.chosenWord[i] === letter){
				this.letterInWord = true;
				console.log("one");
			}
		}
		if(this.letterInWord){
			for(var x = 0; x < letterChecker.chosenWord.length; i++){
				letterChecker.blankSpaces[x] = letter;
				if(letterChecker.chosenWord[x] === letter){
					letterChecker.printSpaces[x] = letter;
					console.log("two");
					letterChecker.printSpaces[1] = "A";
				}
			}
		}
		else{
			this.wrongGuesses.push(letter);
			console.log(this.wrongGuesses);
		}
	};

};

// Test if it works
var newGame = new Play();
newGame.letterChecker("t");

module.exports = Play;