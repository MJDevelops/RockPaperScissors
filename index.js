const choices = ["rock", "paper", "scissors"];

function getComputerChoice(array) {
    const random = array[Math.floor(Math.random() * array.length)];
    return random;
}

function rockPaperScissors(playerSelection, computerSelection = getComputerChoice(choices)) {
    switch(playerSelection) {
        case undefined:
            return "No input received, aborting...";
        case "":
            return "No input received, aborting...";
        case null:
            return "Cancelled";
        default:
            let checkType = typeof playerSelection;
            if (checkType !== 'string') {
                return "Not a String, aborting...";
            }
            let winnerMessage;
            const lowerSelectPlayer = playerSelection.toLowerCase().trim();
            const lowerSelectComputer = computerSelection.toLowerCase();

            let counter = 0;
            for (let i = 0; i < choices.length; i++) {
                if (lowerSelectPlayer === choices[i]) {
                    counter++;
                }
            }
            if (counter !== 1) {
                return "Not a valid answer, aborting...";
            }

            console.log(`Your choice: ${lowerSelectPlayer.substring(0, 1).toUpperCase() + lowerSelectPlayer.substring(1)}\n`);
            console.log(`Computers choice: ${lowerSelectComputer.substring(0, 1).toUpperCase() + lowerSelectComputer.substring(1)}\n`);

            if (lowerSelectPlayer === "scissors" && lowerSelectComputer === "rock") {
                winnerMessage = "You Lose! Rock beats Scissors."
            } else if (lowerSelectPlayer === "rock" && lowerSelectComputer === "scissors") {
                winnerMessage = "You win! Rock beats Scissors.";
            } else if (lowerSelectPlayer === "paper" && lowerSelectComputer === "rock") {
                winnerMessage = "You win! Paper beats Rock.";
            } else if (lowerSelectPlayer === "rock" && lowerSelectComputer === "paper") {
                winnerMessage = "You Lose! Paper beats Rock";
            } else if (lowerSelectPlayer === "scissors" && lowerSelectComputer === "paper") {
                winnerMessage = "You Win! Scissors beat Paper.";
            } else if (lowerSelectPlayer === "paper" && lowerSelectComputer === "scissors") {
                winnerMessage = "You Lose! Scissors beat Paper.";
            } else {
                winnerMessage = `It's a tie!`
            }
            return winnerMessage;
    }
}
