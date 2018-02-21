# hangman-CLI

__Description:__ 

This is a hangman game that runs through a computer terminal. All the words are related to the TV show "Adventure Time." This game contains some bugs that still to be worked out.

__How To Run:__ 

Please see JSON package to install necessary node packages. You will need chalk and prompt. To play the game, in your terminal, type _node CLI.js_.

__Bugs:__

* If there is a duplicate letter in the word, the game will reprint the blank spaces dependant on how many letters there are. For example if there are 3 As in a word and user guesses A, then it will print the blank space 3 times.
* The Guesses Left does not go down if user guesses a wrong letter.
* Game does not cycle to next word after user has finished guessing the word.
