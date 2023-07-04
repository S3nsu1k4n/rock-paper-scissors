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
                won = true; 
            }
            else if (computerSelection === "Paper"){
                won = false;
            }
            break;
        case "paper":
            break;
        case "scissors":
            break;
    } 

    if(won){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    return computerSelection;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
