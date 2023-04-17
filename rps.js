let getComputerChoice = () => {
    let arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random() * arr.length)]
}

let playRound = (playerSelection, computerSelection) => { 
    playerSelection = playerSelection.toLowerCase();
    const text = document.createElement('div');
    const div = document.querySelector('.result');
    if (playerSelection === 'rock'){
        if (computerSelection === 'paper') {
            text.innerText = "You lose, paper beats rock"; 
            div.appendChild(text);
            return -1;}
        else if (computerSelection === 'scissors') {
            text.innerText = "You win, rock beats scissors"; 
            div.appendChild(text);
            return 1;}
        else {
            text.innerText = "Draw, both chose rock"; 
            div.appendChild(text);
            return 0;}
    }else if (playerSelection === 'paper'){
        if (computerSelection === 'rock') {
            text.innerText = "You win, paper beats rock"; 
            div.appendChild(text);
            return 1;}
        else if (computerSelection === 'scissors') {
            text.innerText = "You lose, scissors beats paper"; 
            div.appendChild(text);
            return -1;}
        else {
            text.innerText = "Draw, both chose paper"; 
            div.appendChild(text);
            return 0;}
    }else if (playerSelection === 'scissors'){
        if (computerSelection === 'paper') {
            text.innerText = "You win, scissors beats paper";
            div.appendChild(text); 
            return 1;}
        else if (computerSelection === 'rock') {
            text.innerText = "You lose, rock beats scissors"; 
            div.appendChild(text);
            return -1;}
        else {
            text.innerText = "Draw, both chose scissors";
            div.appendChild(text); 
            return 0;}
    }
}


let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', ()=> {
        let playerSelection = button.textContent;
        let computerSelection = getComputerChoice();
        const div = document.querySelector('.result');
        console.log(playerSelection);
        console.log(computerSelection);
        let result = playRound(playerSelection, computerSelection);
        if (result === 1) playerScore++;
        else if (result === -1) computerScore++;
        const playerScoreText = document.createElement('span');
        const computerScoreText = document.createElement('span');
        playerScoreText.innerText = `Player Score: ${playerScore}   `;
        computerScoreText.innerText = `Computer Score: ${computerScore}`;
        div.appendChild(playerScoreText);
        div.appendChild(computerScoreText);
        if (playerScore === 5) {
            const win = document.createElement('p');
            win.innerText = 'Player wins!'
            div.appendChild(win);
        } else if (computerScore === 5) {
            const win = document.createElement('p');
            win.innerText = 'Computer wins!'
            div.appendChild(win);
        }
    });
});

