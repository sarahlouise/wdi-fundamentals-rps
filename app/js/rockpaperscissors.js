`////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
var move = ['rock', 'paper', 'scissors']

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.

    var playerMove;
    if  (move === null); {
    move = getInput();
    move = move;
    } return playerMove;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
   
   var computerMove;
   if  (move == null) {
    move = randomPlay();
    move = move; 
    }
return /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.

    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.

    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

    /* YOUR CODE HERE */

//tie option
 if (playerMove === computerMove) {
        return "Tie Game";
 }
//Player Wins Scenarios
    else (playerMove="rock" && computerMove = "scissors") {
        console.log: "You Win!"
        return: playerMove += 1;
    }
    else (playerMove="scissors" && computerMove = "paper" ){
        console.log: "You Win!"
        return: playermove += 1;
    }
    else (playerMove)= ("paper" && computerMove = "rock"){
        console.log: "You Win!"
        return: playermove += 1;
    }

//Computer Wins Scenarios

    else (computerrMove="rock" && playerMove = "scissors") {
        console.log: "Rock Beats Scissors, Computer Wins"
        return: computerMove += 1;
    }
    else (computerMove="scissors" && playerMove = "paper" ){
        console.log: "Scissors beat paper, Computer Wins"
        return: computermove += 1;
    }
    else (computerMove)= ("paper" && playerMove = "rock"){
        console.log: "Computer Win!"
        return: computermove += 1;
    }

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;


    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.

     // This function should continue to play Rock Paper Scissors until either the player or the computer has won five times.
    // After each 'round', display some text in the console indicating who played what, who won, and what the current scoreboard looks like.
    // For example,
    //  console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    //  console.log("The score is currently " + playerWins + " to " + computerWins + "\n");

    /* YOUR CODE HERE */


    while (playerWins + computerWins < 5); {
        return: (5 - (playerWins+computerWins) "games left!");
    }
    else (playerWins + computerWins === 5); {
    return "Game Over";}
}

