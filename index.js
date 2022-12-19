const choices = ["rock", "paper", "scissors"];


const imgdiv = document.querySelector('.imgdiv');
const maindiv = document.querySelector('.maindiv');
const playerresult = document.querySelector('.playerresult');
const compresult = document.querySelector('.compresult')
const imgbtns = imgdiv.querySelectorAll('button');
const replay = document.createElement('button');
const winner = document.createElement('p');

let playerScore = 0;
let computerScore = 0;
let round = 0;


imgbtns.forEach((button) => {
    button.addEventListener('click', () => {
        round++;
        let choice = button.getAttribute('class');
        if (round !== 5) {
            imgbtns.forEach((button) => {
                button.disabled = false;
            }); 
            if (choice === "rockopt") {
                playRound("rock");
            } else if (choice === "paperopt") {
                playRound("paper");
            } else {
                playRound("scissors");
            }
        } else {
            imgbtns.forEach((button) => {
                button.disabled = true;
            });
            if (playerScore > computerScore) {
                winner.textContent = "Player wins!";
            } else if (playerScore < computerScore) {
                winner.textContent = "Computer wins!";
            } else {
                winner.textContent = "It's a tie!";
            } winner.setAttribute('style', 'align-self: center; font-size: 30px;'); 
            replay.addEventListener('click', () => {
                playerScore = 0;
                computerScore = 0;
                round = 0;
                imgbtns.forEach((button) => {
                    button.disabled = false;
                }); replay.remove();
                winner.remove();
                playerresult.textContent = `Computer Score: ${computerScore}`;
                compresult.textContent = `Player Score: ${playerScore}`;
            });
            replay.textContent = "Replay";
            replay.setAttribute('style', 'color: white; padding: 10px; font-size: 20px; align-self: center; margin-bottom: 10px; border-radius: 5px; background-color: black');
            maindiv.appendChild(winner);
            maindiv.appendChild(replay);
        }
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

function playRound(selection) {
    let winnerMes = rockPaperScissors(selection);

    const div = document.querySelector('.maindiv');
    const winnerP = document.createElement('p');
    const resultH1 = document.querySelector('.resultcont h1');
    const resultPlayer = document.querySelector('.playerresult');
    const resultComp = document.querySelector('.compresult');

    winnerP.classList.add('newp');
    winnerP.setAttribute('style', 'color: black; margin: 15px; align-self: center')
    

    winnerMes = winnerMes.toLowerCase();

    if (winnerMes.includes("you win!")) {
        winnerP.textContent = `Player wins round!`;
        playerScore++;
        console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}\n`);
    } else if(winnerMes.includes("you lose!")) {
        winnerP.textContent = `Computer wins round!`;
        computerScore++;
        console.log(`Player Score: ${playerScore}Computer Score: ${computerScore}\n`);
    } else {
        winnerP.textContent = `Tie in round!`;
        console.log(`Player Score: ${playerScore}Computer Score: ${computerScore}\n`);
    }

    resultPlayer.textContent = `Player Score: ${playerScore}`;
    resultComp.textContent = `Computer Score: ${computerScore}`;
    resultH1.textContent = 'Result:'
        

    div.appendChild(winnerP);
    setTimeout(function() {
        winnerP.remove();
    }, 2250);
}
