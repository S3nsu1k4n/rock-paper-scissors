div_results = document.querySelector("#results")

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
            div_results.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
            break;
        case 1:
            div_results.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
            break;
        case 2:
            div_results.textContent = `It's a tie! ${playerSelection} is ${computerSelection}`;
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

