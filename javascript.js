
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
    console.log(`Player: ${playerChoice}, Computer: ${computerChoice}\nWinner: ${winner}`);
    return winner;

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
    //otherwise, the computer wins (thanks, Leah!)
    else {
        return "computer";
    }
}

function playMatch(numberWins) {
    // i.e. "Play to 5"; ties will be replayed
    // initialize with 0 score
    console.log(`We'll play to ${numberWins}`);
    let playerScore = 0;
    let computerScore = 0;
    
    while(!((playerScore >= numberWins) || (computerScore >= numberWins))) {
        let winner = playRound();
        if (winner === "player") playerScore++;
        else if (winner === "computer") computerScore++;
        console.log(`Score:\nComputer: ${computerScore} \nPlayer: ${playerScore}`);
    }

    let matchWinner;
    if (playerScore > computerScore) matchWinner = "Player";
    else matchWinner = "Computer";
    console.log(`${matchWinner} has won!`);

}
let roundsEntered = false;
let numberRounds;

while(!roundsEntered) {
    numberRounds = prompt('Greetings, opponent! What score shall we play to? [0 - 5]');
    if ((parseInt(numberRounds) > 0) && (parseInt(numberRounds) < 6)) roundsEntered = true;
}

playMatch(numberRounds);
