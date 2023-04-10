let getComputerChoice = () => {
    let arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random() * arr.length)]
}

let playRound = (playerSelection, computerSelection) => { 
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock'){
        if (computerSelection === 'paper') {console.log("You lose, paper beats rock"); return -1;}
        else if (computerSelection === 'scissors') {console.log("You win, rock beats scissors"); return 1;}
        else {console.log("draw, both chose rock"); return 0;}
    }else if (playerSelection === 'paper'){
        if (computerSelection === 'rock') {console.log("You win, paper beats rock"); return 1;}
        else if (computerSelection === 'scissors') {console.log("You lose, scissors beats paper"); return -1;}
        else {console.log("draw, both chose paper"); return 0;}
    }else if (playerSelection === 'scissors'){
        if (computerSelection === 'paper') {console.log("You win, scissors beats paper"); return 1;}
        else if (computerSelection === 'rock') {console.log("You lose, rock beats scissors"); return -1;}
        else {console.log("draw, both chose scissors"); return 0;}
    }
}

let game = function() {
    let score = 0;
    for (let i=0; i<5; i++){
        let playerSelection = prompt("Make your choice: ");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result === 1) score++;
    }
    return score;
}
// console.log(getComputerChoice())
// const playerSelection = "sCisSors";
// const computerSelection = getComputerChoice();
// console.log(playerSelection, computerSelection)
// console.log(playRound(playerSelection, computerSelection));
let score = game();
if (score < 3) alert(`Your score is ${score}, Computer wins`)
else alert(`Your score is ${score}, You win`)
