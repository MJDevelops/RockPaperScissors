const choices = ["rock", "paper", "scissors"];

const imgdiv = document.querySelector('.imgdiv');
const imgbtns = imgdiv.querySelectorAll('button');


imgbtns.forEach((button) => {
    button.addEventListener('click', () => {
        let choice = button.getAttribute('class');
        button.disabled = true;
        if (choice === "rockopt") {
            game("rock");
        } else if (choice === "paperopt") {
            game("paper");
        } else {
            game("scissors");
        } setTimeout(function() {
            button.disabled = false;
        }, 2250);
    });
});

function getComputerChoice(array) {
    const random = array[Math.floor(Math.random() * array.length)];
    return random;
}

function rockPaperScissors(playerSelection) {
    let valid = true;
    const computerSelection = getComputerChoice(choices);
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

function game(selection) {
    let playerScore = 0;
    let computerScore = 0;
    let winnerMes = rockPaperScissors(selection);

    const div = document.querySelector('.maindiv');
    const winnerP = document.createElement('p');

    winnerP.classList.add('newp');
    winnerP.setAttribute('style', 'color: black; margin: 15px; align-self: center')
    

    winnerMes = winnerMes.toLowerCase();

    if (winnerMes.includes("you win!")) {
        winnerP.textContent = `Player wins!`;
        playerScore++;
        console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}\n`);
    } else if(winnerMes.includes("you lose!")) {
        winnerP.textContent = `Computer wins!`;
        computerScore++;
        console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}\n`);
    } else {
        winnerP.textContent = `Tie!`;
        console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}\n`);
    }

    div.appendChild(winnerP);
    setTimeout(function() {
        winnerP.remove();
    }, 2250);
}
