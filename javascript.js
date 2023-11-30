
function getComputerChoice() {

    //Choose a random number between 0 and 2 (.floor rounds down) to represent computer choice
    let number = Math.floor(Math.random() * 3);

    //Based off of number, return the string "rock", "paper", or "scissors"
    switch(number){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerChoice) {

    let computerChoice;

    //Get computer choice
    computerChoice = getComputerChoice();

    //Evaluate the winner
    let winner = evaluateWinner(computerChoice, playerChoice);

    if (winner === 'tie') {
        results.textContent = `It's a draw! (${capitalizeInitial(playerChoice)} / ${capitalizeInitial(computerChoice)})`;
    }
    else if (winner === 'player') {
        results.textContent = `You win! ${capitalizeInitial(playerChoice)} beats ${capitalizeInitial(computerChoice)}!`;
    }
    else {
        results.textContent = `You lose! ${capitalizeInitial(computerChoice)} beats ${capitalizeInitial(playerChoice)}!`;
        
    }
    return winner;
}

function capitalizeInitial(string) {
    //return string with just initial character capitalized

    string = string.toLowerCase();
    return ((string.substr(0,1)).toUpperCase() + string.substr(1));
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

function game(numberWins) {
    // i.e. "Play to 5"; ties will be replayed
    // initialize with 0 score
    console.log(`We'll play to ${numberWins}`);
    let playerScore = 0;
    let computerScore = 0;
    
    while(!((playerScore >= numberWins) || (computerScore >= numberWins))) {
        let winner = playRound();
        if (winner === "player") playerScore++;
        else if (winner === "computer") computerScore++;
        console.log(`-- Score --\nComputer: ${computerScore} \n  Player: ${playerScore}`);
    }

    let matchWinner;
    if (playerScore > computerScore) matchWinner = "Player";
    else matchWinner = "Computer";
    console.log(`${matchWinner} has won!`);

}

const buttons = document.querySelectorAll('button');
buttons.forEach(addListener);

function addListener(button) {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
    
}

const results = document.querySelector('#results');


// let roundsEntered = false;
// let numberRounds = 0;

// while(!roundsEntered) {
//     numberRounds = prompt('Greetings, opponent! What score shall we play to? [0 - 5]');
//     if ((parseInt(numberRounds) > 0) && (parseInt(numberRounds) < 6)) roundsEntered = true;
// }

// game(numberRounds);
