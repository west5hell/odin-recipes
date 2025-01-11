function getComputerChoice() {
  let random = Math.random();
  if (random < 0.33) {
    return "rock";
  } else if (random < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let input = prompt("please input your choice");
  return input;
}

// let computerChoice = getComputerChoice();

// let humanChoice = getHumanChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const outcomes = {
    rock: {
      rock: "Deuce! Try again",
      paper: "You lose! Paper beats Rock",
      scissors: "You win! Rock beats Scissors",
    },
    paper: {
      rock: "You win! Paper beats Rock",
      paper: "Deuce! Try again",
      scissors: "You lose! Scissors beats Paper",
    },
    scissors: {
      rock: "You lose! Rock beats Scissors",
      paper: "You win! Scissors beats Paper",
      scissors: "Deuce! Try again",
    },
  };

  const human = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();

  if (!outcomes[human] || !outcomes[computer]) {
    console.log("Invalid choice! Please choose rock, paper, or scissors");
    return;
  }

  const result = outcomes[human][computer];
  console.log(result);

  if (result.includes("You win")) {
    humanScore++;
  } else if (result.includes("You lose")) {
    computerScore++;
  }

  console.log(`Scores: Human - ${humanScore}, Computer - ${computerScore}`);
}

function playGame() {
  let round = 5;
  while (round !== 0) {
    let computerChoice = getComputerChoice();

    let humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
    round--;
  }
  if (humanScore > computerScore) {
    console.log("Human win!");
  } else if (humanScore < computerScore) {
    console.log("Computer win!");
  } else {
    console.log("Deuce!");
  }
}

playGame();
