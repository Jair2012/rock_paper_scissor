const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
let resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const ComputerScoreDisplay = document.getElementById("ComputerScoreDisplay")
let playerScore = 0
let computerScore = 0

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    let result = "";
    
    if (playerScore === 5 || computerScore === 5) {
        playerScore === 5 ? resultDisplay.textContent = "player wins, click play again" : computerScore === 5 ? resultDisplay.textContent = "Computer wins, click play again" : undefined;         
    } else {
        if (playerChoice === computerChoice) {
            result = "IT'S A TIE!";
        } else {
            switch(playerChoice){
                case "rock":
                    result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
                    break; 
    
                case "paper":
                    result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
                    break;
                
                case "scissors":
                    result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
                    break; 
            }
        }
    
        playerDisplay.textContent = `player: ${playerChoice}`;
        computerDisplay.textContent = `computer: ${computerChoice}`;
        resultDisplay.textContent = result;
        resultDisplay.classList.remove("greenText", "redText");
         
        switch (result) {
            case "YOU WIN" :
                resultDisplay.classList.add("greenText");
                playerScore++
                playerScoreDisplay.textContent = playerScore;
                break;
            case "YOU LOSE":
                resultDisplay.classList.add("redText");
                computerScore++
                ComputerScoreDisplay.textContent = computerScore;
                break;
        }
        
        console.log("playerScore: " + playerScore);
        console.log("computerScore: " + computerScore )
    
        playerScore === 5 ? resultDisplay.textContent = "player wins, click play again" : computerScore === 5 ? resultDisplay.textContent = "Computer wins, click play again" : undefined;         
    }

}

function again() {
    computerScore = 0;
    playerScore = 0;
    ComputerScoreDisplay.textContent = computerScore;
    playerScoreDisplay.textContent = playerScore;
    resultDisplay.classList.remove("greenText", "redText");
    resultDisplay.textContent = "Click if you want to play";
}
