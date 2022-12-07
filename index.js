const choices = ["rock", "paper", "scissors"];

function getComputerChoice(array) {
    const random = array[Math.floor(Math.random() * array.length)];
    return random;
}

function rockPaperScissors(playerSelection, computerSelection = getComputerChoice(choices)) {
    let valid = true;
    switch(playerSelection) {
        case undefined:
            valid = false;
            return valid;
        case "":
            valid = false;
            return valid;
        case null:
            valid = false;
            return valid;
        default:
            let checkType = typeof playerSelection;
            if (checkType !== 'string') {
                valid = false;
                return valid;
            }
            let winnerMessage;
            let lowerSelectPlayer = playerSelection.toLowerCase().trim();
            let lowerSelectComputer = computerSelection.toLowerCase();

            let counter = 0;
            for (let i = 0; i < choices.length; i++) {
                if (lowerSelectPlayer === choices[i]) {
                    counter++;
                }
            }
            if (counter !== 1) {
                valid = false;
                return valid;
            }

            console.log(`Your choice: ${lowerSelectPlayer.substring(0, 1).toUpperCase() + lowerSelectPlayer.substring(1)}\n`);
            console.log(`Computers choice: ${lowerSelectComputer.substring(0, 1).toUpperCase() + lowerSelectComputer.substring(1)}\n`);

            if (lowerSelectPlayer === "scissors" && lowerSelectComputer === "rock") {
                winnerMessage = "You lose! Rock beats Scissors."
            } else if (lowerSelectPlayer === "rock" && lowerSelectComputer === "scissors") {
                winnerMessage = "You win! Rock beats Scissors.";
            } else if (lowerSelectPlayer === "paper" && lowerSelectComputer === "rock") {
                winnerMessage = "You win! Paper beats Rock.";
            } else if (lowerSelectPlayer === "rock" && lowerSelectComputer === "paper") {
                winnerMessage = "You lose! Paper beats Rock";
            } else if (lowerSelectPlayer === "scissors" && lowerSelectComputer === "paper") {
                winnerMessage = "You win! Scissors beat Paper.";
            } else if (lowerSelectPlayer === "paper" && lowerSelectComputer === "scissors") {
                winnerMessage = "You lose! Scissors beat Paper.";
            } else {
                winnerMessage = `It's a tie!`
            }
            return winnerMessage;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter Rock, Paper or Scissors: ");
        let winnerMes = rockPaperScissors(playerSelection);
        if (!winnerMes) {
            do {
                alert("Invalid input, please try again.");
                playerSelection = prompt("Enter Rock, Paper or Scissors: ");
                winnerMes = rockPaperScissors(playerSelection);
            }
            while (!winnerMes);
        }

        winnerMes = winnerMes.toLowerCase();

        if (winnerMes.includes("you win!")) {
            alert(`Player wins Round ${i + 1}.`)
            playerScore++
            console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}\n`);
        } else if(winnerMes.includes("you lose!")) {
            alert(`Computer wins Round ${i + 1} `)
            computerScore++;
            console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}\n`);
        } else {
            alert("Tie");
            console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}\n`);
        }
    }

    if (playerScore > computerScore) {
        return `You win with a score of ${playerScore}!`;
    } else if (computerScore > playerScore) {
        return `You lose with a score of ${playerScore}!`;
    } else {
        return "It's a tie!";
    }
}