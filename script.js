div_results = document.querySelector("#results")
div_score = document.querySelector("#score");
div_winner_of_game = document.querySelector("#winner_of_game");
let score_player = 0
let score_computer = 0
const MAX_SCORE = 5;
let game_finished = false;
displayScore()


function displayScore(){
    div_score.textContent = `Player: ${score_player} / Computer: ${score_computer}`;
}


function updateScore(score_p, score_c){
    score_player += score_p;
    score_computer += score_c;
}


function updateResults(results=""){
    div_results.textContent = results;
}


function setWinnerOfGame(playerWon=false){
    if(playerWon){
        div_winner_of_game.textContent = "You won the game!";
    }
    else{
        div_winner_of_game.textContent = "You lost the game. Computer wins!";
    }
    game_finished = true;
}


function getComputerChoice(){
    // randomly return Rock, Paper or Scissors
    let choices = ["Rock", "Paper", "Scissors"];
    let i = Math.floor(Math.random() * choices.length);
    return choices[i]
}


function playRound(playerSelection="", computerSelection=""){
    // plays a single round
    // return a string that declares the winner
    
    console.log(game_finished);
    if(game_finished){
        return;
    }

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
            updateResults(`You Lose! ${computerSelection} beats ${playerSelection}`);
            updateScore(0, 1);
            break;
        case 1:
            updateResults(`You Win! ${playerSelection} beats ${computerSelection}`);
            updateScore(1, 0);
            break;
        case 2:
            updateResults(`It's a tie! ${playerSelection} is ${computerSelection}`);
            updateScore(0, 0);
            break;
        }
    displayScore()
    if(score_player === MAX_SCORE){
        setWinnerOfGame(playerWon=true);
    }
    else if(score_computer === MAX_SCORE){
        setWinnerOfGame(playerWon=false);
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

