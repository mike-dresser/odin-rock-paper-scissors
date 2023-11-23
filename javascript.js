
function getComputerChoice() {

    //Save selection as "number", choose a random number between 0 and 2
    let number = Math.floor(Math.random() * 3);

    let choice;

    //Based off of number, assign the string "rock", "paper", or "scissors"
    switch(number){
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    return choice;
}

function getPlayerChoice() {
    
    //Variable to hold player input
    let choice = prompt("Please choose: rock, paper, or scissors");
   
    //Make input case insensitive, trim whitespace
    choice = choice.toLowerCase();
    choice = choice.trim();
    
    //Ensure valid choice, or prompt again
    if (!(choice === "rock" || choice === "paper" || choice === "scissors")) {
        console.log("That is not a valid choice");
        return false;
    }
    else {
        return choice;
    }
    //Return choice
}

function playRound() {

//Initialize variables, playerChoice undefined for next while statement
let playerChoice;
let computerChoice;

//Until we get valid input, run getPlayerChoice
while(!playerChoice) {
    playerChoice = getPlayerChoice();
}

//Get computer choice
computerChoice = getComputerChoice();

//Evaluate the winner
let winner = evaluateWinner(computerChoice, playerChoice);

//Show values
console.log(`Player choice: ${playerChoice}, Computer choice: ${computerChoice} \n Winner: ${winner}`);

}

function evaluateWinner(computer, player) {

    // a tie does not depend upon the specific choices made
    if(computer === player) {
        return "tie";
    }
    // scenarios in which the player wins
    else if ((computer === "rock" && player === "paper")
        || (computer === "paper" && player ==="scissors")
        || (computer === "scissors" && player ==="rock") 
    ) {
        return "player";
    }
    //scenarios in which the computer wins
    else if ((player === "rock" && computer === "paper")
        || (player  === "paper" && computer ==="scissors")
        || (player  === "scissors" && computer ==="rock") 
    ) {
        return "computer";
    }
}



//Function to play a round of the game, takes parameters playerSelection and 
// computerSelection, and returns something like "You lose! Paper beats Rock"

