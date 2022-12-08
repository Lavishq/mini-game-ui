const getComputerChoice = () => {
  return ["Rock", "Paper", "Scissors"][Math.floor([Math.random() * 3])];
};

const playRound = (playerSelection, computerSelection) => {
  // console.log(playerSelection, computerSelection);
  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    return "Draw! Both same";
  }
  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "Paper"
  ) {
    return "You Lose! Paper beats Rock";
  }
  if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "Scissors"
  ) {
    return "You Lose! Scissors beats Paper";
  }
  if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "Rock"
  ) {
    return "You Lose! Rock beats Scissors";
  } else {
    return `You Win! ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } beats ${computerSelection}`;
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Paper", "Rock", "Scissor");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
};

game();
