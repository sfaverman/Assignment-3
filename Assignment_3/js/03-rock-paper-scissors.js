/*eslint-env browser*/

/* rock-paper-scissors game
Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:
•	Rock destroys scissors.
•	Scissors cut paper.
•	Paper covers rock.
If both players choose the same shape, the game is tied and is usually immediately replayed to break the tie.
*/

function displayTitle() {
    "use stict";
    window.alert("Welcome to the Rock, Paper, Scissors Game!)");
    }

var firstPlayersPick, secondPlayersPick;
var computerGuess = ['rock','paper','scisors']
    
function userPlayer () {
	"use strict";
	 var askUserPlayer = "y";
	 while (askUserPlayer === "y") {
		var text = window.prompt("Please enter R for Rock, P for Paper, S for Scissors");
		var usersPick = text.toUpperCase(); 
		askUserPlayer = "n";   
			switch (usersPick) {
			case "R":
			   window.alert("You picked a Rock.");
			   firstPlayersPick = "rock";           
			   break;
			case "P":
			   window.alert("You picked a Paper.");
			   firstPlayersPick = "paper";     
			   break;
			case "S":
			   window.alert("You picked a Scissors");
			   firstPlayersPick = "scissors";    
			   break;    
			default: 
			   window.alert("You entered an invalid value. Please try again.");
			   askUserPlayer = "y"; 
			} //end switch
	 } // end while 
}

function computerPlayer() {
    "use strict"
    var number, guess;
    number = Math.floor(Math.random() * 3); // guess number between 0 and 2
    secondPlayersPick = computerGuess[number]; 
    window.alert("Second Player picked a " + number + " " + secondPlayersPick);
    } // end computerPlayer()

function playGame() {
  "use strict";
	
  userPlayer();
  computerPlayer(); 
  comparePlayers(firstPlayersPick,secondPlayersPick);    
        
} // end function playGame
    

 

function comparePlayers(first,second) {
    if (first === "rock" & second === "scissors") {
            window.alert("Rock destroys scissors. You win!")
        } else if (first === "scissors" & second === "paper") {
            window.alert("Scissors cut paper. You win!")
        } else if (first === "paper" & second === "rock") {
            window.alert("Paper covers rock. You win!")
        } else if (second === "rock" & first === "scissors") {
            window.alert("Rock destroys scissors. You loose!")
        } else if (second === "scissors" & first === "paper") {
            window.alert("Scissors cut paper. You loose!") 
        } else if (second === "paper" & first === "rock") {
            window.alert("Paper covers rock. You loose!")   
        } else if (first === second) {
            window.alert("It is a tie! Please play again!") 
        }
} // end comparePlayers();

function main() {
    "use strict"
    displayTitle();
    var playAgain = "y";
    while (playAgain === "y") {
        playGame();
        playAgain = window.prompt("Do you want to play again (y/n)?)");
    }
    window.alert("Thanks for playing the game!");
}

main();