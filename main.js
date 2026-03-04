let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random()*choices.length)];
}

function getHumanChoice()
{
    const userInput = prompt("Please enter either Rock, Paper, Scissors");
    return userInput;
}

function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase(); // Set humandChoice to all lowercase

    // Rock > Scissors
    // Scissors > Paper
    // Paper > Rock

    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    }

    if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
}


function playGame() {
    let count = 0;
    while (count < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        count++;
    }

    // Check for winner
    if (humanScore > computerScore) {
        alert("YOU WIN! PlayerScore: " + humanScore + " ComputerScore: " + computerScore);
    } else {
        alert("YOU LOSE! PlayerScore: " + humanScore + " ComputerScore: " + computerScore);
    }
}

playGame();