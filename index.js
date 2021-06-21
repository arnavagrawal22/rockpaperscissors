// rock 0-paper 1-scissor-2
let computerResponse;
let computerScore = 0;
let playerScore = 0;
let playerResponse;
game();
function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter rock paper or scissors");
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock") {
      playerResponse = 0;
    } else if (playerSelection == "paper") {
      playerResponse = 1;
    } else if (playerSelection == "scissors") {
      playerResponse = 2;
    } else {
      alert("Please check your response and try again");
      i--;
      continue;
    }

    computerResponse = computer();
    console.log(computerResponse);
    console.log(scoreIncrease(playerResponse, computerResponse));
  }
  alert(
    `Final score player ${playerScore} and computer ${computerScore} Thanks for playing `
  );
  if(playerScore>computerScore){
      alert("Congratulations! You win!!")
  }
  else{
      alert("The computer has won")
  }
}

function computer() {
  return Math.floor(Math.random() * 3);
}

function scoreIncrease(playerResponse, computerResponse) {
  if (playerResponse == computerResponse) {
    return `That was a draw. Try Again! Score: ${playerScore} to ${computerScore}`;
  } else if (playerResponse == 0 && computerResponse == 1) {
    computerScore++;
    return `Computer Won, Score: ${playerScore} to ${computerScore}`;
  } else if (playerResponse == 0 && computerResponse == 2) {
    playerScore++;
    return `You Won, Score: ${playerScore} to ${computerScore}`;
  } else if (playerResponse == 1 && computerResponse == 0) {
    playerScore++;
    return `You Won, Score: ${playerScore} to ${computerScore}`;
  } else if (playerResponse == 1 && computerResponse == 2) {
    computerScore++;
    return `Computer Won, Score: ${playerScore} to ${computerScore}`;
  } else if (playerResponse == 2 && computerResponse == 0) {
    computerScore++;
    return `Computer Won, Score: ${playerScore} to ${computerScore}`;
  } else if (playerResponse == 2 && computerResponse == 1) {
    playerScore++;
    return `You Won, Score: ${playerScore} to ${computerScore}`;
  }
}
