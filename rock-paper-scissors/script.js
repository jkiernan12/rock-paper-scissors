let humanScore = 0;
let robotScore = 0;
let villain = "The Beast";
let hero = "Gregory";
let gameStatus = true;

let rockBtn = document.querySelector('#human-rock');
rockBtn.addEventListener('click', rockSelect);
function rockSelect() {
  gameRound(computerChoice(), "rock")
};
let paperBtn = document.querySelector('#human-paper');
paperBtn.addEventListener('click', paperSelect);
function paperSelect() {
  gameRound(computerChoice(), "paper")
};
let scissorsBtn = document.querySelector('#human-scissors');
scissorsBtn.addEventListener('click', scissorsSelect);
function scissorsSelect() {
  gameRound(computerChoice(), "scissors")
};


function computerChoice(){
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

function gameRound(comp, person) {
let victoryMessage = document.querySelector('#round-winner');
let humanScoreboard = document.querySelector('#human-score');
let robotScoreboard = document.querySelector('#robot-score');
let heroPic = document.querySelector('#hero-pic');
let villainPic = document.querySelector('#villain-pic');
villainPic.classList.remove('player-hit');
heroPic.classList.remove('player-hit');
if (gameStatus == false) {
  humanScoreboard.textContent = humanScore;
  robotScoreboard.textContent = robotScore;
  gameStatus = true;
}
else if (roundWinner(comp, person) == "Tie") {
 victoryMessage.textContent = "It was a tie. " + villain + " chose " + comp;
} else if (roundWinner(comp, person) == "Robot"){
 victoryMessage.textContent = villain + " won. " + villain + " chose " + comp;
 robotScore++;
 robotScoreboard.textContent = robotScore;
 heroPic.classList.add('player-hit');
} else if (roundWinner(comp, person) == "Human"){
 victoryMessage.textContent = hero + " won. " + villain + " chose " + comp;
 humanScore++;
 humanScoreboard.textContent = humanScore;
 villainPic.classList.add('player-hit');
}
if (humanScore >= 5) {
victoryMessage.textContent = villain + " chose "
+ comp + ". " + hero + " wins the game!";
humanScore = 0;
robotScore = 0;
gameStatus = false;
} else if (robotScore >= 5) {
victoryMessage.textContent = villain + " chose "
+ comp + ". " + villain + " wins the game!";
humanScore = 0;
robotScore = 0;
gameStatus = false
}
}

function roundWinner(comp, person) {
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
