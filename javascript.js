function getComputerChoice() {
    var items = ['rock', 'paper', 'scissor'];
    return items[Math.floor(Math.random()*items.length)];
}

let playerScore = 0
let computerScore = 0


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissor') {
            playerScore++
            return 'player wins!'
            
        }
        else if (computerSelection === 'paper') {
            computerScore++
            return 'computer wins!'
            
        }
        else if (computerSelection === 'rock') {
            return 'It\'s a tie!'
        }
    }
    if (playerSelection === 'scissor') {
        if (computerSelection === 'scissor') {
            return 'It\'s a tie!'
        }
        else if (computerSelection === 'paper') {
            playerScore++
            return 'player wins!'
            
        }
        else if (computerSelection === 'rock') {
            computerScore++
            return 'computer wins!'
            
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissor') {
            computerScore++
            return 'computer wins!'
            
        }
        else if (computerSelection === 'paper') {
            return 'It\'s a tie!'
        }
        else if (computerSelection === 'rock') {
            playerScore++
            return 'player wins!'
            
        }
    }

}

function playGame() {
    let playerSelection = prompt("Let's play the game! Enter your choice: ");
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playerSelection)
    console.log(computerSelection)
    console.log(playRound(playerSelection, computerSelection));
}

for (let i = 1; i <= 5; i++) {
    playGame()
}

let gameResult;
if (playerScore > computerScore) {
    gameResult = 'You win!';
}
else if (computerScore > playerScore) {
    gameResult = 'Computer wins!';
}
else {
    gameResult = 'It\'s a tie!';
}

console.log(gameResult);