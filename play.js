var Word = require("./word.js");
const chalk = require('chalk');
var letterChecker = new Word();

var Play = function(){
	this.guesses = [];
	this.guessesLeft = 10;
	this.letterInWord = false;

	this.displayBlanks = function(){
		letterChecker.selectWord();
	}
	this.letterChecker = function(letter){
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
					this.guesses.push(letter); 
					
					console.log(chalk.green("\nWoohoo!"));
					console.log("\n" + chalk.cyan(updateWord));
					console.log("\n" + this.guesses);
					console.log("\nGuesses Left: " + this.guessesLeft);
				}
			}
		}
		else if(!this.letterInWord){
			this.guesses.push(letter);
			this.guessesLeft--;

			console.log(chalk.red("\nIncorrect, try again..."));
			console.log("\nGuessed: " + this.guesses);
			console.log("\nGuesses Left: " + this.guessesLeft);
		}
		else if(this.guessesLeft === 0){
			console.log(chalk.yellow("No more guesses left!"));
			return;
		}
	};
};

// Test if it works
// var newGame = new Play();
// newGame.letterChecker("i");

module.exports = Play;