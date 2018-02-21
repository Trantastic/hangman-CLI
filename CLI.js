var Play = require("./play.js");
var prompt = require("prompt");
var colors = require("colors/safe");
const chalk = require('chalk');

var newPlay = new Play();

console.log(chalk.cyan("Welcome to Terminal Hangman!\nHINT: All words are Adventure Time related."));

prompt.start();

prompt.get({
	properties: {
		start: {
			description: colors.cyan("\n\nAre you ready to start? (y/n)")
		}
	}
}, function(err, result){
	if(err){
		console.log("Error: " + err);
	}
	else if(result.start === "y"){			
		newPlay.displayBlanks();
		startGame();
	}
	else if(result.start === "n"){
		console.log("Okay, I'll wait...");
	}
	else{
		console.log(colors.red("Please type y or n..."));
	}
});

function startGame(){
	prompt.get({
		properties: {
			start: {
				description: ("User Guess: ")
			}
		}
	}, function(err, result){
		if(err){
		console.log("Error: " + err);
		}
		else{
			newPlay.letterChecker(result.start);
		}
	});
}