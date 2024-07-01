const d = document;
const humanScore = 0;
const computerScore = 0;

const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

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

function playRound(humanChoice, computerChoice) {
    //Paso 5: Crear la logica para jugar una ronda
}

function playGame(){
    //Paso 6: Crear la logica para jugar 5 rondas (usar PlayRound)
}

function transforLowerCase(string) {
  return string.toLowerCase();
}

playRound(humanSelection, computerSelection);
