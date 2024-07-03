const d = document;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);
  switch (choice) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;
  }
  return choice;
}

function getHumanChoice() {
  return transforLowerCase(prompt("Enter a choice: rock | paper | scissors"));
}

function transforLowerCase(string) {
  return string.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  console.log("HUMAN " + humanChoice);
  
  console.log("COMPUTER " + computerChoice);
  
  //Paso 5: Crear la logica para jugar una ronda

  if (empate(humanChoice, computerChoice)) {
    console.log("Hubo empate");
  } else if (winRound(humanChoice, computerChoice)) {
    humanScore++;
    console.log("HUMAN WIN");
  } else {
    computerScore++;
    console.log("COMPUTER WIN");
  }

  console.log(humanScore);
  console.log(computerScore);
}

function empate(humanChoice, computerChoice) {
  return humanChoice === computerChoice;
}

function winRound(humanChoice, computerChoice) {
  return (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
    ? true
    : false;
}

function showResult(humanScore, computerScore) {
  console.log("HUMAN " + humanScore);
  console.log("COMPUTER " + computerScore);
}

function showMessageResult(humanScore, computerScore) {
  if (humanScore === computerScore) {
    console.log("HUBO EMPATE");
  } else if (humanScore > computerScore) {
    console.log("EL HUMAN ES EL GANADOR");
  } else {
    console.log("EL COMPUTER ES EL GANADOR");
  }
}

function resetCount(humanScore, computerScore) {
  humanScore = 0;
  computerScore = 0;
}

function playGame() {
  //Paso 6: Crear la logica para jugar 5 rondas (usar PlayRound)

  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log("Round " + i);
    playRound(humanSelection, computerSelection);
  }

  //Muestra el resultado
  showResult(humanScore, computerScore);

  //Muestra el mensaje del ganador
  showMessageResult(humanScore, computerScore);

  //reset contador
  resetCount();
}

playGame();
