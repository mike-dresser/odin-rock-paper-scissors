
function getComputerChoice() {

    //Save selection as "number", choose a random number between 1 and 3
    //Computer: 1 == "rock", 2 == "paper", 3 == "scissors"

    let choice = Math.floor(Math.random() * 3) + 1;    
    return choice;
}
            
function getPlayerChoice() {
    
    //Variable to hold player input string
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

        //Player: "rock" == 10, "paper" == 20, "scissors" == 30
        let playerChoice = 0;
        if (choice === "rock") playerChoice = 10;
        else if (choice === "paper") playerChoice = 20;
        else if (choice === "scissors") playerChoice = 30;

        return playerChoice;
    }
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
    let winner = evaluateWinner(playerChoice, computerChoice);

    //Show values
    console.log(`Player choice: ${playerChoice}, Computer choice: ${computerChoice} \n Winner: ${winner}`);

    }

function evaluateWinner(player, computer) {

    /* Sum the values of player and computer choice to indicate specific combination of moves  

                                COMPUTER
                    rock (1)    paper (2)   scissors (3)
       PLAYER     -------------------------------------- 
        rock (10) |    11          12          13
       paper (20) |    21          22          23
    scissors (30) |    31          32          33

    */

    switch(player + computer) {
        case 11:
        case 22:
        case 33:
            return "tie";
        case 13:
        case 21:
        case 32:
            return "player";
        //in any other scenario computer wins
        default:
            return "computer";
    }
}



