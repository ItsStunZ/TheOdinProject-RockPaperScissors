const BUTTONS = document.querySelectorAll('.choiceBtn');
const RESULTS = document.querySelector(".results");

const PLAYER_RESULTS = document.querySelector('.player-results');
const COMPUTER_RESULTS = document.querySelector('.computer-results');
const ROUND_WINNER = document.querySelector('.round-winner');

const END_RESULTS = document.querySelector('.end-results');
const WINNER = document.querySelector(".winner");

let humanScore = 0;
let computerScore = 0;

const pointsToWin = 5;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random()*choices.length)];
}

function getHumanChoice()
{
    const userInput = prompt("Please enter either Rock, Paper, Scissors");
    return userInput;
}

function displayResult(human, computer) {
    PLAYER_RESULTS.textContent = `You: ${human}`;
    COMPUTER_RESULTS.textContent = `Computer: ${computer}`;
}

function playRound(humanChoice, computerChoice) {
    let humandChoiceLower = humanChoice.toLowerCase();

    // Display what the player and computer chose
    displayResult(humandChoiceLower, computerChoice);


    // Rock > Scissors
    // Scissors > Paper
    // Paper > Rock

    if (humandChoiceLower === "rock" && computerChoice === "scissors") {
        ROUND_WINNER.textContent = "You win! Rock beats Scissors";
        humanScore++;
    } else if (humandChoiceLower === "scissors" && computerChoice === "paper") {
        ROUND_WINNER.textContent = "You win! Scissors beats Paper";
        humanScore++;
    } else if (humandChoiceLower === "paper" && computerChoice === "rock") {
        ROUND_WINNER.textContent = "You win! Paper beats Rock";
        humanScore++;
    }

    if (computerChoice === "rock" && humandChoiceLower === "scissors") {
        ROUND_WINNER.textContent = "You lose! Rock beats Scissors";
        computerScore++;
    } else if (computerChoice === "scissors" && humandChoiceLower === "paper") {
        ROUND_WINNER.textContent = "You lose! Scissors beats Paper";
        computerScore++;
    } else if (computerChoice === "paper" && humandChoiceLower === "rock") {
        ROUND_WINNER.textContent = "You lose! Paper beats Rock";
        computerScore++;
    }

    console.log(`Player Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

function endGame(winner) {
    // Remove buttons
    BUTTONS.forEach((button) => {
        button.remove();
    })


    // Display the winner
    WINNER.textContent = `Winner: ${winner}`

    // Display score
    let unorderedList = document.createElement('ul');
    unorderedList.innerHTML = `
        <li>Player: ${humanScore}</li>
        <li>Computer: ${computerScore}</li>
    `
    END_RESULTS.appendChild(unorderedList);
}

// loop through the buttons array
BUTTONS.forEach((button) => {   
    button.addEventListener('click', function() {
        const computerSelection = getComputerChoice();
        playRound(button.textContent, computerSelection);

        // check if player or computer have won
        if (humanScore >= pointsToWin) {
            // Player wins
            endGame('Player');
        } else if (computerScore >= pointsToWin) {
            // Computer wins
            endGame('Computer');
        }
    })
})