let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
  const computerChoices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return computerChoices[randomNumber];
}

function userWins(user, comp) {
  const userChoice_div = document.getElementById(user.toLowerCase());
  userScore++; 
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${user}${"user".fontsize(3).sup()} beats ${comp}${"comp".fontsize(3).sup()}. You win! 🔥`
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function userLoses(user, comp) {
  const userChoice_div = document.getElementById(user.toLowerCase());
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${user}${"user".fontsize(3).sup()} loses to ${comp}${"comp".fontsize(3).sup()}. You lost... 💩`
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function itsDraw(user, comp) {
  const userChoice_div = document.getElementById(user.toLowerCase());
  result_p.innerHTML = `${user}${"user".fontsize(3).sup()} equals to ${comp}${"comp".fontsize(3).sup()}. It's a draw. `
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (`${userChoice} vs ${computerChoice}`) {
    case "Rock vs Scissors":
    case "Paper vs Rock":
    case "Scissors vs Paper":
      userWins(userChoice, computerChoice);
      break;
    case "Rock vs Paper":
    case "Paper vs Scissors":
    case "Scissors vs Rock":
      userLoses(userChoice, computerChoice);
      break;
    default:
      itsDraw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', () => game("Rock"));
  paper_div.addEventListener('click', () => game("Paper"));
  scissors_div.addEventListener('click', () => game("Scissors"));
}

main();
