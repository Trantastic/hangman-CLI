var wordBank = ["finn the human", "jake the dog", "adventure time", "card wars", "everything burrito"];
var chosenWord = "";
var blankSpaces = [];
var printSpaces = "";
/*
Psuedo-code:

function to startGame
	-resets userGuesses, runs word function
function to randomly select from wordBank and replace word.length with _ 
function to log and store userGuesses, wins & losses
	-conditional to determine if user wins or loses

*/



var word = function(){

	console.log("This is running!");

	// Selects random word from word bank
	this.selectWord = function(){
		// Empties out the global variable if new random word is selected
		blankSpaces = [];

		chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

		// Replaces selected word.length with blanks
		var splitWord = chosenWord.split("");

		for(var i = 0; i < splitWord.length; i++){
		 	blankSpaces.push("_");
		}

		printSpaces = blankSpaces.join(" ");

	};

	// // Replaces selected word.length with blanks
	// this.replaceWord = function(){
	// 	 var splitWord = chosenWord.split("");

	// 	 for(var i = 0; i < splitWord.length; i++){
	// 	 	blankSpaces.push("_ ");
	// 	 }
	// }
};

module.exports = word;