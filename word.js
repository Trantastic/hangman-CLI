var wordBank = ["finn the human", "jake the dog", "adventure time", "card wars", "everything burrito", "lumpy space princess", "tiffany"];

var Word = function(){

	this.chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	this.blankSpaces = [];
	// Selects random word from word bank
	this.selectWord = function(){
		// Replaces selected word.length with blanks
		var splitWord = this.chosenWord.split("");

		// Replaces each letter with a _ and creates spacing between words
		for(var i = 0; i < splitWord.length; i++){
		 	if(splitWord[i] != " " ){
		 		this.blankSpaces.push("_");
		 	}
		 	else{
		 		this.blankSpaces.push(" ");
		 	}
		}
		var printSpaces = this.blankSpaces.join(" ");
		console.log(printSpaces);
		console.log("printspace " + printSpaces[0]);
	};
};

// Test if function works
// var newGame = new Word();
// newGame.selectWord();

module.exports = Word;