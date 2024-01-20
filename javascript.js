
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
    let computerChoice = getComputerChoice();
    let winner = evaluateWinner(computerChoice, playerChoice);
    if (winner === 'tie') {
        results.textContent = `It's a draw! (${capitalizeInitial(playerChoice)} / ${capitalizeInitial(computerChoice)})`;
    }
    else if (winner === 'player') {
        results.textContent = `You win! ${capitalizeInitial(playerChoice)} beats ${capitalizeInitial(computerChoice)}!`;
        playerScore++;
    }
    else {
        results.textContent = `You lose! ${capitalizeInitial(computerChoice)} beats ${capitalizeInitial(playerChoice)}!`;
        computerScore++;
        
    }
    updateScore(playerScore, computerScore);
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


function updateScore(player, computer) {
    scoreboardPlayer.textContent = player;
    scoreboardComputer.textContent = computer;

    if (playerScore >= gameFinalScore) {
        showModal('Player wins!');
    } else if (computerScore >= gameFinalScore) {
        showModal('Computer wins!');
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameFinalScore = 5;
    updateScore(playerScore, computerScore);
    // gameFinalScore = Number(prompt('Welcome! How many rounds shall we play?', '5'));
}

let playerScore = 0;
let computerScore = 0;
let gameFinalScore;
const buttons = document.querySelectorAll('button');
buttons.forEach(addListener);

function addListener(button) {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
    
}

function showModal(text) {
    modalText.textContent = text;
    modal.style.display = 'block';
}

const results = document.querySelector('#results p');
const scoreboardPlayer = document.querySelector('#playerScore');
const scoreboardComputer = document.querySelector('#computerScore');
const modal = document.querySelector('#modal');
const modalText = document.querySelector('#modal p');
const modalClose = document.querySelector('#modalClose');

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    resetGame();
})

resetGame();

