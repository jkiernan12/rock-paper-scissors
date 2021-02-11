let humanScore = 0;
let robotScore = 0;
let humanScoreboard = document.querySelector('#human-score');
let robotScoreboard = document.querySelector('#robot-score');
let villain = "The Beast";
let hero = "Gregory";
let heroPic = document.querySelector('#hero-pic');
let villainPic = document.querySelector('#villain-pic');
let victoryMessage = document.querySelector('#round-winner');

let rockBtn = document.querySelector('#human-rock'); // rock button
rockBtn.addEventListener('click', rockSelect);
function rockSelect() {
  gameRound(computerChoice(), "rock")
};

let paperBtn = document.querySelector('#human-paper'); //paper button
paperBtn.addEventListener('click', paperSelect);
function paperSelect() {
  gameRound(computerChoice(), "paper")
};

let scissorsBtn = document.querySelector('#human-scissors'); //scissors button
scissorsBtn.addEventListener('click', scissorsSelect);
function scissorsSelect() {
  gameRound(computerChoice(), "scissors")
};

let playAgainBtn = document.querySelector('#play-again'); //play again button
playAgainBtn.addEventListener('click', playAgain);

function gameRound(comp, person) { //trigger message about round winner
  if (roundWinner(comp, person) == "Tie") {
   victoryMessage.textContent = "It was a tie. " + villain + " chose " + comp;
  }
  else if (roundWinner(comp, person) == "Robot"){
   victoryMessage.textContent = villain + " won. " + villain + " chose " + comp;
   robotScore++;
   robotScoreboard.textContent = robotScore;
   characterHit(heroPic);
  }
  else if (roundWinner(comp, person) == "Human"){
   victoryMessage.textContent = hero + " won. " + villain + " chose " + comp;
   humanScore++;
   humanScoreboard.textContent = humanScore;
   characterHit(villainPic);
  }
  //trigger message of game winner
  if (humanScore >= 5) {
    victoryMessage.textContent = villain + " chose "
    + comp + ". " + hero + " wins the game!";
    buttonsEnd();
  }
  else if (robotScore >= 5) {
    victoryMessage.textContent = villain + " chose "
    + comp + ". " + villain + " wins the game!";
    buttonsEnd();
  }
}

function characterHit(name) { //trigger hit animation on loser
  name.classList.remove('player-hit');
  name.offsetHeight;
  name.classList.add('player-hit');
}

function roundWinner(comp, person) { //return the player that won round
if (person == comp) {
  return "Tie";}
else if ((person == "rock" && comp == "paper")
  || (person == "paper" && comp == "scissors")
  || (person == "scissors" && comp == "rock")) {
    return "Robot";}
else if ((person == "rock" && comp == "scissors")
  || (person == "paper" && comp == "rock")
  || (person == "scissors" && comp == "paper")) {
    return "Human";}
}

function buttonsEnd() { //disable input buttons, show Play Again button
  playAgainBtn.classList.remove('invisible-btn');
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

function playAgain() { //after pressing Play Again, resets game and allows input
  playAgainBtn.classList.add('invisible-btn');
  humanScore = 0;
  robotScore = 0;
  humanScoreboard.textContent = humanScore;
  robotScoreboard.textContent = robotScore;
  victoryMessage.textContent = "Choose your weapon!"

  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
}

function computerChoice(){ //randomly select Rock, paper or scissors
  switch (Math.floor(Math.random() * 3)) {
   case 0:
   return "rock";
   break;
   case 1:
   return "scissors";
   break;
   case 2:
   return "paper"
  }
}
