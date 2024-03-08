function getComputerChoice() {
    var items = ['rock', 'paper', 'scissor'];
    return items[Math.floor(Math.random()*items.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissor') {
            return 'player wins!'
        }
        else if (computerSelection === 'paper') {
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
            return 'player wins!'
        }
        else if (computerSelection === 'rock') {
            return 'computer wins!'
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissor') {
            return 'computer wins!'
        }
        else if (computerSelection === 'paper') {
            return 'It\'s a tie!'
        }
        else if (computerSelection === 'rock') {
            return 'player wins!'
        }
    }
}

let playerSelection = "ROck";
playerSelection = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();
console.log(playerSelection)
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));