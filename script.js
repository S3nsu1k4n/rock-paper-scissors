function getComputerChoice(){
    // randomly return Rock, Paper or Scissors
    let choices = ["Rock", "Paper", "Scissors"];
    let i = Math.floor(Math.random() * choices.length);
    return choices[i]
}


function playRound(playerSelection="", computerSelection=""){
    // plays a single round
    // return a string that declares the winner
    
    let won = 2;

    switch(playerSelection.toLowerCase()){
        case "rock":
            if(computerSelection === "Scissors"){
                won = 1; 
            }
            else if (computerSelection === "Paper"){
                won = 0;
            }
            break;
        case "paper":
            if(computerSelection === "Scissors"){
                won = 0; 
            }
            else if (computerSelection === "Rock"){
                won = 1;
            }
            break;
        case "scissors":
            if(computerSelection === "Paper"){
                won = 1; 
            }
            else if (computerSelection === "Rock"){
                won = 0;
            }
            break;
    } 

    switch(won){
        case 0:
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            break;
        case 1:
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            break;
        case 2:
            console.log(`It's a tie! ${playerSelection} is ${computerSelection}`);
            break;
        }
    return won;
}

function getPlayerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let choice = prompt("Choose Rock Paper or Scissors");

    if(!choices.includes(choice.toLowerCase())){
        console.log("Invalid input!");
        getPlayerChoice();
    }
    return choice;
}

function game(){
    // function to play 5 rounds
    // track player and computer score
    // announce final winner at end

    let playerScore = 0;
    let computerScore = 0;

    // Round 1

    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    result = playRound(playerSelection, computerSelection);
    if(result === 1){
        playerScore += 1;
    }
    else if(result === 0){
        computerScore += 1;
    }

    // Round 2

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    result = playRound(playerSelection, computerSelection);
    if(result === 1){
        playerScore += 1;
    }
    else if(result === 0){
        computerScore += 1;
    }

    // Round 3

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    result = playRound(playerSelection, computerSelection);
    if(result === 1){
        playerScore += 1;
    }
    else if(result === 0){
        computerScore += 1;
    }

    // Round 4

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    result = playRound(playerSelection, computerSelection);
    if(result === 1){
        playerScore += 1;
    }
    else if(result === 0){
        computerScore += 1;
    }

    // Round 5

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    result = playRound(playerSelection, computerSelection);
    if(result === 1){
        playerScore += 1;
    }
    else if(result === 0){
        computerScore += 1;
    }

    // Final Result

    if(playerScore > computerScore){
        console.log("You are the final winner!")
    }
    else if(playerScore < computerScore){
        console.log("Computer is the final winner!")
    }
    else{
        console.log("Tie! You and computer have the same score!")
    }
}

game()
