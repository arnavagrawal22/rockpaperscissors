// rock 0-paper 1-scissor-2
// to get computers response
let computerResponse = Math.floor(Math.random() * 3);
let computerScore = 0;
let playerScore = 0;
let playerResponse;

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter rock paper or scissors");
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock") {
      playerResponse = 0;
    }
    if (playerSelection == "paper") {
      playerResponse = 1;
    }
    if (playerSelection == "scissor") {
      playerResponse = 2;
    }

    
  }
}

function scoreIncrease(playerResponse,computerResponse)
{
    if(playerResponse==computerResponse)
    {
        return `That was a draw. Try Again! Score: ${playerScore} to ${computerScore}`;
    }
    else if(playerResponse==0 && computerResponse==1)
    {
        computerScore++;
        return `That was a draw. Try Again! Score: ${playerScore} to ${computerScore}`;
    }
    else if(playerResponse==0 && computerResponse==2)
    {
        playerScore++;
        return `That was a draw. Try Again! Score: ${playerScore} to ${computerScore}`;
    }
    else if(playerResponse==1 && computerResponse==0)
    {
        playerScore++;
        return `That was a draw. Try Again! Score: ${playerScore} to ${computerScore}`;
    }
    else if(playerResponse==1 && computerResponse==2)
    {
        computerScore++;
        return `That was a draw. Try Again! Score: ${playerScore} to ${computerScore}`;
    }
    else if(playerResponse==2 && computerResponse==0)
    {
        
        return `That was a draw. Try Again! Score: ${playerScore} to ${computerScore}`;
    }
    else if(playerResponse==2 && computerResponse==1)
    {
        return `That was a draw. Try Again! Score: ${playerScore} to ${computerScore}`;
    }
}

alert(playerResponse);
