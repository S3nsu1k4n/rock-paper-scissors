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

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(`Player uses ${button.textContent}`);
        playRound(playerSelection=button.textContent, computerSelection=getComputerChoice())
    })
})