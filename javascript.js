
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

console.log(getComputerChoice());