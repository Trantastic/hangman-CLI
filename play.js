var Word = require("./word.js");
const chalk = require('chalk');
var letterChecker = new Word();

var Play = function(){
	this.guesses = [];
	this.guessesLeft = 10;
	this.letterInWord = false;
	this.blanks = true;

	this.displayBlanks = function(){
		letterChecker.selectWord();
	};
	this.letterChecker = function(letter){
		// letterChecker.selectWord();
		
		for(var i = 0; i < letterChecker.blankSpaces.length; i++){
			if(letterChecker.chosenWord[i] === letter){
				this.letterInWord = true;
			}
		}
		// Replaces blanks with letter if guess is correct
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

					// Checks if user has guessed the whole word, if so, it'll run the conditional to cycle to next random word
					blanks = letterChecker.blankSpaces.includes("_");
				}
			}
		}

		// This is suppose to fire off if user guess is not one of the letters of the selected word.
		else if(!this.letterInWord){
			this.guesses.push(letter);
			this.guessesLeft--;

			console.log(chalk.red("\nIncorrect, try again..."));
			console.log("\nGuessed: " + this.guesses);
			console.log("\nGuesses Left: " + this.guessesLeft);
		}
		// If there are no more blanks, cycle to next random word
		else if(!this.blanks){
			// letterChecker.selectWord(letterChecker.chosenWord);
			letterChecker.selectWord();
		}
		// End function if there are no more guesses left
		else if(this.guessesLeft === 0){
			console.log(chalk.yellow("No more guesses left!"));
			return;
		}
	};
};

module.exports = Play;