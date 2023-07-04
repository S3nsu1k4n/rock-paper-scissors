function getComputerChoice(){
    // randomly return Rock, Paper or Scissors
    let choices = ["Rock", "Paper", "Scissors"];
    let i = Math.floor(Math.random() * choices.length);
    return choices[i]
}

function playRound(playerSelection="", computerSelection=""){
    // plays a single round
    // return a string that declares the winner
    
    let won;
    switch(playerSelection.toLowerCase()){
        case "rock":
            if(computerSelection === "Scissors"){
                won = 1; 
                
            }
            else if (computerSelection === "Paper"){
                won = 0;
            }
            else{
                won = 2;
            }
            break;
        case "paper":
            if(computerSelection === "Scissors"){
                won = 0; 
                
            }
            else if (computerSelection === "Rock"){
                won = 1;
            }
            else{
                won = 2;
            }
            break;
        case "scissors":
            if(computerSelection === "Paper"){
                won = 1; 
            }
            else if (computerSelection === "Rock"){
                won = 0;
            }
            else{
                won = 2;
            }
            break;
    } 

    switch(won){
        case 0:
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        case 1:
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        case 2:
            return `It's a tie! ${playerSelection} is ${computerSelection}`;
        }
    return computerSelection;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
