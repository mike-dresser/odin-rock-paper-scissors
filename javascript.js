
//Function to generate the computer's choice

function getComputerChoice() {

    //Save selection as "choice", choose a random number between 0 and 2

    let choice = Math.floor(Math.random() * 3);

    //Based off that number, assign the string "rock", "paper", or "scissors"
    //Is this reassignment (from number to string) a best practice? 

    switch(choice){
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
        default:
            console.log("The computer made an illegal choice!");
    }
    return choice;
}


//Function to get player choice

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

//Initialize with no choice
let playerChoice = false;

//Until we get valid input, run getPlayerChoice
while(!playerChoice) {
    playerChoice = getPlayerChoice();
}

//If valid, print it
console.log(playerChoice);




//Function to play a round of the game, takes parameters playerSelection and 
// computerSelection, and returns something like "You lose! Paper beats Rock"

